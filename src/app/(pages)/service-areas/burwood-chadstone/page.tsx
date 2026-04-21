import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Burwood Chadstone | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Burwood Chadstone, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service burwood chadstone, gas ducted heating burwood chadstone, hydronic heating burwood chadstone, split system burwood chadstone, emergency heating repair burwood chadstone",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/burwood-chadstone",
  },
  openGraph: {
    title: "Heater Service Burwood Chadstone | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Burwood Chadstone, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/burwood-chadstone",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Burwood Chadstone" suburbSlug="burwood-chadstone" />;
}
