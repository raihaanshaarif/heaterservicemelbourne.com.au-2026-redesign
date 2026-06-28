"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

interface DeferredGTMProps {
  gtmId: string;
}

/**
 * Defers Google Tag Manager loading by ~50-100ms using simple setTimeout.
 * This prevents GTM (484 KiB, 464ms main thread) from blocking LCP/FCP while
 * still ensuring tracking is available before user interaction.
 * 
 * Key: We defer minimally (~50ms) to avoid delaying LCP measurement itself,
 * which was causing 7.8s LCP regression with requestIdleCallback approach.
 */
export default function DeferredGTM({ gtmId }: DeferredGTMProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Minimal deferral: 50ms is enough to avoid blocking initial render
    // but fast enough that GTM loads before user can interact
    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Don't render GTM until minimal deferral completes
  if (!isReady) return null;

  return <GoogleTagManager gtmId={gtmId} />;
}
