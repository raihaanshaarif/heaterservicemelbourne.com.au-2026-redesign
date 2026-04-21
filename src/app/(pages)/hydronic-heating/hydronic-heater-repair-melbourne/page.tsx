import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Hydronic Heater Repair Melbourne | Boiler & System Repairs",
  description:
    "Professional hydronic heater and boiler repair in Melbourne. Diagnose and fix all hydronic system faults. Same-day service. Licensed techs. Call 0405 133 761.",
  keywords:
    "hydronic heater repair melbourne, hydronic boiler repair melbourne, hydronic system fault, hydronic heating not working, boiler repair melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/hydronic-heating/hydronic-heater-repair-melbourne",
  },
  openGraph: {
    title: "Hydronic Heater Repair Melbourne | Boiler & System Repairs",
    description:
      "Professional hydronic heater and boiler repair in Melbourne. Diagnose and fix all hydronic system faults. Same-day service. Licensed techs. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/hydronic-heating/hydronic-heater-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
