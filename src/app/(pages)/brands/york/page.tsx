import { Metadata } from "next";
import YorkBrandClient from "@/components/brands/york/YorkBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "York Heating Services Melbourne",
  description: "Expert York heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "York Melbourne, York repair, York installation, heating systems, air conditioning",
  openGraph: {
    title: "York Services Melbourne | Expert Technicians",
    description: "Professional York system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/york",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/york",
  },
};

export default function YorkPage() {
  return (
    <>
      <DefaultBanner
        title="York Services"
        subTitle="York"
        titleLink="/brands/york"
        asH1
      />
      <YorkBrandClient />
    </>
  );
}
