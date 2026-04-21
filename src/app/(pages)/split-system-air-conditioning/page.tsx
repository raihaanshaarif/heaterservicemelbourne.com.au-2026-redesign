import type { Metadata } from "next";
import SplitSystemClient from "./SplitSystemClient";

export const metadata: Metadata = {
  title: "Split System Air Conditioning Melbourne | Installation & Repair",
  description:
    "Expert split system installation, repair and servicing across Melbourne. All major brands including Daikin, Fujitsu, Mitsubishi, Samsung. Free quotes, same-day service.",
  keywords:
    "split system melbourne, split system installation melbourne, split system repair, air conditioning service melbourne, reverse cycle aircon melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/split-system-air-conditioning",
  },
  openGraph: {
    title: "Split System Air Conditioning Melbourne | Installation & Repair",
    description:
      "Expert split system installation, repair and servicing across Melbourne. All major brands, free quotes, same-day service.",
    url: "https://heaterservicemelbourne.com.au/split-system-air-conditioning",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function SplitSystemPage() {
  return <SplitSystemClient />;
}
