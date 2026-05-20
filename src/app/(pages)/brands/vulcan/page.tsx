import { Metadata } from "next";
import VulcanBrandClient from "@/components/brands/vulcan/VulcanBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Vulcan Heating Services Melbourne",
  description: "Expert Vulcan heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Vulcan Melbourne, Vulcan repair, Vulcan installation, heating systems, air conditioning",
  openGraph: {
    title: "Vulcan Services Melbourne | Expert Technicians",
    description: "Professional Vulcan system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/vulcan",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/vulcan",
  },
};

export default function VulcanPage() {
  return (
    <>
      <DefaultBanner
        title="Vulcan Services"
        subTitle="Vulcan"
        titleLink="/brands/vulcan"
        asH1
      />
      <VulcanBrandClient />
    </>
  );
}
