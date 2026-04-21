import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Southbank | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Southbank, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service southbank, gas ducted heating southbank, hydronic heating southbank, split system southbank, emergency heating repair southbank",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/southbank",
  },
  openGraph: {
    title: "Heater Service Southbank | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Southbank, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/southbank",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Southbank" suburbSlug="southbank" />;
}
