import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Truemans | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Truemans, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service truemans, gas ducted heating truemans, hydronic heating truemans, split system truemans, emergency heating repair truemans",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/truemans",
  },
  openGraph: {
    title: "Heater Service Truemans | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Truemans, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/truemans",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Truemans" suburbSlug="truemans" />;
}
