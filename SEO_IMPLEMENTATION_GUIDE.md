# Next.js Local SEO Implementation Guide for Heating Service Melbourne

## Overview

This guide covers implementing comprehensive SEO for the heating services website targeting "Gas heater repair Melbourne", "Split System heater repair Melbourne", and "Hydronic repair Melbourne".

---

## 1. METADATA API OPTIMIZATION

### Root Layout (app/layout.tsx)

```typescript
import { generateLocalBusinessSchema } from "@/utils/seo/jsonLd";
import { JSONLDScript } from "@/components/seo/JSONLDScript";

export const metadata: Metadata = {
  title: "Heating Service Melbourne | Gas, Hydronic & Split System Repairs",
  description:
    "Expert heating services in Melbourne. Same-day gas ducted, hydronic, and split system repairs. 24/7 emergency support. Licensed & insured.",
  keywords: ["heating repair Melbourne", "gas heater repair", "HVAC services"],
  openGraph: {
    title: "Heating Service Melbourne | Professional Repairs & Installation",
    description: "Expert heating services with 24/7 emergency support",
    url: "https://heaterservicemelbourne.com.au",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <JSONLDScript schema={generateLocalBusinessSchema()} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Service-Specific Pages (gas-ducted-heating/page.tsx)

```typescript
import { generateServiceMetadata } from "@/utils/seo/metadata";
import { generateServiceSchema } from "@/utils/seo/jsonLd";
import { JSONLDScript } from "@/components/seo/JSONLDScript";

export const generateMetadata = (): Metadata => {
  return generateServiceMetadata(
    "Gas Ducted Heating",
    "https://heaterservicemelbourne.com.au/gas-ducted-heating"
  );
};

export default function GasDuctedHeatPage() {
  return (
    <>
      <JSONLDScript
        schema={generateServiceSchema(
          "Gas Ducted Heating Installation & Repair",
          "Professional gas ducted heating services with emergency repairs",
          "https://heaterservicemelbourne.com.au/gas-ducted-heating"
        )}
        id="gas-ducted-schema"
      />
      {/* Page content */}
    </>
  );
}
```

---

## 2. DYNAMIC SUBURB PAGES PATTERN

### Directory Structure

```
src/app/(pages)/
├── gas-ducted-heating/
│   ├── [suburb]/
│   │   └── page.tsx
│   └── page.tsx
├── hydronic-heating/
│   ├── [suburb]/
│   │   └── page.tsx
│   └── page.tsx
└── split-system-air-conditioning/
    ├── [suburb]/
    │   └── page.tsx
    └── page.tsx
```

### Dynamic Suburb Page Example

```typescript
// app/(pages)/gas-ducted-heating/[suburb]/page.tsx
import { generateSuburbMetadata } from "@/utils/seo/metadata";
import { generateServiceSchema } from "@/utils/seo/jsonLd";
import { JSONLDScript } from "@/components/seo/JSONLDScript";
import { SEOBreadcrumbs } from "@/components/seo/SEOBreadcrumbs";

export async function generateMetadata(props: {
  params: { suburb: string };
}): Promise<Metadata> {
  const suburbName = decodeURIComponent(props.params.suburb)
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return generateSuburbMetadata(
    suburbName,
    "Gas Ducted Heating",
    `https://heaterservicemelbourne.com.au/gas-ducted-heating/${props.params.suburb}`
  );
}

