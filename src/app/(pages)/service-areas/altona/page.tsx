import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Altona",
  description:
    "Professional heating services in Altona, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service altona, gas ducted heating altona, hydronic heating altona, split system altona, emergency heating repair altona",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/altona",
  },
  openGraph: {
    title: "Heater Service Altona",
    description:
      "Professional heating services in Altona, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/altona",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Altona" suburbSlug="altona" />;
}
