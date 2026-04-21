import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Oakleigh | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Oakleigh, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service oakleigh, gas ducted heating oakleigh, hydronic heating oakleigh, split system oakleigh, emergency heating repair oakleigh",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/oakleigh",
  },
  openGraph: {
    title: "Heater Service Oakleigh | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Oakleigh, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/oakleigh",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Oakleigh" suburbSlug="oakleigh" />;
}
