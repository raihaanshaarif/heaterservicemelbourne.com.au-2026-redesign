import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Chirnside Park | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Chirnside Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service chirnside park, gas ducted heating chirnside park, hydronic heating chirnside park, split system chirnside park, emergency heating repair chirnside park",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/chirnside-park",
  },
  openGraph: {
    title: "Heater Service Chirnside Park | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Chirnside Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/chirnside-park",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Chirnside Park" suburbSlug="chirnside-park" />;
}
