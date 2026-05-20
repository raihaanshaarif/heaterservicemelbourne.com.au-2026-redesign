import { Metadata } from "next";
import HitachiBrandClient from "@/components/brands/hitachi/HitachiBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Hitachi Heating Services Melbourne",
  description: "Expert Hitachi heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Hitachi Melbourne, Hitachi repair, Hitachi installation, heating systems, air conditioning",
  openGraph: {
    title: "Hitachi Services Melbourne | Expert Technicians",
    description: "Professional Hitachi system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/hitachi",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/hitachi",
  },
};

export default function HitachiPage() {
  return (
    <>
      <DefaultBanner
        title="Hitachi Services"
        subTitle="Hitachi"
        titleLink="/brands/hitachi"
        asH1
      />
      <HitachiBrandClient />
    </>
  );
}
