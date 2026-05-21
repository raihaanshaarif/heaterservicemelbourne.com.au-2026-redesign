import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Carlton North",
  description:
    "Professional heating services in Carlton North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service carlton north, gas ducted heating carlton north, hydronic heating carlton north, split system carlton north, emergency heating repair carlton north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/carlton-north",
  },
  openGraph: {
    title: "Heater Service Carlton North",
    description:
      "Professional heating services in Carlton North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/carlton-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Carlton North" suburbSlug="carlton-north" />;
}
