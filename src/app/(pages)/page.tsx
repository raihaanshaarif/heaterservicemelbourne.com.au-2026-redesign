import DefaultBanner from "@/features/default-banner/DefaultBanner";
import AboutOne from "@/features/home-one/AboutOne";
import BrandOne from "@/features/home-one/BrandOne";
import DownloadAppOne from "@/features/home-one/DownloadAppOne";
import ServicesOne from "@/features/home-one/ServicesOne";
import SlidingTextOne from "@/features/home-one/SlidingTextOne";
import TestimonialThree from "@/features/home-three/TestimonialThree";
import BlogTwo from "@/features/home-two/BlogTwo";
import TeamTwo from "@/features/home-two/TeamTwo";
import React from "react";

const page: React.FC = () => {
  return (
    <>
      <DefaultBanner title="About" />
      <AboutOne />
      <SlidingTextOne />
      <ServicesOne />
      {/* <FindTransport /> */}
      <TestimonialThree />
      <DownloadAppOne />
      <TeamTwo />
      <BlogTwo />
      <BrandOne />
    </>
  );
};

export default page;
