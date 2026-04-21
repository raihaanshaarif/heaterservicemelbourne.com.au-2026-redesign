import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Macleod | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Macleod, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service macleod, gas ducted heating macleod, hydronic heating macleod, split system macleod, emergency heating repair macleod",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/macleod",
  },
  openGraph: {
    title: "Heater Service Macleod | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Macleod, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/macleod",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Macleod" suburbSlug="macleod" />;
}
