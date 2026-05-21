import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Newport",
  description:
    "Professional heating services in Newport, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service newport, gas ducted heating newport, hydronic heating newport, split system newport, emergency heating repair newport",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/newport",
  },
  openGraph: {
    title: "Heater Service Newport",
    description:
      "Professional heating services in Newport, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/newport",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Newport" suburbSlug="newport" />;
}
