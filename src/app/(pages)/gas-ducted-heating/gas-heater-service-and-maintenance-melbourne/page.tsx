import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Gas Heater Service & Maintenance Melbourne | Annual Servicing",
  description:
    "Professional gas heater servicing and maintenance in Melbourne. Annual service plans, safety checks, carbon monoxide testing. Licensed techs. Call 0405 133 761.",
  keywords:
    "gas heater service melbourne, ducted heating maintenance melbourne, annual heater service, gas heater safety check melbourne, carbon monoxide test",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-heater-service-and-maintenance-melbourne",
  },
  openGraph: {
    title: "Gas Heater Service & Maintenance Melbourne | Annual Servicing",
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
