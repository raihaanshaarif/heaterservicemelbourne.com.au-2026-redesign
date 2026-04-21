import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Port Melbourne | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Port Melbourne, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service port melbourne, gas ducted heating port melbourne, hydronic heating port melbourne, split system port melbourne, emergency heating repair port melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/port-melbourne",
  },
  openGraph: {
    title: "Heater Service Port Melbourne | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Port Melbourne, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/port-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Port Melbourne" suburbSlug="port-melbourne" />;
}
