import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Emergency Split System Repair Melbourne | AC Not Working 24/7",
  description:
    "Emergency split system repair Melbourne — AC not working, not cooling? 24/7 air conditioner repair near me, split system breakdown rescue, all brands fixed fast. Call 0405 133 761.",
  keywords:
    "emergency split system repair melbourne, ac breakdown melbourne, split system not cooling, 24/7 air conditioner repair melbourne, emergency ac service, emergency ac repair, split system not working, air conditioner repair near me",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/emergency-split-system-repair-melbourne",
  },
  openGraph: {
    title: "Emergency Split System Repair Melbourne",
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
