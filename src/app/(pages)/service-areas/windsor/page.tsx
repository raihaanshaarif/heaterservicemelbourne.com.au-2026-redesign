import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Windsor",
  description:
    "Professional heating services in Windsor, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service windsor, gas ducted heating windsor, hydronic heating windsor, split system windsor, emergency heating repair windsor",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/windsor",
  },
  openGraph: {
    title: "Heater Service Windsor",
    description:
      "Professional heating services in Windsor, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/windsor",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Windsor" suburbSlug="windsor" />;
}
