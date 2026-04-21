import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service St Albans | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in St Albans, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service st albans, gas ducted heating st albans, hydronic heating st albans, split system st albans, emergency heating repair st albans",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/st-albans",
  },
  openGraph: {
    title: "Heater Service St Albans | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in St Albans, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/st-albans",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="St Albans" suburbSlug="st-albans" />;
}
