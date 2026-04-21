import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service South Melbourne | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in South Melbourne, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service south melbourne, gas ducted heating south melbourne, hydronic heating south melbourne, split system south melbourne, emergency heating repair south melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/south-melbourne",
  },
  openGraph: {
    title: "Heater Service South Melbourne | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in South Melbourne, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/south-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="South Melbourne" suburbSlug="south-melbourne" />;
}
