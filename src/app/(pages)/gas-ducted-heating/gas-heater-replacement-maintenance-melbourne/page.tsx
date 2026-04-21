import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Gas Heater Replacement Melbourne | Old Heater Upgrade & Swap",
  description:
    "Gas heater replacement and upgrade service in Melbourne. Replace old inefficient heaters with modern energy-efficient systems. Free assessment. Call 0405 133 761.",
  keywords:
    "gas heater replacement melbourne, ducted heater upgrade melbourne, replace old gas heater, gas heater swap melbourne, energy efficient heating upgrade",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-heater-replacement-maintenance-melbourne",
  },
  openGraph: {
    title: "Gas Heater Replacement Melbourne | Old Heater Upgrade & Swap",
    description:
      "Gas heater replacement and upgrade service in Melbourne. Replace old inefficient heaters with modern energy-efficient systems. Free assessment. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-heater-replacement-maintenance-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
