import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Balwyn",
  description:
    "Professional heating services in Balwyn, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service balwyn, gas ducted heating balwyn, hydronic heating balwyn, split system balwyn, emergency heating repair balwyn",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/balwyn",
  },
  openGraph: {
    title: "Heater Service Balwyn",
    description:
      "Professional heating services in Balwyn, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/balwyn",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Balwyn" suburbSlug="balwyn" />;
}
