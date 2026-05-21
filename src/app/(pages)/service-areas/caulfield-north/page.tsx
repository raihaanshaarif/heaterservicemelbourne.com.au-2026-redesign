import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Caulfield North",
  description:
    "Professional heating services in Caulfield North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service caulfield north, gas ducted heating caulfield north, hydronic heating caulfield north, split system caulfield north, emergency heating repair caulfield north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/caulfield-north",
  },
  openGraph: {
    title: "Heater Service Caulfield North",
    description:
      "Professional heating services in Caulfield North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/caulfield-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Caulfield North" suburbSlug="caulfield-north" />;
}
