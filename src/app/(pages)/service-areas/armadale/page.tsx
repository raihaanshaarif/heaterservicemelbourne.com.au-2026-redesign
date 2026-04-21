import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Armadale | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Armadale, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service armadale, gas ducted heating armadale, hydronic heating armadale, split system armadale, emergency heating repair armadale",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/armadale",
  },
  openGraph: {
    title: "Heater Service Armadale | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Armadale, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/armadale",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Armadale" suburbSlug="armadale" />;
}
