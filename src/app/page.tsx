import type { Metadata } from "next";
import FooterOne from "@/components/footers/FooterOne";
import HeaderOne from "@/components/headers/HeaderOne";
import StrickyHeader from "@/components/headers/StrickyHeader";
import AboutOne from "@/features/home-one/AboutOne";

export const metadata: Metadata = {
  title: "Heater Service Melbourne | Gas Ducted, Hydronic & Split Systems",
  description:
    "Expert heating services across Melbourne. Gas ducted heating, hydronic heating, split system air conditioning and 24/7 emergency repairs. Licensed technicians, free quotes. Call 0405 133 761.",
  keywords:
    "heating service melbourne, gas ducted heating melbourne, hydronic heating melbourne, split system melbourne, emergency heating repair, licensed gas fitters melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au",
  },
  openGraph: {
    title: "Heater Service Melbourne | Gas Ducted, Hydronic & Split Systems",
    description:
      "Expert heating services across Melbourne. Gas ducted, hydronic, split systems and 24/7 emergency repairs. Licensed technicians. Call 0405 133 761.",
    url: "https://heaterservicemelbourne.com.au",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    images: [
      {
        url: "https://heaterservicemelbourne.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heater Service Melbourne | Professional Heating & Hydronic Services",
      },
    ],
    type: "website",
  },
};
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
