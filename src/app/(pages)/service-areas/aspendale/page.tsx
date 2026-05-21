import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Aspendale",
  description:
    "Professional heating services in Aspendale, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service aspendale, gas ducted heating aspendale, hydronic heating aspendale, split system aspendale, emergency heating repair aspendale",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/aspendale",
  },
  openGraph: {
    title: "Heater Service Aspendale",
    description:
      "Professional heating services in Aspendale, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/aspendale",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Aspendale" suburbSlug="aspendale" />;
}
