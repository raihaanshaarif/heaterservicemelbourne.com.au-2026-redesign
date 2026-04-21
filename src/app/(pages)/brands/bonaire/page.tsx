import { Metadata } from "next";
import BonaireBrandClient from "@/components/brands/bonaire/BonaireBrandClient";

export const metadata: Metadata = {
  title:
    "Bonaire Air Conditioning Installation & Repair Melbourne | Expert Service",
  description:
    "Professional Bonaire ducted heating, evaporative cooling & repair services in Melbourne. Emergency repairs, installation & maintenance available 24/7. Same-day service.",
  keywords:
    "Bonaire repair Melbourne, Bonaire installation, Bonaire maintenance, Bonaire emergency service, Bonaire heating, Bonaire cooling",
  openGraph: {
    title: "Bonaire Air Conditioning Services Melbourne",
    description:
      "Expert Bonaire installation, repair & maintenance. 24/7 emergency service available.",
    url: "https://heaterservicemelbourne.com.au/brands/bonaire",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/bonaire",
  },
};

export default function BonaireBrandPage() {
  return <BonaireBrandClient />;
}
