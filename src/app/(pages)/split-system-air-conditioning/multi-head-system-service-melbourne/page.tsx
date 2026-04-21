import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Multi-Head Split System Service Melbourne | Multi-Zone AC",
  description:
    "Expert multi-head and multi-zone split system installation, service and repair in Melbourne. All major brands. Free quotes. Call 0405 133 761.",
  keywords:
    "multi head split system melbourne, multi zone air conditioning, multi split system service, ducted split system melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/multi-head-system-service-melbourne",
  },
  openGraph: {
    title: "Multi-Head Split System Service Melbourne | Multi-Zone AC",
    description:
      "Expert multi-head and multi-zone split system installation, service and repair in Melbourne. All major brands. Free quotes. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/multi-head-system-service-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
