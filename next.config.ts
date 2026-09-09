import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve normal Next.js hosting; enable a portable static build for Sites.
  ...(process.env.SITES_EXPORT === "1" ? { output: "export", images: { unoptimized: true } } : {}),
};

export default nextConfig;
