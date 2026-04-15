"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import MainSliderMap1 from '@/assets/images/shapes/main-slider-map-1.png';
import Image from 'next/image';
import Link from 'next/link';

const MainSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className="main-slider" id='home'>
            <div className="swiper-container thm-swiper__slider">
                <div className="swiper-wrapper">

                    <Swiper
                        modules={[Pagination, Autoplay, EffectFade]}
                        spaceBetween={0}
                        effect="fade"
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        speed={1000}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        <SwiperSlide>
                            <div className={`swiper-slide ${activeIndex === 0 ? 'swiper-slide-active' : ''}`}>
                                <div className="main-slider__pattern-bg"></div>
                                <div className="main-slider__bg-box">
                                    <div className="main-slider__bg bg_11"></div>
                                </div>
                                <div className="main-slider__shape-1"></div>
                                <div className="main-slider__shape-2"></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="main-slider__content">
                                                <h4 className="main-slider__sub-title">Fastest & Secure Logistics</h4>
                                                <h2 className="main-slider__title">Transport Goods <br /> Priority
                                                    <span>Logistics</span> <br />
                                                    <span>Simplified</span> </h2>
                                                <p className="main-slider__text">Logistic service provider company plays a pivotal
                                                    role
                                                    in the global <br /> supply chain ecosystem managing.</p>
                                                <div className="main-slider__btn-box">
                                                    <Link href="/about" className="thm-btn">Discover More
                                                        <span><i className="icon-right-arrow"></i></span>
                                                    </Link>
                                                </div>
                                                <div className="main-slider__map">
                                                    <Image src={MainSliderMap1} width={679} height={676} className="float-bob-y" alt='shape' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`swiper-slide ${activeIndex === 1 ? 'swiper-slide-active' : ''}`}>
                                <div className="main-slider__pattern-bg"></div>
                                <div className="main-slider__bg-box">
                                    <div className="main-slider__bg bg_12"></div>
                                </div>
                                <div className="main-slider__shape-1"></div>
                                <div className="main-slider__shape-2"></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="main-slider__content">
                                                <h4 className="main-slider__sub-title">100% Satisfaction</h4>
                                                <h2 className="main-slider__title">
                                                    Smart Logistic <br /> <span> & Transportation</span>
                                                    <br />
                                                    Solutions
                                                </h2>
                                                <p className="main-slider__text">
                                                    Logistic service provider company plays a pivotal role in the global
                                                    <br />
                                                    supply chain ecosystem managing.
                                                </p>
                                                <div className="main-slider__btn-box">
                                                    <Link href="/about" className="thm-btn">Discover More
                                                        <span><i className="icon-right-arrow"></i></span>
                                                    </Link>
                                                </div>
                                                <div className="main-slider__map">
                                                    <Image src={MainSliderMap1} width={679} height={676} className="float-bob-y" alt='shape' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`swiper-slide ${activeIndex === 2 ? 'swiper-slide-active' : ''}`}>
                                <div className="main-slider__pattern-bg"></div>
                                <div className="main-slider__bg-box">
                                    <div className="main-slider__bg bg_13"></div>
                                </div>
                                <div className="main-slider__shape-1"></div>
                                <div className="main-slider__shape-2"></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="main-slider__content">
                                                <h4 className="main-slider__sub-title">International Logistics</h4>
                                                <h2 className="main-slider__title">Air Logistics, <br />Cargo <span>Solutions</span>
                                                    <br />
                                                    <span>& Business</span> </h2>
                                                <p className="main-slider__text">Logistic service provider company plays a pivotal
                                                    role
                                                    in the global <br /> supply chain ecosystem managing.</p>
                                                <div className="main-slider__btn-box">
                                                    <Link href="/about" className="thm-btn">Discover More
                                                        <span><i className="icon-right-arrow"></i></span>
                                                    </Link>
                                                </div>
                                                <div className="main-slider__map">
                                                    <Image src={MainSliderMap1} width={679} height={676} className="float-bob-y" alt='shape' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="swiper-pagination" id="main-slider-pagination"></div>

            </div>
        </section>
    );
};

export default MainSlider;
