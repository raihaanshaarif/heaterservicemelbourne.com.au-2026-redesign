"use client"

import useTransportContext from '@/components/context/useTransportContext';
import React, { useEffect } from 'react';
import FooterThree from '@/components/footers/FooterThree';
import HeaderThree from '@/components/headers/HeaderThree';
import StrickyHeaderThree from '@/components/headers/StrickyHeaderThree';
import BlogOne from '@/features/home-one/BlogOne';
import BrandOne from '@/features/home-one/BrandOne';
import CounterOne from '@/features/home-one/CounterOne';
import DownloadAppOne from '@/features/home-one/DownloadAppOne';
import FaqOne from '@/features/home-one/FaqOne';
import ProcessOne from '@/features/home-one/ProcessOne';
import ProjectOne from '@/features/home-one/ProjectOne';
import SlidingTextOne from '@/features/home-one/SlidingTextOne';
import TeamOne from '@/features/home-one/TeamOne';
import WhyChooseOne from '@/features/home-one/WhyChooseOne';
import AboutThree from '@/features/home-three/AboutThree';
import BannerThree from '@/features/home-three/BannerThree';
import FeatureThree from '@/features/home-three/FeatureThree';
import QuoteOne from '@/features/home-three/QuoteOne';
import ServicesThree from '@/features/home-three/ServicesThree';
import TestimonialThree from '@/features/home-three/TestimonialThree';
import CtaOne from '@/features/home-two/CtaOne';
import FindTransport from '@/features/home-two/FindTransport';


const Page: React.FC = () => {
    const { setActiveSection } = useTransportContext();

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.7,
            }
        );
        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, [setActiveSection]);


    return (
        <div className="page-wrapper">
            <HeaderThree />
            <BannerThree />
            <FeatureThree />
            <AboutThree />
            <SlidingTextOne />
            <ServicesThree />
            <ProjectOne />
            <WhyChooseOne />
            <QuoteOne />
            <ProcessOne />
            <CtaOne />
            <CounterOne />
            <FindTransport />
            <TestimonialThree />
            <DownloadAppOne />
            <TeamOne />
            <FaqOne />
            <BlogOne />
            <BrandOne />
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default Page;
