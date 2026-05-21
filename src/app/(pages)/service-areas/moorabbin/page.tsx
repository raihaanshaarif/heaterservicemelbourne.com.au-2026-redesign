import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Moorabbin",
  description:
    "Professional heating services in Moorabbin, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service moorabbin, gas ducted heating moorabbin, hydronic heating moorabbin, split system moorabbin, emergency heating repair moorabbin",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/moorabbin",
  },
  openGraph: {
    title: "Heater Service Moorabbin",
    description:
      "Professional heating services in Moorabbin, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/moorabbin",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Moorabbin" suburbSlug="moorabbin" />;
}
