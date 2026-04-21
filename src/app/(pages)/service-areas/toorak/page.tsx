import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Toorak | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Toorak, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service toorak, gas ducted heating toorak, hydronic heating toorak, split system toorak, emergency heating repair toorak",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/toorak",
  },
  openGraph: {
    title: "Heater Service Toorak | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Toorak, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/toorak",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Toorak" suburbSlug="toorak" />;
}
