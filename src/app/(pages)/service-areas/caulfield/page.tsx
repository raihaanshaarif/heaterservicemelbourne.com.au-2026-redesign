import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Caulfield | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Caulfield, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service caulfield, gas ducted heating caulfield, hydronic heating caulfield, split system caulfield, emergency heating repair caulfield",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/caulfield",
  },
  openGraph: {
    title: "Heater Service Caulfield | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Caulfield, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/caulfield",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Caulfield" suburbSlug="caulfield" />;
}
