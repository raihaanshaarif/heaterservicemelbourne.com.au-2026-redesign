import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Gas Ducted Heating Installation Melbourne | Free Quotes",
  description:
    "Professional gas ducted heating installation in Melbourne. All brands supplied and installed by licensed gas fitters. Free quotes, competitive pricing. Call 0405 133 761.",
  keywords:
    "gas ducted heating installation melbourne, ducted gas heating install, new ducted heater melbourne, gas heating system installation melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-ducted-installation-melbourne",
  },
  openGraph: {
    title: "Gas Ducted Heating Installation Melbourne | Free Quotes",
    description:
      "Professional gas ducted heating installation in Melbourne. All brands supplied and installed by licensed gas fitters. Free quotes, competitive pricing. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-ducted-installation-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
