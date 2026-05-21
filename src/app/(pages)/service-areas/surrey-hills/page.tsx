import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Surrey Hills",
  description:
    "Professional heating services in Surrey Hills, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service surrey hills, gas ducted heating surrey hills, hydronic heating surrey hills, split system surrey hills, emergency heating repair surrey hills",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/surrey-hills",
  },
  openGraph: {
    title: "Heater Service Surrey Hills",
    description:
      "Professional heating services in Surrey Hills, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/surrey-hills",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Surrey Hills" suburbSlug="surrey-hills" />;
}
