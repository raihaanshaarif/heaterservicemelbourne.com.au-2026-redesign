import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Gembrook | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Gembrook, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service gembrook, gas ducted heating gembrook, hydronic heating gembrook, split system gembrook, emergency heating repair gembrook",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/gembrook",
  },
  openGraph: {
    title: "Heater Service Gembrook | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Gembrook, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/gembrook",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Gembrook" suburbSlug="gembrook" />;
}
