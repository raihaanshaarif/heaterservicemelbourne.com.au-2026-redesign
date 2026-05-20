import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Emergency Gas Ducted Repair Melbourne",
  description:
    "Emergency gas ducted repair Melbourne — no heat in winter? 24/7 same-day heating repair near me. Gas heater not working, ducted heating breakdown fixed fast. Call 0405 133 761.",
  keywords:
    "emergency gas ducted repair melbourne, no heat emergency, ducted heating breakdown, 24/7 gas heater repair, heating not working emergency melbourne, heating repair near me, fix gas heater, gas heater not working",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/emergency-services/emergency-gas-ducted-repair-melbourne",
  },
  openGraph: {
    title: "Emergency Gas Ducted Repair Melbourne",
    description:
      "Emergency gas ducted heating repair in Melbourne. No heat in winter? Available 24/7. Fast response, all ducted systems repaired. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/emergency-services/emergency-gas-ducted-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
