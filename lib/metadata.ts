import type { Metadata } from "next";

/* The link preview card. Source: scripts/landing-social-card.html.
   Give a new card a new filename so messenger caches pick it up. */
export const ogImage = {
  url: "/img/hypercerts-opengraph-2026-10-30.png",
  width: 1200,
  height: 630,
  alt: "Hypercerts | Open infrastructure for funding ecosystems",
};

/* A page that sets its own openGraph replaces the root one entirely,
   so pages spread this in to keep the card and site name. */
export const sharedOpenGraph = {
  siteName: "Hypercerts",
  locale: "en_US",
  type: "website",
  images: [ogImage],
} satisfies Metadata["openGraph"];
