import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Clyde | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Clyde, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service clyde, gas ducted heating clyde, hydronic heating clyde, split system clyde, emergency heating repair clyde",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/clyde",
  },
  openGraph: {
    title: "Heater Service Clyde | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Clyde, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/clyde",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Clyde" suburbSlug="clyde" />;
}
