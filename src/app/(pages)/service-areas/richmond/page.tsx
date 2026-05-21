import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Richmond",
  description:
    "Professional heating services in Richmond, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service richmond, gas ducted heating richmond, hydronic heating richmond, split system richmond, emergency heating repair richmond",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/richmond",
  },
  openGraph: {
    title: "Heater Service Richmond",
    description:
      "Professional heating services in Richmond, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/richmond",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Richmond" suburbSlug="richmond" />;
}
