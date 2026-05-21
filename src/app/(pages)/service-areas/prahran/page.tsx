import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Prahran",
  description:
    "Professional heating services in Prahran, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service prahran, gas ducted heating prahran, hydronic heating prahran, split system prahran, emergency heating repair prahran",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/prahran",
  },
  openGraph: {
    title: "Heater Service Prahran",
    description:
      "Professional heating services in Prahran, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/prahran",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Prahran" suburbSlug="prahran" />;
}
