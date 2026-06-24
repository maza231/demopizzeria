import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Immagini fittizie a tema pizza (loremflickr). Da sostituire con foto reali.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },
    ],
  },
};

export default nextConfig;
