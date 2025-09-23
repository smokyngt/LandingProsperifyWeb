import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 🚀 Active l'export statique (remplace `next export`)
 
 images: {
    unoptimized: true, // ⚡ désactive l’optimisation côté serveur
  },
  eslint: {
    ignoreDuringBuilds: true, // ⚡ Ignore ESLint en build
  },
  typescript: {
    ignoreBuildErrors: true, // ⚡ Ignore TS en build
  },
};

export default nextConfig;
