import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Hallam | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Hallam, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service hallam, gas ducted heating hallam, hydronic heating hallam, split system hallam, emergency heating repair hallam",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/hallam",
  },
  openGraph: {
    title: "Heater Service Hallam | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Hallam, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/hallam",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Hallam" suburbSlug="hallam" />;
}
