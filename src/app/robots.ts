// robots.ts configuration for Next.js
// Path: src/app/robots.ts

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    sitemap: "https://heaterservicemelbourne.com.au/sitemap.xml",
    host: "https://heaterservicemelbourne.com.au",
  };
}
