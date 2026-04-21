import FooterOne from "@/components/footers/FooterOne";
import HeaderOne from "@/components/headers/HeaderOne";
import StrickyHeader from "@/components/headers/StrickyHeader";
import AboutOne from "@/features/home-one/AboutOne";
import BannerOne from "@/features/home-one/BannerOne";

import BrandOne from "@/features/home-one/BrandOne";

import FaqOne from "@/features/home-one/FaqOne";
import ProcessOne from "@/features/home-one/ProcessOne";
import ServicesOne from "@/features/home-one/ServicesOne";
import SlidingTextOne from "@/features/home-one/SlidingTextOne";
import WhyChooseOne from "@/features/home-one/WhyChooseOne";
import TestimonialTwo from "@/features/home-two/TestimonialTwo";
import React from "react";

const page = () => {
  return (
    <div className="page-wrapper">
      <HeaderOne />
      <BannerOne />
      <AboutOne />
      <SlidingTextOne />
      <ServicesOne />
      {/* <SkillOne /> */}
      {/* <ProjectOne /> */}
      <WhyChooseOne />
      <ProcessOne />
      <BrandOne />
      <TestimonialTwo />
      {/* <CounterOne /> */}
      {/* <VideoOne /> */}
      {/* <TeamOne /> */}
      <FaqOne />
      {/* <DownloadAppOne /> */}
      {/* <BlogOne /> */}

      <FooterOne />
      <StrickyHeader />
    </div>
  );
};

export default page;
