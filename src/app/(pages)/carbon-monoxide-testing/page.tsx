import type { Metadata } from "next";
import CarbonMonoxideTestingClient from "./CarbonMonoxideTestingClient";

export const metadata: Metadata = {
  title: "Carbon Monoxide Testing Melbourne",
  description:
    "Professional carbon monoxide testing Melbourne. Licensed CO safety inspections for gas heaters, ducted heating and appliances. Protect your family. Call 0405 133 761.",
  keywords:
    "carbon monoxide testing melbourne, carbon monoxide testing, carbon monoxide inspection, CO testing melbourne, gas heater co test, carbon monoxide safety melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/carbon-monoxide-testing",
  },
  openGraph: {
    title: "Carbon Monoxide Testing Melbourne",
    description:
      "Licensed carbon monoxide testing Melbourne. CO safety inspections for all gas heating appliances. Book today — Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/carbon-monoxide-testing",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    images: [
      {
        url: "https://heaterservicemelbourne.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Carbon Monoxide Testing Melbourne | Heater Service Melbourne",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return <CarbonMonoxideTestingClient />;
}
