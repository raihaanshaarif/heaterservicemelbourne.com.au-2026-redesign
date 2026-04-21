import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Broadmeadows | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Broadmeadows, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service broadmeadows, gas ducted heating broadmeadows, hydronic heating broadmeadows, split system broadmeadows, emergency heating repair broadmeadows",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/broadmeadows",
  },
  openGraph: {
    title: "Heater Service Broadmeadows | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Broadmeadows, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/broadmeadows",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Broadmeadows" suburbSlug="broadmeadows" />;
}
