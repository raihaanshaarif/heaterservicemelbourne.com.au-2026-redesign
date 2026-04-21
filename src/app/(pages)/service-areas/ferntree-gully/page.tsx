import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Ferntree Gully | Gas Ducted, Hydronic & Emergency Repairs",
  description:
    "Professional heating services in Ferntree Gully, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service ferntree gully, gas ducted heating ferntree gully, hydronic heating ferntree gully, split system ferntree gully, emergency heating repair ferntree gully",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/ferntree-gully",
  },
  openGraph: {
    title: "Heater Service Ferntree Gully | Gas Ducted, Hydronic & Emergency Repairs",
    description:
      "Professional heating services in Ferntree Gully, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/ferntree-gully",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Ferntree Gully" suburbSlug="ferntree-gully" />;
}
