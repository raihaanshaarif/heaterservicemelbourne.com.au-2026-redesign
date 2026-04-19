"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ServicesTwo21 from "@/assets/images/services/services-two-2-1.jpg";
import ServicesTwo22 from "@/assets/images/services/services-two-2-2.jpg";
import ServicesTwo23 from "@/assets/images/services/services-two-2-3.jpg";
import ServicesTwo24 from "@/assets/images/services/services-two-2-4.jpg";
import ServicesTwo25 from "@/assets/images/services/services-two-2-5.jpg";
import ServicesTwo26 from "@/assets/images/services/services-two-2-6.jpg";
import Image, { StaticImageData } from "next/image";
import TextAnimation from "@/components/elements/TextAnimation";
import Link from "next/link";

interface ServiceItemTwo {
  id: number;
  image: string | StaticImageData;
  iconClass: string;
  title: string;
  path: string;
  text: string;
}
const servicesData: ServiceItemTwo[] = [
  {
    id: 1,
    image: ServicesTwo21,
    iconClass: "icon-worldwide-shipping",
    title: "International Transport",
    path: "/international-transport",
    text: "A logistic service provider company plays a pivotal role in the global supply.",
  },
  {
    id: 2,
    image: ServicesTwo22,
    iconClass: "icon-shipment",
    title: "Ocean Freight",
    path: "/ocean-transport",
    text: "A logistic service provider company plays a pivotal role in the global supply.",
  },
  {
    id: 3,
    image: ServicesTwo23,
    iconClass: "icon-delivery-man",
    title: "Rail Freight",
    path: "/track-transport",
    text: "A logistic service provider company plays a pivotal role in the global supply.",
  },
  {
    id: 4,
    image: ServicesTwo24,
    iconClass: "icon-truck",
    title: "Road Freight",
    path: "/personal-delivery",
    text: "A logistic service provider company plays a pivotal role in the global supply.",
  },
  {
    id: 5,
    image: ServicesTwo25,
    iconClass: "icon-shipment",
    title: "Local Truck Transport",
    path: "/track-transport",
    text: "A logistic service provider company plays a pivotal role in the global supply.",
  },
  {
    id: 6,
    image: ServicesTwo26,
    iconClass: "icon-delivery-man",
    title: "Fast Personal Delivery",
    path: "/personal-delivery",
    text: "A logistic service provider company plays a pivotal role in the global supply.",
  },
];

export default function ServicesTwo() {
  return (
    <section className="services-two" id="services">
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-1">
              <i className="fas fa-cogs"></i>
            </div>
            <h6 className="section-title__tagline">Our Services</h6>
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-2">
              <i className="fas fa-cogs"></i>
            </div>
          </div>
          <h3 className="section-title__title">
            <TextAnimation animationStyle="style1">
              Efficient Logistics Services <br />
              <span>for Your Business</span>
            </TextAnimation>
          </h3>
        </div>
        <div className="services-two__carousel owl-theme owl-carousel">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            modules={[Navigation, Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {servicesData.map((service: ServiceItemTwo) => (
              <SwiperSlide className="item" key={service.id}>
                <div className="services-two__single">
                  <div className="services-two__img">
                    <Image
                      src={service.image}
                      width={410}
                      height={300}
                      alt={service.title}
                    />
                  </div>
                  <div className="services-two__content">
                    <div className="services-two__icon">
                      <span className={service.iconClass}></span>
                    </div>
                    <div className="services-two__title">
                      <h3>
                        <Link href={service.path}>{service.title}</Link>
                      </h3>
                    </div>
                    <p className="services-two__text">{service.text}</p>
                    <ul className="services-two__point">
                      <li>
                        <div className="icon">
                          <span className="fas fa-check"></span>
                        </div>
                        <div className="text">
                          <p>Quality Control System</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="fas fa-check"></span>
                        </div>
                        <div className="text">
                          <p>Real-Time Tracking</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="fas fa-check"></span>
                        </div>
                        <div className="text">
                          <p>100% True Result Provide</p>
                        </div>
                      </li>
                    </ul>
                    <div className="services-two__btn">
                      <Link href={service.path}>
                        Read More <span className="icon-next"></span>
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
