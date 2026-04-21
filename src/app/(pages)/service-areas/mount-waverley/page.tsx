import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Mount Waverley | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Mount Waverley, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service mount waverley, gas ducted heating mount waverley, hydronic heating mount waverley, split system mount waverley, emergency heating repair mount waverley",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/mount-waverley",
  },
  openGraph: {
    title: "Heater Service Mount Waverley | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Mount Waverley, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/mount-waverley",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Mount Waverley" suburbSlug="mount-waverley" />;
}
