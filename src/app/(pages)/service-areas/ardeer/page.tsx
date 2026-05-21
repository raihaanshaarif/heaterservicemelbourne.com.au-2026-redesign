import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Ardeer",
  description:
    "Professional heating services in Ardeer, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service ardeer, gas ducted heating ardeer, hydronic heating ardeer, split system ardeer, emergency heating repair ardeer",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/ardeer",
  },
  openGraph: {
    title: "Heater Service Ardeer",
    description:
      "Professional heating services in Ardeer, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/ardeer",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Ardeer" suburbSlug="ardeer" />;
}
