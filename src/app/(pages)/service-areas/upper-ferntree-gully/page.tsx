import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Upper Ferntree Gully | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Upper Ferntree Gully, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service upper ferntree gully, gas ducted heating upper ferntree gully, hydronic heating upper ferntree gully, split system upper ferntree gully, emergency heating repair upper ferntree gully",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/upper-ferntree-gully",
  },
  openGraph: {
    title: "Heater Service Upper Ferntree Gully | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Upper Ferntree Gully, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/upper-ferntree-gully",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Upper Ferntree Gully" suburbSlug="upper-ferntree-gully" />;
}
