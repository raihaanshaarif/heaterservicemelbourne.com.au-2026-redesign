import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Maroondah | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Maroondah, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service maroondah, gas ducted heating maroondah, hydronic heating maroondah, split system maroondah, emergency heating repair maroondah",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/maroondah",
  },
  openGraph: {
    title: "Heater Service Maroondah | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Maroondah, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/maroondah",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Maroondah" suburbSlug="maroondah" />;
}
