// Quick Integration Guide: Update Root Layout for SEO

// ============================================
// BEFORE: Current root layout
// ============================================
/\*
import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "yet-another-react-lightbox/styles.css";
import "react-circular-progressbar/dist/styles.css";
import "swiper/swiper-bundle.css";
import "@/assets/css/combined.css";
import ContextProvider from "@/components/context/ContextProvider";
import CustomLayout from "@/components/layout/CustomLayout";

export const metadata: Metadata = {
title: "Heater Service Melbourne | Professional Heating & Hydronic Services",
description:
"Expert heating services in Melbourne. Specializing in Hydronic Heating, Gas Ducted Heating, and Split Systems in Clayton South. 24/7 Emergency heating repairs.",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en" data-scroll-behavior="smooth">
<body className={`${poppins.variable} ${rubik.variable}`}>
<ContextProvider>
<CustomLayout>{children}</CustomLayout>
</ContextProvider>
</body>
</html>
);
}
\*/

// ============================================
// AFTER: Updated with SEO optimization
// ============================================

import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import Script from "next/script";
import "yet-another-react-lightbox/styles.css";
import "react-circular-progressbar/dist/styles.css";
import "swiper/swiper-bundle.css";
import "@/assets/css/combined.css";
import ContextProvider from "@/components/context/ContextProvider";
import CustomLayout from "@/components/layout/CustomLayout";

// NEW: Import SEO utilities
import { generateLocalBusinessSchema } from "@/utils/seo/jsonLd";
import { JSONLDScript } from "@/components/seo/JSONLDScript";

const poppins = Poppins({
variable: "--font-poppins",
subsets: ["latin"],
weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const rubik = Rubik({
variable: "--font-rubik",
subsets: ["latin"],
weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// NEW: Enhanced metadata with SEO optimizations
export const metadata: Metadata = {
title: "Heating Service Melbourne | Gas, Hydronic & Split System Repairs",
description:
"Expert heating services in Melbourne. Same-day gas ducted, hydronic, and split system repairs. 24/7 emergency support. Licensed & insured. Call 0405 133 761",
keywords: [
"heating repair Melbourne",
"gas heater repair",
"split system repair",
"hydronic heating",
"HVAC services Melbourne",
"heating emergency Melbourne",
],
canonical: "https://heaterservicemelbourne.com.au",
alternates: {
canonical: "https://heaterservicemelbourne.com.au",
},
openGraph: {
type: "website",
url: "https://heaterservicemelbourne.com.au",
title: "Heating Service Melbourne | Professional Repairs & Installation",
description:
"Expert heating services with same-day repairs and 24/7 emergency support",
images: [
{
url: "https://heaterservicemelbourne.com.au/assets/images/resources/logo-3.png",
width: 1200,
height: 630,
alt: "Heating Service Melbourne",
},
],
siteName: "Heating Service Melbourne",
},
twitter: {
card: "summary_large_image",
title: "Heating Service Melbourne | Professional Repairs & Installation",
description: "Expert heating services with 24/7 emergency support",
images: [
"https://heaterservicemelbourne.com.au/assets/images/resources/logo-3.png",
],
},
robots: {
index: true,
follow: true,
"max-snippet": -1,
"max-image-preview": "large",
"max-video-preview": -1,
},
viewport: {
width: "device-width",
initialScale: 1,
maximumScale: 5,
},
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en" data-scroll-behavior="smooth">
<head>
{/_ NEW: LocalBusiness JSON-LD Schema _/}
<JSONLDScript
          schema={generateLocalBusinessSchema()}
          id="local-business-schema"
        />

        {/* NEW: Google Analytics (replace with your ID) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="lazyOnload"
        />
        <Script
          id="ga-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* NEW: Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <ContextProvider>
          <CustomLayout>{children}</CustomLayout>
        </ContextProvider>
      </body>
    </html>

);
}

// ============================================
// IMPLEMENTATION NOTES
// ============================================
/\*

CHANGES MADE:

1. IMPORTS
   ✅ Added JSON-LD schema generator
   ✅ Added JSONLDScript component
   ✅ Added Script for Analytics

2. METADATA
   ✅ Enhanced title with keywords
   ✅ Improved description with CTA
   ✅ Added keywords array
   ✅ Added canonical URL
   ✅ Enhanced OpenGraph for social sharing
   ✅ Added Twitter card
   ✅ Added robots directives
   ✅ Added viewport config

3. JSON-LD
   ✅ LocalBusiness schema in head
   ✅ Service information
   ✅ Area served
   ✅ Contact details
   ✅ Hours of operation

4. PERFORMANCE
   ✅ Google Analytics lazy loaded
   ✅ Preconnect to Google Fonts
   ✅ Optimized resource loading

NEXT STEPS:

1. Replace GA_MEASUREMENT_ID with your actual Google Analytics ID
2. Verify all phone numbers are correct (0405 133 761)
3. Update email if different (heating.melbourne@gmail.com)
4. Test schema at https://schema.org/validator
5. Submit to Google Search Console
6. Monitor Search Console for crawl errors

TESTING COMMANDS:

npm run build # Check for build errors
npm run dev # Test locally

# Visit http://localhost:3000

# Check Network tab to ensure JSON-LD loads

# Use Chrome DevTools to verify structured data

\*/
