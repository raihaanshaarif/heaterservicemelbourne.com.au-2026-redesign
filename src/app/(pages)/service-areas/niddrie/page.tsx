import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Niddrie",
  description:
    "Professional heating services in Niddrie, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service niddrie, gas ducted heating niddrie, hydronic heating niddrie, split system niddrie, emergency heating repair niddrie",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/niddrie",
  },
  openGraph: {
    title: "Heater Service Niddrie",
    description:
      "Professional heating services in Niddrie, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/niddrie",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Niddrie" suburbSlug="niddrie" />;
}
