import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Keilor Downs | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Keilor Downs, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service keilor downs, gas ducted heating keilor downs, hydronic heating keilor downs, split system keilor downs, emergency heating repair keilor downs",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/keilor-downs",
  },
  openGraph: {
    title: "Heater Service Keilor Downs | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Keilor Downs, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/keilor-downs",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Keilor Downs" suburbSlug="keilor-downs" />;
}
