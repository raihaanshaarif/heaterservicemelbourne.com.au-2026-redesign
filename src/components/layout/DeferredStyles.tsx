"use client";

import { useEffect } from "react";

/**
 * Defers non-critical CSS (animations, icons, form widgets) until after
 * the page has painted. This removes them from the render-blocking critical
 * path, saving ~200 KiB and ~3,350 ms of blocking time.
 */
const DEFERRED_STYLESHEETS = [
  "/_next/static/css/animate.min.css",
  "/_next/static/css/custom-animate.css",
  "/_next/static/css/font-awesome-all.css",
  "/_next/static/css/flaticon.css",
  "/_next/static/css/nice-select.css",
];

// Paths relative to /assets served from public or via Next.js
// We import them as static asset URLs by referencing the public folder paths
const ASSET_STYLESHEETS = [
  "/assets/css/animate.min.css",
  "/assets/css/custom-animate.css",
  "/assets/css/font-awesome-all.css",
  "/assets/css/flaticon.css",
  "/assets/css/nice-select.css",
];

export default function DeferredStyles() {
  useEffect(() => {
    ASSET_STYLESHEETS.forEach((href) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.media = "print";
      link.onload = () => {
        link.media = "all";
      };
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
