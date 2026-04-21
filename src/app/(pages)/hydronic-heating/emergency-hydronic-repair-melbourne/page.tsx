import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Emergency Hydronic Heating Repair Melbourne | 24/7 Response",
  description:
    "Emergency hydronic heating repair in Melbourne. Boiler breakdowns, pipe leaks, no heat — available 24/7. Licensed technicians. Call 0405 133 761 now.",
  keywords:
    "emergency hydronic heating repair melbourne, hydronic boiler repair, hydronic heating breakdown melbourne, 24/7 hydronic repair",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/hydronic-heating/emergency-hydronic-repair-melbourne",
  },
  openGraph: {
    title: "Emergency Hydronic Heating Repair Melbourne | 24/7 Response",
    description:
      "Emergency hydronic heating repair in Melbourne. Boiler breakdowns, pipe leaks, no heat — available 24/7. Licensed technicians. Call 0405 133 761 now.",
    url: "https://heaterservicemelbourne.com.au/hydronic-heating/emergency-hydronic-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
