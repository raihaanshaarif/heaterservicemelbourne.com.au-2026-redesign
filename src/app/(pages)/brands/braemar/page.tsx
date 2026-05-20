import { Metadata } from "next";
import BraemarBrandClient from "@/components/brands/braemar/BraemarBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Braemar Heating Services Melbourne",
  description: "Expert Braemar heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Braemar Melbourne, Braemar repair, Braemar installation, heating systems, air conditioning",
  openGraph: {
    title: "Braemar Services Melbourne | Expert Technicians",
    description: "Professional Braemar system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/braemar",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/braemar",
  },
};

export default function BraemarPage() {
  return (
    <>
      <DefaultBanner
        title="Braemar Services"
        subTitle="Braemar"
        titleLink="/brands/braemar"
        asH1
      />
      <BraemarBrandClient />
    </>
  );
}
