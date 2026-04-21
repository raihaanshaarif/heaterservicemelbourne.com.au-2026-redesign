import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Chelsea | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Chelsea, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service chelsea, gas ducted heating chelsea, hydronic heating chelsea, split system chelsea, emergency heating repair chelsea",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/chelsea",
  },
  openGraph: {
    title: "Heater Service Chelsea | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Chelsea, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/chelsea",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Chelsea" suburbSlug="chelsea" />;
}
