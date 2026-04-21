import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Hampton Park | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Hampton Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service hampton park, gas ducted heating hampton park, hydronic heating hampton park, split system hampton park, emergency heating repair hampton park",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/hampton-park",
  },
  openGraph: {
    title: "Heater Service Hampton Park | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Hampton Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/hampton-park",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Hampton Park" suburbSlug="hampton-park" />;
}
