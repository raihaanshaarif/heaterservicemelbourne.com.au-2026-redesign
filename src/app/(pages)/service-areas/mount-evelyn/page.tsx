import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Mount Evelyn | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Mount Evelyn, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service mount evelyn, gas ducted heating mount evelyn, hydronic heating mount evelyn, split system mount evelyn, emergency heating repair mount evelyn",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/mount-evelyn",
  },
  openGraph: {
    title: "Heater Service Mount Evelyn | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Mount Evelyn, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/mount-evelyn",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Mount Evelyn" suburbSlug="mount-evelyn" />;
}
