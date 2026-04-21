import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service St Kilda East | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in St Kilda East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service st kilda east, gas ducted heating st kilda east, hydronic heating st kilda east, split system st kilda east, emergency heating repair st kilda east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/st-kilda-east",
  },
  openGraph: {
    title: "Heater Service St Kilda East | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in St Kilda East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/st-kilda-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="St Kilda East" suburbSlug="st-kilda-east" />;
}
