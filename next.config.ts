import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // dynamicIO: true,
    // useCache: true,
    authInterrupts: true,
  },
};

export default nextConfig;
