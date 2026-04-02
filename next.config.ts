import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Export estático para servir la landing desde Express (mismo origen que la API en :3000)
  output: "export",
  images: { unoptimized: true },
  // Evitar que Next use el lockfile del monorepo padre
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
