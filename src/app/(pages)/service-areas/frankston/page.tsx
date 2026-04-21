import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Frankston | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Frankston, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service frankston, gas ducted heating frankston, hydronic heating frankston, split system frankston, emergency heating repair frankston",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/frankston",
  },
  openGraph: {
    title: "Heater Service Frankston | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Frankston, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/frankston",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Frankston" suburbSlug="frankston" />;
}
