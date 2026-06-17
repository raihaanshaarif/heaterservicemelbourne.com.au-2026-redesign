import type { Metadata } from "next";
import HydronicHeatingClient from "./HydronicHeatingClient";

export const metadata: Metadata = {
  title: "Hydronic Heating Service & Repair Melbourne | Underfloor Heating Specialists",
  description:
    "Expert hydronic heating service, repair and installation Melbourne. Hydronic heating repairs, underfloor heating specialists, slab heating. Hydronic heating servicing & maintenance. Licensed technicians, fast response. Call 0405 133 761.",
  keywords:
    "hydronic heating service melbourne, hydronic heating repair melbourne, hydronic heating repair, hydronic heating repairs melbourne, hydronic heating repairs, hydronic underfloor heating, hydronic heating servicing, hydronic heating cost, hydronic heating melbourne, hydronic boiler service, slab heating melbourne, underfloor heating service, underfloor heating repair melbourne, underfloor heating melbourne, slab heating repair, hydronic heating installation, central heating servicing melbourne",
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
