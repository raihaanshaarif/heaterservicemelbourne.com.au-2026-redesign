import type { Metadata } from "next";
import EmergencyServicesClient from "./EmergencyServicesClient";

export const metadata: Metadata = {
  title: "24/7 Emergency Heating Repair Melbourne | Same Day Service",
  description:
    "Emergency heating repair in Melbourne available 24 hours 7 days a week. No heat in winter? Call 0405 133 761 for same-day emergency heating service.",
  keywords:
    "emergency heating repair melbourne, 24/7 heating service, no heat emergency, heater breakdown melbourne, emergency gas heater repair, same day heating repair",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/emergency-services",
  },
  openGraph: {
    title: "24/7 Emergency Heating Repair Melbourne | Call 0405 133 761",
    description:
      "Emergency heating repair in Melbourne available 24/7. No heat? Call us now for same-day emergency service.",
    url: "https://heaterservicemelbourne.com.au/emergency-services",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    images: [
      {
        url: "https://heaterservicemelbourne.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heater Service Melbourne | Professional Heating & Hydronic Services",
      },
    ],
    type: "website",
  },
};

export default function EmergencyServicesPage() {
  return <EmergencyServicesClient />;
}
