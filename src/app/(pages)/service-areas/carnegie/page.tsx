import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Carnegie",
  description:
    "Professional heating services in Carnegie, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service carnegie, gas ducted heating carnegie, hydronic heating carnegie, split system carnegie, emergency heating repair carnegie",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/carnegie",
  },
  openGraph: {
    title: "Heater Service Carnegie",
    description:
      "Professional heating services in Carnegie, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/carnegie",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Carnegie" suburbSlug="carnegie" />;
}
