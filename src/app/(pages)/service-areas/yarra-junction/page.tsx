import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Yarra Junction | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Yarra Junction, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service yarra junction, gas ducted heating yarra junction, hydronic heating yarra junction, split system yarra junction, emergency heating repair yarra junction",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/yarra-junction",
  },
  openGraph: {
    title: "Heater Service Yarra Junction | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Yarra Junction, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/yarra-junction",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Yarra Junction" suburbSlug="yarra-junction" />;
}
