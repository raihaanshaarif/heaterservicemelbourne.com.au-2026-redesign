import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Kew East",
  description:
    "Professional heating services in Kew East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service kew east, gas ducted heating kew east, hydronic heating kew east, split system kew east, emergency heating repair kew east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/kew-east",
  },
  openGraph: {
    title: "Heater Service Kew East",
    description:
      "Professional heating services in Kew East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/kew-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Kew East" suburbSlug="kew-east" />;
}
