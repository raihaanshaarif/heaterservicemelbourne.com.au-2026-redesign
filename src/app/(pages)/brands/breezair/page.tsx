import { Metadata } from "next";
import BreezairBrandClient from "@/components/brands/breezair/BreezairBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Breezair Heating Services Melbourne",
  description: "Expert Breezair heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Breezair Melbourne, Breezair repair, Breezair installation, heating systems, air conditioning",
  openGraph: {
    title: "Breezair Services Melbourne | Expert Technicians",
    description: "Professional Breezair system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/breezair",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/breezair",
  },
};

export default function BreezairPage() {
  return (
    <>
      <DefaultBanner
        title="Breezair Services"
        subTitle="Breezair"
        titleLink="/brands/breezair"
        asH1
      />
      <BreezairBrandClient />
    </>
  );
}
