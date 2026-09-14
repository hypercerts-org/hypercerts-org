import { createHash } from "node:crypto";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = process.env.CONTACT_TO_EMAIL || "team@hypercerts.org";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  "Hypercerts <no-reply@hypercerts.org>";
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SECONDS = 10 * 60;

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;
const redis =
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN
    ? Redis.fromEnv()
    : null;

const developmentRateLimits = new Map<
  string,
  { count: number; resetAt: number }
>();

type ContactBody = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string"
    ? value
        .replace(
          /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u00AD\u034F\u061C\u180E\u200B-\u200F\u2028-\u202F\u2060-\u206F\uFEFF]/g,
          "",
        )
        .trim()
    : "";
}

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkOrigin(request: NextRequest) {
  const source = request.headers.get("origin") || request.headers.get("referer");
  if (!source || source === "null") return false;

  try {
    const incoming = new URL(source);
    const destination = request.nextUrl;
    if (incoming.origin === destination.origin) return true;

    const loopbackHosts = new Set(["localhost", "127.0.0.1", "[::1]"]);
    return (
      process.env.NODE_ENV !== "production" &&
      incoming.protocol === destination.protocol &&
      incoming.port === destination.port &&
      loopbackHosts.has(incoming.hostname) &&
      loopbackHosts.has(destination.hostname)
    );
  } catch {
    return false;
  }
}

function isValidEmail(email: string) {
  if (email.length > 254 || /\s/.test(email)) return false;

  const parts = email.split("@");
  if (parts.length !== 2) return false;

  const [local, domain] = parts;
  if (
    !local ||
    local.length > 64 ||
    local.startsWith(".") ||
    local.endsWith(".") ||
    local.includes("..") ||
    !/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local)
  ) {
    return false;
  }

  const labels = domain.split(".");
  return (
    labels.length >= 2 &&
    labels.every(
      (label) =>
        label.length <= 63 &&
        /^(?!-)[A-Za-z0-9-]+(?<!-)$/.test(label),
    )
  );
}

async function enforceRateLimit(request: NextRequest) {
  const now = Date.now();
  const bucket = Math.floor(now / (RATE_LIMIT_WINDOW_SECONDS * 1000));
  const ipHash = createHash("sha256").update(getClientIp(request)).digest("hex");
  const key = `contact:${ipHash}:${bucket}`;
  const resetAt = (bucket + 1) * RATE_LIMIT_WINDOW_SECONDS * 1000;
  let count: number;

  if (redis) {
    count = await redis.incr(key);
    if (count === 1) await redis.expire(key, RATE_LIMIT_WINDOW_SECONDS + 60);
  } else if (process.env.NODE_ENV !== "production") {
    const current = developmentRateLimits.get(key);
    count = (current?.count || 0) + 1;
    developmentRateLimits.set(key, { count, resetAt });

    for (const [storedKey, value] of developmentRateLimits) {
      if (value.resetAt <= now) developmentRateLimits.delete(storedKey);
    }
  } else {
    return NextResponse.json(
      { error: "The contact form is not configured." },
      { status: 503 },
    );
  }

  if (count <= RATE_LIMIT_MAX) return null;

  return NextResponse.json(
    { error: "Too many messages. Please try again in a few minutes." },
    {
      status: 429,
      headers: {
        "Retry-After": String(Math.max(1, Math.ceil((resetAt - now) / 1000))),
      },
    },
  );
}

export async function POST(request: NextRequest) {
  if (!checkOrigin(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid request" }, { status: 415 });
  }

  let rateLimitResponse: NextResponse | null;

  try {
    rateLimitResponse = await enforceRateLimit(request);
  } catch (error) {
    console.error("[contact] rate limit failed", error);
    return NextResponse.json(
      { error: "The contact form is temporarily unavailable." },
      { status: 503 },
    );
  }

  if (rateLimitResponse) return rateLimitResponse;

  if (!resend) {
    return NextResponse.json(
      { error: "The contact form is not configured." },
      { status: 503 },
    );
  }

  let body: ContactBody;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 12_000) {
      return NextResponse.json(
        { error: "The message is too large." },
        { status: 413 },
      );
    }
    const parsedBody: unknown = JSON.parse(rawBody);
    if (
      !parsedBody ||
      typeof parsedBody !== "object" ||
      Array.isArray(parsedBody)
    ) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    body = parsedBody as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const organization = clean(body.organization);
  const message = clean(body.message);
  const website = clean(body.website);

  // Silently accept honeypot submissions so automated senders do not adapt.
  if (website) return NextResponse.json({ success: true });

  if (!email || !message) {
    return NextResponse.json(
      { error: "Email and message are required." },
      { status: 400 },
    );
  }
  if (name.length > 100 || organization.length > 150 || message.length > 5000) {
    return NextResponse.json(
      { error: "One or more fields are too long." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const senderLines = [
    name ? `Name: ${name}` : "Name: Not provided",
    `Email: ${email}`,
    organization
      ? `Organization: ${organization}`
      : "Organization: Not provided",
  ];

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: "New contact request from hypercerts.org",
      text: [
        "New contact request from hypercerts.org",
        "",
        ...senderLines,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] email send failed", error);
    return NextResponse.json(
      { error: "Your message could not be sent. Please try again." },
      { status: 500 },
    );
  }
}
