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

  return [
    {
      url: "https://hypercerts.org",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://hypercerts.org/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://hypercerts.org/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://hypercerts.org/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://hypercerts.org/terms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...blogEntries,
  ];
}
