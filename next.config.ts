import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Foto a tema pizza da Unsplash. Da sostituire con foto reali del locale.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
