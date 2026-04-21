import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Skye | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Skye, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service skye, gas ducted heating skye, hydronic heating skye, split system skye, emergency heating repair skye",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/skye",
  },
  openGraph: {
    title: "Heater Service Skye | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Skye, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/skye",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Skye" suburbSlug="skye" />;
}
