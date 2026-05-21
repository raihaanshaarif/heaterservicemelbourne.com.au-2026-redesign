import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Croydon Hills",
  description:
    "Professional heating services in Croydon Hills, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service croydon hills, gas ducted heating croydon hills, hydronic heating croydon hills, split system croydon hills, emergency heating repair croydon hills",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/croydon-hills",
  },
  openGraph: {
    title: "Heater Service Croydon Hills",
    description:
      "Professional heating services in Croydon Hills, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/croydon-hills",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Croydon Hills" suburbSlug="croydon-hills" />;
}
