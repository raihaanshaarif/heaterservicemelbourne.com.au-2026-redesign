import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Caulfield East",
  description:
    "Professional heating services in Caulfield East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service caulfield east, gas ducted heating caulfield east, hydronic heating caulfield east, split system caulfield east, emergency heating repair caulfield east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/caulfield-east",
  },
  openGraph: {
    title: "Heater Service Caulfield East",
    description:
      "Professional heating services in Caulfield East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/caulfield-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Caulfield East" suburbSlug="caulfield-east" />;
}
