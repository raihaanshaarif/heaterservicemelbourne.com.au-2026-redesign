import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Split System Repair Melbourne | All Brands Fixed Same Day",
  description:
    "Expert split system repair in Melbourne. All brands serviced — Daikin, Fujitsu, Mitsubishi, Samsung and more. Same-day service available. Call 0405 133 761.",
  keywords:
    "split system repair melbourne, ac repair melbourne, air conditioner not working, split system fault melbourne, Daikin repair melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/split-system-repair-melbourne",
  },
  openGraph: {
    title: "Split System Repair Melbourne | All Brands Fixed Same Day",
    description:
      "Expert split system repair in Melbourne. All brands serviced — Daikin, Fujitsu, Mitsubishi, Samsung and more. Same-day service available. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/split-system-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
