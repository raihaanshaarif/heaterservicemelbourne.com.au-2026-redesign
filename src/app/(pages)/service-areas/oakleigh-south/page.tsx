import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Oakleigh South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Oakleigh South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service oakleigh south, gas ducted heating oakleigh south, hydronic heating oakleigh south, split system oakleigh south, emergency heating repair oakleigh south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/oakleigh-south",
  },
  openGraph: {
    title: "Heater Service Oakleigh South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Oakleigh South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/oakleigh-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Oakleigh South" suburbSlug="oakleigh-south" />;
}
