import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Gas Heater Service & Servicing Melbourne | Annual Maintenance",
  description:
    "Professional gas heater service and gas heater servicing Melbourne. Gas heater service near me, gas heater servicing melbourne, annual maintenance, carbon monoxide testing. Licensed gas heater technicians. Call 0405 133 761.",
  keywords:
    "gas heater service melbourne, gas heater servicing, gas heater servicing melbourne, gas heater service near me, gas heater technician, gas heaters service melbourne, ducted heating service melbourne, ducted gas heating service melbourne, ducted heating service cost, annual heater service, carbon monoxide testing melbourne, gas heater service and maintenance melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-heater-service-and-maintenance-melbourne",
  },
  openGraph: {
    title: "Gas Heater Service & Maintenance Melbourne",
    description:
      "Professional gas heater servicing and maintenance in Melbourne. Annual service plans, safety checks, carbon monoxide testing. Licensed techs. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-heater-service-and-maintenance-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
