import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Emergency Hydronic Repair Melbourne | Boiler Breakdown 24/7",
  description:
    "Emergency hydronic heating repair in Melbourne. Boiler broken, pipes leaking, no heat? Available 24/7. Call 0405 133 761 for fast response.",
  keywords:
    "emergency hydronic repair melbourne, hydronic boiler breakdown, hydronic heating emergency, 24/7 hydronic repair melboure, hydronic pipe leak emergency",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/emergency-services/emergency-hydronic-repair-melbourne",
  },
  openGraph: {
    title: "Emergency Hydronic Repair Melbourne | Boiler Breakdown 24/7",
    description:
      "Emergency hydronic heating repair in Melbourne. Boiler broken, pipes leaking, no heat? Available 24/7. Call 0405 133 761 for fast response.",
    url: "https://heaterservicemelbourne.com.au/emergency-services/emergency-hydronic-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
