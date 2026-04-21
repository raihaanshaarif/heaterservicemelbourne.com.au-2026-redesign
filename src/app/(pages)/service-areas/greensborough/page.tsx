import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Greensborough | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Greensborough, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service greensborough, gas ducted heating greensborough, hydronic heating greensborough, split system greensborough, emergency heating repair greensborough",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/greensborough",
  },
  openGraph: {
    title: "Heater Service Greensborough | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Greensborough, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/greensborough",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Greensborough" suburbSlug="greensborough" />;
}
