"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

interface DeferredGTMProps {
  gtmId: string;
}

/**
 * Defers Google Tag Manager loading based on device type.
 * Mobile devices get longer delay (300ms) due to slower CPUs and networks.
 * Desktop gets minimal delay (50ms) for quick tracking initialization.
 * 
 * This prevents GTM (484 KiB, 464ms main thread) from blocking LCP/FCP
 * while ensuring tracking is available before meaningful user interaction.
 */
export default function DeferredGTM({ gtmId }: DeferredGTMProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Detect mobile devices (more aggressive deferral for mobile)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    // Mobile: 300ms delay (CPU/network constraints)
    // Desktop: 50ms delay (faster hardware)
    const delay = isMobile ? 300 : 50;
    
    const timer = setTimeout(() => setIsReady(true), delay);
    return () => clearTimeout(timer);
  }, []);

  // Don't render GTM until deferral completes
  if (!isReady) return null;

  return <GoogleTagManager gtmId={gtmId} />;
}
