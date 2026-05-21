import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service West Melbourne",
  description:
    "Professional heating services in West Melbourne, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service west melbourne, gas ducted heating west melbourne, hydronic heating west melbourne, split system west melbourne, emergency heating repair west melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/west-melbourne",
  },
  openGraph: {
    title: "Heater Service West Melbourne",
    description:
      "Professional heating services in West Melbourne, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/west-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="West Melbourne" suburbSlug="west-melbourne" />;
}
