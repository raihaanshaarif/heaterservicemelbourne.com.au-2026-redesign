import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service St Kilda | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in St Kilda, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service st kilda, gas ducted heating st kilda, hydronic heating st kilda, split system st kilda, emergency heating repair st kilda",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/st-kilda",
  },
  openGraph: {
    title: "Heater Service St Kilda | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in St Kilda, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/st-kilda",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="St Kilda" suburbSlug="st-kilda" />;
}
