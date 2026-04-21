import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Hydronic Heating Installation Melbourne | New Systems & Upgrades",
  description:
    "Expert hydronic heating installation in Melbourne. Underfloor systems, radiators, boilers. Energy-efficient designs, licensed gas fitters. Free quotes. Call 0405 133 761.",
  keywords:
    "hydronic heating installation melbourne, hydronic system install, underfloor heating installation, radiator heating installation melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/hydronic-heating/hydronic-heater-installation-melbourne",
  },
  openGraph: {
    title: "Hydronic Heating Installation Melbourne | New Systems & Upgrades",
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
