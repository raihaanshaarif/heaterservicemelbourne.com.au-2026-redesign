import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Springvale South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Springvale South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service springvale south, gas ducted heating springvale south, hydronic heating springvale south, split system springvale south, emergency heating repair springvale south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/springvale-south",
  },
  openGraph: {
    title: "Heater Service Springvale South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Springvale South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/springvale-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Springvale South" suburbSlug="springvale-south" />;
}
