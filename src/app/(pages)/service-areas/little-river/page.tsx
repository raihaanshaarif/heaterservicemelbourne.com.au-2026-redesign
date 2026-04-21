import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Little River | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Little River, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service little river, gas ducted heating little river, hydronic heating little river, split system little river, emergency heating repair little river",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/little-river",
  },
  openGraph: {
    title: "Heater Service Little River | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Little River, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/little-river",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Little River" suburbSlug="little-river" />;
}
