import type { Metadata } from "next";
import ServiceSubPageClient from "./ServiceSubPageClient";

export const metadata: Metadata = {
  title: "Gas Heater Repair & Servicing Melbourne | Emergency Service",
  description:
    "Expert gas heater repair and servicing Melbourne. Licensed gas heater technician for gas heater servicing, gas heater repairs, fix gas heater, ducted heating repairs and heating repair near me. Same-day service. Call 0405 133 761.",
  keywords:
    "gas heater repair melbourne, gas heater repairs melbourne, gas heater technician, gas heater servicing, gas heater servicing melbourne, gas heater service near me, gas heater repair service, fix gas heater, heating repair near me, ducted heater repair, ducted heating repair melbourne, ducted heating repairs melbourne, gas ducted heating repairs, gas heater servicing melbourne, gas heaters service melbourne, Brivis repair melbourne, Rinnai heater repair",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/gas-ducted-heating/gas-heater-repair-melbourne",
  },
  openGraph: {
    title: "Gas Heater Repair Melbourne",
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
