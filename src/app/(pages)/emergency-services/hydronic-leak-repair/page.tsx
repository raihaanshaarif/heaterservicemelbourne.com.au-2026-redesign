import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Hydronic Leak Repair Melbourne | Boiler & Pipe Leak Specialists",
  description:
    "Expert hydronic leak repair Melbourne — boiler leaks, pipe bursts, radiator leaks. Part of our hydronic heating repairs Melbourne service. Same-day, licensed techs. Call 0405 133 761.",
  keywords:
    "hydronic leak repair melbourne, hydronic pipe leak, boiler leak repair melbourne, hydronic heating leaking, radiator leak repair melbourne, hydronic heating repairs melbourne, hydronic heating service",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/emergency-services/hydronic-leak-repair",
  },
  openGraph: {
    title: "Hydronic Leak Repair Melbourne",
    description:
      "Expert hydronic heating leak repair in Melbourne. Boiler leaks, pipe bursts, radiator leaks all fixed fast. Licensed technicians. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/emergency-services/hydronic-leak-repair",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
