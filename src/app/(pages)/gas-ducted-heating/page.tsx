import type { Metadata } from "next";
import GasDuctedHeatingClient from "./GasDuctedHeatingClient";

export const metadata: Metadata = {
  title: "Gas Ducted Heating Service Melbourne",
  description:
    "Expert gas ducted heating service Melbourne — ducted heating replacement, ducted gas heating replacement, repair and installation. Servicing Blackburn, Ringwood, Doncaster, Berwick & all suburbs.",
  keywords:
    "gas ducted heating, gas ducted heating service, gas ducted heating melbourne, ducted heating replacement, ducted gas heating replacement melbourne, ducted heating service cost, gas ducted heating cost, ducted heating blackburn, ducted heating ringwood, ducted heating doncaster, ducted heating berwick",
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
