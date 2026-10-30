import { fetchBlogPosts } from "@/lib/blog";
import { blogDescription, blogTitle } from "@/lib/metadata";

/* RSS feed of the blog, with links to hypercerts.org rather than to the
   Leaflet copies. Items carry the summary; the full post is one click away. */

export const revalidate = 60;

const siteUrl = "https://hypercerts.org";

/* Also drops the control characters XML 1.0 forbids, which can come in
   with pasted text and would make readers reject the whole feed. */
function escapeXml(text: string) {
  return text
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await fetchBlogPosts();

  /* The guid is the record URI, so renaming a post's path doesn't make
     readers show it again as a new item. */
  const items = posts
    .map((post) => {
      const url = escapeXml(`${siteUrl}/blog/${encodeURIComponent(post.slug)}`);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="false">${escapeXml(post.uri)}</guid>
      <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(blogTitle)}</title>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(blogDescription)}</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
