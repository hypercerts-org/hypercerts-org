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

  // Build a list of boundary events
  type Event = { pos: number; type: "open" | "close"; tag: string; end: number; ordinal: number };
  const events: Event[] = [];
  let ordinalCounter = 0;

  for (const facet of facets) {
    const { byteStart, byteEnd } = facet.index;
    for (const feat of facet.features) {
      let openTag = "";
      let closeTag = "";
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
          } else {
            openTag = "<span>";
            closeTag = "</span>";
          }
          break;
        }
      }
      if (openTag) {
        const ord = ordinalCounter++;
        events.push({ pos: byteStart, type: "open", tag: openTag, end: byteEnd, ordinal: ord });
        events.push({ pos: byteEnd, type: "close", tag: closeTag, end: byteEnd, ordinal: ord });
      }
    }
  }

  // Sort: by position; at same position opens before closes,
  // longer spans open first, shorter spans close first,
  // stable ordinal tiebreaker for identical ranges
  events.sort((a, b) => {
    if (a.pos !== b.pos) return a.pos - b.pos;
    if (a.type === "open" && b.type === "close") return -1;
    if (a.type === "close" && b.type === "open") return 1;
    if (a.type === "open") {
      const endDiff = b.end - a.end;
      return endDiff !== 0 ? endDiff : a.ordinal - b.ordinal;
    }
    const endDiff = a.end - b.end;
    return endDiff !== 0 ? endDiff : b.ordinal - a.ordinal;
  });

  const decoder = new TextDecoder();
  let result = "";
  let cursor = 0;

  for (const ev of events) {
    if (ev.pos > cursor) {
      result += escapeHtml(decoder.decode(bytes.slice(cursor, ev.pos)));
    }
    result += ev.tag;
    cursor = ev.pos;
  }

  if (cursor < bytes.length) {
    result += escapeHtml(decoder.decode(bytes.slice(cursor)));
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

function findFirstImage(pages: { blocks?: { block: Block }[] }[]): string | undefined {
  for (const page of pages) {
    for (const entry of page.blocks ?? []) {
      const block = entry.block;
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
    content?: {
      $type: string;
      pages: { blocks?: { block: Block }[] }[];
    };
  };
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
        const { title, description: rawDesc, path, publishedAt, content } = r.value;
        const slug = path.replace(/^\//, "");
        const pages = content?.pages ?? [];
        const htmlContent = pages.length ? renderBlocks(pages) : "";
        const image = findFirstImage(pages);
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
