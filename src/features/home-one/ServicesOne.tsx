"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import TextAnimation from "@/components/elements/TextAnimation";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem, servicesData } from "@/contents/services/serviceData";

export default function ServicesOne() {
  return (
    <section className="services-one" id="services">
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-1">
              <i className="fas fa-plane"></i>
            </div>
            <h6 className="section-title__tagline">Our Services</h6>
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-2">
              <i className="fas fa-plane"></i>
            </div>
          </div>
          <h3 className="section-title__title">
            <TextAnimation animationStyle="style1">
              Expert Heating & <br />
              <span>Hydronic Services</span>
            </TextAnimation>
          </h3>
        </div>
        <div className="services-one__carousel owl-theme owl-carousel">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {servicesData.map((service: ServiceItem) => (
              <SwiperSlide className="item" key={service?.id}>
                <div className="services-one__single">
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <Image
                        src={service?.image}
                        width={308}
                        height={256}
                        alt={service?.title}
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className={service.iconClass}></span>
                    </div>
                  </div>
                  <div className="services-one__content">
                    <div className="services-one__count">{service.count}</div>
                    <h4 className="services-one__title">
                      <Link href={service.link}>{service.title}</Link>
                    </h4>
                    <p className="services-one__text">{service.text}</p>
                    <div className="services-one__btn-box">
                      <Link href={service.link}>
                        Read More <span className="icon-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
