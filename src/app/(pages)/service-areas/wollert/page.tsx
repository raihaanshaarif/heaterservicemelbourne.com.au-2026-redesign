import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Wollert",
  description:
    "Professional heating services in Wollert, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service wollert, gas ducted heating wollert, hydronic heating wollert, split system wollert, emergency heating repair wollert",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/wollert",
  },
  openGraph: {
    title: "Heater Service Wollert",
    description:
      "Professional heating services in Wollert, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/wollert",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Wollert" suburbSlug="wollert" />;
}
