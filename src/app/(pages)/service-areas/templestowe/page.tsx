import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Templestowe",
  description:
    "Professional heating services in Templestowe, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service templestowe, gas ducted heating templestowe, hydronic heating templestowe, split system templestowe, emergency heating repair templestowe",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/templestowe",
  },
  openGraph: {
    title: "Heater Service Templestowe",
    description:
      "Professional heating services in Templestowe, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/templestowe",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Templestowe" suburbSlug="templestowe" />;
}
