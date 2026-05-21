import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Mill Park",
  description:
    "Professional heating services in Mill Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service mill park, gas ducted heating mill park, hydronic heating mill park, split system mill park, emergency heating repair mill park",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/mill-park",
  },
  openGraph: {
    title: "Heater Service Mill Park",
    description:
      "Professional heating services in Mill Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/mill-park",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Mill Park" suburbSlug="mill-park" />;
}
