import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Emergency Split System Repair Melbourne | 24/7 AC Breakdown",
  description:
    "Emergency split system AC repair in Melbourne — 24/7 available. AC not cooling or heating? Fast response, all brands serviced. Call 0405 133 761.",
  keywords:
    "emergency split system repair melbourne, ac breakdown melbourne, split system not cooling, 24/7 air conditioner repair melbourne, emergency ac service",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/emergency-split-system-repair-melbourne",
  },
  openGraph: {
    title: "Emergency Split System Repair Melbourne | 24/7 AC Breakdown",
    description:
      "Emergency split system AC repair in Melbourne — 24/7 available. AC not cooling or heating? Fast response, all brands serviced. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/emergency-split-system-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
