import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Lara | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Lara, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service lara, gas ducted heating lara, hydronic heating lara, split system lara, emergency heating repair lara",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/lara",
  },
  openGraph: {
    title: "Heater Service Lara | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Lara, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/lara",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Lara" suburbSlug="lara" />;
}
