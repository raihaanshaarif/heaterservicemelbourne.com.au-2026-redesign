import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Collingwood",
  description:
    "Professional heating services in Collingwood, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service collingwood, gas ducted heating collingwood, hydronic heating collingwood, split system collingwood, emergency heating repair collingwood",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/collingwood",
  },
  openGraph: {
    title: "Heater Service Collingwood",
    description:
      "Professional heating services in Collingwood, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/collingwood",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Collingwood" suburbSlug="collingwood" />;
}
