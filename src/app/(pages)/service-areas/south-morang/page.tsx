import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service South Morang | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in South Morang, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service south morang, gas ducted heating south morang, hydronic heating south morang, split system south morang, emergency heating repair south morang",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/south-morang",
  },
  openGraph: {
    title: "Heater Service South Morang | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in South Morang, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/south-morang",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="South Morang" suburbSlug="south-morang" />;
}
