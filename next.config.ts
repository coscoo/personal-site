import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/favicons/**",
      },
      {
        protocol: "https",
        hostname: "download.logo.wine",
      },
      {
        protocol: "https",
        hostname: "www.goldmansachs.com",
      },
      {
        protocol: "https",
        hostname: "www.janestreet.com",
      },
    ],
  },
};

export default nextConfig;
