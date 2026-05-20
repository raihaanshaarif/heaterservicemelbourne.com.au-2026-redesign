import { Metadata } from "next";
import BrivisBrandClient from "@/components/brands/brivis/BrivisBrandClient";
import DefaultBanner from "@/features/default-banner/DefaultBanner";

export const metadata: Metadata = {
  title: "Brivis Ducted Heating Service Melbourne | Repair & Maintenance",
  description: "Licensed Brivis ducted heating service Melbourne. Expert Brivis central heating, Brivis gas heating repairs and installation. Same-day service available. Call 0405 133 761.",
  keywords: "brivis ducted heating, brivis ducted heating service, brivis central heating, brivis gas heating, brivis heating melbourne, brivis service melbourne, brivis heating and cooling",
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
