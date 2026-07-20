import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Keep file tracing scoped to this app (avoids picking up parent lockfiles).
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
