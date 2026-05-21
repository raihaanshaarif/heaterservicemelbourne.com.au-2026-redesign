import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Malvern East",
  description:
    "Professional heating services in Malvern East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service malvern east, gas ducted heating malvern east, hydronic heating malvern east, split system malvern east, emergency heating repair malvern east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/malvern-east",
  },
  openGraph: {
    title: "Heater Service Malvern East",
    description:
      "Professional heating services in Malvern East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/malvern-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Malvern East" suburbSlug="malvern-east" />;
}
