import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Pascoe Vale | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Pascoe Vale, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service pascoe vale, gas ducted heating pascoe vale, hydronic heating pascoe vale, split system pascoe vale, emergency heating repair pascoe vale",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/pascoe-vale",
  },
  openGraph: {
    title: "Heater Service Pascoe Vale | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Pascoe Vale, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/pascoe-vale",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Pascoe Vale" suburbSlug="pascoe-vale" />;
}
