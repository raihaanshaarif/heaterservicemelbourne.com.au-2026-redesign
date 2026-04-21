import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Hampton | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Hampton, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service hampton, gas ducted heating hampton, hydronic heating hampton, split system hampton, emergency heating repair hampton",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/hampton",
  },
  openGraph: {
    title: "Heater Service Hampton | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Hampton, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/hampton",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Hampton" suburbSlug="hampton" />;
}
