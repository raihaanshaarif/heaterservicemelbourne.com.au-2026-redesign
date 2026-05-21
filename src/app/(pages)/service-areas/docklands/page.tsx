import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Docklands",
  description:
    "Professional heating services in Docklands, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service docklands, gas ducted heating docklands, hydronic heating docklands, split system docklands, emergency heating repair docklands",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/docklands",
  },
  openGraph: {
    title: "Heater Service Docklands",
    description:
      "Professional heating services in Docklands, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/docklands",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Docklands" suburbSlug="docklands" />;
}
