import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Essendon Fields | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Essendon Fields, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service essendon fields, gas ducted heating essendon fields, hydronic heating essendon fields, split system essendon fields, emergency heating repair essendon fields",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/essendon-fields",
  },
  openGraph: {
    title: "Heater Service Essendon Fields | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Essendon Fields, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/essendon-fields",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Essendon Fields" suburbSlug="essendon-fields" />;
}
