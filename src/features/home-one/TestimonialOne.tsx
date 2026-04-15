"use client";

import Testimonial11 from '@/assets/images/testimonial/testimonial-1-1.jpg';
import Testimonial12 from '@/assets/images/testimonial/testimonial-1-2.jpg';
import Testimonial13 from '@/assets/images/testimonial/testimonial-1-3.jpg';
import TestimonialOneThamb11 from '@/assets/images/testimonial/testimonial-one-thamb-1-1.jpg';
import TestimonialOneThamb12 from '@/assets/images/testimonial/testimonial-one-thamb-1-2.jpg';
import TestimonialOneThamb13 from '@/assets/images/testimonial/testimonial-one-thamb-1-3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import Link from 'next/link';
type TestimonialItem = {
    id: number;
    image: string | StaticImageData;
    name: string;
    designation: string;
    message: string;
    rating: number;
};
const testimonialsData: TestimonialItem[] = [
    {
        id: 1,
        image: Testimonial11,
        name: "Alisha Martin",
        designation: "Senior Marketing Manager",
        message:
            "Open gathering they are nights brings living abundantly cent that may be wonor wasinton created shell first two beginning beast all airot you ando divide subdue one herb light",
        rating: 5,
    },
    {
        id: 2,
        image: Testimonial12,
        name: "Asle Backum",
        designation: "Senior Marketing Manager",
        message:
            "Open gathering they are nights brings living abundantly cent that may be wonor wasinton created shell first two beginning beast all airot you ando divide subdue one herb light",
        rating: 5,
    },
    {
        id: 3,
        image: Testimonial13,
        name: "Adam Smith",
        designation: "Senior Marketing Manager",
        message:
            "Open gathering they are nights brings living abundantly cent that may be wonor wasinton created shell first two beginning beast all airot you ando divide subdue one herb light",
        rating: 5,
    },
];
interface ThumbItem {
    id: number;
    image: string | StaticImageData;
}
const thumbItems: ThumbItem[] = [
    { id: 10, image: TestimonialOneThamb11 },
    { id: 20, image: TestimonialOneThamb12 },
    { id: 30, image: TestimonialOneThamb13 },
    { id: 40, image: TestimonialOneThamb11 },
    { id: 50, image: TestimonialOneThamb12 },
    { id: 60, image: TestimonialOneThamb13 },
]

export default function TestimonialOne() {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <>
            {/* Testimonial One Start */}
            <section className="testimonial-one">
                <div className="testimonial-one-shape__bg"></div>
                <div className="container">
                    <div className="testimonial-one__inner">
                        <div className="testimonial-one__main-content">
                            <div className="swiper-container" id="testimonial-one__carousel">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    speed={1000}
                                    modules={[Navigation, Autoplay]}
                                    onSwiper={setSwiperInstance}
                                >
                                    {
                                        testimonialsData.map((testimonial) => (
                                            <SwiperSlide key={testimonial?.id}>
                                                <div className="swiper-slide">
                                                    <div className="testimonial-one__main-content-inner">
                                                        <div className="row">
                                                            <div className="col-xl-5 col-lg-5">
                                                                <div className="testimonial-one__left">
                                                                    <div className="testimonial-one__img">
                                                                        <Image src={testimonial?.image} width={520} height={510} alt='Image' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-7 col-lg-7">
                                                                <div className="testimonial-one__right">
                                                                    <div
                                                                        className="section-title text-left sec-title-animation animation-style1">
                                                                        <div className="section-title__tagline-box">
                                                                            <span className="section-title__tagline-border"></span>
                                                                            <div className="section-title__shape-1">
                                                                                <i className="fas fa-plane"></i>
                                                                            </div>
                                                                            <h6 className="section-title__tagline">Client Feedback
                                                                            </h6>
                                                                            <span className="section-title__tagline-border"></span>
                                                                            <div className="section-title__shape-2">
                                                                                <i className="fas fa-plane"></i>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="section-title__title">
                                                                            <TextAnimation animationStyle="style1">
                                                                                <span>Happy Client Feedback</span>
                                                                                About Our Service
                                                                            </TextAnimation>
                                                                        </h3>
                                                                    </div>
                                                                    <p className="testimonial-one__text">{testimonial?.message}</p>
                                                                    <div className="testimonial-one__client-info-box">
                                                                        <div className="testimonial-one__client-info">
                                                                            <h3><Link href="/testimonials">{testimonial?.name}</Link></h3>
                                                                            <p>{testimonial?.designation}</p>
                                                                        </div>
                                                                        <div className="testimonial-one__ratting">
                                                                            {
                                                                                testimonial?.rating >= 1 && [...Array(testimonial.rating)].map((_, i) => (
                                                                                    <span key={i} className="fas fa-star"></span>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div className="testimonial-one__quote">
                                                                        <i className="fas fa-quote-left"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            <div className="testimonial-one__nav">
                                <div className="swiper-button-next" id="testimonial-one__swiper-button-prev" onClick={() => swiperInstance?.slidePrev()}>
                                    <i className="icon-next"></i>
                                </div>
                                <div className="swiper-button-prev" id="testimonial-one__swiper-button-next" onClick={() => swiperInstance?.slideNext()}>
                                    <i className="icon-next"></i>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-one__thumb-box" >
                            <div className="swiper-container" id="testimonial-one__thumb">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        direction="vertical"
                                        slidesPerView={3}
                                        spaceBetween={5}
                                        loop={true}
                                        speed={1000}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[Autoplay]}
                                    >
                                        {
                                            thumbItems.map((thumb) => (
                                                <SwiperSlide key={thumb?.id}>
                                                    <div className="swiper-slide" key={thumb?.id}>
                                                        <div className="testimonial-one__img-holder-box">
                                                            <div className="testimonial-one__img-holder">
                                                                <Image src={thumb?.image} width={161} height={161} alt='Image' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonial One End */}
        </>

    );
}
