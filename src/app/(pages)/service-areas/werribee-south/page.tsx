import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Werribee South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Werribee South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service werribee south, gas ducted heating werribee south, hydronic heating werribee south, split system werribee south, emergency heating repair werribee south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/werribee-south",
  },
  openGraph: {
    title: "Heater Service Werribee South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Werribee South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/werribee-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Werribee South" suburbSlug="werribee-south" />;
}
