import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Croydon South",
  description:
    "Professional heating services in Croydon South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service croydon south, gas ducted heating croydon south, hydronic heating croydon south, split system croydon south, emergency heating repair croydon south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/croydon-south",
  },
  openGraph: {
    title: "Heater Service Croydon South",
    description:
      "Professional heating services in Croydon South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/croydon-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Croydon South" suburbSlug="croydon-south" />;
}
