import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Knoxfield | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Knoxfield, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service knoxfield, gas ducted heating knoxfield, hydronic heating knoxfield, split system knoxfield, emergency heating repair knoxfield",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/knoxfield",
  },
  openGraph: {
    title: "Heater Service Knoxfield | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Knoxfield, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/knoxfield",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Knoxfield" suburbSlug="knoxfield" />;
}
