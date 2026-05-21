import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Brunswick",
  description:
    "Professional heating services in Brunswick, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service brunswick, gas ducted heating brunswick, hydronic heating brunswick, split system brunswick, emergency heating repair brunswick",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/brunswick",
  },
  openGraph: {
    title: "Heater Service Brunswick",
    description:
      "Professional heating services in Brunswick, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/brunswick",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Brunswick" suburbSlug="brunswick" />;
}
