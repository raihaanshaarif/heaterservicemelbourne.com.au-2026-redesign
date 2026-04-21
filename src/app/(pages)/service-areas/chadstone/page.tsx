import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Chadstone | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Chadstone, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service chadstone, gas ducted heating chadstone, hydronic heating chadstone, split system chadstone, emergency heating repair chadstone",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/chadstone",
  },
  openGraph: {
    title: "Heater Service Chadstone | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Chadstone, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/chadstone",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Chadstone" suburbSlug="chadstone" />;
}
