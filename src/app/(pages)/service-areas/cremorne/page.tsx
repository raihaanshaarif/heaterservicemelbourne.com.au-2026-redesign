import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Cremorne",
  description:
    "Professional heating services in Cremorne, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service cremorne, gas ducted heating cremorne, hydronic heating cremorne, split system cremorne, emergency heating repair cremorne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/cremorne",
  },
  openGraph: {
    title: "Heater Service Cremorne",
    description:
      "Professional heating services in Cremorne, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/cremorne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Cremorne" suburbSlug="cremorne" />;
}
