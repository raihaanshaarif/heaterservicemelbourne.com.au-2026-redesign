import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Templestowe Lower",
  description:
    "Professional heating services in Templestowe Lower, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service templestowe lower, gas ducted heating templestowe lower, hydronic heating templestowe lower, split system templestowe lower, emergency heating repair templestowe lower",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/templestowe-lower",
  },
  openGraph: {
    title: "Heater Service Templestowe Lower",
    description:
      "Professional heating services in Templestowe Lower, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/templestowe-lower",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Templestowe Lower" suburbSlug="templestowe-lower" />;
}
