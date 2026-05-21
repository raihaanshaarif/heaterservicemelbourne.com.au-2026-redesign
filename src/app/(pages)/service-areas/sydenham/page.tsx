import type { Metadata } from "next";
import SuburbPageClient from "../SuburbPageClient";

export const metadata: Metadata = {
  title: "Heater Service Sydenham",
  description:
    "Professional heating services in Sydenham, Melbourne VIC. Gas ducted heating, hydronic heating, split system installation & repair and 24/7 emergency service. Call 0405 133 761.",
  keywords:
    "heating service sydenham, gas ducted heating sydenham, hydronic heating sydenham, split system sydenham, emergency heating repair sydenham",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/service-areas/sydenham",
  },
  openGraph: {
    title: "Heater Service Sydenham",
    description:
      "Professional heating services in Sydenham, Melbourne VIC. Gas ducted heating, hydronic heating, split system and 24/7 emergency service. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au/service-areas/sydenham",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function Page() {
  return <SuburbPageClient suburb="Sydenham" suburbSlug="sydenham" />;
}
