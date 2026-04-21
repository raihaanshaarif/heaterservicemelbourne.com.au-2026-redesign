import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Tooradin | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Tooradin, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service tooradin, gas ducted heating tooradin, hydronic heating tooradin, split system tooradin, emergency heating repair tooradin",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/tooradin",
  },
  openGraph: {
    title: "Heater Service Tooradin | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Tooradin, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/tooradin",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Tooradin" suburbSlug="tooradin" />;
}