export async function generateStaticParams() {
  return MELBOURNE_SUBURBS.map((suburb) => ({
    suburb: suburb.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function SuburbGasDuctedPage(props: {
  params: { suburb: string };
}) {
  const suburbName = decodeURIComponent(props.params.suburb).replace(
    /-/g,
    " "
  );

  return (
    <>
      <JSONLDScript
        schema={generateServiceSchema(
          `Gas Ducted Heating Services in ${suburbName}`,
          `Professional gas ducted heating installation and repair in ${suburbName}, Melbourne`,
          `https://heaterservicemelbourne.com.au/gas-ducted-heating/${props.params.suburb}`
        )}
        id={`gas-${props.params.suburb}-schema`}
      />

      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Gas Ducted Heating", url: "/gas-ducted-heating" },
          { name: suburbName, url: `/gas-ducted-heating/${props.params.suburb}` },
        ]}
      />

      {/* Content */}
    </>
  );
}
```

---

## 3. JSON-LD SCHEMA IMPLEMENTATION

### Local Business Schema

Already handled by `generateLocalBusinessSchema()` in root layout.

### Service Schema

```typescript
import { generateServiceSchema } from "@/utils/seo/jsonLd";
import { JSONLDScript } from "@/components/seo/JSONLDScript";

<JSONLDScript
  schema={generateServiceSchema(
    "Gas Ducted Heating",
    "Expert installation and repair of gas ducted heating systems",
    "https://heaterservicemelbourne.com.au/gas-ducted-heating"
  )}
/>
```

### FAQ Schema

```typescript
import { generateFAQSchema } from "@/utils/seo/jsonLd";

const faqs = [
  {
    question: "How much does gas ducted heating repair cost in Melbourne?",
    answer: "Costs vary depending on the issue. We provide free diagnostics...",
  },
  // more FAQs
];

<JSONLDScript schema={generateFAQSchema(faqs)} id="faq-schema" />
```

---

## 4. CANONICAL URLS

### Automatic via Metadata

All metadata functions include canonical URL:

```typescript
export const metadata: Metadata = {
  canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating",
  },
};
```

---

## 5. BREADCRUMB IMPLEMENTATION

```typescript
import { SEOBreadcrumbs } from "@/components/seo/SEOBreadcrumbs";

<SEOBreadcrumbs
  items={[
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Gas Ducted Heating", url: "/gas-ducted-heating" },
    { name: "Clayton South", url: "/gas-ducted-heating/clayton-south" },
  ]}
  schema={true} // Generates BreadcrumbList JSON-LD
/>
```

---

## 6. INTERNAL LINKING STRATEGY (Avoiding Link Farms)

### Best Practices Implemented

1. **Context-Aware Links**: Service areas only show when relevant
2. **Limited Quantity**: Max 12 suburbs per section (configurable)
3. **Semantic HTML**: Uses `<nav>` with proper link relationships
4. **Smart Prioritization**: Priority suburbs appear first
5. **Natural Placement**: Integrated at page end, not cluttering content

### Implementation

```typescript
import { ServiceAreasNearYou, ServiceSpecificAreas } from "@/components/seo/ServiceAreasNearYou";

// On service pages
<ServiceAreasNearYou limit={12} />

// On service + suburb combo pages
<ServiceSpecificAreas
  service="Gas Ducted Heating"
  currentArea="Clayton South"
  limit={8}
/>
```

---

## 7. IMAGE SEO OPTIMIZATION

### Using SEOImage Component

```typescript
import { SEOImage, SEOHeroImage } from "@/components/seo/SEOImage";

// Hero image (above-the-fold)
<SEOHeroImage
  src="/images/gas-heater-service.jpg"
  alt="Professional gas heater installation"
  keywords={["gas heater", "Melbourne", "installation"]}
  width={1200}
  height={600}
/>

// Regular images
<SEOImage
  src="/images/split-system-repair.jpg"
  alt="Split system repair service"
  keywords={["split system", "repair", "Melbourne"]}
  width={800}
  height={600}
/>

// Thumbnails
<SEOThumbnailImage
  src="/images/brand-logo.jpg"
  alt="Daikin air conditioning brand"
  keywords={["Daikin", "air conditioning"]}
  width={300}
  height={300}
/>
```

### Key SEO Features

- **Keyword-Rich Alt Text**: Automatically includes keywords
- **Lazy Loading**: Off-screen images load on-demand
- **Priority Loading**: Above-the-fold images load first (LCP optimization)
- **Responsive Sizing**: Adapts to device size
- **Quality Optimization**: Adjusted per image type (85 for hero, 70 for thumbnails)

---

## 8. PRIORITY KEYWORDS TARGET

### Primary Keywords (High Intent)

- **Gas Heater Repair Melbourne** → /gas-ducted-heating + subdynamics
- **Split System Heater Repair Melbourne** → /split-system-air-conditioning
- **Hydronic Repair Melbourne** → /hydronic-heating

### Long-Tail Keywords (Local + Service Specific)

- "Gas heater repair [Suburb]"
- "24/7 heating emergency [Suburb]"
- "[Brand] heating service Melbourne"

---

## 9. CTA (CALL TO ACTION) STRATEGY

### Implement Across Pages

```typescript
// Contact CTA
<a href="tel:0405133761" className="thm-btn">
  Call Now: 0405 133 761
</a>

// Form CTA
<button onClick={() => setShowQuoteForm(true)} className="thm-btn">
  Get Free Quote
</button>

// Service CTA
<Link href="/contact" className="thm-btn">
  Book Emergency Repair
</Link>
```

---

## 10. IMPLEMENTATION CHECKLIST

- [x] Root layout includes LocalBusiness JSON-LD
- [ ] All service pages use generateServiceMetadata()
- [ ] Dynamic suburb pages with generateStaticParams()
- [ ] Canonical URLs on all pages
- [ ] SEOBreadcrumbs on multi-level pages
- [ ] FAQs with JSON-LD schema
- [ ] SEOImage components for all key images
- [ ] ServiceAreasNearYou on relevant pages
- [ ] CTAs on every page with phone numbers
- [ ] Mobile optimization verified
- [ ] Performance tested (LCP < 2.5s)
- [ ] Robots.txt and sitemap.xml configured
- [ ] Google Search Console verified
- [ ] Google My Business optimized

---

## 11. PERFORMANCE METRICS TO MONITOR

- **Core Web Vitals**: LCP, FID, CLS
- **Search Rankings**: Target keywords position
- **CTR**: Click-through rate from SERP
- **Conversion**: Quote requests & phone calls
- **Backlinks**: Quality domain authority links

---

## 12. FUTURE ENHANCEMENTS

1. Dynamic suburb/brand matrix pages (4+ services × 40+ suburbs)
2. Before/after image galleries with schema
3. Customer testimonial schema
4. Video SEO with structured data
5. Local review aggregation
6. Advanced internal linking via graph visualization
