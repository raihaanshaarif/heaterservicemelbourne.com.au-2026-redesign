import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Attwood | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Attwood, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service attwood, gas ducted heating attwood, hydronic heating attwood, split system attwood, emergency heating repair attwood",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/attwood",
  },
  openGraph: {
    title: "Heater Service Attwood | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Attwood, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/attwood",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Attwood" suburbSlug="attwood" />;
}
