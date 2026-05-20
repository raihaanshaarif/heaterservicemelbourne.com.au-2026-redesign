import { Metadata } from "next";
import FujitsuBrandClient from "@/components/brands/fujitsu/FujitsuBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Fujitsu Heating Services Melbourne",
  description: "Expert Fujitsu heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Fujitsu Melbourne, Fujitsu repair, Fujitsu installation, heating systems, air conditioning",
  openGraph: {
    title: "Fujitsu Services Melbourne | Expert Technicians",
    description: "Professional Fujitsu system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/fujitsu",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/fujitsu",
  },
};

export default function FujitsuPage() {
  return (
    <>
      <DefaultBanner
        title="Fujitsu Services"
        subTitle="Fujitsu"
        titleLink="/brands/fujitsu"
        asH1
      />
      <FujitsuBrandClient />
    </>
  );
}
