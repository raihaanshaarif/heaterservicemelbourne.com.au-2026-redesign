import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Emergency Gas Leak Repair Melbourne | Smell Gas? Call Now",
  description:
    "Emergency gas leak repair Melbourne — smell gas? Call 0405 133 761 immediately. Licensed 24/7 gas leak detection, carbon monoxide risk assessment, gas safety inspection. Fast response.",
  keywords:
    "emergency gas leak repair melbourne, gas leak detection melbourne, smell gas melbourne, 24/7 gas fitter melbourne, gas leak fix melbourne, gas safety inspection melbourne, carbon monoxide risk, emergency gas repair",
  alternates: {
    canonical:
      "https://heaterservicemelbourne.com.au/emergency-services/emergency-gas-leak-repair-melbourne",
  },
  openGraph: {
    title: "Emergency Gas Leak Repair Melbourne",
    description:
      "Emergency gas leak detection and repair in Melbourne. If you smell gas, call 0405 133 761 immediately. Licensed   gas fitters available 24/7.",
    url: "https://heaterservicemelbourne.com.au/emergency-services/emergency-gas-leak-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
