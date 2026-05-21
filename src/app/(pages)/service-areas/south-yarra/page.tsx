import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service South Yarra",
  description:
    "Professional heating services in South Yarra, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service south yarra, gas ducted heating south yarra, hydronic heating south yarra, split system south yarra, emergency heating repair south yarra",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/south-yarra",
  },
  openGraph: {
    title: "Heater Service South Yarra",
    description:
      "Professional heating services in South Yarra, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/south-yarra",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="South Yarra" suburbSlug="south-yarra" />;
}
