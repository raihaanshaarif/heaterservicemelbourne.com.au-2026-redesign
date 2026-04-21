import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Parkdale | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Parkdale, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service parkdale, gas ducted heating parkdale, hydronic heating parkdale, split system parkdale, emergency heating repair parkdale",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/parkdale",
  },
  openGraph: {
    title: "Heater Service Parkdale | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Parkdale, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/parkdale",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Parkdale" suburbSlug="parkdale" />;
}
