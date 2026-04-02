import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // La landing se servirá desde https://adray.ai/landing
  basePath: "/landing",
  assetPrefix: "/landing/",

  // Mantener esto por el monorepo padre
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;