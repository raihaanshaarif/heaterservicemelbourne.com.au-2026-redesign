import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Doveton | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Doveton, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service doveton, gas ducted heating doveton, hydronic heating doveton, split system doveton, emergency heating repair doveton",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/doveton",
  },
  openGraph: {
    title: "Heater Service Doveton | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Doveton, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/doveton",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Doveton" suburbSlug="doveton" />;
}
