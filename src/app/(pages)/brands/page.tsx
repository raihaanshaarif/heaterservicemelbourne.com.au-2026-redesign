import React from "react";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import BrandsClient from "@/components/brands/BrandsClient";

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
