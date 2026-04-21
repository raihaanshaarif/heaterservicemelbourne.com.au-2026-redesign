import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Blackburn North | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Blackburn North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service blackburn north, gas ducted heating blackburn north, hydronic heating blackburn north, split system blackburn north, emergency heating repair blackburn north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/blackburn-north",
  },
  openGraph: {
    title: "Heater Service Blackburn North | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Blackburn North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/blackburn-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Blackburn North" suburbSlug="blackburn-north" />;
}
