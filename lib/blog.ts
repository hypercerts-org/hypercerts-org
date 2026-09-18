export interface BlogPost {
  title: string;
  link: string;
  slug: string;
  description: string;
  content: string;
  pubDate: string;
  image?: string;
}

const DID = "did:plc:s4puetfspot742ai7y4otuel";
const PDS = "https://lionsmane.us-east.host.bsky.network";
const COLLECTION = "site.standard.document";
const LEAFLET_BASE = "https://hypercerts.leaflet.pub";

// --- Leaflet block → HTML rendering ---

interface Facet {
  index: { byteStart: number; byteEnd: number };
  features: { $type: string; uri?: string }[];
}

function applyFacets(plaintext: string, facets?: Facet[]): string {
  if (!facets || facets.length === 0) return escapeHtml(plaintext);

  const bytes = new TextEncoder().encode(plaintext);
  type Span = {
    start: number;
    end: number;
    openTag: string;
    closeTag: string;
    isLink: boolean;
    ordinal: number;
  };
  const spans: Span[] = [];
  const boundaries = new Set([0, bytes.length]);
  let ordinalCounter = 0;

  for (const facet of facets) {
    const byteStart = Math.max(0, Math.min(bytes.length, facet.index.byteStart));
    const byteEnd = Math.max(0, Math.min(bytes.length, facet.index.byteEnd));
    if (byteStart >= byteEnd) continue;

    for (const feat of facet.features) {
      let openTag = "";
      let closeTag = "";
      let isLink = false;
      switch (feat.$type) {
        case "pub.leaflet.richtext.facet#bold":
          openTag = "<strong>";
          closeTag = "</strong>";
          break;
        case "pub.leaflet.richtext.facet#italic":
          openTag = "<em>";
          closeTag = "</em>";
          break;
        case "pub.leaflet.richtext.facet#link": {
          const uri = feat.uri ?? "";
          let safe = false;
          try {
            const scheme = new URL(uri).protocol;
            safe = scheme === "https:" || scheme === "http:" || scheme === "mailto:";
          } catch {}
          if (safe) {
            openTag = `<a href="${escapeAttr(uri)}" target="_blank" rel="noopener noreferrer">`;
            closeTag = "</a>";
            isLink = true;
          } else {
            openTag = "<span>";
            closeTag = "</span>";
          }
          break;
        }
      }
      if (openTag) {
        spans.push({
          start: byteStart,
          end: byteEnd,
          openTag,
          closeTag,
          isLink,
          ordinal: ordinalCounter++,
        });
        boundaries.add(byteStart);
        boundaries.add(byteEnd);
      }
    }
  }

  const decoder = new TextDecoder();
  let result = "";

  const positions = [...boundaries].sort((a, b) => a - b);
  for (let index = 0; index < positions.length - 1; index++) {
    const start = positions[index];
    const end = positions[index + 1];
    const activeSpans = spans
      .filter((span) => span.start <= start && span.end >= end)
      .sort((a, b) => {
        const lengthDiff = b.end - b.start - (a.end - a.start);
        return lengthDiff !== 0 ? lengthDiff : a.ordinal - b.ordinal;
      })
      .filter((span, spanIndex, allSpans) =>
        !span.isLink || !allSpans.slice(0, spanIndex).some((other) => other.isLink)
      );

    result += activeSpans.map((span) => span.openTag).join("");
    result += escapeHtml(decoder.decode(bytes.slice(start, end)));
    result += activeSpans.reverse().map((span) => span.closeTag).join("");
  }

  return result;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

interface Block {
  $type: string;
  // text / header
  plaintext?: string;
  facets?: Facet[];
  level?: number;
  // iframe
  url?: string;
  height?: number;
  // unorderedList
  children?: { $type: string; content?: Block }[];
}

function renderBlock(block: Block): string {
  switch (block.$type) {
    case "pub.leaflet.blocks.text": {
      const html = applyFacets(block.plaintext ?? "", block.facets);
      return `<p>${html}</p>`;
    }
    case "pub.leaflet.blocks.header": {
      const level = Math.max(1, Math.min(6, Math.floor(Number(block.level) || 2)));
      const tag = `h${level}`;
      const html = applyFacets(block.plaintext ?? "", block.facets);
      return `<${tag}>${html}</${tag}>`;
    }
    case "pub.leaflet.blocks.horizontalRule":
      return "<hr />";
    case "pub.leaflet.blocks.iframe": {
      const iframeSrc = block.url ?? "";
      try {
        const scheme = new URL(iframeSrc).protocol;
        if (scheme !== "https:" && scheme !== "http:") return "";
      } catch {
        return "";
      }
      return `<iframe src="${escapeAttr(iframeSrc)}" width="100%" allow="fullscreen" loading="lazy" style="border:none;"></iframe>`;
    }
    case "pub.leaflet.blocks.unorderedList": {
      const items = (block.children ?? [])
        .map((item) => {
          const inner = item.content
            ? applyFacets(item.content.plaintext ?? "", item.content.facets)
            : "";
          return `<li>${inner}</li>`;
        })
        .join("\n");
      return `<ul>${items}</ul>`;
    }
    default:
      return "";
  }
}

function renderBlocks(pages: { blocks?: { block: Block }[] }[]): string {
  const html: string[] = [];
  for (const page of pages) {
    for (const entry of page.blocks ?? []) {
      const line = renderBlock(entry.block);
      if (line) html.push(line);
    }
  }
  return html.join("\n");
}

function isSafeUrl(url: string): boolean {
  try {
    const scheme = new URL(url).protocol;
    return scheme === "https:" || scheme === "http:";
  } catch {
    return false;
  }
}

function findFirstImage(pages: { blocks?: { block: Block }[] }[]): string | undefined {
  for (const page of pages) {
    for (const entry of page.blocks ?? []) {
      const block = entry.block;
      if (block.$type === "pub.leaflet.blocks.image" && block.url && isSafeUrl(block.url)) {
        return block.url;
      }
      if (block.$type === "pub.leaflet.blocks.iframe" && block.url) {
        const match = block.url.match(/youtube\.com\/embed\/([^?/]+)/);
        if (match) {
          return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
        }
      }
    }
  }
  return undefined;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

// --- AT Protocol fetch ---

interface ATRecord {
  uri: string;
  value: {
    $type: string;
    title: string;
    description?: string;
    path: string;
    publishedAt?: string;
    coverImage?: {
      ref?: { $link?: string } | string;
    };
    content?: {
      $type: string;
      pages: { blocks?: { block: Block }[] }[];
    };
  };
}

function getBlobUrl(blob?: ATRecord["value"]["coverImage"]): string | undefined {
  const cid = typeof blob?.ref === "string" ? blob.ref : blob?.ref?.$link;
  if (!cid) return undefined;

  const url = new URL(`${PDS}/xrpc/com.atproto.sync.getBlob`);
  url.searchParams.set("did", DID);
  url.searchParams.set("cid", cid);
  return url.toString();
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const url = `${PDS}/xrpc/com.atproto.repo.listRecords?repo=${DID}&collection=${COLLECTION}&limit=100`;
    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) return [];

    const data = await res.json();
    const records: ATRecord[] = data.records ?? [];

    const posts: BlogPost[] = records
      .filter((r) => r.value.publishedAt)
      .map((r) => {
        const {
          title,
          description: rawDesc,
          path,
          publishedAt,
          coverImage,
          content,
        } = r.value;
        const slug = path.replace(/^\//, "");
        const pages = content?.pages ?? [];
        const htmlContent = pages.length ? renderBlocks(pages) : "";
        const image = getBlobUrl(coverImage) ?? findFirstImage(pages);
        const description = rawDesc
          || (() => {
            const plainText = stripHtml(htmlContent);
            return plainText.slice(0, 300) + (plainText.length > 300 ? "…" : "");
          })();

        return {
          title,
          link: `${LEAFLET_BASE}${path}`,
          slug,
          description,
          content: htmlContent,
          pubDate: publishedAt!,
          image,
        };
      })
      .sort(
        (a, b) =>
          new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
      );

    return posts;
  } catch (err) {
    console.error("Failed to fetch blog posts from AT Protocol:", err);
    return [];
  }
}

export async function fetchBlogPost(
  slug: string
): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
