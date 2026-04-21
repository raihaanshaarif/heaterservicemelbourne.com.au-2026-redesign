import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Yarraville | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Yarraville, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service yarraville, gas ducted heating yarraville, hydronic heating yarraville, split system yarraville, emergency heating repair yarraville",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/yarraville",
  },
  openGraph: {
    title: "Heater Service Yarraville | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Yarraville, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/yarraville",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Yarraville" suburbSlug="yarraville" />;
}
