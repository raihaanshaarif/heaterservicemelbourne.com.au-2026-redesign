import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Epping | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Epping, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service epping, gas ducted heating epping, hydronic heating epping, split system epping, emergency heating repair epping",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/epping",
  },
  openGraph: {
    title: "Heater Service Epping | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Epping, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/epping",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Epping" suburbSlug="epping" />;
}
