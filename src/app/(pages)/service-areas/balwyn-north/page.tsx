import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Balwyn North",
  description:
    "Professional heating services in Balwyn North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service balwyn north, gas ducted heating balwyn north, hydronic heating balwyn north, split system balwyn north, emergency heating repair balwyn north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/balwyn-north",
  },
  openGraph: {
    title: "Heater Service Balwyn North",
    description:
      "Professional heating services in Balwyn North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/balwyn-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Balwyn North" suburbSlug="balwyn-north" />;
}
