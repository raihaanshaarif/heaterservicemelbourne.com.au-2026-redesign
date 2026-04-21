import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Dandenong South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Dandenong South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service dandenong south, gas ducted heating dandenong south, hydronic heating dandenong south, split system dandenong south, emergency heating repair dandenong south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/dandenong-south",
  },
  openGraph: {
    title: "Heater Service Dandenong South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Dandenong South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/dandenong-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Dandenong South" suburbSlug="dandenong-south" />;
}
