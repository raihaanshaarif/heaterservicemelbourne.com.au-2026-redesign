import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Glen Huntly",
  description:
    "Professional heating services in Glen Huntly, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service glen huntly, gas ducted heating glen huntly, hydronic heating glen huntly, split system glen huntly, emergency heating repair glen huntly",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/glen-huntly",
  },
  openGraph: {
    title: "Heater Service Glen Huntly",
    description:
      "Professional heating services in Glen Huntly, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/glen-huntly",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Glen Huntly" suburbSlug="glen-huntly" />;
}
