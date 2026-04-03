import type { NextConfig } from "next";
import path from "path";

const landingBasePath = "/landing";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // La landing se sirve bajo /landing (Next dev + estático en monorepo vía public/landing)
  basePath: landingBasePath,
  assetPrefix: `${landingBasePath}/`,

  env: {
    // Cliente: rutas absolutas a /public (p. ej. vídeo del hero) deben incluir el basePath
    NEXT_PUBLIC_LANDING_BASE_PATH: landingBasePath,
  },

  // Mantener esto por el monorepo padre
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;