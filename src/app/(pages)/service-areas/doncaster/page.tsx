import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Doncaster | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Doncaster, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service doncaster, gas ducted heating doncaster, hydronic heating doncaster, split system doncaster, emergency heating repair doncaster",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/doncaster",
  },
  openGraph: {
    title: "Heater Service Doncaster | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Doncaster, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/doncaster",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Doncaster" suburbSlug="doncaster" />;
}
