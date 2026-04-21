"use client";

import React from "react";
import AboutOneShape1 from "@/assets/images/shapes/about-one-shape-1.png";
import AboutOneShape2 from "@/assets/images/shapes/about-one-shape-2.png";
import AboutOneAuthorSign from "@/assets/images/resources/about-one-author-sign.png";
import AboutOneImg1 from "@/assets/images/resources/about-one-img-1.jpg";
import AboutOneReviewImg11 from "@/assets/images/resources/about-one-review-img-1-1.jpg";
import AboutOneReviewImg12 from "@/assets/images/resources/about-one-review-img-1-2.jpg";
import AboutOneReviewImg13 from "@/assets/images/resources/about-one-review-img-1-3.jpg";
import AboutOneReviewImg14 from "@/assets/images/resources/about-one-review-img-1-4.jpg";
import AboutOneAuthorImg1 from "@/assets/images/resources/about-one-author-img-1.jpg";
import useTransportContext from "@/components/context/useTransportContext";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import Image from "next/image";
import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
import TextAnimation from "@/components/elements/TextAnimation";

const AboutOne: React.FC = () => {
  const { handleVideoClick } = useTransportContext();
  return (
    <section className="about-one" id="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-one__left">
              <FadeInAdvanced
                variant={"slideInLeft"}
                delay={100}
                duration={2500}
              >
                <div className="about-one__img-box">
                  <div className="about-one__img">
                    <Image
                      src={AboutOneImg1}
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                    />
                  </div>
                  <div className="about-one__review-and-experience-box">
                    <div className="about-one__review-box">
                      <ul className="list-unstyled about-one__review-list">
                        <li>
                          <div className="about-one__review-img"></div>
                        </li>
                        <li>
                          <div className="about-one__review-img"></div>
                        </li>
                        <li>
                          <div className="about-one__review-img"></div>
                        </li>
                        <li>
                          <div className="about-one__review-img"></div>
                        </li>
                      </ul>
                      <div className="about-one__review-star">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                      </div>
                      <p className="about-one__review-text">
                        Clients 4.8 (567 Reviews)
                      </p>
                    </div>
                    <div className="about-one__experience-box">
                      <div className="about-one__experience-count">
                        <h3>
                          <CounterUp ending={10} />
                        </h3>
                        <span>+</span>
                      </div>
                      <p className="about-one__experience-count-text">
                        Years Of <br /> Experience
                      </p>
                    </div>
                    <div className="about-one__video-link"></div>
                  </div>
                  <div className="about-one__circle-text">
                    <div className="about-one__round-text-box">
                      <div className="inner">
                        <div className="about-one__curved-circle rotate-me">
                          {"EXPERT HEATING REPAIR IN MELBOURNE "
                            .split("")
                            .map((char, index) => (
                              <span
                                key={index}
                                style={{
                                  transform: `rotate(${index * 9.72}deg)`,
                                  position: "absolute",
                                  transformOrigin: "center 7.33333em",
                                  left: "50%",
                                  marginLeft: "-0.4em",
                                }}
                              >
                                {char}
                              </span>
                            ))}
                        </div>
                      </div>
                      <div className="overlay-icon-box">
                        <Link href="/about">
                          <i className="icon-customer-loyalty"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="about-one__shape-1">
                    <Image
                      src={AboutOneShape1}
                      width={98}
                      height={110}
                      alt="about"
                    />
                  </div>
                  <div className="about-one__shape-2">
                    <Image
                      src={AboutOneShape2}
                      width={131}
                      height={115}
                      alt="about"
                    />
                  </div>
                </div>
              </FadeInAdvanced>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-one__right">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline-border"></span>
                  <div className="section-title__shape-1">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h6 className="section-title__tagline">ABOUT US</h6>
                  <span className="section-title__tagline-border"></span>
                  <div className="section-title__shape-2">
                    <i className="fas fa-cogs"></i>
                  </div>
                </div>
                <h3 className="section-title__title">
                  <TextAnimation animationStyle="style2">
                    Expert Heating & <span>Hydronic Solutions</span>
                  </TextAnimation>
                </h3>
              </div>
              <p className="about-one__text">
                Heater Service Melbourne is your trusted local specialist for
                comprehensive heating solutions. With decades of experience, we
                provide expert installation, maintenance, and repairs for
                hydronic heating, gas ducted systems, and split systems across
                Melbourne.
              </p>
              <div className="about-one__point-box">
                <ul className="about-one__point">
                  <li>
                    <div className="about-one__point-icon">
                      <span className="icon-worldwide-shipping-1"></span>
                    </div>
                    <div className="about-one__point-content">
                      <h4>Melbourne Wide</h4>
                      <p>
                        Serving all suburbs in Melbourne with quality heating.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="about-one__point-icon">
                      <span className="icon-24-hours-service"></span>
                    </div>
                    <div className="about-one__point-content">
                      <h4>24/7 Support</h4>
                      <p>
                        Emergency heating repairs available around the clock.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="about-one__point-box-two">
                <ul className="about-one__point-two">
                  <li>
                    <div className="icon">
                      <span className="fas fa-check"></span>
                    </div>
                    <div className="text">
                      <p>Licensed Technicians</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fas fa-check"></span>
                    </div>
                    <div className="text">
                      <p>Affordable Cost</p>
                    </div>
                  </li>
                </ul>
                <ul className="about-one__point-two about-one__point-two--three">
                  <li>
                    <div className="icon">
                      <span className="fas fa-check"></span>
                    </div>
                    <div className="text">
                      <p>100% Satisfaction Guarantee</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fas fa-check"></span>
                    </div>
                    <div className="text">
                      <p>Clean & Professional</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="about-one__btn-and-author-box">
                <div className="about-one__btn-box">
                  <Link href="/about" className="thm-btn">
                    Read More
                    <span>
                      <i className="icon-right-arrow"></i>
                    </span>
                  </Link>
                </div>
                <div className="about-one__author-box">
                  <div className="about-one__author-details">
                    <div className="about-one__author-img-box">
                      <div className="about-one__author-img">
                        {/* <Image
                          src={AboutOneAuthorImg1}
                          width={72}
                          height={72}
                          alt="about"
                        /> */}
                      </div>
                    </div>
                    <div className="about-one__author-content">
                      <h4>Faisal Khan</h4>
                      <p>Founder & Specialist</p>
                    </div>
                  </div>
                  {/* <div className="about-one__author-sign">
                    <Image
                      src={AboutOneAuthorSign}
                      width={86}
                      height={70}
                      alt="about"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
