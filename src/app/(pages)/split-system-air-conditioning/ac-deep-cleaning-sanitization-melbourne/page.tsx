import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "AC Deep Cleaning & Sanitization Melbourne | Split System Clean",
  description:
    "Professional split system AC deep cleaning and sanitization in Melbourne. Improve air quality, restore efficiency. All brands. Call 0405 133 761.",
  keywords:
    "AC deep cleaning melbourne, split system cleaning melbourne, air conditioner sanitization, ac mould removal melbourne, split system service clean",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/ac-deep-cleaning-sanitization-melbourne",
  },
  openGraph: {
    title: "AC Deep Cleaning & Sanitization Melbourne | Split System Clean",
    description:
      "Professional split system AC deep cleaning and sanitization in Melbourne. Improve air quality, restore efficiency. All brands. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/ac-deep-cleaning-sanitization-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
