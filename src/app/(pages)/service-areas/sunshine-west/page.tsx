import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Sunshine West | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Sunshine West, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service sunshine west, gas ducted heating sunshine west, hydronic heating sunshine west, split system sunshine west, emergency heating repair sunshine west",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/sunshine-west",
  },
  openGraph: {
    title: "Heater Service Sunshine West | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Sunshine West, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/sunshine-west",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Sunshine West" suburbSlug="sunshine-west" />;
}
