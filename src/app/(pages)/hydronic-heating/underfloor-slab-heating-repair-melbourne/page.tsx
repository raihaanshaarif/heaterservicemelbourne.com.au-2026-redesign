import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Underfloor Slab Heating Repair Melbourne | Hydronic Floor Heating",
  description:
    "Specialist hydronic underfloor heating and slab heating repair Melbourne. In-slab pipe leak detection, pressure testing, re-commissioning. Part of hydronic heating repairs Melbourne. Call 0405 133 761.",
  keywords:
    "underfloor heating repair melbourne, slab heating repair, hydronic underfloor heating, hydronic floor heating repair melbourne, in-slab heating fix, underfloor pipe leak, hydronic heating repairs melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/hydronic-heating/underfloor-slab-heating-repair-melbourne",
  },
  openGraph: {
    title: "Underfloor Slab Heating Repair Melbourne",
    description:
      "Specialist underfloor and slab hydronic heating repair in Melbourne. Pipe leak detection, pressure testing and re-commissioning. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/hydronic-heating/underfloor-slab-heating-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
