import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Coburg",
  description:
    "Professional heating services in Coburg, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service coburg, gas ducted heating coburg, hydronic heating coburg, split system coburg, emergency heating repair coburg",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/coburg",
  },
  openGraph: {
    title: "Heater Service Coburg",
    description:
      "Professional heating services in Coburg, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/coburg",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Coburg" suburbSlug="coburg" />;
}
