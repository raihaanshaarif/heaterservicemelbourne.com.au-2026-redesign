import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Caulfield South",
  description:
    "Professional heating services in Caulfield South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service caulfield south, gas ducted heating caulfield south, hydronic heating caulfield south, split system caulfield south, emergency heating repair caulfield south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/caulfield-south",
  },
  openGraph: {
    title: "Heater Service Caulfield South",
    description:
      "Professional heating services in Caulfield South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/caulfield-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Caulfield South" suburbSlug="caulfield-south" />;
}
