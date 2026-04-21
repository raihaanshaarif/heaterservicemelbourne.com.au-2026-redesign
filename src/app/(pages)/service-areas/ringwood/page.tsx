import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Ringwood | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Ringwood, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service ringwood, gas ducted heating ringwood, hydronic heating ringwood, split system ringwood, emergency heating repair ringwood",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/ringwood",
  },
  openGraph: {
    title: "Heater Service Ringwood | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Ringwood, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/ringwood",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Ringwood" suburbSlug="ringwood" />;
}
