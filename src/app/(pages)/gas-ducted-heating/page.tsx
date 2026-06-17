import type { Metadata } from "next";
import GasDuctedHeatingClient from "./GasDuctedHeatingClient";

export const metadata: Metadata = {
  title: "Gas Ducted Heating Service & Repair Melbourne | Duct Heating Specialists",
  description:
    "Expert gas ducted heating repair, service and installation Melbourne. Gas ducted heating repairs, ducted heating repair and service specialists. Fast response, all brands, licensed technicians. Call 0405 133 761.",
  keywords:
    "gas ducted heating repair, gas ducted heating repairs, gas ducted heating service, ducted heating repair near me, ducted heating service, duct heating service, gas ducted heater service, gas ducted heating melbourne, ducted heating replacement, ducted gas heating replacement, ducted heating service cost, gas ducted heating cost, ducted heating blackburn, ducted heating ringwood, ducted heating doncaster, ducted heating berwick, gas ducted heating installation, ducted heating installation",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating",
  },
  openGraph: {
    title: "Gas Ducted Heating Melbourne",
    description:
      "Professional gas ducted heating installation, repair and servicing in Melbourne. Licensed gas fitters, all brands serviced.",
    url: "https://heaterservicemelbourne.com.au/gas-ducted-heating",
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

export default function GasDuctedHeatingPage() {
  return <GasDuctedHeatingClient />;
}
