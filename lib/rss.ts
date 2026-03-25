export interface BlogPost {
  title: string;
  link: string;
  slug: string;
  description: string;
  content: string;
  pubDate: string;
}

function extractTag(xml: string, tag: string): string {
  // Try CDATA first
  const cdata = xml.match(
    new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`)
  );
  if (cdata) return cdata[1].trim();

  // Try simple tag
  const simple = xml.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`)
  );
  return simple ? simple[1].trim() : "";
}

function slugFromLink(link: string): string {
  const parts = link.split("/");
  return parts[parts.length - 1] || parts[parts.length - 2];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch("https://hypercerts.leaflet.pub/rss", {
    next: { revalidate: 60 },
  });

  if (!res.ok) return [];

  const xml = await res.text();
  const items = xml.match(/<item>[\s\S]*?<\/item>/g);

  if (!items) return [];

  return items.map((item) => {
    const link = extractTag(item, "link");
    const content = extractTag(item, "content:encoded");
    const rawDescription = extractTag(item, "description");
    const description =
      rawDescription ||
      stripHtml(content).slice(0, 300) +
        (stripHtml(content).length > 300 ? "…" : "");

    return {
      title: extractTag(item, "title"),
      link,
      slug: slugFromLink(link),
      description,
      content,
      pubDate: extractTag(item, "pubDate"),
    };
  });
}

export async function fetchBlogPost(
  slug: string
): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
