import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Sunshine North | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Sunshine North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service sunshine north, gas ducted heating sunshine north, hydronic heating sunshine north, split system sunshine north, emergency heating repair sunshine north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/sunshine-north",
  },
  openGraph: {
    title: "Heater Service Sunshine North | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Sunshine North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/sunshine-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Sunshine North" suburbSlug="sunshine-north" />;
}
