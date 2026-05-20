"use client";

import ActronAir from "../../assets/images/brands/ActronAir.png";
import Bonaire from "../../assets/images/brands/Bonaire.png";
import Braemar from "../../assets/images/brands/Braemar.png";
import Breezair from "../../assets/images/brands/breezeair.png";
import Brivis from "../../assets/images/brands/Brivis.png";
import Carrier from "../../assets/images/brands/Carrier.png";
import Celair from "../../assets/images/brands/Celair.png";
import Fujitsu from "../../assets/images/brands/Fujitsu.png";
import Haier from "../../assets/images/brands/Haier.png";
import Hitachi from "../../assets/images/brands/Hitachi.png";
import Kaden from "../../assets/images/brands/Kaden.png";
import Lg from "../../assets/images/brands/Lg.png";
import Mitsubishi from "../../assets/images/brands/mitsubishi.png";
import Panasonic from "../../assets/images/brands/Panasonic.png";
import Rinnai from "../../assets/images/brands/Rinnai.png";
import Samsung from "../../assets/images/brands/Samsung.png";
import Sharp from "../../assets/images/brands/Sharp.png";
import Toshiba from "../../assets/images/brands/Toshiba.png";
import Vulcan from "../../assets/images/brands/Vulcan.png";
import York from "../../assets/images/brands/York.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type BrandItem = {
  id: number;
  image: StaticImageData;
  url: string;
  name: string;
};

const brandsData: BrandItem[] = [
  { id: 1, image: ActronAir, url: "/brands/actronair", name: "ActronAir" },
  { id: 2, image: Bonaire, url: "/brands/bonaire", name: "Bonaire" },
  { id: 3, image: Braemar, url: "/brands/braemar", name: "Braemar" },
  { id: 4, image: Breezair, url: "/brands/breezair", name: "Breezair" },
  { id: 5, image: Brivis, url: "/brands/brivis", name: "Brivis" },
  { id: 6, image: Carrier, url: "/brands/carrier", name: "Carrier" },
  { id: 7, image: Celair, url: "/brands/celair", name: "Celair" },
  { id: 8, image: Fujitsu, url: "/brands/fujitsu", name: "Fujitsu" },
  { id: 9, image: Haier, url: "/brands/haier", name: "Haier" },
  { id: 10, image: Hitachi, url: "/brands/hitachi", name: "Hitachi" },
  { id: 11, image: Kaden, url: "/brands/kaden", name: "Kaden" },
  { id: 12, image: Lg, url: "/brands/lg", name: "LG" },
  { id: 13, image: Mitsubishi, url: "/brands/mitsubishi-electric", name: "Mitsubishi Electric" },
  { id: 14, image: Panasonic, url: "/brands/panasonic", name: "Panasonic" },
  { id: 15, image: Rinnai, url: "/brands/rinnai", name: "Rinnai" },
  { id: 16, image: Samsung, url: "/brands/samsung", name: "Samsung" },
  { id: 17, image: Sharp, url: "/brands/sharp", name: "Sharp" },
  { id: 18, image: Toshiba, url: "/brands/toshiba", name: "Toshiba" },
  { id: 19, image: Vulcan, url: "/brands/vulcan", name: "Vulcan" },
  { id: 20, image: York, url: "/brands/york", name: "York" },
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
                      <Link href={brand.url}>
                        <Image
                          src={brand?.image}
                          width={110}
                          height={100}
                          alt={`${brand.name} heating systems - Professional HVAC solutions`}
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
