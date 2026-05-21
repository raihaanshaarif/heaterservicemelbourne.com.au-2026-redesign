import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Abbotsford",
  description:
    "Professional heating services in Abbotsford, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service abbotsford, gas ducted heating abbotsford, hydronic heating abbotsford, split system abbotsford, emergency heating repair abbotsford",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/abbotsford",
  },
  openGraph: {
    title: "Heater Service Abbotsford",
    description:
      "Professional heating services in Abbotsford, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/abbotsford",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Abbotsford" suburbSlug="abbotsford" />;
}
