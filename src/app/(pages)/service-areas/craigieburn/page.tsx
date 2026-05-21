import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Craigieburn",
  description:
    "Professional heating services in Craigieburn, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service craigieburn, gas ducted heating craigieburn, hydronic heating craigieburn, split system craigieburn, emergency heating repair craigieburn",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/craigieburn",
  },
  openGraph: {
    title: "Heater Service Craigieburn",
    description:
      "Professional heating services in Craigieburn, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/craigieburn",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Craigieburn" suburbSlug="craigieburn" />;
}
