import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Nunawading",
  description:
    "Professional heating services in Nunawading, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service nunawading, gas ducted heating nunawading, hydronic heating nunawading, split system nunawading, emergency heating repair nunawading",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/nunawading",
  },
  openGraph: {
    title: "Heater Service Nunawading",
    description:
      "Professional heating services in Nunawading, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/nunawading",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Nunawading" suburbSlug="nunawading" />;
}
