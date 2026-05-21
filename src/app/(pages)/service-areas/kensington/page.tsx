import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Kensington",
  description:
    "Professional heating services in Kensington, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service kensington, gas ducted heating kensington, hydronic heating kensington, split system kensington, emergency heating repair kensington",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/kensington",
  },
  openGraph: {
    title: "Heater Service Kensington",
    description:
      "Professional heating services in Kensington, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/kensington",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Kensington" suburbSlug="kensington" />;
}
