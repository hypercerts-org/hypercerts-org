import { createHash } from "node:crypto";
import { checkBotId } from "botid/server";
import { after, NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = process.env.CONTACT_TO_EMAIL || "team@hypercerts.org";
const CONFIRMATION_TEXT = [
  "Thank you for contacting the Hypercerts Foundation. We’ve received your message and will get back to you soon.",
  "",
  "If you’d like to add anything, just reply to this email.",
  "",
  "If you didn’t send us a message, you can ignore this email.",
  "",
  "Hypercerts Foundation",
  "https://hypercerts.org",
].join("\n");
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  "Hypercerts <no-reply@hypercerts.org>";
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

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

/* One mailbox has many spellings: letter case, "+tag" subaddresses, and
   dots in Gmail addresses. Fold them, so the one-confirmation-per-mailbox
   limit can't be dodged by respelling the address. Used only for that
   limit; mail still goes to the address as typed. */
function mailboxKey(email: string) {
  const [rawLocal, rawDomain] = email.toLowerCase().split("@");
  const domain = rawDomain === "googlemail.com" ? "gmail.com" : rawDomain;
  let local = rawLocal.split("+")[0];
  if (domain === "gmail.com") local = local.replaceAll(".", "");
  return createHash("sha256").update(`${local}@${domain}`).digest("hex");
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

export async function POST(request: NextRequest) {
  if (!checkOrigin(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid request" }, { status: 415 });
  }

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

  // Vercel BotID: an invisible check the visitor's browser runs, with no
  // challenge and no extra step (see instrumentation-client.ts). A request
  // that fails it, such as a script posting directly, still reaches the
  // team, flagged, in case a real person was misjudged, but never triggers
  // a confirmation, so the form can't be used to mail other people. If the
  // check itself errors, no confirmation is sent either.
  const isHuman = await checkBotId().then(
    (result) => result.isHuman,
    (error) => {
      console.error("[contact] bot check failed", error);
      return false;
    },
  );

  const senderLines = [
    name ? `Name: ${name}` : "Name: Not provided",
    `Email: ${email}`,
    organization
      ? `Organization: ${organization}`
      : "Organization: Not provided",
    ...(isHuman
      ? []
      : ["Note: flagged as automated by the bot check; no confirmation was sent."]),
  ];

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: isHuman
        ? "New contact request from hypercerts.org"
        : "[Flagged as automated] New contact request from hypercerts.org",
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

    // No confirmation for requests the bot check didn't pass (see above).
    if (!isHuman) return NextResponse.json({ success: true });

    // Confirm receipt to the sender once the response has gone out. The text
    // is fixed on purpose: nothing the sender typed is echoed, so the form
    // cannot be used to send arbitrary content from our domain. A failure
    // here is only logged, since the team already has the message.
    //
    // Anyone can type any address, so each mailbox gets at most one
    // confirmation per 24 hours: Resend keeps an idempotency key for 24
    // hours and won't send again for a repeated one. That stops the form
    // being used to flood someone's inbox from our domain.
    after(async () => {
      const { error: confirmationError } = await resend.emails.send(
        {
          from: FROM_EMAIL,
          to: email,
          replyTo: CONTACT_EMAIL,
          subject: "We received your message",
          text: CONFIRMATION_TEXT,
        },
        { idempotencyKey: `contact-confirmation/${mailboxKey(email)}` },
      );
      if (confirmationError) {
        console.error("[contact] confirmation email failed", confirmationError);
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] email send failed", error);
    return NextResponse.json(
      { error: "Your message could not be sent. Please try again." },
      { status: 500 },
    );
  }
}
