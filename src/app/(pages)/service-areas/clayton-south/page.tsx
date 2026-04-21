import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Clayton South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Clayton South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service clayton south, gas ducted heating clayton south, hydronic heating clayton south, split system clayton south, emergency heating repair clayton south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/clayton-south",
  },
  openGraph: {
    title: "Heater Service Clayton South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Clayton South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/clayton-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Clayton South" suburbSlug="clayton-south" />;
}
