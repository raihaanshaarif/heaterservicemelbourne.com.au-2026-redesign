import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Eaglehawk | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Eaglehawk, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service eaglehawk, gas ducted heating eaglehawk, hydronic heating eaglehawk, split system eaglehawk, emergency heating repair eaglehawk",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/eaglehawk",
  },
  openGraph: {
    title: "Heater Service Eaglehawk | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Eaglehawk, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/eaglehawk",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Eaglehawk" suburbSlug="eaglehawk" />;
}
