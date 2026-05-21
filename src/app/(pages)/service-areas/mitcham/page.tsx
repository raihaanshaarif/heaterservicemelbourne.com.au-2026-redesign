import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Mitcham",
  description:
    "Professional heating services in Mitcham, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service mitcham, gas ducted heating mitcham, hydronic heating mitcham, split system mitcham, emergency heating repair mitcham",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/mitcham",
  },
  openGraph: {
    title: "Heater Service Mitcham",
    description:
      "Professional heating services in Mitcham, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/mitcham",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Mitcham" suburbSlug="mitcham" />;
}
