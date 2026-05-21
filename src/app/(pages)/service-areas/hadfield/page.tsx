import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Hadfield",
  description:
    "Professional heating services in Hadfield, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service hadfield, gas ducted heating hadfield, hydronic heating hadfield, split system hadfield, emergency heating repair hadfield",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/hadfield",
  },
  openGraph: {
    title: "Heater Service Hadfield",
    description:
      "Professional heating services in Hadfield, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/hadfield",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Hadfield" suburbSlug="hadfield" />;
}
