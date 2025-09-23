import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // 👈 obligatoire pour générer /out

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
    const { execSync } = require("child_process");
    const gitSha = process.env.GIT_SHA || execSync("git rev-parse HEAD").toString().trim();
    return gitSha || `${new Date().getTime()}`;
  },

  
  assetPrefix: undefined,
};

export default nextConfig;
