import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Emergency Split System Repair Melbourne",
  description:
    "Emergency split system repair Melbourne — AC not working or not cooling? 24/7 air conditioner repair, split system breakdown rescue, all brands. Call 0405 133 761 now.",
  keywords:
    "emergency split system repair melbourne, ac not working melbourne, split system not cooling, 24/7 air conditioner repair melbourne, emergency ac service, split system breakdown rescue, air conditioner repair near me",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/emergency-services/emergency-split-system-repair-melbourne",
  },
  openGraph: {
    title: "Emergency Split System Repair Melbourne | 24/7",
    description:
      "Emergency split system AC repair in Melbourne. System not cooling or heating? Available 24/7 with fast response. All brands. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/emergency-services/emergency-split-system-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
