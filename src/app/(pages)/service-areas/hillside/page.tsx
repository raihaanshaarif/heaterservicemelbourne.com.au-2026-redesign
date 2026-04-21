import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Hillside | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Hillside, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service hillside, gas ducted heating hillside, hydronic heating hillside, split system hillside, emergency heating repair hillside",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/hillside",
  },
  openGraph: {
    title: "Heater Service Hillside | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Hillside, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/hillside",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Hillside" suburbSlug="hillside" />;
}
