import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Elwood",
  description:
    "Professional heating services in Elwood, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service elwood, gas ducted heating elwood, hydronic heating elwood, split system elwood, emergency heating repair elwood",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/elwood",
  },
  openGraph: {
    title: "Heater Service Elwood",
    description:
      "Professional heating services in Elwood, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/elwood",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Elwood" suburbSlug="elwood" />;
}
