import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Mernda",
  description:
    "Professional heating services in Mernda, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service mernda, gas ducted heating mernda, hydronic heating mernda, split system mernda, emergency heating repair mernda",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/mernda",
  },
  openGraph: {
    title: "Heater Service Mernda",
    description:
      "Professional heating services in Mernda, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/mernda",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Mernda" suburbSlug="mernda" />;
}
