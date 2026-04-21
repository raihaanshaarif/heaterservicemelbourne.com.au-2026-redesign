import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Badger Creek | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Badger Creek, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service badger creek, gas ducted heating badger creek, hydronic heating badger creek, split system badger creek, emergency heating repair badger creek",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/badger-creek",
  },
  openGraph: {
    title: "Heater Service Badger Creek | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Badger Creek, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/badger-creek",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Badger Creek" suburbSlug="badger-creek" />;
}
