import { Metadata } from "next";
import KadenBrandClient from "@/components/brands/kaden/KadenBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Kaden Heating Services Melbourne",
  description: "Expert Kaden heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Kaden Melbourne, Kaden repair, Kaden installation, heating systems, air conditioning",
  openGraph: {
    title: "Kaden Services Melbourne | Expert Technicians",
    description: "Professional Kaden system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/kaden",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/kaden",
  },
};

export default function KadenPage() {
  return (
    <>
      <DefaultBanner
        title="Kaden Services"
        subTitle="Kaden"
        titleLink="/brands/kaden"
        asH1
      />
      <KadenBrandClient />
    </>
  );
}
