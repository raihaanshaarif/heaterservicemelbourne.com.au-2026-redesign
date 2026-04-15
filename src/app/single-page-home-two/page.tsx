"use client"

import FooterTwo from '@/components/footers/FooterTwo';
import HeaderTwo from '@/components/headers/HeaderTwo';
import StrickyHeaderTwo from '@/components/headers/StrickyHeaderTwo';
import BrandOne from '@/features/home-one/BrandOne';
import AboutTwo from '@/features/home-two/AboutTwo';
import BlogTwo from '@/features/home-two/BlogTwo';
import ContactTwo from '@/features/home-two/ContactTwo';
import CounterTwo from '@/features/home-two/CounterTwo';
import CtaOne from '@/features/home-two/CtaOne';
import FeatureTwo from '@/features/home-two/FeatureTwo';
import FindTransport from '@/features/home-two/FindTransport';
import MainSlider from '@/features/home-two/MainSlider';
import OfficeLocation from '@/features/home-two/OfficeLocation';
import PricingTwo from '@/features/home-two/PricingTwo';
import ProjectTwo from '@/features/home-two/ProjectTwo';
import ServicesTwo from '@/features/home-two/ServicesTwo';
import TeamTwo from '@/features/home-two/TeamTwo';
import TestimonialTwo from '@/features/home-two/TestimonialTwo';
import VideoTwo from '@/features/home-two/VideoTwo';
import WhyChooseTwo from '@/features/home-two/WhyChooseTwo';


import useTransportContext from '@/components/context/useTransportContext';
import React, { useEffect } from 'react';

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
            <HeaderTwo />
            <MainSlider />
            <FeatureTwo />
            <AboutTwo />
            <ServicesTwo />
            <WhyChooseTwo />
            <CtaOne />
            <ProjectTwo />
            <OfficeLocation />
            <CounterTwo />
            <FindTransport />
            <VideoTwo />
            <TestimonialTwo />
            <PricingTwo />
            <ContactTwo />
            <TeamTwo />
            <BlogTwo />
            <BrandOne />
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Page;
