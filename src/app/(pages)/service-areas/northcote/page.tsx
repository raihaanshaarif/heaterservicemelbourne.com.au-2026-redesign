import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Northcote | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Northcote, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service northcote, gas ducted heating northcote, hydronic heating northcote, split system northcote, emergency heating repair northcote",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/northcote",
  },
  openGraph: {
    title: "Heater Service Northcote | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Northcote, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/northcote",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Northcote" suburbSlug="northcote" />;
}
