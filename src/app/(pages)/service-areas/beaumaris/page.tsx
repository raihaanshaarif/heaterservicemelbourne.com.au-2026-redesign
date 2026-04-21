import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Beaumaris | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Beaumaris, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service beaumaris, gas ducted heating beaumaris, hydronic heating beaumaris, split system beaumaris, emergency heating repair beaumaris",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/beaumaris",
  },
  openGraph: {
    title: "Heater Service Beaumaris | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Beaumaris, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/beaumaris",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Beaumaris" suburbSlug="beaumaris" />;
}
