import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Malvern",
  description:
    "Professional heating services in Malvern, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service malvern, gas ducted heating malvern, hydronic heating malvern, split system malvern, emergency heating repair malvern",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/malvern",
  },
  openGraph: {
    title: "Heater Service Malvern",
    description:
      "Professional heating services in Malvern, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/malvern",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Malvern" suburbSlug="malvern" />;
}
