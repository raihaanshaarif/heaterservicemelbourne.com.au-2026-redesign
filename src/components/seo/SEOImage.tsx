"use client";

import Image, { ImageProps } from "next/image";
import { FC, CSSProperties } from "react";

export interface SEOImageProps extends Omit<ImageProps, "alt"> {
  alt: string; // Required for SEO
  /** Keywords to include in alt text for SEO */
  keywords?: string[];
  /** Whether to lazy load (default: true for off-screen images) */
  lazyLoad?: boolean;
  /** Priority loading for above-the-fold images (LCP optimization) */
  priority?: boolean;
  /** Custom styling */
  style?: CSSProperties;
}

/**
 * SEO-Optimized Image Component
 * Ensures:
 * - Semantic alt text with keywords
 * - Lazy loading for performance
 * - Priority loading for LCP images
 * - Proper image sizing
 * - Webp format support
 *
 * Usage:
 * <SEOImage
 *   src="/image.jpg"
 *   alt="Gas heater service Melbourne"
 *   keywords={['gas heater', 'Melbourne', 'repair']}
 *   width={800}
 *   height={600}
 *   priority={true} // For hero image
 * />
 */
export const SEOImage: FC<SEOImageProps> = ({
  alt,
  keywords = [],
  lazyLoad = true,
  priority = false,
  sizes,
  quality = 80,
  ...props
}) => {
  // Build keyword-rich alt text
  const keywordText = keywords.length > 0 ? ` - ${keywords.join(", ")}` : "";
  const enrichedAlt = `${alt}${keywordText}`;

  // Default responsive sizes for different breakpoints
  const defaultSizes =
    "(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw";

  return (
    <Image
      alt={enrichedAlt}
      loading={lazyLoad && !priority ? "lazy" : "eager"}
      quality={quality}
      sizes={sizes || defaultSizes}
      priority={priority}
      {...props}
    />
  );
};

/**
 * Hero Image Component - Optimized for LCP
 * Used for above-the-fold images
 */
export const SEOHeroImage: FC<SEOImageProps> = ({
  keywords = [],
  ...props
}) => {
  return (
    <SEOImage
      priority={true}
      lazyLoad={false}
      keywords={keywords}
      quality={85}
      {...props}
    />
  );
};

/**
 * Thumbnail Image Component - Optimized for thumbnails
 */
export const SEOThumbnailImage: FC<SEOImageProps> = ({
  keywords = [],
  ...props
}) => {
  return (
    <SEOImage
      priority={false}
      lazyLoad={true}
      keywords={keywords}
      quality={70}
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
      {...props}
    />
  );
};
