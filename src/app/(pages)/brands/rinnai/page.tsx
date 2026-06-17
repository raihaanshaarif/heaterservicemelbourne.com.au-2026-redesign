import { Metadata } from "next";
import RinnaiBrandClient from "@/components/brands/rinnai/RinnaiBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Rinnai Gas Heaters Service & Repair Melbourne",
  description: "Expert Rinnai gas heaters service, repair, installation and maintenance across Melbourne. Rinnai heating system specialists with same-day service and 24/7 emergency support.",
  keywords: "rinnai gas heaters service, rinnai gas heaters, rinnai heating service, rinnai heater service, rinnai repair, rinnai installation, rinnai melbourne",
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
