import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Thomastown",
  description:
    "Professional heating services in Thomastown, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service thomastown, gas ducted heating thomastown, hydronic heating thomastown, split system thomastown, emergency heating repair thomastown",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/thomastown",
  },
  openGraph: {
    title: "Heater Service Thomastown",
    description:
      "Professional heating services in Thomastown, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/thomastown",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Thomastown" suburbSlug="thomastown" />;
}
