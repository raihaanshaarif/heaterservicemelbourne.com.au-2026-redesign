"use client";

import { useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import TestimonialThree11 from '@/assets/images/testimonial/testimonial-three-1-1.png';
import TestimonialThree12 from '@/assets/images/testimonial/testimonial-three-1-2.png';
import TestimonialThree13 from '@/assets/images/testimonial/testimonial-three-1-3.png';
import TestimonialThreeThamb11 from '@/assets/images/testimonial/testimonial-three-thamb-1-1.jpg';
import TestimonialThreeThamb12 from '@/assets/images/testimonial/testimonial-three-thamb-1-2.jpg';
import TestimonialThreeThamb13 from '@/assets/images/testimonial/testimonial-three-thamb-1-3.jpg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


export interface TestimonialItem {
    id: number;
    name: string;
    designation: string;
    text: string;
    image: string | StaticImageData; // Assuming these are imported image paths
    rating: number;
}

const testimonialData: TestimonialItem[] = [
    {
        id: 1,
        name: "Alisha Martin",
        designation: "Senior Marketing Manager",
        image: TestimonialThree11,
        rating: 5,
        text: "Open gathering they are nights multiple={true} brings living abundantly cent that may be wonor wasinton created shell first two beginning beast all airot you ando divide subdue one herb light"
    },
    {
        id: 2,
        name: "Kevin Martin",
        designation: "Senior Marketing Manager",
        image: TestimonialThree12,
        rating: 5,
        text: "Open gathering they are nights multiple={true} brings living abundantly cent that may be wonor wasinton created shell first two beginning beast all airot you ando divide subdue one herb light"
    },
    {
        id: 3,
        name: "Jessica Brown",
        designation: "Senior Marketing Manager",
        image: TestimonialThree13,
        rating: 5,
        text: "Open gathering they are nights multiple={true} brings living abundantly cent that may be wonor wasinton created shell first two beginning beast all airot you ando divide subdue one herb light"
    }
];
interface ThumbItem {
    id: number;
    image: string | StaticImageData;
}
const thumbItems: ThumbItem[] = [
    { id: 10, image: TestimonialThreeThamb11 },
    { id: 20, image: TestimonialThreeThamb12 },
    { id: 30, image: TestimonialThreeThamb13 },
    { id: 40, image: TestimonialThreeThamb11 },
    { id: 50, image: TestimonialThreeThamb12 },
    { id: 60, image: TestimonialThreeThamb13 },
]
export default function TestimonialThree() {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <section className="testimonial-three">
            <div className="container">
                <div className="testimonial-three__inner">
                    <div className="testimonial-two-shape__bg bg_testimonials_three" ></div>
                    <div className="testimonial-three__main-content">
                        <div className="swiper-container" id="testimonial-three__carousel">

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: false,
                                }}
                                speed={1000}
                                modules={[Navigation, Autoplay]}
                                onSwiper={setSwiperInstance}
                            >
                                {testimonialData.map((item: TestimonialItem) => (
                                    <SwiperSlide className="swiper-slide" key={item?.id}>
                                        <div className="testimonial-three__main-content-inner">
                                            <div className="testimonial-three__main-content-box">
                                                <div className="testimonial-three__quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <p className="testimonial-three__text">{item.text}</p>
                                                <div className="testimonial-three__client-info-box">
                                                    <div className="testimonial-three__client-info">
                                                        <h3><Link href="/testimonials">{item.name}</Link></h3>
                                                        <p>{item.designation}</p>
                                                    </div>
                                                    <div className="testimonial-three__ratting">
                                                        {[...Array(item.rating)].map((_, index) => (
                                                            <span key={index} className="fas fa-star"></span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial-three__img">
                                                <Image src={item.image} width={480} height={480} alt={item.name} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="testimonial-three__nav">
                            <div className="swiper-button-next" id="testimonial-three__swiper-button-prev" onClick={() => swiperInstance?.slidePrev()}>
                                <i className="icon-next"></i>
                            </div>
                            <div className="swiper-button-prev" id="testimonial-three__swiper-button-next" onClick={() => swiperInstance?.slideNext()}>
                                <i className="icon-next"></i>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-three__thumb-box">
                        <div className="swiper-container" id="testimonial-three__thumb">
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
                                        thumbItems.map((item: ThumbItem) => (
                                            <SwiperSlide key={item?.id}>

                                                <div className="swiper-slide" key={item?.id}>
                                                    <div className="testimonial-three__img-holder-box">
                                                        <div className="testimonial-three__img-holder">
                                                            <Image src={item?.image} width={90} height={90} alt="Image" />
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
        </section >
    );
}
