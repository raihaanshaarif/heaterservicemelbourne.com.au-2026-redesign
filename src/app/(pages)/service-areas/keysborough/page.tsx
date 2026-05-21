import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Keysborough",
  description:
    "Professional heating services in Keysborough, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service keysborough, gas ducted heating keysborough, hydronic heating keysborough, split system keysborough, emergency heating repair keysborough",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/keysborough",
  },
  openGraph: {
    title: "Heater Service Keysborough",
    description:
      "Professional heating services in Keysborough, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/keysborough",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Keysborough" suburbSlug="keysborough" />;
}
