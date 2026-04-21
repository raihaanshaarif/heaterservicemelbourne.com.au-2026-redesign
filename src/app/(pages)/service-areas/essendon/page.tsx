import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Essendon | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Essendon, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service essendon, gas ducted heating essendon, hydronic heating essendon, split system essendon, emergency heating repair essendon",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/essendon",
  },
  openGraph: {
    title: "Heater Service Essendon | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Essendon, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/essendon",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Essendon" suburbSlug="essendon" />;
}
