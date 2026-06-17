import type { Metadata } from "next";
import SplitSystemClient from "./SplitSystemClient";

export const metadata: Metadata = {
  title: "Split System Air Conditioning Repair & Service Melbourne | Installers",
  description:
    "Expert split system installation, repair and servicing across Melbourne. Air conditioning specialists with fast response. Split system installers melbourne, split system air conditioning repair. Free quotes, same-day service. Call 0405 133 761.",
  keywords:
    "split system repair, split system air conditioning repair, split system service, split system service melbourne, split system melbourne, split system installation melbourne, split system installers melbourne, air conditioning service melbourne, air conditioning repair, air conditioning split system melbourne, reverse cycle aircon melbourne, split ac repair, split air conditioning service",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/split-system-air-conditioning",
  },
  openGraph: {
    title: "Split System Air Conditioning Melbourne",
    description:
      "Expert split system installation, repair and servicing across Melbourne. All major brands, free quotes, same-day service.",
    url: "https://heaterservicemelbourne.com.au/split-system-air-conditioning",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    images: [
      {
        url: "https://heaterservicemelbourne.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heater Service Melbourne | Professional Heating & Hydronic Services",
      },
    ],
    type: "website",
  },
};

export default function SplitSystemPage() {
  return <SplitSystemClient />;
}
