import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Keilor Lodge | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Keilor Lodge, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service keilor lodge, gas ducted heating keilor lodge, hydronic heating keilor lodge, split system keilor lodge, emergency heating repair keilor lodge",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/keilor-lodge",
  },
  openGraph: {
    title: "Heater Service Keilor Lodge | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Keilor Lodge, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/keilor-lodge",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Keilor Lodge" suburbSlug="keilor-lodge" />;
}
