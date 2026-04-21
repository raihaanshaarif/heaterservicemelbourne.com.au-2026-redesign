import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Melbourne CBD | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Melbourne CBD, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service melbourne cbd, gas ducted heating melbourne cbd, hydronic heating melbourne cbd, split system melbourne cbd, emergency heating repair melbourne cbd",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/melbourne-cbd",
  },
  openGraph: {
    title: "Heater Service Melbourne CBD | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Melbourne CBD, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/melbourne-cbd",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Melbourne CBD" suburbSlug="melbourne-cbd" />;
}
