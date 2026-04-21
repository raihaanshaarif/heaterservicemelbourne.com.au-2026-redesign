import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Melbourne Airport | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Melbourne Airport, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service melbourne airport, gas ducted heating melbourne airport, hydronic heating melbourne airport, split system melbourne airport, emergency heating repair melbourne airport",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/melbourne-airport",
  },
  openGraph: {
    title: "Heater Service Melbourne Airport | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Melbourne Airport, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/melbourne-airport",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Melbourne Airport" suburbSlug="melbourne-airport" />;
}
