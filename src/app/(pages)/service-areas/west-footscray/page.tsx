import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service West Footscray",
  description:
    "Professional heating services in West Footscray, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service west footscray, gas ducted heating west footscray, hydronic heating west footscray, split system west footscray, emergency heating repair west footscray",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/west-footscray",
  },
  openGraph: {
    title: "Heater Service West Footscray",
    description:
      "Professional heating services in West Footscray, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/west-footscray",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="West Footscray" suburbSlug="west-footscray" />;
}
