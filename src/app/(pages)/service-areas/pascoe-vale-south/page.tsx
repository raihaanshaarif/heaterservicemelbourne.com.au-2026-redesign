import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Pascoe Vale South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Pascoe Vale South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service pascoe vale south, gas ducted heating pascoe vale south, hydronic heating pascoe vale south, split system pascoe vale south, emergency heating repair pascoe vale south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/pascoe-vale-south",
  },
  openGraph: {
    title: "Heater Service Pascoe Vale South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Pascoe Vale South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/pascoe-vale-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Pascoe Vale South" suburbSlug="pascoe-vale-south" />;
}
