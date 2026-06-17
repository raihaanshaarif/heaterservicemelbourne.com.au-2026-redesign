import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Multi-Head Split System Melbourne | AC Service & Installation",
  description:
    "Expert multi-head split system and multi-zone air conditioning Melbourne. Installation, service and repair. Multi head split system service, multi room air conditioning, ducted split system. Free quotes. Call 0405 133 761.",
  keywords:
    "multi head split system melbourne, multi head split system service melbourne, multi zone air conditioning, multi zone air conditioning cost, multi split system service, ducted split system melbourne, multi room air conditioning, multi head ac installation",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/multi-head-system-service-melbourne",
  },
  openGraph: {
    title: "Multi-Head Split System Service Melbourne",
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
