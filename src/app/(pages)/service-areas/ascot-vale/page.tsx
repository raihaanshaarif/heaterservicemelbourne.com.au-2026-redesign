import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Ascot Vale",
  description:
    "Professional heating services in Ascot Vale, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service ascot vale, gas ducted heating ascot vale, hydronic heating ascot vale, split system ascot vale, emergency heating repair ascot vale",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/ascot-vale",
  },
  openGraph: {
    title: "Heater Service Ascot Vale",
    description:
      "Professional heating services in Ascot Vale, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/ascot-vale",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Ascot Vale" suburbSlug="ascot-vale" />;
}
