import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Belgrave | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Belgrave, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service belgrave, gas ducted heating belgrave, hydronic heating belgrave, split system belgrave, emergency heating repair belgrave",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/belgrave",
  },
  openGraph: {
    title: "Heater Service Belgrave | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Belgrave, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/belgrave",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Belgrave" suburbSlug="belgrave" />;
}
