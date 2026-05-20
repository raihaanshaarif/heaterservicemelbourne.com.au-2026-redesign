import { Metadata } from "next";
import HaierBrandClient from "@/components/brands/haier/HaierBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Haier Heating Services Melbourne",
  description: "Expert Haier heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Haier Melbourne, Haier repair, Haier installation, heating systems, air conditioning",
  openGraph: {
    title: "Haier Services Melbourne | Expert Technicians",
    description: "Professional Haier system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/haier",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/haier",
  },
};

export default function HaierPage() {
  return (
    <>
      <DefaultBanner
        title="Haier Services"
        subTitle="Haier"
        titleLink="/brands/haier"
        asH1
      />
      <HaierBrandClient />
    </>
  );
}
