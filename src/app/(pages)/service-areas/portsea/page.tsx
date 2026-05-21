import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Portsea",
  description:
    "Professional heating services in Portsea, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service portsea, gas ducted heating portsea, hydronic heating portsea, split system portsea, emergency heating repair portsea",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/portsea",
  },
  openGraph: {
    title: "Heater Service Portsea",
    description:
      "Professional heating services in Portsea, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/portsea",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Portsea" suburbSlug="portsea" />;
}
