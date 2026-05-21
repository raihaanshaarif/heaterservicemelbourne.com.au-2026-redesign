import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Croydon North",
  description:
    "Professional heating services in Croydon North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service croydon north, gas ducted heating croydon north, hydronic heating croydon north, split system croydon north, emergency heating repair croydon north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/croydon-north",
  },
  openGraph: {
    title: "Heater Service Croydon North",
    description:
      "Professional heating services in Croydon North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/croydon-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Croydon North" suburbSlug="croydon-north" />;
}
