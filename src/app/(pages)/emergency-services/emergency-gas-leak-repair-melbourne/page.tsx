import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Emergency Gas Leak Repair Melbourne | Licensed Gas Fitters 24/7",
  description:
    "Emergency gas leak detection and repair in Melbourne. If you smell gas, call 0405 133 761 immediately. Licensed VBA gas fitters available 24/7.",
  keywords:
    "emergency gas leak repair melbourne, gas leak detection melbourne, smell gas melbourne, 24/7 gas fitter melbourne, gas leak fix melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/emergency-services/emergency-gas-leak-repair-melbourne",
  },
  openGraph: {
    title: "Emergency Gas Leak Repair Melbourne | Licensed Gas Fitters 24/7",
    description:
      "Emergency gas leak detection and repair in Melbourne. If you smell gas, call 0405 133 761 immediately. Licensed VBA gas fitters available 24/7.",
    url: "https://heaterservicemelbourne.com.au/emergency-services/emergency-gas-leak-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
