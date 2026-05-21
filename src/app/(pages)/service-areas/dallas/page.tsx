import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Dallas",
  description:
    "Professional heating services in Dallas, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service dallas, gas ducted heating dallas, hydronic heating dallas, split system dallas, emergency heating repair dallas",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/dallas",
  },
  openGraph: {
    title: "Heater Service Dallas",
    description:
      "Professional heating services in Dallas, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/dallas",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Dallas" suburbSlug="dallas" />;
}
