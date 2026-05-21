import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Williamstown",
  description:
    "Professional heating services in Williamstown, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service williamstown, gas ducted heating williamstown, hydronic heating williamstown, split system williamstown, emergency heating repair williamstown",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/williamstown",
  },
  openGraph: {
    title: "Heater Service Williamstown",
    description:
      "Professional heating services in Williamstown, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/williamstown",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Williamstown" suburbSlug="williamstown" />;
}
