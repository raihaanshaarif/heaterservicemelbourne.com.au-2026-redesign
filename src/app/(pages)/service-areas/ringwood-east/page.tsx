import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Ringwood East | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Ringwood East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service ringwood east, gas ducted heating ringwood east, hydronic heating ringwood east, split system ringwood east, emergency heating repair ringwood east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/ringwood-east",
  },
  openGraph: {
    title: "Heater Service Ringwood East | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Ringwood East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/ringwood-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Ringwood East" suburbSlug="ringwood-east" />;
}
