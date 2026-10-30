import type { MetadataRoute } from "next";
import { fetchBlogPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchBlogPosts();

  const blogEntries = posts.map((post) => ({
    url: `https://hypercerts.org/blog/${post.slug}`,
    lastModified: new Date(post.pubDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /* Static pages have no reliable change date, and a lastModified that is
     always "now" teaches search engines to ignore the field. */
  return [
    {
      url: "https://hypercerts.org",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://hypercerts.org/blog",
      ...(posts[0] && { lastModified: new Date(posts[0].pubDate) }),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://hypercerts.org/about",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://hypercerts.org/contact",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://hypercerts.org/privacy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://hypercerts.org/terms",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...blogEntries,
  ];
}
