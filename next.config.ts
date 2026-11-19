import type { NextConfig } from "next";
import { ogImage, retiredOgImages } from "./lib/metadata";

const nextConfig: NextConfig = {
  // Files the blog preview cards read at runtime. Next doesn't reliably
  // trace them on its own, and without them cards can't regenerate on
  // Vercel. ("[slug]" would be a character class in a glob, hence "*".)
  outputFileTracingIncludes: {
    "/blog/*/opengraph-image": [
      "./assets/fonts/*.ttf",
      "./public/img/guilloche_02_top.svg",
      "./public/img/hypercerts_logo_horizontal.svg",
    ],
  },
  images: {
    // No remote hosts: /_next/image is public, so anyone can make it fetch
    // and resize whatever a listed host serves. The site's own images are
    // all local. Blog images come from app/blog-image/[cid]/route.ts, which
    // only fetches the Foundation's own blobs; the PDS they live on is
    // shared by many accounts, so it must not be listed here.
    // Only the local folders the site's images live in, and no query
    // string: otherwise "?n=1", "?n=2", ... each make a new source the
    // optimizer resizes and caches.
    localPatterns: [
      { pathname: "/img/**", search: "" },
      { pathname: "/blog-image/**", search: "" },
    ],
    // One quality, the one the site uses, so a source can't fan out into
    // a hundred variants.
    qualities: [75],
  },
  async redirects() {
    return [
      // The bare /docs URL (and any explicit-trailing-slash variant)
      // resolves directly to the new docs site. Sub-paths like
      // /docs/guide/start still fall through to the catch-all at
      // `app/docs/[[...slug]]/page.tsx`, which renders the "moved"
      // notice with a link to the equivalent path on docs.
      {
        source: "/docs",
        destination: "https://docs.hypercerts.org",
        permanent: true,
      },
      // Earlier preview cards go to the current one. Temporary, because
      // the destination changes with each new card; a permanent redirect
      // would be cached pointing at this one.
      ...retiredOgImages.map((source) => ({
        source,
        destination: ogImage.url,
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
