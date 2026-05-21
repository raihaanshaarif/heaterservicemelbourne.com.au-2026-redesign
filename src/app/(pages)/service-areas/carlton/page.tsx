import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Carlton",
  description:
    "Professional heating services in Carlton, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service carlton, gas ducted heating carlton, hydronic heating carlton, split system carlton, emergency heating repair carlton",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/carlton",
  },
  openGraph: {
    title: "Heater Service Carlton",
    description:
      "Professional heating services in Carlton, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/carlton",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Carlton" suburbSlug="carlton" />;
}
