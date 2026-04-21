import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Brighton | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Brighton, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service brighton, gas ducted heating brighton, hydronic heating brighton, split system brighton, emergency heating repair brighton",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/brighton",
  },
  openGraph: {
    title: "Heater Service Brighton | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Brighton, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/brighton",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Brighton" suburbSlug="brighton" />;
}
