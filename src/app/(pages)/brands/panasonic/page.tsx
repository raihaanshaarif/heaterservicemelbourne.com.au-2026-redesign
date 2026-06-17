import { Metadata } from "next";
import PanasonicBrandClient from "@/components/brands/panasonic/PanasonicBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Panasonic Air Conditioner Service & Repair Melbourne",
  description: "Expert Panasonic air conditioner service, repair, installation and maintenance across Melbourne. Panasonic air conditioning specialists with same-day service and 24/7 emergency support.",
  keywords: "panasonic air conditioner service melbourne, panasonic air conditioner service, panasonic air conditioner repair, panasonic air conditioning, panasonic repair, panasonic installation, panasonic melbourne",
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
