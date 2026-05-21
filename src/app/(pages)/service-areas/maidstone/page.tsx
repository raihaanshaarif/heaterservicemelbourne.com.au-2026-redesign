import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Maidstone",
  description:
    "Professional heating services in Maidstone, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service maidstone, gas ducted heating maidstone, hydronic heating maidstone, split system maidstone, emergency heating repair maidstone",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/maidstone",
  },
  openGraph: {
    title: "Heater Service Maidstone",
    description:
      "Professional heating services in Maidstone, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/maidstone",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Maidstone" suburbSlug="maidstone" />;
}
