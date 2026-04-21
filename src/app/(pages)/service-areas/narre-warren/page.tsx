import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Narre Warren | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Narre Warren, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service narre warren, gas ducted heating narre warren, hydronic heating narre warren, split system narre warren, emergency heating repair narre warren",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/narre-warren",
  },
  openGraph: {
    title: "Heater Service Narre Warren | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Narre Warren, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/narre-warren",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Narre Warren" suburbSlug="narre-warren" />;
}
