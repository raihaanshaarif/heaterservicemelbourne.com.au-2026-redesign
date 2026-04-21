import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Box Hill | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Box Hill, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service box hill, gas ducted heating box hill, hydronic heating box hill, split system box hill, emergency heating repair box hill",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/box-hill",
  },
  openGraph: {
    title: "Heater Service Box Hill | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Box Hill, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/box-hill",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Box Hill" suburbSlug="box-hill" />;
}
