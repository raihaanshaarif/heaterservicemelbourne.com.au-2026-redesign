import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Narre Warren South | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Narre Warren South, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service narre warren south, gas ducted heating narre warren south, hydronic heating narre warren south, split system narre warren south, emergency heating repair narre warren south",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/narre-warren-south",
  },
  openGraph: {
    title: "Heater Service Narre Warren South | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Narre Warren South, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/narre-warren-south",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Narre Warren South" suburbSlug="narre-warren-south" />;
}
