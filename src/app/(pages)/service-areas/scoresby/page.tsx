import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Scoresby | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Scoresby, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service scoresby, gas ducted heating scoresby, hydronic heating scoresby, split system scoresby, emergency heating repair scoresby",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/scoresby",
  },
  openGraph: {
    title: "Heater Service Scoresby | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Scoresby, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/scoresby",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Scoresby" suburbSlug="scoresby" />;
}
