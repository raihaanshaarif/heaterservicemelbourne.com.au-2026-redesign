import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service East Melbourne",
  description:
    "Professional heating services in East Melbourne, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service east melbourne, gas ducted heating east melbourne, hydronic heating east melbourne, split system east melbourne, emergency heating repair east melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/east-melbourne",
  },
  openGraph: {
    title: "Heater Service East Melbourne",
    description:
      "Professional heating services in East Melbourne, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/east-melbourne",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="East Melbourne" suburbSlug="east-melbourne" />;
}
