import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Dandenong North | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Dandenong North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service dandenong north, gas ducted heating dandenong north, hydronic heating dandenong north, split system dandenong north, emergency heating repair dandenong north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/dandenong-north",
  },
  openGraph: {
    title: "Heater Service Dandenong North | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Dandenong North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/dandenong-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Dandenong North" suburbSlug="dandenong-north" />;
}
