import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Vermont",
  description:
    "Professional heating services in Vermont, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service vermont, gas ducted heating vermont, hydronic heating vermont, split system vermont, emergency heating repair vermont",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/vermont",
  },
  openGraph: {
    title: "Heater Service Vermont",
    description:
      "Professional heating services in Vermont, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/vermont",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Vermont" suburbSlug="vermont" />;
}
