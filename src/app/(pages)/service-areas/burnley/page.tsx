import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Burnley",
  description:
    "Professional heating services in Burnley, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service burnley, gas ducted heating burnley, hydronic heating burnley, split system burnley, emergency heating repair burnley",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/burnley",
  },
  openGraph: {
    title: "Heater Service Burnley",
    description:
      "Professional heating services in Burnley, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/burnley",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Burnley" suburbSlug="burnley" />;
}
