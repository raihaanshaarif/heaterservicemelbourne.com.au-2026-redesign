import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Briar Hill | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Briar Hill, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service briar hill, gas ducted heating briar hill, hydronic heating briar hill, split system briar hill, emergency heating repair briar hill",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/briar-hill",
  },
  openGraph: {
    title: "Heater Service Briar Hill | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Briar Hill, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/briar-hill",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Briar Hill" suburbSlug="briar-hill" />;
}
