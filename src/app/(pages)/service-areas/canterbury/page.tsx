import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Canterbury",
  description:
    "Professional heating services in Canterbury, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service canterbury, gas ducted heating canterbury, hydronic heating canterbury, split system canterbury, emergency heating repair canterbury",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/canterbury",
  },
  openGraph: {
    title: "Heater Service Canterbury",
    description:
      "Professional heating services in Canterbury, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/canterbury",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Canterbury" suburbSlug="canterbury" />;
}
