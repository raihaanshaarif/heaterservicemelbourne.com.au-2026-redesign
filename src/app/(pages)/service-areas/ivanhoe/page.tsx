import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Ivanhoe",
  description:
    "Professional heating services in Ivanhoe, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service ivanhoe, gas ducted heating ivanhoe, hydronic heating ivanhoe, split system ivanhoe, emergency heating repair ivanhoe",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/ivanhoe",
  },
  openGraph: {
    title: "Heater Service Ivanhoe",
    description:
      "Professional heating services in Ivanhoe, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/ivanhoe",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Ivanhoe" suburbSlug="ivanhoe" />;
}
