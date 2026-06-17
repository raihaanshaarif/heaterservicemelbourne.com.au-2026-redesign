import { Metadata } from "next";
import KadenBrandClient from "@/components/brands/kaden/KadenBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Kaden Air Conditioning Service & Repair Melbourne",
  description: "Expert Kaden air conditioning service, repair, installation and maintenance across Melbourne. Kaden air conditioning specialists with same-day service and 24/7 emergency support.",
  keywords: "kaden air conditioning, kaden air conditioning service, kaden air conditioning repair, kaden heating systems, kaden repair, kaden installation, kaden melbourne",
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
