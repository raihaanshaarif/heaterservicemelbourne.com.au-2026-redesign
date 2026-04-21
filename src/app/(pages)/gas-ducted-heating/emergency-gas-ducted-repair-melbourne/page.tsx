import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Emergency Gas Ducted Heating Repair Melbourne | 24/7 Same-Day Service",
  description:
    "Emergency gas ducted heating repair in Melbourne. Available 24/7 with fast response times. Licensed gas fitters, all brands serviced. Call 0405 133 761 now.",
  keywords:
    "emergency gas ducted heating repair melbourne, emergency gas heater repair, 24/7 ducted heating repair, same day gas heater fix melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating/emergency-gas-ducted-repair-melbourne",
  },
  openGraph: {
    title: "Emergency Gas Ducted Heating Repair Melbourne | 24/7 Same-Day Service",
    description:
      "Emergency gas ducted heating repair in Melbourne. Available 24/7 with fast response times. Licensed gas fitters, all brands serviced. Call 0405 133 761 now.",
    url: "https://heaterservicemelbourne.com.au/gas-ducted-heating/emergency-gas-ducted-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
