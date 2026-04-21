import type { Metadata } from "next";
import React from "react";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import BrandsClient from "@/components/brands/BrandsClient";

export const metadata: Metadata = {
  title: "Heating Brands We Service Melbourne | Rinnai, Brivis, Daikin & More",
  description:
    "Expert service and repair for all major heating brands in Melbourne: Rinnai, Brivis, Braemar, Vulcan, Daikin, Fujitsu, Mitsubishi, Samsung & more. Licensed technicians.",
  keywords:
    "heating brands melbourne, Rinnai service melbourne, Brivis repair melbourne, Daikin heating melbourne, Fujitsu heating service, Mitsubishi heating repair",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands",
  },
  openGraph: {
    title: "Heating Brands Serviced in Melbourne | All Major Brands",
    description:
      "We service and repair all major heating brands in Melbourne. Rinnai, Brivis, Braemar, Daikin, Fujitsu, Mitsubishi and more. Same-day service available.",
    url: "https://heaterservicemelbourne.com.au/brands",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const Page: React.FC = () => {
  return (
    <>
      <DefaultBanner
        title="Brands We Service"
        subTitle="Brands"
        titleLink="/brands"
      />
      <BrandsClient />
    </>
  );
};

export default Page;
