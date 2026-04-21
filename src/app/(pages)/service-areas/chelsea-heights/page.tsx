import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Chelsea Heights | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Chelsea Heights, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service chelsea heights, gas ducted heating chelsea heights, hydronic heating chelsea heights, split system chelsea heights, emergency heating repair chelsea heights",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/chelsea-heights",
  },
  openGraph: {
    title: "Heater Service Chelsea Heights | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Chelsea Heights, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/chelsea-heights",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Chelsea Heights" suburbSlug="chelsea-heights" />;
}
