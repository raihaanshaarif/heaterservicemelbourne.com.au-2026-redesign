import { Metadata } from "next";
import MitsubishiElectricBrandClient from "@/components/brands/mitsubishi-electric/MitsubishiElectricBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Mitsubishi Electric Heating Services Melbourne",
  description: "Expert Mitsubishi Electric heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Mitsubishi Electric Melbourne, Mitsubishi Electric repair, Mitsubishi Electric installation, heating systems, air conditioning",
  openGraph: {
    title: "Mitsubishi Electric Services Melbourne | Expert Technicians",
    description: "Professional Mitsubishi Electric system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/mitsubishi-electric",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/mitsubishi-electric",
  },
};

export default function MitsubishiElectricPage() {
  return (
    <>
      <DefaultBanner
        title="Mitsubishi Electric Services"
        subTitle="Mitsubishi Electric"
        titleLink="/brands/mitsubishi-electric"
        asH1
      />
      <MitsubishiElectricBrandClient />
    </>
  );
}
