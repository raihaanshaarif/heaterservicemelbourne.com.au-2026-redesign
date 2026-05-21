import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Hawthorn",
  description:
    "Professional heating services in Hawthorn, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service hawthorn, gas ducted heating hawthorn, hydronic heating hawthorn, split system hawthorn, emergency heating repair hawthorn",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/hawthorn",
  },
  openGraph: {
    title: "Heater Service Hawthorn",
    description:
      "Professional heating services in Hawthorn, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/hawthorn",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Hawthorn" suburbSlug="hawthorn" />;
}
