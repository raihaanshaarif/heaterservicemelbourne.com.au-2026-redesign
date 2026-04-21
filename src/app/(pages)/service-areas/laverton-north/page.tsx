import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Laverton North | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Laverton North, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service laverton north, gas ducted heating laverton north, hydronic heating laverton north, split system laverton north, emergency heating repair laverton north",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/laverton-north",
  },
  openGraph: {
    title: "Heater Service Laverton North | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Laverton North, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/laverton-north",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Laverton North" suburbSlug="laverton-north" />;
}
