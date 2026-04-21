import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Sunshine | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Sunshine, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service sunshine, gas ducted heating sunshine, hydronic heating sunshine, split system sunshine, emergency heating repair sunshine",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/sunshine",
  },
  openGraph: {
    title: "Heater Service Sunshine | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Sunshine, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/sunshine",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Sunshine" suburbSlug="sunshine" />;
}
