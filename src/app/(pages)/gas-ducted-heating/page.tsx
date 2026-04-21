import type { Metadata } from "next";
import GasDuctedHeatingClient from "./GasDuctedHeatingClient";

export const metadata: Metadata = {
  title: "Gas Ducted Heating Melbourne | Installation, Repair & Service",
  description:
    "Professional gas ducted heating installation, repair and servicing in Melbourne. Licensed gas fitters, all brands serviced. Same-day emergency repairs available.",
  keywords:
    "gas ducted heating melbourne, ducted heating installation melbourne, ducted heating repair, gas heater service melbourne, ducted heating maintenance",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating",
  },
  openGraph: {
    title: "Gas Ducted Heating Melbourne | Installation, Repair & Service",
    description:
      "Professional gas ducted heating installation, repair and servicing in Melbourne. Licensed gas fitters, all brands serviced.",
    url: "https://heaterservicemelbourne.com.au/gas-ducted-heating",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function GasDuctedHeatingPage() {
  return <GasDuctedHeatingClient />;
}
