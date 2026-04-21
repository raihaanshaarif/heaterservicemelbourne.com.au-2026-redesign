import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Gas Heater Repair Melbourne | All Brands, Same-Day Service",
  description:
    "Expert gas heater repair in Melbourne. All brands including Brivis, Rinnai, Braemar, Vulcan. Licensed gas fitters, same-day service available. Call 0405 133 761.",
  keywords:
    "gas heater repair melbourne, ducted heater repair, Brivis repair melbourne, Rinnai heater repair, gas heater not working melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-heater-repair-melbourne",
  },
  openGraph: {
    title: "Gas Heater Repair Melbourne | All Brands, Same-Day Service",
    description:
      "Expert gas heater repair in Melbourne. All brands including Brivis, Rinnai, Braemar, Vulcan. Licensed gas fitters, same-day service available. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-heater-repair-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <ServiceSubPageClient />;
}
