import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Emergency Hydronic Repair Melbourne",
  description:
    "Emergency hydronic repair Melbourne — boiler broken, pipes leaking, no heat? 24/7 hydronic heating repairs Melbourne. Boiler breakdown, pipe burst, radiator fault fixed fast. Call 0405 133 761.",
  keywords:
    "emergency hydronic repair melbourne, hydronic boiler breakdown, hydronic heating emergency, 24/7 hydronic repair melbourne, hydronic pipe leak emergency, hydronic heating repairs melbourne, emergency hydronic heating service",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/emergency-services/emergency-hydronic-repair-melbourne",
  },
  openGraph: {
    title: "Emergency Hydronic Repair Melbourne",
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
