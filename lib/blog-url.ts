import { headers } from "next/headers";

const BLOG_ORIGIN = "https://blog.hypercerts.org";
const MAIN_ORIGIN = "https://hypercerts.org";

/**
 * Returns true when the request is served from blog.hypercerts.org.
 * Reads the x-blog-host header set by middleware.
 */
export async function isBlogHost(): Promise<boolean> {
  const h = await headers();
  return h.get("x-blog-host") === "1";
}

/**
 * Returns the path for a blog link, subdomain-aware.
 * On blog.hypercerts.org: /slug
 * On hypercerts.org:      /blog/slug
 */
export async function blogPath(slug?: string): Promise<string> {
  const onBlog = await isBlogHost();
  if (slug) {
    return onBlog ? `/${slug}` : `/blog/${slug}`;
  }
  return onBlog ? "/" : "/blog";
}

/**
 * Returns the canonical URL for a blog page.
 * Always uses blog.hypercerts.org as the canonical origin.
 */
export function blogCanonical(slug?: string): string {
  if (slug) {
    return `${BLOG_ORIGIN}/${slug}`;
  }
  return BLOG_ORIGIN;
}

/**
 * Returns the full absolute URL on the main domain.
 * Used for structured data that should always reference hypercerts.org.
 */
export function blogAbsoluteUrl(slug?: string): string {
  if (slug) {
    return `${MAIN_ORIGIN}/blog/${slug}`;
  }
  return `${MAIN_ORIGIN}/blog`;
}
