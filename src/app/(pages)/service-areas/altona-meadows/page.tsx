import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Altona Meadows",
  description:
    "Professional heating services in Altona Meadows, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service altona meadows, gas ducted heating altona meadows, hydronic heating altona meadows, split system altona meadows, emergency heating repair altona meadows",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/altona-meadows",
  },
  openGraph: {
    title: "Heater Service Altona Meadows",
    description:
      "Professional heating services in Altona Meadows, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/altona-meadows",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Altona Meadows" suburbSlug="altona-meadows" />;
}
