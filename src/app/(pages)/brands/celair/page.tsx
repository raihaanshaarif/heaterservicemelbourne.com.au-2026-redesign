import { Metadata } from "next";
import CelairBrandClient from "@/components/brands/celair/CelairBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Celair Heating Services Melbourne",
  description: "Expert Celair heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Celair Melbourne, Celair repair, Celair installation, heating systems, air conditioning",
  openGraph: {
    title: "Celair Services Melbourne | Expert Technicians",
    description: "Professional Celair system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/celair",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/celair",
  },
};

export default function CelairPage() {
  return (
    <>
      <DefaultBanner
        title="Celair Services"
        subTitle="Celair"
        titleLink="/brands/celair"
        asH1
      />
      <CelairBrandClient />
    </>
  );
}
