import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Bayswater | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Bayswater, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service bayswater, gas ducted heating bayswater, hydronic heating bayswater, split system bayswater, emergency heating repair bayswater",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/bayswater",
  },
  openGraph: {
    title: "Heater Service Bayswater | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Bayswater, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/bayswater",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Bayswater" suburbSlug="bayswater" />;
}
