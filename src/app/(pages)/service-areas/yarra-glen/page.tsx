import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Yarra Glen | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Yarra Glen, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service yarra glen, gas ducted heating yarra glen, hydronic heating yarra glen, split system yarra glen, emergency heating repair yarra glen",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/yarra-glen",
  },
  openGraph: {
    title: "Heater Service Yarra Glen | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Yarra Glen, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/yarra-glen",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Yarra Glen" suburbSlug="yarra-glen" />;
}
