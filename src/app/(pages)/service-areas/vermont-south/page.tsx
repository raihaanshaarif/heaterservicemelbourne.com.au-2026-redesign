import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Vermont South",
  description:
    "Professional heating services in Vermont South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service vermont south, gas ducted heating vermont south, hydronic heating vermont south, split system vermont south, emergency heating repair vermont south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/vermont-south",
  },
  openGraph: {
    title: "Heater Service Vermont South",
    description:
      "Professional heating services in Vermont South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/vermont-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Vermont South" suburbSlug="vermont-south" />;
}
