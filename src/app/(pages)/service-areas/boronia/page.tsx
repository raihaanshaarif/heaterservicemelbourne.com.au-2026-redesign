import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Boronia | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Boronia, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service boronia, gas ducted heating boronia, hydronic heating boronia, split system boronia, emergency heating repair boronia",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/boronia",
  },
  openGraph: {
    title: "Heater Service Boronia | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Boronia, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/boronia",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Boronia" suburbSlug="boronia" />;
}
