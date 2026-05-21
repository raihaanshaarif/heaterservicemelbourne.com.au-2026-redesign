import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Middle Park",
  description:
    "Professional heating services in Middle Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service middle park, gas ducted heating middle park, hydronic heating middle park, split system middle park, emergency heating repair middle park",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/middle-park",
  },
  openGraph: {
    title: "Heater Service Middle Park",
    description:
      "Professional heating services in Middle Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/middle-park",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Middle Park" suburbSlug="middle-park" />;
}
