import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Springvale | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Springvale, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service springvale, gas ducted heating springvale, hydronic heating springvale, split system springvale, emergency heating repair springvale",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/springvale",
  },
  openGraph: {
    title: "Heater Service Springvale | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Springvale, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/springvale",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Springvale" suburbSlug="springvale" />;
}
