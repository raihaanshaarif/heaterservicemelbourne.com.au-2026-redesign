import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Gas Heater Replacement Melbourne | Ducted Heating Replacement",
  description:
    "Gas heater replacement and ducted heating replacement Melbourne. Replace old inefficient systems — ducted gas heating replacement, upfront pricing. Call 0405 133 761.",
  keywords:
    "gas heater replacement melbourne, ducted heating replacement, ducted gas heating replacement melbourne, replace old gas heater, gas heater swap melbourne, ducted heater upgrade, energy efficient heating replacement",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-heater-replacement-maintenance-melbourne",
  },
  openGraph: {
    title: "Gas Heater Replacement Melbourne",
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
