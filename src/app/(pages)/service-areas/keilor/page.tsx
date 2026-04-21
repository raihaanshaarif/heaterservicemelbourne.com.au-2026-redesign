import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Keilor | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Keilor, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service keilor, gas ducted heating keilor, hydronic heating keilor, split system keilor, emergency heating repair keilor",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/keilor",
  },
  openGraph: {
    title: "Heater Service Keilor | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Keilor, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/keilor",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Keilor" suburbSlug="keilor" />;
}
