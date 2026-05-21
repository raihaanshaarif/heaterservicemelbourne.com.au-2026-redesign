import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Brunswick West",
  description:
    "Professional heating services in Brunswick West, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service brunswick west, gas ducted heating brunswick west, hydronic heating brunswick west, split system brunswick west, emergency heating repair brunswick west",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/brunswick-west",
  },
  openGraph: {
    title: "Heater Service Brunswick West",
    description:
      "Professional heating services in Brunswick West, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/brunswick-west",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Brunswick West" suburbSlug="brunswick-west" />;
}
