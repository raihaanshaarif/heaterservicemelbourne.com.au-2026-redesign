import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Tyabb | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Tyabb, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service tyabb, gas ducted heating tyabb, hydronic heating tyabb, split system tyabb, emergency heating repair tyabb",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/tyabb",
  },
  openGraph: {
    title: "Heater Service Tyabb | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Tyabb, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/tyabb",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Tyabb" suburbSlug="tyabb" />;
}
