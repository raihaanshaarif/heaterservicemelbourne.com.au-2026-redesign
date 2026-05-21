import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Aspendale Gardens",
  description:
    "Professional heating services in Aspendale Gardens, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service aspendale gardens, gas ducted heating aspendale gardens, hydronic heating aspendale gardens, split system aspendale gardens, emergency heating repair aspendale gardens",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/aspendale-gardens",
  },
  openGraph: {
    title: "Heater Service Aspendale Gardens",
    description:
      "Professional heating services in Aspendale Gardens, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/aspendale-gardens",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Aspendale Gardens" suburbSlug="aspendale-gardens" />;
}
