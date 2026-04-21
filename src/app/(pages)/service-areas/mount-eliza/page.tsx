import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Mount Eliza | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Mount Eliza, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service mount eliza, gas ducted heating mount eliza, hydronic heating mount eliza, split system mount eliza, emergency heating repair mount eliza",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/mount-eliza",
  },
  openGraph: {
    title: "Heater Service Mount Eliza | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Mount Eliza, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/mount-eliza",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Mount Eliza" suburbSlug="mount-eliza" />;
}
