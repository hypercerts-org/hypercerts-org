import type { Metadata } from "next";

/* The link preview card. Source: scripts/landing-social-card.html.
   Give a new card a new filename so messenger caches pick it up. */
export const ogImage = {
  url: "/img/hypercerts-opengraph-2026-10-30.png",
  width: 1200,
  height: 630,
  alt: "Hypercerts | Open infrastructure for funding ecosystems",
};

/* A page that sets its own openGraph or twitter replaces the root one
   entirely, so pages spread these in to keep the shared fields. */
export const openGraphBase = {
  siteName: "Hypercerts",
  locale: "en_US",
} satisfies Metadata["openGraph"];

/* Blog posts spread only openGraphBase: images here would replace the
   card from app/blog/[slug]/opengraph-image.tsx. */
export const sharedOpenGraph = {
  ...openGraphBase,
  type: "website",
  images: [ogImage],
} satisfies Metadata["openGraph"];

export const sharedTwitter = {
  card: "summary_large_image",
  site: "@hypercerts",
} satisfies Metadata["twitter"];

export const blogTitle = "Hypercerts blog";
export const blogDescription =
  "Updates from the Hypercerts Foundation on protocol development and highlights from across the ecosystem.";

/* The blog's RSS feed (app/blog/rss.xml), for feed readers to discover.
   Pages that set alternates list it themselves. */
export const blogFeed = {
  "application/rss+xml": [{ url: "/blog/rss.xml", title: blogTitle }],
};
