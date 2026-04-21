import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Pakenham South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Pakenham South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service pakenham south, gas ducted heating pakenham south, hydronic heating pakenham south, split system pakenham south, emergency heating repair pakenham south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/pakenham-south",
  },
  openGraph: {
    title: "Heater Service Pakenham South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Pakenham South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/pakenham-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Pakenham South" suburbSlug="pakenham-south" />;
}
