import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Bentleigh | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Bentleigh, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service bentleigh, gas ducted heating bentleigh, hydronic heating bentleigh, split system bentleigh, emergency heating repair bentleigh",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/bentleigh",
  },
  openGraph: {
    title: "Heater Service Bentleigh | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Bentleigh, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/bentleigh",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Bentleigh" suburbSlug="bentleigh" />;
}
