import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Beaconsfield | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Beaconsfield, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service beaconsfield, gas ducted heating beaconsfield, hydronic heating beaconsfield, split system beaconsfield, emergency heating repair beaconsfield",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/beaconsfield",
  },
  openGraph: {
    title: "Heater Service Beaconsfield | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Beaconsfield, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/beaconsfield",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Beaconsfield" suburbSlug="beaconsfield" />;
}
