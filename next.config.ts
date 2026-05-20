import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false, // Don't send source maps to clients
  compiler: {
    // Strip console.log from production bundles (keeps error/warn for debugging)
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
  },
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "swiper",
      "lucide-react",
      "react-circular-progressbar",
      "yet-another-react-lightbox",
    ],
    // Enable React Server Components streaming for faster LCP
    serverComponentsExternalPackages: [],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        // Cache static HTML pages at CDN edge for 1 hour, revalidate in background
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache Next.js static chunks aggressively
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Remove www from all URLs (force non-www preference)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.heaterservicemelbourne.com.au",
          },
        ],
        destination: "https://heaterservicemelbourne.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
