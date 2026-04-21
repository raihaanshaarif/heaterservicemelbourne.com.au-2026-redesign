"use client";

import Brand11 from "../../assets/images/brand/brand-1-1.png";
import Brand12 from "../../assets/images/brand/brand-1-2.png";
import Brand13 from "../../assets/images/brand/brand-1-3.png";
import Brand14 from "../../assets/images/brand/brand-1-4.png";
import Brand15 from "../../assets/images/brand/brand-1-5.png";
import Brand16 from "../../assets/images/brand/brand-1-6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type BrandItem = {
  id: number;
  image: string | StaticImageData;
  url: string;
};

const brandsData: BrandItem[] = [
  { id: 1, image: Brand11, url: "/brands" },
  { id: 2, image: Brand12, url: "/brands" },
  { id: 3, image: Brand13, url: "/brands" },
  { id: 4, image: Brand14, url: "/brands" },
  { id: 5, image: Brand15, url: "/brands" },
  { id: 6, image: Brand16, url: "/brands" },
  { id: 7, image: Brand11, url: "/brands" },
  { id: 8, image: Brand12, url: "/brands#" },
  { id: 9, image: Brand13, url: "/brands" },
];

export default function BrandOne() {
  return (
    <section className="brand-one">
      <div className="container">
        <div className="brand-one__carousel owl-carousel owl-theme owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={6}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={500}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                492: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                1000: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
            >
              {brandsData.map((brand) => (
                <SwiperSlide key={brand.id}>
                  <div className="brand-one__single">
                    <div className="brand-one__single-inner">
                      <Link href="/brands">
                        <Image
                          src={brand?.image}
                          width={110}
                          height={100}
                          alt={`Heating system brand partner - Professional HVAC solution provider`}
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
