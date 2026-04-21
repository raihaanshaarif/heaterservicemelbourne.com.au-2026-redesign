import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Wantirna South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Wantirna South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service wantirna south, gas ducted heating wantirna south, hydronic heating wantirna south, split system wantirna south, emergency heating repair wantirna south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/wantirna-south",
  },
  openGraph: {
    title: "Heater Service Wantirna South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Wantirna South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/wantirna-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Wantirna South" suburbSlug="wantirna-south" />;
}
