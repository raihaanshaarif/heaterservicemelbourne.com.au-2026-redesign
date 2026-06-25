"use client";

import { useEffect } from "react";

/**
 * Defers non-critical CSS (animations, form widgets) until after
 * the page has painted. This removes them from the render-blocking critical
 * path.
 * 
 * Removed bloat: Font Awesome (~100KB CSS + 400KB fonts), Flaticon (~30KB),
 * animate.min.css (~50KB). Total savings: ~580KB.
 * Icons now use lucide-react (tree-shakeable, no external CSS needed).
 */
const DEFERRED_STYLESHEETS = [
  "/assets/css/custom-animate.css",
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
      }, 2000);
      
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
