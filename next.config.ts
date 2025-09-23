import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, 
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true, 
  },

  
  generateBuildId: async () => {
    return process.env.GIT_SHA || `${new Date().getTime()}`;
  },

  
  assetPrefix: undefined,
};

export default nextConfig;
