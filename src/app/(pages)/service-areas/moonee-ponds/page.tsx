import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Moonee Ponds",
  description:
    "Professional heating services in Moonee Ponds, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service moonee ponds, gas ducted heating moonee ponds, hydronic heating moonee ponds, split system moonee ponds, emergency heating repair moonee ponds",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/moonee-ponds",
  },
  openGraph: {
    title: "Heater Service Moonee Ponds",
    description:
      "Professional heating services in Moonee Ponds, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/moonee-ponds",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Moonee Ponds" suburbSlug="moonee-ponds" />;
}
