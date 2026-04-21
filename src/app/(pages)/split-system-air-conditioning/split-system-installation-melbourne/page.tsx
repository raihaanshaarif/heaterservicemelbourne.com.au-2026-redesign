import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Split System Installation Melbourne | Supply & Install All Brands",
  description:
    "Professional split system installation in Melbourne. Daikin, Fujitsu, Mitsubishi, Samsung supplied and installed by ARCtick licensed technicians. Free quotes.",
  keywords:
    "split system installation melbourne, ac installation melbourne, Daikin installation, Fujitsu split system install, reverse cycle installation melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/split-system-air-conditioning/split-system-installation-melbourne",
  },
  openGraph: {
    title: "Split System Installation Melbourne | Supply & Install All Brands",
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
