import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Lalor | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Lalor, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service lalor, gas ducted heating lalor, hydronic heating lalor, split system lalor, emergency heating repair lalor",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/lalor",
  },
  openGraph: {
    title: "Heater Service Lalor | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Lalor, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/lalor",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Lalor" suburbSlug="lalor" />;
}
