import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Elsternwick",
  description:
    "Professional heating services in Elsternwick, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service elsternwick, gas ducted heating elsternwick, hydronic heating elsternwick, split system elsternwick, emergency heating repair elsternwick",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/elsternwick",
  },
  openGraph: {
    title: "Heater Service Elsternwick",
    description:
      "Professional heating services in Elsternwick, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/elsternwick",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Elsternwick" suburbSlug="elsternwick" />;
}
