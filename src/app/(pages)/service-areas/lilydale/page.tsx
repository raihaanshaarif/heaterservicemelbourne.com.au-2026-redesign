import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Lilydale | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Lilydale, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service lilydale, gas ducted heating lilydale, hydronic heating lilydale, split system lilydale, emergency heating repair lilydale",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/lilydale",
  },
  openGraph: {
    title: "Heater Service Lilydale | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Lilydale, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/lilydale",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Lilydale" suburbSlug="lilydale" />;
}
