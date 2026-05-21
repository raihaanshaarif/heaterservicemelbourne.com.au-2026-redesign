import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Airport West",
  description:
    "Professional heating services in Airport West, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service airport west, gas ducted heating airport west, hydronic heating airport west, split system airport west, emergency heating repair airport west",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/airport-west",
  },
  openGraph: {
    title: "Heater Service Airport West",
    description:
      "Professional heating services in Airport West, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/airport-west",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Airport West" suburbSlug="airport-west" />;
}
