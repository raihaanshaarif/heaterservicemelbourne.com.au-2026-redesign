import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Thornbury",
  description:
    "Professional heating services in Thornbury, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service thornbury, gas ducted heating thornbury, hydronic heating thornbury, split system thornbury, emergency heating repair thornbury",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/thornbury",
  },
  openGraph: {
    title: "Heater Service Thornbury",
    description:
      "Professional heating services in Thornbury, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/thornbury",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Thornbury" suburbSlug="thornbury" />;
}
