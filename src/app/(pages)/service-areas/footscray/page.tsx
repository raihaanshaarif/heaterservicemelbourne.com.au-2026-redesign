import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Footscray",
  description:
    "Professional heating services in Footscray, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service footscray, gas ducted heating footscray, hydronic heating footscray, split system footscray, emergency heating repair footscray",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/footscray",
  },
  openGraph: {
    title: "Heater Service Footscray",
    description:
      "Professional heating services in Footscray, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/footscray",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Footscray" suburbSlug="footscray" />;
}
