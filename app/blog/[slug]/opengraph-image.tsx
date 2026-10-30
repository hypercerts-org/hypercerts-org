import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { fetchBlogPosts } from "@/lib/blog";
import { ogImage } from "@/lib/metadata";

/* The link preview card for a blog post: its cover image if it has one,
   otherwise its title in the style of scripts/landing-social-card.html.
   Always a JPEG served from hypercerts.org: covers can be WebP, which some
   messengers won't show, and a PNG of a photo is too big for WhatsApp. */

export const size = { width: ogImage.width, height: ogImage.height };
export const contentType = "image/jpeg";
export const alt = "Hypercerts blog";

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

const accent = "#af2901";
/* Covers are around 100 KB; anything far bigger isn't worth decoding. */
const maxCoverBytes = 10_000_000;

function toJpeg(image: ArrayBuffer) {
  return sharp(Buffer.from(image), { limitInputPixels: 40_000_000 })
    .resize(size.width, size.height, { fit: "cover" })
    .jpeg({ quality: 90 })
    .toBuffer();
}

async function coverCard(url: string) {
  try {
    const res = await fetch(url, { cache: "force-cache" });
    if (!res.ok) return null;
    const bytes = Number(res.headers.get("content-length"));
    if (!bytes || bytes > maxCoverBytes) {
      throw new Error(`Cover is ${bytes || "of unknown size"} bytes`);
    }
    return await toJpeg(await res.arrayBuffer());
  } catch (err) {
    console.error("Failed to load blog cover for the preview card:", err);
    return null;
  }
}

function svgUri(file: Buffer) {
  return `data:image/svg+xml;base64,${file.toString("base64")}`;
}

/* Instrument Serif is narrow, so roughly 30 characters fit a line at 80px.
   Past about four lines at 56px the title would overflow the card. */
function titleSize(title: string) {
  if (title.length <= 40) return 80;
  if (title.length <= 80) return 68;
  return 56;
}

function shorten(title: string, max = 140) {
  if (title.length <= max) return title;
  const cut = title.lastIndexOf(" ", max);
  return `${title.slice(0, cut > 0 ? cut : max)}…`;
}

async function titleCard(fullTitle: string) {
  /* Bundled with the function by outputFileTracingIncludes in next.config.ts. */
  const [serif, sans, ornament, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/InstrumentSerif-Regular.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Switzer-Regular.ttf")),
    readFile(join(process.cwd(), "public/img/guilloche_02_top.svg")),
    readFile(join(process.cwd(), "public/img/hypercerts_logo_horizontal.svg")),
  ]);
  const title = shorten(fullTitle);

  const card = new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          background: "#fff",
          textAlign: "center",
        }}
      >
        <img
          src={svgUri(ornament)}
          alt=""
          width={1500}
          height={1000}
          style={{ position: "absolute", left: -150, top: 0, opacity: 0.15 }}
        />
        <div
          style={{
            fontFamily: "Switzer",
            fontSize: 18,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: accent,
            marginBottom: 28,
          }}
        >
          Hypercerts blog
        </div>
        <div
          style={{
            fontFamily: "Instrument Serif",
            fontSize: titleSize(title),
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#000",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <img src={svgUri(logo)} alt="" width={180} height={32} style={{ marginTop: 48 }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Switzer", data: sans, style: "normal", weight: 400 },
      ],
    },
  );
  return toJpeg(await card.arrayBuffer());
}

export default async function Image({ params }: { params: { slug: string } }) {
  /* The feed comes back empty when it fails. Throw then, so a cached card
     is kept and crawlers get a 5xx to retry, rather than a 404. */
  const posts = await fetchBlogPosts();
  if (posts.length === 0) throw new Error("Blog feed unavailable");

  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return new Response("Not found", { status: 404 });

  const card =
    (post.image && (await coverCard(post.image))) || (await titleCard(post.title));

  return new Response(new Uint8Array(card), {
    headers: { "Content-Type": contentType },
  });
}
