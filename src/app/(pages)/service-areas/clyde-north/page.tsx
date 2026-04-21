import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Clyde North | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Clyde North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service clyde north, gas ducted heating clyde north, hydronic heating clyde north, split system clyde north, emergency heating repair clyde north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/clyde-north",
  },
  openGraph: {
    title: "Heater Service Clyde North | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Clyde North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/clyde-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Clyde North" suburbSlug="clyde-north" />;
}
