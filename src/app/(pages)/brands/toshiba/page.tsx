import { Metadata } from "next";
import ToshibaBrandClient from "@/components/brands/toshiba/ToshibaBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Toshiba Heating Services Melbourne",
  description: "Expert Toshiba heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Toshiba Melbourne, Toshiba repair, Toshiba installation, heating systems, air conditioning",
  openGraph: {
    title: "Toshiba Services Melbourne | Expert Technicians",
    description: "Professional Toshiba system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/toshiba",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/toshiba",
  },
};

export default function ToshibaPage() {
  return (
    <>
      <DefaultBanner
        title="Toshiba Services"
        subTitle="Toshiba"
        titleLink="/brands/toshiba"
        asH1
      />
      <ToshibaBrandClient />
    </>
  );
}
