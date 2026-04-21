import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Pakenham Upper | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Pakenham Upper, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service pakenham upper, gas ducted heating pakenham upper, hydronic heating pakenham upper, split system pakenham upper, emergency heating repair pakenham upper",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/pakenham-upper",
  },
  openGraph: {
    title: "Heater Service Pakenham Upper | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Pakenham Upper, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/pakenham-upper",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Pakenham Upper" suburbSlug="pakenham-upper" />;
}
