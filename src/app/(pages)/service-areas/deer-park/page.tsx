import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Deer Park",
  description:
    "Professional heating services in Deer Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service deer park, gas ducted heating deer park, hydronic heating deer park, split system deer park, emergency heating repair deer park",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/deer-park",
  },
  openGraph: {
    title: "Heater Service Deer Park",
    description:
      "Professional heating services in Deer Park, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/deer-park",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Deer Park" suburbSlug="deer-park" />;
}
