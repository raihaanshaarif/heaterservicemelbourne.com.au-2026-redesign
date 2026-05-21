import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Spotswood",
  description:
    "Professional heating services in Spotswood, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service spotswood, gas ducted heating spotswood, hydronic heating spotswood, split system spotswood, emergency heating repair spotswood",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/spotswood",
  },
  openGraph: {
    title: "Heater Service Spotswood",
    description:
      "Professional heating services in Spotswood, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/spotswood",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Spotswood" suburbSlug="spotswood" />;
}
