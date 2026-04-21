import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Melbourne South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Melbourne South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service melbourne south, gas ducted heating melbourne south, hydronic heating melbourne south, split system melbourne south, emergency heating repair melbourne south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/melbourne-south",
  },
  openGraph: {
    title: "Heater Service Melbourne South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Melbourne South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/melbourne-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Melbourne South" suburbSlug="melbourne-south" />;
}
