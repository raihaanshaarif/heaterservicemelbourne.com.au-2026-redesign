import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Melton | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Melton, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service melton, gas ducted heating melton, hydronic heating melton, split system melton, emergency heating repair melton",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/melton",
  },
  openGraph: {
    title: "Heater Service Melton | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Melton, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/melton",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Melton" suburbSlug="melton" />;
}
