import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Cheltenham",
  description:
    "Professional heating services in Cheltenham, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service cheltenham, gas ducted heating cheltenham, hydronic heating cheltenham, split system cheltenham, emergency heating repair cheltenham",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/cheltenham",
  },
  openGraph: {
    title: "Heater Service Cheltenham",
    description:
      "Professional heating services in Cheltenham, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/cheltenham",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Cheltenham" suburbSlug="cheltenham" />;
}
