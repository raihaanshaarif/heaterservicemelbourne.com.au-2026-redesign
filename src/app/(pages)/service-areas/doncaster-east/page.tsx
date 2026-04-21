import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Doncaster East | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Doncaster East, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service doncaster east, gas ducted heating doncaster east, hydronic heating doncaster east, split system doncaster east, emergency heating repair doncaster east",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/doncaster-east",
  },
  openGraph: {
    title: "Heater Service Doncaster East | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Doncaster East, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/doncaster-east",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Doncaster East" suburbSlug="doncaster-east" />;
}
