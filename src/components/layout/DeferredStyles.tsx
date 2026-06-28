"use client";

import { useEffect } from "react";

/**
 * Defers non-critical CSS (animations, icons, form widgets) until after
 * the page has painted. This removes them from the render-blocking critical
 * path.
 * 
 * Note: Icons (Font Awesome & Flaticon) are required for UI functionality.
 * Deferred to improve initial page load without blocking render.
 */
const DEFERRED_STYLESHEETS = [
  "/assets/css/custom-animate.css",
  "/assets/css/font-awesome-all.css",
  "/assets/css/flaticon.css",
  "/assets/css/nice-select.css",
];

export default function DeferredStyles() {
  useEffect(() => {
    // Load deferred stylesheets using media="print" trick to avoid render-blocking
    DEFERRED_STYLESHEETS.forEach((href) => {
      // Skip if already in DOM
      if (document.querySelector(`link[href="${href}"]`)) return;
      
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.media = "print"; // Browsers don't block on print media
      
      // Switch to 'all' after load completes
      link.onload = () => {
        link.media = "all";
      };
      
      // Fallback: if onload doesn't fire (some browsers), switch after delay
      setTimeout(() => {
        if (link.media === "print") {
          link.media = "all";
        }
      }, 3000);
      
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
