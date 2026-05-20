import type { Metadata } from "next";
import HydronicHeatingClient from "./HydronicHeatingClient";

export const metadata: Metadata = {
  title: "Hydronic Heating Service Melbourne",
  description:
    "Expert hydronic heating service Melbourne — hydronic underfloor heating, hydronic heating repairs, servicing and installation. Affordable hydronic heating cost. Licensed technicians, same-day service.",
  keywords:
    "hydronic heating service, hydronic heating service melbourne, hydronic underfloor heating, hydronic heating repairs melbourne, hydronic heating servicing, hydronic heating cost, hydronic heating melbourne, hydronic boiler service, slab heating melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/hydronic-heating",
  },
  openGraph: {
    title: "Hydronic Heating Melbourne",
    description:
      "Expert hydronic heating installation, repair and maintenance in Melbourne. Energy-efficient systems, licensed gas fitters.",
    url: "https://heaterservicemelbourne.com.au/hydronic-heating",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    images: [
      {
        url: "https://heaterservicemelbourne.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heater Service Melbourne | Professional Heating & Hydronic Services",
      },
    ],
    type: "website",
  },
};

export default function HydronicHeatingPage() {
  return <HydronicHeatingClient />;
}
