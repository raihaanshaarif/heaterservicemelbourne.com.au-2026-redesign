import { Metadata } from "next";
import RinnaiBrandClient from "@/components/brands/rinnai/RinnaiBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Rinnai Heating Services Melbourne",
  description: "Expert Rinnai heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Rinnai Melbourne, Rinnai repair, Rinnai installation, heating systems, air conditioning",
  openGraph: {
    title: "Rinnai Services Melbourne | Expert Technicians",
    description: "Professional Rinnai system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/rinnai",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/rinnai",
  },
};

export default function RinnaiPage() {
  return (
    <>
      <DefaultBanner
        title="Rinnai Services"
        subTitle="Rinnai"
        titleLink="/brands/rinnai"
        asH1
      />
      <RinnaiBrandClient />
    </>
  );
}
