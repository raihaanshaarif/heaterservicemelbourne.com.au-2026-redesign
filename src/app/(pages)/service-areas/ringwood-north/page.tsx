import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Ringwood North | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Ringwood North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service ringwood north, gas ducted heating ringwood north, hydronic heating ringwood north, split system ringwood north, emergency heating repair ringwood north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/ringwood-north",
  },
  openGraph: {
    title: "Heater Service Ringwood North | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Ringwood North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/ringwood-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Ringwood North" suburbSlug="ringwood-north" />;
}
