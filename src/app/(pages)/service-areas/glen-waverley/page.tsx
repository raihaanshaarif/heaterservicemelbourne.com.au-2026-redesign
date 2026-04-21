import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Glen Waverley | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Glen Waverley, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service glen waverley, gas ducted heating glen waverley, hydronic heating glen waverley, split system glen waverley, emergency heating repair glen waverley",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/glen-waverley",
  },
  openGraph: {
    title: "Heater Service Glen Waverley | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Glen Waverley, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/glen-waverley",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Glen Waverley" suburbSlug="glen-waverley" />;
}
