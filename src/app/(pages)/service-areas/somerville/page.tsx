import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Somerville | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Somerville, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service somerville, gas ducted heating somerville, hydronic heating somerville, split system somerville, emergency heating repair somerville",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/somerville",
  },
  openGraph: {
    title: "Heater Service Somerville | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Somerville, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/somerville",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Somerville" suburbSlug="somerville" />;
}
