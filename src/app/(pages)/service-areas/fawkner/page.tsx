import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Fawkner | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Fawkner, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service fawkner, gas ducted heating fawkner, hydronic heating fawkner, split system fawkner, emergency heating repair fawkner",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/fawkner",
  },
  openGraph: {
    title: "Heater Service Fawkner | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Fawkner, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/fawkner",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Fawkner" suburbSlug="fawkner" />;
}
