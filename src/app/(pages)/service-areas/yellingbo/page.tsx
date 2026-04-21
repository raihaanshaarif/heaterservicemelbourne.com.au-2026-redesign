import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Yellingbo | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Yellingbo, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service yellingbo, gas ducted heating yellingbo, hydronic heating yellingbo, split system yellingbo, emergency heating repair yellingbo",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/yellingbo",
  },
  openGraph: {
    title: "Heater Service Yellingbo | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Yellingbo, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/yellingbo",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Yellingbo" suburbSlug="yellingbo" />;
}
