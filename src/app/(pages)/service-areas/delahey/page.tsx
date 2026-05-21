import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Delahey",
  description:
    "Professional heating services in Delahey, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service delahey, gas ducted heating delahey, hydronic heating delahey, split system delahey, emergency heating repair delahey",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/delahey",
  },
  openGraph: {
    title: "Heater Service Delahey",
    description:
      "Professional heating services in Delahey, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/delahey",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Delahey" suburbSlug="delahey" />;
}
