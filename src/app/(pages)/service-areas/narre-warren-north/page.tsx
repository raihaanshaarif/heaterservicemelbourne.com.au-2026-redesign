import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Narre Warren North | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Narre Warren North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service narre warren north, gas ducted heating narre warren north, hydronic heating narre warren north, split system narre warren north, emergency heating repair narre warren north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/narre-warren-north",
  },
  openGraph: {
    title: "Heater Service Narre Warren North | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Narre Warren North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/narre-warren-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Narre Warren North" suburbSlug="narre-warren-north" />;
}
