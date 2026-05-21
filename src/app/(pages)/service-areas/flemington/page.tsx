import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Flemington",
  description:
    "Professional heating services in Flemington, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service flemington, gas ducted heating flemington, hydronic heating flemington, split system flemington, emergency heating repair flemington",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/flemington",
  },
  openGraph: {
    title: "Heater Service Flemington",
    description:
      "Professional heating services in Flemington, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/flemington",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Flemington" suburbSlug="flemington" />;
}
