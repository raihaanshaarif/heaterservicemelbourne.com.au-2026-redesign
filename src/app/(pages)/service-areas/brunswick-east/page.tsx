import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Brunswick East",
  description:
    "Professional heating services in Brunswick East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service brunswick east, gas ducted heating brunswick east, hydronic heating brunswick east, split system brunswick east, emergency heating repair brunswick east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/brunswick-east",
  },
  openGraph: {
    title: "Heater Service Brunswick East",
    description:
      "Professional heating services in Brunswick East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/brunswick-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Brunswick East" suburbSlug="brunswick-east" />;
}
