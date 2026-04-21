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
    type: "website",
  },
};

export default function HydronicHeatingPage() {
  return <HydronicHeatingClient />;
}
