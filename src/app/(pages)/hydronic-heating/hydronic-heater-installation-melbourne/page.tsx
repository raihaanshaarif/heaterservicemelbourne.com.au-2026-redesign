import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Hydronic Heating Installation Melbourne | Expert Service",
  description:
    "Expert hydronic heating installation Melbourne — hydronic underfloor heating, radiators, boilers. Installing hydronic heating systems with transparent cost. Free quotes. Licensed technicians. Call 0405 133 761.",
  keywords:
    "hydronic heating installation melbourne, hydronic installation, installing hydronic heating, install hydronic heating, heater installation melbourne, hydronic underfloor heating, hydronic heating cost, hydronic system install, underfloor heating installation, radiator heating installation melbourne, hydronic heating service",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/hydronic-heating/hydronic-heater-installation-melbourne",
  },
  openGraph: {
    title: "Hydronic Heating Installation Melbourne",
    description:
      "Expert hydronic heating installation in Melbourne. Underfloor systems, radiators, boilers. Energy-efficient designs, licensed gas fitters. Free quotes. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/hydronic-heating/hydronic-heater-installation-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
