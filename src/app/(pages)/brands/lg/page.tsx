import { Metadata } from "next";
import LGBrandClient from "@/components/brands/lg/LGBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "LG Heating Services Melbourne",
  description: "Expert LG heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "LG Melbourne, LG repair, LG installation, heating systems, air conditioning",
  openGraph: {
    title: "LG Services Melbourne | Expert Technicians",
    description: "Professional LG system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/lg",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/lg",
  },
};

export default function LgPage() {
  return (
    <>
      <DefaultBanner
        title="LG Services"
        subTitle="LG"
        titleLink="/brands/lg"
        asH1
      />
      <LGBrandClient />
    </>
  );
}
