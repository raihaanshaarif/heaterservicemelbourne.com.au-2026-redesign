import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Balaclava",
  description:
    "Professional heating services in Balaclava, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service balaclava, gas ducted heating balaclava, hydronic heating balaclava, split system balaclava, emergency heating repair balaclava",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/balaclava",
  },
  openGraph: {
    title: "Heater Service Balaclava",
    description:
      "Professional heating services in Balaclava, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/balaclava",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Balaclava" suburbSlug="balaclava" />;
}
