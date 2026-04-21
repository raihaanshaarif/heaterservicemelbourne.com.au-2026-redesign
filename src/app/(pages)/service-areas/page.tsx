import type { Metadata } from "next";
import ServiceAreasClient from "./ServiceAreasClient";

export const metadata: Metadata = {
  title: "Heater Service Areas Melbourne | All Suburbs We Cover",
  description:
    "Heater Service Melbourne covers 140+ suburbs across greater Melbourne. Gas ducted heating, hydronic heating, split system and emergency repairs in your suburb. Call 0405 133 761.",
  keywords:
    "heating service areas melbourne, heating repair suburbs, gas ducted heating near me, hydronic heating service area, split system installation melbourne suburbs",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas",
  },
  openGraph: {
    title: "Heater Service Areas Melbourne | 140+ Suburbs Covered",
    description:
      "Heater Service Melbourne covers 140+ suburbs. Gas ducted heating, hydronic heating, split systems and 24/7 emergency repairs near you.",
    url: "https://heaterservicemelbourne.com.au/service-areas",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function ServiceAreasPage() {
  return <ServiceAreasClient />;
}
