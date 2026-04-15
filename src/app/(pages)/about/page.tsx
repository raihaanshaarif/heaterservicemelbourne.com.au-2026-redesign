import type { Metadata } from "next";

import DefaultBanner from "@/features/default-banner/DefaultBanner";
import AboutOne from "@/features/home-one/AboutOne";
import BrandOne from "@/features/home-one/BrandOne";
import DownloadAppOne from "@/features/home-one/DownloadAppOne";
import ServicesOne from "@/features/home-one/ServicesOne";
import SlidingTextOne from "@/features/home-one/SlidingTextOne";
import TestimonialThree from "@/features/home-three/TestimonialThree";
import BlogTwo from "@/features/home-two/BlogTwo";
import FindTransport from "@/features/home-two/FindTransport";
import TeamTwo from "@/features/home-two/TeamTwo";
import React from "react";
import TestimonialTwo from "@/features/home-two/TestimonialTwo";

export const metadata: Metadata = {
  title: "About Us | Tanspot - Logistics and Transportation NextJS Template",
};

const page: React.FC = () => {
  return (
    <>
      <DefaultBanner title="About" />
      <AboutOne />
      <SlidingTextOne />
      <ServicesOne />
      <FindTransport />
      <TestimonialTwo />
      {/* <DownloadAppOne /> */}
      {/* <TeamTwo /> */}
      {/* <BlogTwo /> */}
      <BrandOne />
    </>
  );
};

export default page;
