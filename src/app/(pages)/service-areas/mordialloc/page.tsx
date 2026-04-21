import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Mordialloc | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Mordialloc, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service mordialloc, gas ducted heating mordialloc, hydronic heating mordialloc, split system mordialloc, emergency heating repair mordialloc",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/mordialloc",
  },
  openGraph: {
    title: "Heater Service Mordialloc | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Mordialloc, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/mordialloc",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Mordialloc" suburbSlug="mordialloc" />;
}
