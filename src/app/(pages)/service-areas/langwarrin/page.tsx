import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Langwarrin | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Langwarrin, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service langwarrin, gas ducted heating langwarrin, hydronic heating langwarrin, split system langwarrin, emergency heating repair langwarrin",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/langwarrin",
  },
  openGraph: {
    title: "Heater Service Langwarrin | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Langwarrin, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/langwarrin",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Langwarrin" suburbSlug="langwarrin" />;
}
