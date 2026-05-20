import type { Metadata, Viewport } from "next";
import { Poppins, Rubik } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "@/assets/css/combined.css";
import ContextProvider from "@/components/context/ContextProvider";
import CustomLayout from "@/components/layout/CustomLayout";
import DeferredStyles from "@/components/layout/DeferredStyles";

// Replace GTM_ID below with your actual GTM container ID (e.g. "GTM-XXXXXXX")
// Get it from: tagmanager.google.com → Admin → Container ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fd5523",
};

export const metadata: Metadata = {
  title: {
    default: "Heater Service Melbourne | Gas Ducted, Hydronic & Split Systems",
    template: "%s | Heater Service Melbourne",
  },
  description:
    "Expert heating services across Melbourne. Gas ducted heating, hydronic heating, split system air conditioning and 24/7 emergency repairs. Licensed technicians, free quotes.",
  keywords:
    "heating service melbourne, gas ducted heating melbourne, hydronic heating melbourne, split system melbourne, emergency heating repair, licensed gas fitters melbourne",
  metadataBase: new URL("https://heaterservicemelbourne.com.au"),
  openGraph: {
    title: "Heater Service Melbourne | Gas Ducted, Hydronic & Split Systems",
    description:
      "Expert heating services across Melbourne. Gas ducted, hydronic, split systems and 24/7 emergency repairs. Licensed technicians.",
    url: "https://heaterservicemelbourne.com.au",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://heaterservicemelbourne.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heater Service Melbourne | Professional Heating & Hydronic Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heater Service Melbourne | Gas Ducted, Hydronic & Split Systems",
    description:
      "Expert heating services across Melbourne. Gas ducted, hydronic, split systems and 24/7 emergency repairs.",
    images: ["https://heaterservicemelbourne.com.au/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/assets/images/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/images/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/assets/images/favicons/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/assets/images/favicons/site.webmanifest" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" data-scroll-behavior="smooth">
      <head>
        {/* Preload critical resources to reduce LCP */}
        <link rel="preload" href="/assets/css/bootstrap.min.css" as="style" />
        <link rel="preload" href="/assets/css/style.css" as="style" />
        {/* Hero image - WebP, URL matches src attribute in BannerOne.tsx for effective preload */}
        <link rel="preload" href="/assets/images/banner-one-img-1.webp" as="image" type="image/webp" />
        
        {/* Preconnect to Google fonts and analytics */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <ContextProvider>
          <DeferredStyles />
          <CustomLayout>{children}</CustomLayout>
        </ContextProvider>
      </body>
    </html>
  );
}
