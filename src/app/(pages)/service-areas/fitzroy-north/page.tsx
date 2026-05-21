import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Fitzroy North",
  description:
    "Professional heating services in Fitzroy North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service fitzroy north, gas ducted heating fitzroy north, hydronic heating fitzroy north, split system fitzroy north, emergency heating repair fitzroy north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/fitzroy-north",
  },
  openGraph: {
    title: "Heater Service Fitzroy North",
    description:
      "Professional heating services in Fitzroy North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/fitzroy-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Fitzroy North" suburbSlug="fitzroy-north" />;
}
