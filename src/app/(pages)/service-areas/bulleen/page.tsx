import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Bulleen",
  description:
    "Professional heating services in Bulleen, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service bulleen, gas ducted heating bulleen, hydronic heating bulleen, split system bulleen, emergency heating repair bulleen",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/bulleen",
  },
  openGraph: {
    title: "Heater Service Bulleen",
    description:
      "Professional heating services in Bulleen, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/bulleen",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Bulleen" suburbSlug="bulleen" />;
}
