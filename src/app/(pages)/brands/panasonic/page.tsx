import { Metadata } from "next";
import PanasonicBrandClient from "@/components/brands/panasonic/PanasonicBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Panasonic Heating Services Melbourne",
  description: "Expert Panasonic heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Panasonic Melbourne, Panasonic repair, Panasonic installation, heating systems, air conditioning",
  openGraph: {
    title: "Panasonic Services Melbourne | Expert Technicians",
    description: "Professional Panasonic system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/panasonic",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/panasonic",
  },
};

export default function PanasonicPage() {
  return (
    <>
      <DefaultBanner
        title="Panasonic Services"
        subTitle="Panasonic"
        titleLink="/brands/panasonic"
        asH1
      />
      <PanasonicBrandClient />
    </>
  );
}
