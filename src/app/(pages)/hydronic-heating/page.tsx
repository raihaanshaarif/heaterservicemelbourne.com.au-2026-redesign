import type { Metadata } from "next";
import HydronicHeatingClient from "./HydronicHeatingClient";

export const metadata: Metadata = {
  title: "Hydronic Heating Melbourne | Installation, Repair & Service",
  description:
    "Expert hydronic heating installation, repair and maintenance in Melbourne. Energy-efficient hydronic systems, licensed gas fitters. Free quotes, same-day service available.",
  keywords:
    "hydronic heating melbourne, hydronic heating installation, hydronic heating repair, underfloor heating melbourne, hydronic boiler service, slab heating melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/hydronic-heating",
  },
  openGraph: {
    title: "Hydronic Heating Melbourne | Installation, Repair & Service",
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
