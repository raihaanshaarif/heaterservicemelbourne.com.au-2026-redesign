import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Clifton Hill",
  description:
    "Professional heating services in Clifton Hill, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service clifton hill, gas ducted heating clifton hill, hydronic heating clifton hill, split system clifton hill, emergency heating repair clifton hill",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/clifton-hill",
  },
  openGraph: {
    title: "Heater Service Clifton Hill",
    description:
      "Professional heating services in Clifton Hill, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/clifton-hill",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Clifton Hill" suburbSlug="clifton-hill" />;
}
