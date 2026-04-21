import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Bentleigh East | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Bentleigh East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service bentleigh east, gas ducted heating bentleigh east, hydronic heating bentleigh east, split system bentleigh east, emergency heating repair bentleigh east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/bentleigh-east",
  },
  openGraph: {
    title: "Heater Service Bentleigh East | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Bentleigh East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/bentleigh-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Bentleigh East" suburbSlug="bentleigh-east" />;
}
