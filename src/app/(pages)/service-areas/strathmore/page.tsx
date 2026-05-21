import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Strathmore",
  description:
    "Professional heating services in Strathmore, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service strathmore, gas ducted heating strathmore, hydronic heating strathmore, split system strathmore, emergency heating repair strathmore",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/strathmore",
  },
  openGraph: {
    title: "Heater Service Strathmore",
    description:
      "Professional heating services in Strathmore, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/strathmore",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Strathmore" suburbSlug="strathmore" />;
}
