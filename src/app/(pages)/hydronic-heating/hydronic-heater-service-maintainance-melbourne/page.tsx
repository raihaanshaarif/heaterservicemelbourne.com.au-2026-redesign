import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Hydronic Heating Service & Servicing Melbourne | Annual Plans",
  description:
    "Regular hydronic heating service and hydronic heating servicing Melbourne. Hydronic heating repairs included in service plans, annual maintenance, flush and refill, pressure checks. Transparent hydronic heating cost. Call 0405 133 761.",
  keywords:
    "hydronic heating service melbourne, hydronic heating servicing, hydronic heating service melbourne, hydronic heating repairs, hydronic heating cost, hydronic maintenance melbourne, boiler service melbourne, annual hydronic service, hydronic heating tune up",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/hydronic-heating/hydronic-heater-service-maintainance-melbourne",
  },
  openGraph: {
    title: "Hydronic Heating Service & Maintenance Melbourne",
    description:
      "Regular hydronic heating service and maintenance in Melbourne. Annual plans, flush and refill, pressure checks, efficiency tune-ups. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/hydronic-heating/hydronic-heater-service-maintainance-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
