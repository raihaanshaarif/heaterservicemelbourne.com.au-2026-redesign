import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Camberwell",
  description:
    "Professional heating services in Camberwell, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service camberwell, gas ducted heating camberwell, hydronic heating camberwell, split system camberwell, emergency heating repair camberwell",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/camberwell",
  },
  openGraph: {
    title: "Heater Service Camberwell",
    description:
      "Professional heating services in Camberwell, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/camberwell",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Camberwell" suburbSlug="camberwell" />;
}
