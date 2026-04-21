import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Werribee | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Werribee, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service werribee, gas ducted heating werribee, hydronic heating werribee, split system werribee, emergency heating repair werribee",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/werribee",
  },
  openGraph: {
    title: "Heater Service Werribee | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Werribee, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/werribee",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Werribee" suburbSlug="werribee" />;
}
