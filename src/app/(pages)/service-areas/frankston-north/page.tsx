import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Frankston North | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Frankston North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service frankston north, gas ducted heating frankston north, hydronic heating frankston north, split system frankston north, emergency heating repair frankston north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/frankston-north",
  },
  openGraph: {
    title: "Heater Service Frankston North | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Frankston North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/frankston-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Frankston North" suburbSlug="frankston-north" />;
}
