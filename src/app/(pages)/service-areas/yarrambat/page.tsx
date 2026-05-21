import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Yarrambat",
  description:
    "Professional heating services in Yarrambat, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service yarrambat, gas ducted heating yarrambat, hydronic heating yarrambat, split system yarrambat, emergency heating repair yarrambat",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/yarrambat",
  },
  openGraph: {
    title: "Heater Service Yarrambat",
    description:
      "Professional heating services in Yarrambat, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/yarrambat",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Yarrambat" suburbSlug="yarrambat" />;
}
