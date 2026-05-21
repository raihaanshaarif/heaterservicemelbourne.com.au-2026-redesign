import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Hawthorn East",
  description:
    "Professional heating services in Hawthorn East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service hawthorn east, gas ducted heating hawthorn east, hydronic heating hawthorn east, split system hawthorn east, emergency heating repair hawthorn east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/hawthorn-east",
  },
  openGraph: {
    title: "Heater Service Hawthorn East",
    description:
      "Professional heating services in Hawthorn East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/hawthorn-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Hawthorn East" suburbSlug="hawthorn-east" />;
}
