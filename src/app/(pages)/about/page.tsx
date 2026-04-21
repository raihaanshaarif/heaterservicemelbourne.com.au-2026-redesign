import type { Metadata } from "next";

import DefaultBanner from "@/features/default-banner/DefaultBanner";
import AboutOne from "@/features/home-one/AboutOne";
import BrandOne from "@/features/home-one/BrandOne";
import DownloadAppOne from "@/features/home-one/DownloadAppOne";
import ServicesOne from "@/features/home-one/ServicesOne";
import SlidingTextOne from "@/features/home-one/SlidingTextOne";
import BlogTwo from "@/features/home-two/BlogTwo";
import FindTransport from "@/features/home-two/FindTransport";
import TeamTwo from "@/features/home-two/TeamTwo";
import React from "react";
import TestimonialTwo from "@/features/home-two/TestimonialTwo";

export const metadata: Metadata = {
  title: "About Us | Heater Service Melbourne - Licensed Heating Specialists",
  description:
    "Learn about Heater Service Melbourne. Licensed HVAC technicians servicing all Melbourne suburbs. 10+ years experience in hydronic heating, gas ducted heating & split systems.",
  keywords:
    "about heating service melbourne, licensed heating technicians melbourne, HVAC specialists melbourne, Clayton South heating experts",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/about",
  },
  openGraph: {
    title: "About Heater Service Melbourne | Licensed Heating Specialists",
    description:
      "Licensed HVAC technicians with 10+ years experience. Hydronic heating, gas ducted heating and split systems across all Melbourne suburbs.",
    url: "https://heaterservicemelbourne.com.au/about",
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
