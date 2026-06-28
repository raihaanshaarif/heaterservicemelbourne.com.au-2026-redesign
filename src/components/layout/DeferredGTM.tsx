"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

interface DeferredGTMProps {
  gtmId: string;
}

/**
 * Defers Google Tag Manager loading until after the page has become interactive.
 * GTM can consume 484 KiB and block main thread for 464ms. By deferring it,
 * we improve FCP and LCP significantly.
 */
export default function DeferredGTM({ gtmId }: DeferredGTMProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback if available, otherwise use setTimeout
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setIsReady(true), { timeout: 5000 });
      return () => cancelIdleCallback(id);
    } else {
      // Fallback: wait 2 seconds for page to become interactive
      const timer = setTimeout(() => setIsReady(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Don't render GTM until page is ready to be interactive
  if (!isReady) return null;

  return <GoogleTagManager gtmId={gtmId} />;
}
