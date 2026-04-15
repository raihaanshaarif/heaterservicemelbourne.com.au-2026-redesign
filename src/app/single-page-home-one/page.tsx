"use client"

import useTransportContext from '@/components/context/useTransportContext';
import FooterOne from '@/components/footers/FooterOne';
import HeaderOne from '@/components/headers/HeaderOne';
import StrickyHeader from '@/components/headers/StrickyHeader';
import AboutOne from '@/features/home-one/AboutOne';
import BannerOne from '@/features/home-one/BannerOne';
import BlogOne from '@/features/home-one/BlogOne';
import BrandOne from '@/features/home-one/BrandOne';
import CounterOne from '@/features/home-one/CounterOne';
import DownloadAppOne from '@/features/home-one/DownloadAppOne';
import FaqOne from '@/features/home-one/FaqOne';
import ProcessOne from '@/features/home-one/ProcessOne';
import ProjectOne from '@/features/home-one/ProjectOne';
import ServicesOne from '@/features/home-one/ServicesOne';
import SkillOne from '@/features/home-one/SkillOne';
import SlidingTextOne from '@/features/home-one/SlidingTextOne';
import TeamOne from '@/features/home-one/TeamOne';
import TestimonialOne from '@/features/home-one/TestimonialOne';
import VideoOne from '@/features/home-one/VideoOne';
import WhyChooseOne from '@/features/home-one/WhyChooseOne';
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
            <HeaderOne />
            <BannerOne />
            <AboutOne />
            <SlidingTextOne />
            <ServicesOne />
            <SkillOne />
            <ProjectOne />
            <WhyChooseOne />
            <ProcessOne />
            <TestimonialOne />
            <CounterOne />
            <VideoOne />
            <TeamOne />
            <FaqOne />
            <DownloadAppOne />
            <BlogOne />
            <BrandOne />
            <FooterOne />
            <StrickyHeader />
        </div>
    );
};

export default Page;
