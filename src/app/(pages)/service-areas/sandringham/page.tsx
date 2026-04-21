import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Sandringham | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Sandringham, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service sandringham, gas ducted heating sandringham, hydronic heating sandringham, split system sandringham, emergency heating repair sandringham",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/sandringham",
  },
  openGraph: {
    title: "Heater Service Sandringham | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Sandringham, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/sandringham",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Sandringham" suburbSlug="sandringham" />;
}
