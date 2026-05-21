import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Truganina",
  description:
    "Professional heating services in Truganina, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service truganina, gas ducted heating truganina, hydronic heating truganina, split system truganina, emergency heating repair truganina",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/truganina",
  },
  openGraph: {
    title: "Heater Service Truganina",
    description:
      "Professional heating services in Truganina, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/truganina",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Truganina" suburbSlug="truganina" />;
}
