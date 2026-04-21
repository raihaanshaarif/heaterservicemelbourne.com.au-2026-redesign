import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "yet-another-react-lightbox/styles.css";
import "react-circular-progressbar/dist/styles.css";
import "swiper/swiper-bundle.css";
import "@/assets/css/combined.css";
import ContextProvider from "@/components/context/ContextProvider";
import CustomLayout from "@/components/layout/CustomLayout";

// Replace GTM_ID below with your actual GTM container ID (e.g. "GTM-XXXXXXX")
// Get it from: tagmanager.google.com → Admin → Container ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

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
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au",
  },
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
        url: "/assets/images/og-image.png",
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
    images: ["/assets/images/og-image.png"],
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
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <ContextProvider>
          <CustomLayout>{children}</CustomLayout>
        </ContextProvider>
      </body>
    </html>
  );
}
