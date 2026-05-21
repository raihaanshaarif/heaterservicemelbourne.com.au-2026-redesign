import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Albert Park",
  description:
    "Professional heating services in Albert Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service albert park, gas ducted heating albert park, hydronic heating albert park, split system albert park, emergency heating repair albert park",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/albert-park",
  },
  openGraph: {
    title: "Heater Service Albert Park",
    description:
      "Professional heating services in Albert Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/albert-park",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Albert Park" suburbSlug="albert-park" />;
}
