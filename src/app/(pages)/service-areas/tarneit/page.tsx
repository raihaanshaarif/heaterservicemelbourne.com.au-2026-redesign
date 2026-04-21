import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Tarneit | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Tarneit, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service tarneit, gas ducted heating tarneit, hydronic heating tarneit, split system tarneit, emergency heating repair tarneit",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/tarneit",
  },
  openGraph: {
    title: "Heater Service Tarneit | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Tarneit, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/tarneit",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Tarneit" suburbSlug="tarneit" />;
}
