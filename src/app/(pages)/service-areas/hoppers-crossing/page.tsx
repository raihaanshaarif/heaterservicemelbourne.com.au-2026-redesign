import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Hoppers Crossing | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Hoppers Crossing, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service hoppers crossing, gas ducted heating hoppers crossing, hydronic heating hoppers crossing, split system hoppers crossing, emergency heating repair hoppers crossing",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/hoppers-crossing",
  },
  openGraph: {
    title: "Heater Service Hoppers Crossing | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Hoppers Crossing, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/hoppers-crossing",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Hoppers Crossing" suburbSlug="hoppers-crossing" />;
}
