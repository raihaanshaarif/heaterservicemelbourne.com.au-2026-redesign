import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Frankston South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Frankston South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service frankston south, gas ducted heating frankston south, hydronic heating frankston south, split system frankston south, emergency heating repair frankston south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/frankston-south",
  },
  openGraph: {
    title: "Heater Service Frankston South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Frankston South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/frankston-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Frankston South" suburbSlug="frankston-south" />;
}
