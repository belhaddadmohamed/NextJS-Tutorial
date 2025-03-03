import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.staticneo.com",
        // port: '',
        // pathname: '',
      },
    ],
  },
};

export default nextConfig;
