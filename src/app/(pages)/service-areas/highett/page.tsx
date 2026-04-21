import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Highett | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Highett, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service highett, gas ducted heating highett, hydronic heating highett, split system highett, emergency heating repair highett",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/highett",
  },
  openGraph: {
    title: "Heater Service Highett | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Highett, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/highett",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Highett" suburbSlug="highett" />;
}
