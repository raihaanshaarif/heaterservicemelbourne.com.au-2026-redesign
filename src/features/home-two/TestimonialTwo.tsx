"use client";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import TestimonialTwoShape1 from "@/assets/images/shapes/testimonial-two-shape-1.png";
import Testimonial21 from "@/assets/images/testimonial/testimonial-2-1.jpg";
import Testimonial22 from "@/assets/images/testimonial/testimonial-2-2.jpg";
import Testimonial23 from "@/assets/images/testimonial/testimonial-2-3.jpg";
import Testimonial24 from "@/assets/images/testimonial/testimonial-2-4.jpg";
import Testimonial25 from "@/assets/images/testimonial/testimonial-2-5.jpg";
import Testimonial26 from "@/assets/images/testimonial/testimonial-2-6.jpg";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import TextAnimation from "@/components/elements/TextAnimation";
import Link from "next/link";

interface TestimonialItem {
  id: number;
  name: string;
  designation: string;
  text: string;
  clientImage: string | StaticImageData; // Imported image variable (e.g., Testimonial21)
  rating: number; // Number of stars to show
}
const testimonialData: TestimonialItem[] = [
  {
    id: 1,
    name: "David Smith",
    designation: "Melbourne Resident",
    text: "Professional and timely service. They fixed our hydronic heating system quickly during a cold snap. Highly recommend!",
    clientImage: Testimonial21,
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    designation: "Home Owner",
    text: "Great experience with the split system installation. Very clean work and the team was very polite.",
    clientImage: Testimonial22,
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    designation: "Property Manager",
    text: "Reliable heating specialists. They handle all our ducted heating maintenance for multiple properties.",
    clientImage: Testimonial23,
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Wilson",
    designation: "Melbourne Resident",
    text: "Emergency service was a lifesaver. Fixed our heater within hours of my call. Excellent service!",
    clientImage: Testimonial24,
    rating: 5,
  },
];

export default function TestimonialTwo() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  return (
    <section className="testimonial-two">
      <div className="container">
        <div className="section-title text-left sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-1">
              <i className="fas fa-cogs"></i>
            </div>
            <h6 className="section-title__tagline">Client Feedback</h6>
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-2">
              <i className="fas fa-cogs"></i>
            </div>
          </div>
          <h3 className="section-title__title">
            <TextAnimation animationStyle="style1">
              Happy Client Feedback <br /> <span>About Our Service</span>
            </TextAnimation>
          </h3>
        </div>
        <div className="testimonial-two__middle">
          <div className="testimonial-two__carousel owl-carousel owl-theme">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={1000}
              onSwiper={setSwiperInstance}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonialData.map((item) => (
                <SwiperSlide className="item" key={item.id}>
                  <div className="testimonial-two__single">
                    <div className="testimonial-two__single-inner">
                      <div className="testimonial-two__shape-1">
                        <Image
                          src={TestimonialTwoShape1}
                          width={163}
                          height={164}
                          alt="shape"
                        />
                      </div>
                      <div className="testimonial-two__quote">
                        <i className="fas fa-quote-left"></i>
                      </div>

                      <div className="testimonial-two__ratting">
                        {/* Generates stars based on the rating number */}
                        {[...Array(item.rating)].map((_, index) => (
                          <span key={index} className="fas fa-star"></span>
                        ))}
                      </div>

                      <p className="testimonial-two__text">{item.text}</p>

                      <div className="testimonial-two__client-info">
                        <div className="testimonial-two__client-img">
                          <Image
                            src={item.clientImage}
                            width={65}
                            height={65}
                            alt={item.name}
                          />
                        </div>
                        <div className="testimonial-two__client-content">
                          <h3>
                            <Link href="/testimonials">{item.name}</Link>
                          </h3>
                          <p>{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="owl-nav">
              <button
                type="button"
                role="presentation"
                className="owl-prev"
                onClick={() => swiperInstance?.slidePrev()}
              >
                <span className="icon-right-arrow"></span>
              </button>
              <button
                type="button"
                role="presentation"
                className="owl-next"
                onClick={() => swiperInstance?.slideNext()}
              >
                <span className="icon-right-arrow"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
