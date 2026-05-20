import { Metadata } from "next";
import BrivisBrandClient from "@/components/brands/brivis/BrivisBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Brivis Heating Services Melbourne",
  description: "Expert Brivis heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Brivis Melbourne, Brivis repair, Brivis installation, heating systems, air conditioning",
  openGraph: {
    title: "Brivis Services Melbourne | Expert Technicians",
    description: "Professional Brivis system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/brivis",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/brivis",
  },
};

export default function BrivisPage() {
  return (
    <>
      <DefaultBanner
        title="Brivis Services"
        subTitle="Brivis"
        titleLink="/brands/brivis"
        asH1
      />
      <BrivisBrandClient />
    </>
  );
}
