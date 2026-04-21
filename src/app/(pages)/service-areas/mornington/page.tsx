import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Mornington | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Mornington, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service mornington, gas ducted heating mornington, hydronic heating mornington, split system mornington, emergency heating repair mornington",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/mornington",
  },
  openGraph: {
    title: "Heater Service Mornington | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Mornington, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/mornington",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Mornington" suburbSlug="mornington" />;
}
