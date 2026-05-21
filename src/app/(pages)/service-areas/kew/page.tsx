import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Kew",
  description:
    "Professional heating services in Kew, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service kew, gas ducted heating kew, hydronic heating kew, split system kew, emergency heating repair kew",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/kew",
  },
  openGraph: {
    title: "Heater Service Kew",
    description:
      "Professional heating services in Kew, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/kew",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Kew" suburbSlug="kew" />;
}
