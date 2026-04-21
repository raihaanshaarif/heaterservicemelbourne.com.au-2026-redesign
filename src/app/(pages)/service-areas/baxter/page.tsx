import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Baxter | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Baxter, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service baxter, gas ducted heating baxter, hydronic heating baxter, split system baxter, emergency heating repair baxter",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/baxter",
  },
  openGraph: {
    title: "Heater Service Baxter | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Baxter, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/baxter",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Baxter" suburbSlug="baxter" />;
}
