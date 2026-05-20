import type { Metadata } from "next";
import HotWaterRepairsClient from "./HotWaterRepairsClient";

export const metadata: Metadata = {
  title: "Hot Water Repairs Melbourne | Same Day",
  description:
    "Fast hot water repairs Melbourne. Expert hot water system repair, hot water replacement, same day hot water service. Licensed technicians, no hot water? Call 0405 133 761.",
  keywords:
    "hot water repairs, hot water repairs melbourne, hot water system repair, hot water repair, same day hot water service, hot water replacement melbourne, hot water service melbourne, hot water tank repair near me",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/hot-water-repairs",
  },
  openGraph: {
    title: "Hot Water Repairs Melbourne | Same Day",
    description:
      "Fast hot water repairs Melbourne. Expert hot water system repair and replacement. Same day service available. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/hot-water-repairs",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    images: [
      {
        url: "https://heaterservicemelbourne.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hot Water Repairs Melbourne | Heater Service Melbourne",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return <HotWaterRepairsClient />;
}
