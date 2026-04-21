import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Burwood 3125 | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Burwood 3125, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service burwood 3125, gas ducted heating burwood 3125, hydronic heating burwood 3125, split system burwood 3125, emergency heating repair burwood 3125",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/burwood-3125",
  },
  openGraph: {
    title: "Heater Service Burwood 3125 | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Burwood 3125, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/burwood-3125",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Burwood 3125" suburbSlug="burwood-3125" />;
}
