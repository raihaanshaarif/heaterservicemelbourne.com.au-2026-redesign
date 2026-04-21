import { Metadata } from "next";

export interface SEOParams {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: "website" | "article";
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function generateSEOMetadata(params: SEOParams): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage = "/assets/images/website-img",
    ogType = "website",
    author,
    publishedDate,
    modifiedDate,
  } = params;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: ogType,
      url: canonicalUrl,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "Heating Service Melbourne",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    ...(publishedDate && { article: { publishedTime: publishedDate } }),
    ...(modifiedDate && { article: { modifiedTime: modifiedDate } }),
    ...(author && { article: { authors: [author] } }),
  };
}

// Suburb-specific metadata generator
export function generateSuburbMetadata(
  suburb: string,
  service: string,
  baseUrl: string,
): Metadata {
  const title = `${service} in ${suburb}, Melbourne | Expert Repairs & Installation`;
  const description = `Professional ${service} in ${suburb}, Melbourne. Expert installation, repair, and maintenance services. 24/7 Emergency support. Call 0405 133 761 today.`;
  const canonicalUrl = `${baseUrl}`;

  return generateSEOMetadata({
    title,
    description,
    keywords: [
      `${service.toLowerCase()} ${suburb}`,
      `${service.toLowerCase()} repair ${suburb}`,
      `${service.toLowerCase()} installation ${suburb}`,
      `heating service ${suburb}`,
      `${suburb} heating specialist`,
    ],
    canonicalUrl,
    ogImage: "/assets/images/resources/service-og.jpg",
  });
}

// Service-specific metadata generator
export function generateServiceMetadata(
  serviceName: string,
  baseUrl: string,
): Metadata {
  const title = `${serviceName} in Melbourne | Expert Installation & Repair`;
  const description = `Professional ${serviceName} in Melbourne. Expert installation, repair, and maintenance. Serving all Melbourne suburbs. 24/7 Emergency support. Call 0405 133 761.`;
  const canonicalUrl = `${baseUrl}`;

  return generateSEOMetadata({
    title,
    description,
    keywords: [
      serviceName.toLowerCase(),
      `${serviceName.toLowerCase()} melbourne`,
      `${serviceName.toLowerCase()} repair`,
      `${serviceName.toLowerCase()} installation`,
      "heating services melbourne",
      "emergency heating repair",
    ],
    canonicalUrl,
  });
}

// Brand-specific metadata generator
export function generateBrandMetadata(
  brandName: string,
  serviceName: string,
  baseUrl: string,
): Metadata {
  const title = `${brandName} ${serviceName} in Melbourne | Authorized Service`;
  const description = `Authorized ${brandName} ${serviceName} specialist in Melbourne. Expert installation, repair, and maintenance services. Call 0405 133 761.`;
  const canonicalUrl = `${baseUrl}`;

  return generateSEOMetadata({
    title,
    description,
    keywords: [
      `${brandName} ${serviceName.toLowerCase()}`,
      `${brandName} specialist melbourne`,
      `${brandName} repair`,
      `authorized ${brandName} agent`,
    ],
    canonicalUrl,
  });
}
