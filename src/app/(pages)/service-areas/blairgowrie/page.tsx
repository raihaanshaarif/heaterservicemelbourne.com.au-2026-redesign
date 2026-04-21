import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Blairgowrie | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Blairgowrie, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service blairgowrie, gas ducted heating blairgowrie, hydronic heating blairgowrie, split system blairgowrie, emergency heating repair blairgowrie",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/blairgowrie",
  },
  openGraph: {
    title: "Heater Service Blairgowrie | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Blairgowrie, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/blairgowrie",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Blairgowrie" suburbSlug="blairgowrie" />;
}
