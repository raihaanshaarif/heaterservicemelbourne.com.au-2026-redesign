import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Seaford | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Seaford, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service seaford, gas ducted heating seaford, hydronic heating seaford, split system seaford, emergency heating repair seaford",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/seaford",
  },
  openGraph: {
    title: "Heater Service Seaford | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Seaford, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/seaford",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Seaford" suburbSlug="seaford" />;
}
