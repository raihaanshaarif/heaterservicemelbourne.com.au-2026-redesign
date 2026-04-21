import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Kings Park | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Kings Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service kings park, gas ducted heating kings park, hydronic heating kings park, split system kings park, emergency heating repair kings park",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/kings-park",
  },
  openGraph: {
    title: "Heater Service Kings Park | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Kings Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/kings-park",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Kings Park" suburbSlug="kings-park" />;
}
