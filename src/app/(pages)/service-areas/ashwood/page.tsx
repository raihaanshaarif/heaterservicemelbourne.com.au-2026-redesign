import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Ashwood | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Ashwood, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service ashwood, gas ducted heating ashwood, hydronic heating ashwood, split system ashwood, emergency heating repair ashwood",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/ashwood",
  },
  openGraph: {
    title: "Heater Service Ashwood | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Ashwood, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/ashwood",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Ashwood" suburbSlug="ashwood" />;
}
