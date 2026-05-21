import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Tullamarine",
  description:
    "Professional heating services in Tullamarine, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service tullamarine, gas ducted heating tullamarine, hydronic heating tullamarine, split system tullamarine, emergency heating repair tullamarine",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/tullamarine",
  },
  openGraph: {
    title: "Heater Service Tullamarine",
    description:
      "Professional heating services in Tullamarine, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/tullamarine",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Tullamarine" suburbSlug="tullamarine" />;
}
