import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Heidelberg West",
  description:
    "Professional heating services in Heidelberg West, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service heidelberg west, gas ducted heating heidelberg west, hydronic heating heidelberg west, split system heidelberg west, emergency heating repair heidelberg west",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/heidelberg-west",
  },
  openGraph: {
    title: "Heater Service Heidelberg West",
    description:
      "Professional heating services in Heidelberg West, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/heidelberg-west",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Heidelberg West" suburbSlug="heidelberg-west" />;
}
