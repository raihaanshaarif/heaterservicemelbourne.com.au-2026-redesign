import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Wantirna | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Wantirna, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service wantirna, gas ducted heating wantirna, hydronic heating wantirna, split system wantirna, emergency heating repair wantirna",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/wantirna",
  },
  openGraph: {
    title: "Heater Service Wantirna | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Wantirna, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/wantirna",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Wantirna" suburbSlug="wantirna" />;
}
