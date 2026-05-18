import type { Metadata } from "next";
import { Suspense, lazy } from "react";
import FooterOne from "@/components/footers/FooterOne";
import HeaderOne from "@/components/headers/HeaderOne";
import StrickyHeader from "@/components/headers/StrickyHeader";
import AboutOne from "@/features/home-one/AboutOne";
import BannerOne from "@/features/home-one/BannerOne";
import ServicesOne from "@/features/home-one/ServicesOne";
import SlidingTextOne from "@/features/home-one/SlidingTextOne";
import { JSONLDScript } from "@/components/seo/JSONLDScript";
import { generateLocalBusinessSchema, generateHomepageServiceSchema } from "@/utils/seo/jsonLd";
import React from "react";

// Lazy load below-the-fold components for faster initial page load
const WhyChooseOne = lazy(() => import("@/features/home-one/WhyChooseOne"));
const ProcessOne = lazy(() => import("@/features/home-one/ProcessOne"));
const BrandOne = lazy(() => import("@/features/home-one/BrandOne"));
const TestimonialTwo = lazy(() => import("@/features/home-two/TestimonialTwo"));
const HomeSEOContent = lazy(() => import("@/features/home-one/HomeSEOContent"));
const FaqOne = lazy(() => import("@/features/home-one/FaqOne"));

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

const page = () => {
  return (
    <div className="page-wrapper">
      <JSONLDScript schema={generateLocalBusinessSchema()} id="local-business-schema" />
      <JSONLDScript schema={generateHomepageServiceSchema()} id="homepage-service-schema" />
      <HeaderOne />
      <BannerOne />
      <AboutOne />
      <SlidingTextOne />
      <ServicesOne />

      {/* Lazy-load below-the-fold sections for faster initial page load */}
      <Suspense fallback={null}>
        <WhyChooseOne />
      </Suspense>

      <Suspense fallback={null}>
        <ProcessOne />
      </Suspense>

      <Suspense fallback={null}>
        <BrandOne />
      </Suspense>

      <Suspense fallback={null}>
        <TestimonialTwo />
      </Suspense>

      <Suspense fallback={null}>
        <HomeSEOContent />
      </Suspense>

      <Suspense fallback={null}>
        <FaqOne />
      </Suspense>

      <FooterOne />
      <StrickyHeader />
    </div>
  );
};

export default page;
