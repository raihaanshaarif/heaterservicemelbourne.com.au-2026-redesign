import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Gas Ducted Heating Installation Melbourne | Expert Service",
  description:
    "Expert gas ducted heating installation Melbourne. New systems supplied and installed. Gas ducted heating service, upfront gas ducted heating cost, free quotes. Blackburn, Doncaster, Ringwood, Berwick. Call 0405 133 761.",
  keywords:
    "gas ducted heating installation melbourne, gas ducted heating cost, ducted gas heating installation, ducted gas heating service melbourne, gas ducted heating service, new ducted heater melbourne, gas heating system installation, ducted heating installation melbourne, ducted heating blackburn, ducted heating doncaster, ducted heating ringwood, ducted heating berwick",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-ducted-installation-melbourne",
  },
  openGraph: {
    title: "Gas Ducted Heating Installation Melbourne",
    description:
      "Professional gas ducted heating installation in Melbourne. All brands supplied and installed by licensed gas fitters. Free quotes, competitive pricing. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-ducted-installation-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
