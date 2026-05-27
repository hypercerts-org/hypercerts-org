import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hypercerts.org",
      },
      {
        protocol: "https",
        hostname: "app.hypercerts.org",
      },
    ],
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
    ];
  },
};

export default nextConfig;
