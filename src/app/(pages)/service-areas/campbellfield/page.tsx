import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Campbellfield",
  description:
    "Professional heating services in Campbellfield, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service campbellfield, gas ducted heating campbellfield, hydronic heating campbellfield, split system campbellfield, emergency heating repair campbellfield",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/campbellfield",
  },
  openGraph: {
    title: "Heater Service Campbellfield",
    description:
      "Professional heating services in Campbellfield, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/campbellfield",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Campbellfield" suburbSlug="campbellfield" />;
}
