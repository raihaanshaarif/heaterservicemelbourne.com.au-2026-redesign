import { Metadata } from "next";
import BraemarBrandClient from "@/components/brands/braemar/BraemarBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Braemar Ducted Heating Service Melbourne | Repair & Installation",
  description: "Licensed Braemar ducted heating service Melbourne. Expert Braemar heating and cooling Melbourne — repair, installation and maintenance. Same-day service available. Call 0405 133 761.",
  keywords: "braemar ducted heating service melbourne, braemar ducted heating service, braemar heating and cooling melbourne, braemar ducted heating, braemar heating, braemar heater, braemar ducted gas heating melbourne",
  openGraph: {
    title: "Braemar Services Melbourne | Expert Technicians",
    description: "Professional Braemar system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/braemar",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/braemar",
  },
};

export default function BraemarPage() {
  return (
    <>
      <DefaultBanner
        title="Braemar Services"
        subTitle="Braemar"
        titleLink="/brands/braemar"
        asH1
      />
      <BraemarBrandClient />
    </>
  );
}
