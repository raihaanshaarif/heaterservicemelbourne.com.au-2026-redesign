import { Metadata } from "next";
import CarrierBrandClient from "@/components/brands/carrier/CarrierBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Carrier Heating Services Melbourne",
  description: "Expert Carrier heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Carrier Melbourne, Carrier repair, Carrier installation, heating systems, air conditioning",
  openGraph: {
    title: "Carrier Services Melbourne | Expert Technicians",
    description: "Professional Carrier system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/carrier",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/carrier",
  },
};

export default function CarrierPage() {
  return (
    <>
      <DefaultBanner
        title="Carrier Services"
        subTitle="Carrier"
        titleLink="/brands/carrier"
        asH1
      />
      <CarrierBrandClient />
    </>
  );
}
