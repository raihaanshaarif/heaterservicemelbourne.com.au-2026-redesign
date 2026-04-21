import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Point Cook | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Point Cook, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service point cook, gas ducted heating point cook, hydronic heating point cook, split system point cook, emergency heating repair point cook",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/point-cook",
  },
  openGraph: {
    title: "Heater Service Point Cook | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Point Cook, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/point-cook",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Point Cook" suburbSlug="point-cook" />;
}
