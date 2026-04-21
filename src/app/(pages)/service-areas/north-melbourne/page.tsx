import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service North Melbourne | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in North Melbourne, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service north melbourne, gas ducted heating north melbourne, hydronic heating north melbourne, split system north melbourne, emergency heating repair north melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/north-melbourne",
  },
  openGraph: {
    title: "Heater Service North Melbourne | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in North Melbourne, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/north-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="North Melbourne" suburbSlug="north-melbourne" />;
}
