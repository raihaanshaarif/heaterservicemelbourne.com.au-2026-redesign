import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Wheelers Hill | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Wheelers Hill, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service wheelers hill, gas ducted heating wheelers hill, hydronic heating wheelers hill, split system wheelers hill, emergency heating repair wheelers hill",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/wheelers-hill",
  },
  openGraph: {
    title: "Heater Service Wheelers Hill | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Wheelers Hill, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/wheelers-hill",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Wheelers Hill" suburbSlug="wheelers-hill" />;
}
