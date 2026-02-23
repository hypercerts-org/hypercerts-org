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
};

export default nextConfig;
