import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Berwick",
  description:
    "Professional heating services in Berwick, Melbourne VIC. Gas ducted heating, hydronic heating, hydronic heating servicing, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service berwick, gas ducted heating berwick, hydronic heating berwick, hydronic heating servicing, split system berwick, emergency heating repair berwick",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/berwick",
  },
  openGraph: {
    title: "Heater Service Berwick",
    description:
      "Professional heating services in Berwick, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/berwick",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Berwick" suburbSlug="berwick" />;
}
