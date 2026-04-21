import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Emergency AC Breakdown Rescue Melbourne | 24/7 Air Con Repair",
  description:
    "Emergency air conditioning breakdown rescue in Melbourne. Available 24/7 for all AC system failures. Fast response, all brands. Call 0405 133 761 now.",
  keywords:
    "emergency ac breakdown melbourne, air conditioner rescue, 24/7 aircon repair melbourne, ac not working emergency, aircon breakdown rescue",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/emergency-services/ac-breakdown-rescue-melbourne",
  },
  openGraph: {
    title: "Emergency AC Breakdown Rescue Melbourne | 24/7 Air Con Repair",
    description:
      "Emergency air conditioning breakdown rescue in Melbourne. Available 24/7 for all AC system failures. Fast response, all brands. Call 0405 133 761 now.",
    url: "https://heaterservicemelbourne.com.au/emergency-services/ac-breakdown-rescue-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
