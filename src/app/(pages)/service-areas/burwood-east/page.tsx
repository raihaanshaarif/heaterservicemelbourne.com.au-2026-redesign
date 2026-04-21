import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Burwood East | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Burwood East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service burwood east, gas ducted heating burwood east, hydronic heating burwood east, split system burwood east, emergency heating repair burwood east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/burwood-east",
  },
  openGraph: {
    title: "Heater Service Burwood East | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Burwood East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/burwood-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Burwood East" suburbSlug="burwood-east" />;
}
