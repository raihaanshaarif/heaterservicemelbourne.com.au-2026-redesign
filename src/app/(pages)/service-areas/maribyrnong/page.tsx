import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Maribyrnong",
  description:
    "Professional heating services in Maribyrnong, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service maribyrnong, gas ducted heating maribyrnong, hydronic heating maribyrnong, split system maribyrnong, emergency heating repair maribyrnong",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/maribyrnong",
  },
  openGraph: {
    title: "Heater Service Maribyrnong",
    description:
      "Professional heating services in Maribyrnong, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/maribyrnong",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Maribyrnong" suburbSlug="maribyrnong" />;
}
