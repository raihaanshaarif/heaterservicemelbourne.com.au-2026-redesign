import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Botanic Ridge | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Botanic Ridge, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service botanic ridge, gas ducted heating botanic ridge, hydronic heating botanic ridge, split system botanic ridge, emergency heating repair botanic ridge",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/botanic-ridge",
  },
  openGraph: {
    title: "Heater Service Botanic Ridge | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Botanic Ridge, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/botanic-ridge",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Botanic Ridge" suburbSlug="botanic-ridge" />;
}
