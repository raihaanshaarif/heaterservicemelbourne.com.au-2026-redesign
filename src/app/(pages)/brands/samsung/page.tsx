import { Metadata } from "next";
import SamsungBrandClient from "@/components/brands/samsung/SamsungBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Samsung Heating Services Melbourne",
  description: "Expert Samsung heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Samsung Melbourne, Samsung repair, Samsung installation, heating systems, air conditioning",
  openGraph: {
    title: "Samsung Services Melbourne | Expert Technicians",
    description: "Professional Samsung system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/samsung",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/samsung",
  },
};

export default function SamsungPage() {
  return (
    <>
      <DefaultBanner
        title="Samsung Services"
        subTitle="Samsung"
        titleLink="/brands/samsung"
        asH1
      />
      <SamsungBrandClient />
    </>
  );
}
