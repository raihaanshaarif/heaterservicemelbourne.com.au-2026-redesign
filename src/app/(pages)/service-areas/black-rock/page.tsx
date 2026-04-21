import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Black Rock | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Black Rock, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service black rock, gas ducted heating black rock, hydronic heating black rock, split system black rock, emergency heating repair black rock",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/black-rock",
  },
  openGraph: {
    title: "Heater Service Black Rock | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Black Rock, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/black-rock",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Black Rock" suburbSlug="black-rock" />;
}
