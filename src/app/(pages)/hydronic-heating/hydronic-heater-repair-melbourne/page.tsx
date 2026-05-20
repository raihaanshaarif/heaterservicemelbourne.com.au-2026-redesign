import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Hydronic Heater Repair Melbourne",
  description:
    "Professional hydronic heater repair Melbourne. Diagnose and fix all hydronic system faults. Part of our hydronic heating repairs Melbourne and hydronic heating service. Same-day. Call 0405 133 761.",
  keywords:
    "hydronic heater repair melbourne, hydronic boiler repair melbourne, hydronic system fault, hydronic heating not working, boiler repair melbourne, hydronic heating repairs melbourne, hydronic heating service",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/hydronic-heating/hydronic-heater-repair-melbourne",
  },
  openGraph: {
    title: "Hydronic Heater Repair Melbourne",
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
