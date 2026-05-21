import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Rosanna",
  description:
    "Professional heating services in Rosanna, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service rosanna, gas ducted heating rosanna, hydronic heating rosanna, split system rosanna, emergency heating repair rosanna",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/rosanna",
  },
  openGraph: {
    title: "Heater Service Rosanna",
    description:
      "Professional heating services in Rosanna, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/rosanna",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Rosanna" suburbSlug="rosanna" />;
}
