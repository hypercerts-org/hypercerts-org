import { fetchBlogPosts } from "@/lib/blog";

/* RSS feed of the blog, with links to hypercerts.org rather than to the
   Leaflet copies. Items carry the summary; the full post is one click away. */

export const revalidate = 60;

const siteUrl = "https://hypercerts.org";

function escapeXml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await fetchBlogPosts();
  /* The feed comes back empty when it fails. Throw then, so a cached feed
     is kept instead of telling readers every post is gone. */
  if (posts.length === 0) throw new Error("Blog feed unavailable");

  const items = posts
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Hypercerts blog</title>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Updates from the Hypercerts Foundation on protocol development and highlights from across the ecosystem.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(posts[0].pubDate).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
