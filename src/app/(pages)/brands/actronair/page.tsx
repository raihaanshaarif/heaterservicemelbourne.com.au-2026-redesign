import { Metadata } from "next";
import ActronAirBrandClient from "@/components/brands/actronair/ActronAirBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "ActronAir Heating Services Melbourne",
  description: "Expert ActronAir heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "ActronAir Melbourne, ActronAir repair, ActronAir installation, heating systems, air conditioning",
  openGraph: {
    title: "ActronAir Services Melbourne | Expert Technicians",
    description: "Professional ActronAir system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/actronair",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/actronair",
  },
};

export default function ActronAirPage() {
  return (
    <>
      <DefaultBanner
        title="ActronAir Services"
        subTitle="ActronAir"
        titleLink="/brands/actronair"
        asH1
      />
      <ActronAirBrandClient />
    </>
  );
}
