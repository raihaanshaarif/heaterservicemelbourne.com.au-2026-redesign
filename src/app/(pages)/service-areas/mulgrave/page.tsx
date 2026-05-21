import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Mulgrave",
  description:
    "Professional heating services in Mulgrave, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service mulgrave, gas ducted heating mulgrave, hydronic heating mulgrave, split system mulgrave, emergency heating repair mulgrave",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/mulgrave",
  },
  openGraph: {
    title: "Heater Service Mulgrave",
    description:
      "Professional heating services in Mulgrave, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/mulgrave",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Mulgrave" suburbSlug="mulgrave" />;
}
