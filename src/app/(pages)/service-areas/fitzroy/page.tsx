import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Fitzroy",
  description:
    "Professional heating services in Fitzroy, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service fitzroy, gas ducted heating fitzroy, hydronic heating fitzroy, split system fitzroy, emergency heating repair fitzroy",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/fitzroy",
  },
  openGraph: {
    title: "Heater Service Fitzroy",
    description:
      "Professional heating services in Fitzroy, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/fitzroy",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Fitzroy" suburbSlug="fitzroy" />;
}
