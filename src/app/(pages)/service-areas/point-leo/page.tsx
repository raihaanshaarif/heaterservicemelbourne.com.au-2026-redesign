import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Point Leo | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Point Leo, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service point leo, gas ducted heating point leo, hydronic heating point leo, split system point leo, emergency heating repair point leo",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/point-leo",
  },
  openGraph: {
    title: "Heater Service Point Leo | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Point Leo, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/point-leo",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Point Leo" suburbSlug="point-leo" />;
}
