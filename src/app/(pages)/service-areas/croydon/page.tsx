import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Croydon",
  description:
    "Professional heating services in Croydon, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service croydon, gas ducted heating croydon, hydronic heating croydon, split system croydon, emergency heating repair croydon",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/croydon",
  },
  openGraph: {
    title: "Heater Service Croydon",
    description:
      "Professional heating services in Croydon, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/croydon",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Croydon" suburbSlug="croydon" />;
}
