import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Rivervale | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Rivervale, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service rivervale, gas ducted heating rivervale, hydronic heating rivervale, split system rivervale, emergency heating repair rivervale",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/rivervale",
  },
  openGraph: {
    title: "Heater Service Rivervale | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Rivervale, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/rivervale",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Rivervale" suburbSlug="rivervale" />;
}
