import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Reservoir",
  description:
    "Professional heating services in Reservoir, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service reservoir, gas ducted heating reservoir, hydronic heating reservoir, split system reservoir, emergency heating repair reservoir",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/reservoir",
  },
  openGraph: {
    title: "Heater Service Reservoir",
    description:
      "Professional heating services in Reservoir, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/reservoir",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Reservoir" suburbSlug="reservoir" />;
}
