"use client";
import React, { useState, useEffect } from "react";
// Hero image served from /public for predictable URL (enables effective preload)
import BannerOneShape3 from "@/assets/images/shapes/banner-one-shape-3.png";
import BannerOneReview11 from "@/assets/images/resources/banner-one-review-1-1.jpg";
import BannerOneReview12 from "@/assets/images/resources/banner-one-review-1-2.jpg";
import BannerOneReview13 from "@/assets/images/resources/banner-one-review-1-3.jpg";
import Image from "next/image";
import TypingEffect from "@/components/elements/TypingEffect";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";

const BannerOne: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Defer TypingEffect rendering to improve FCP
    setIsMounted(true);
  }, []);

  return (
    <section className="banner-one" id="home">
      <div className="banner-one__pattern"></div>
      <div className="banner-one__img">
        <Image
          src="/assets/images/banner-one-img-1.webp"
          width={704}
          height={384}
          alt="Professional heating service technician in Melbourne - HVAC expert"
          priority={true}
          quality={40}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 1024px, 704px"
          style={{ width: '100%', height: 'auto' }}
          fetchPriority="high"
        />
      </div>
      <div className="banner-one__shape-3 float-bob-y" style={{display: 'none'}}>
        <Image
          src={BannerOneShape3}
          width={286}
          height={270}
          alt=""
          loading="lazy"
          quality={75}
        />
      </div>
      <div className="banner-one__line-shpae1"></div>
      <div className="banner-one__line-shpae2"></div>
      <div className="container">
        <div className="banner-one__inner">
          <div className="banner-one__content-box">
            <p className="banner-one__sub-title">
              Professional Heating & Hydronic Services in Melbourne
            </p>
            <h1 className="banner-one__title">
              {" "}
              Heating & <br />
              Hydronic Repairs <br />
              {isMounted && (
                <TypingEffect
                  strings={["Service", "Repair", "Maintenance", "24/7 Emergency"]}
                />
              )}
            </h1>
            <p className="banner-one__text">
              Expert heating solutions in Melbourne. We specialize in Hydronic,{" "}
              <br /> Gas Ducted, and Split Systems for your home and office.
            </p>
            <div className="banner-one__btn-and-review-box">
              <div className="banner-one__btn-box">
                <Link href="/about" className="thm-btn">
                  Discover More
                  <span>
                    <i className="icon-right-arrow"></i>
                  </span>
                </Link>
              </div>
              {/* <div className="banner-one__review-box">
                <ul className="clearfix">
                  <li>
                    <div className="img-box">
                      <Image
                        src={BannerOneReview11}
                        width={46}
                        height={46}
                        alt="#"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <Image
                        src={BannerOneReview12}
                        width={46}
                        height={46}
                        alt="#"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <Image
                        src={BannerOneReview13}
                        width={46}
                        height={46}
                        alt="#"
                      />
                    </div>
                  </li>
                </ul>

                <div className="text-box">
                  <h2>Customer Satisfied</h2>
                  <p>
                    4.8 (<CounterUp ending={15} />k Reviews)
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
