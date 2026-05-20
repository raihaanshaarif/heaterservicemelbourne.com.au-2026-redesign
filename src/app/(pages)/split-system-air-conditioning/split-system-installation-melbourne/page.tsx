import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Split System Installation Melbourne | Supply & Install Cost",
  description:
    "Professional split system installation Melbourne. Daikin, Fujitsu, Mitsubishi, Samsung supplied and installed. Split system installation cost, reverse cycle installation. ARCtick licensed. Call 0405 133 761.",
  keywords:
    "split system installation melbourne, split system installation cost, ac installation melbourne, reverse cycle installation melbourne, Daikin installation, Fujitsu split system install, split system supply and install",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/split-system-installation-melbourne",
  },
  openGraph: {
    title: "Split System Installation Melbourne",
    description:
      "Professional split system installation in Melbourne. Daikin, Fujitsu, Mitsubishi, Samsung supplied and installed by ARCtick licensed technicians. Free quotes.",
    url: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/split-system-installation-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
