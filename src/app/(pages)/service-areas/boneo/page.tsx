import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Boneo | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Boneo, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service boneo, gas ducted heating boneo, hydronic heating boneo, split system boneo, emergency heating repair boneo",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/boneo",
  },
  openGraph: {
    title: "Heater Service Boneo | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Boneo, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/boneo",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Boneo" suburbSlug="boneo" />;
}
