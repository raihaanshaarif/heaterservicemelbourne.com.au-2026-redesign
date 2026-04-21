import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Dandenong | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Dandenong, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service dandenong, gas ducted heating dandenong, hydronic heating dandenong, split system dandenong, emergency heating repair dandenong",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/dandenong",
  },
  openGraph: {
    title: "Heater Service Dandenong | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Dandenong, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/dandenong",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Dandenong" suburbSlug="dandenong" />;
}
