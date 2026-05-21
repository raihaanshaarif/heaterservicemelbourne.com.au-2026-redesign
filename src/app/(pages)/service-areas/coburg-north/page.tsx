import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Coburg North",
  description:
    "Professional heating services in Coburg North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service coburg north, gas ducted heating coburg north, hydronic heating coburg north, split system coburg north, emergency heating repair coburg north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/coburg-north",
  },
  openGraph: {
    title: "Heater Service Coburg North",
    description:
      "Professional heating services in Coburg North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/coburg-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Coburg North" suburbSlug="coburg-north" />;
}
