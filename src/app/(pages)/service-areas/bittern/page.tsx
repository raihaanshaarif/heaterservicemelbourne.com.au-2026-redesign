import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Bittern | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Bittern, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service bittern, gas ducted heating bittern, hydronic heating bittern, split system bittern, emergency heating repair bittern",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/bittern",
  },
  openGraph: {
    title: "Heater Service Bittern | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Bittern, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/bittern",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Bittern" suburbSlug="bittern" />;
}
