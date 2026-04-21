import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Laverton | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Laverton, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service laverton, gas ducted heating laverton, hydronic heating laverton, split system laverton, emergency heating repair laverton",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/laverton",
  },
  openGraph: {
    title: "Heater Service Laverton | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Laverton, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/laverton",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Laverton" suburbSlug="laverton" />;
}
