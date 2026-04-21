import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Brighton East | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Brighton East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service brighton east, gas ducted heating brighton east, hydronic heating brighton east, split system brighton east, emergency heating repair brighton east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/brighton-east",
  },
  openGraph: {
    title: "Heater Service Brighton East | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Brighton East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/brighton-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Brighton East" suburbSlug="brighton-east" />;
}
