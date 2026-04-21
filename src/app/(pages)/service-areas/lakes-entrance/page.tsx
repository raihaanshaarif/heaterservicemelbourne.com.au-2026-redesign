import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Lakes Entrance | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Lakes Entrance, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service lakes entrance, gas ducted heating lakes entrance, hydronic heating lakes entrance, split system lakes entrance, emergency heating repair lakes entrance",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/lakes-entrance",
  },
  openGraph: {
    title: "Heater Service Lakes Entrance | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Lakes Entrance, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/lakes-entrance",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Lakes Entrance" suburbSlug="lakes-entrance" />;
}
