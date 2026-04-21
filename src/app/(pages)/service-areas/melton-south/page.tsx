import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Melton South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Melton South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service melton south, gas ducted heating melton south, hydronic heating melton south, split system melton south, emergency heating repair melton south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/melton-south",
  },
  openGraph: {
    title: "Heater Service Melton South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Melton South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/melton-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Melton South" suburbSlug="melton-south" />;
}
