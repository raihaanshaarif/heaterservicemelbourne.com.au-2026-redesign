import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Melbourne East | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Melbourne East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service melbourne east, gas ducted heating melbourne east, hydronic heating melbourne east, split system melbourne east, emergency heating repair melbourne east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/melbourne-east",
  },
  openGraph: {
    title: "Heater Service Melbourne East | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Melbourne East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/melbourne-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Melbourne East" suburbSlug="melbourne-east" />;
}
