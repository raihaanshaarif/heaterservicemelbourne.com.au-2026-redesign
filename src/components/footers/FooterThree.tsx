"use client";
import React from "react";
import FadeInAdvanced from "../elements/FadeInAdvanced";
import SiteFooterThreeShape1 from "@/assets/images/shapes/site-footer-three-shape-1.png";
import SiteFooterThreeShape2 from "@/assets/images/shapes/site-footer-three-shape-2.png";
import FooterLogo from "@/assets/images/resources/footer-logo.png";
import FooterWidgetInstagramImg1 from "@/assets/images/project/footer-widget-instagram-img-1.jpg";
import FooterWidgetInstagramImg2 from "@/assets/images/project/footer-widget-instagram-img-2.jpg";
import FooterWidgetInstagramImg3 from "@/assets/images/project/footer-widget-instagram-img-3.jpg";
import FooterWidgetInstagramImg4 from "@/assets/images/project/footer-widget-instagram-img-4.jpg";
import FooterWidgetInstagramImg5 from "@/assets/images/project/footer-widget-instagram-img-5.jpg";
import FooterWidgetInstagramImg6 from "@/assets/images/project/footer-widget-instagram-img-6.jpg";
import Image from "next/image";
import Link from "next/link";

const FooterThree: React.FC = () => {
  return (
    <footer className="site-footer-three">
      <div className="site-footer-three__shape-1 float-bob-x">
        <Image
          src={SiteFooterThreeShape1}
          width={395}
          height={371}
          alt="Shape"
        />
      </div>
      <div className="site-footer-three__shape-2 float-bob-y">
        <Image
          src={SiteFooterThreeShape2}
          width={461}
          height={375}
          alt="Shape"
        />
      </div>
      <div className="container">
        <div className="site-footer-three__top">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={100}>
                <div className="footer-widget-three__column footer-widget-three__about">
                  <div className="footer-widget-three__logo">
                    <Link href="/">
                      <Image
                        src={FooterLogo}
                        width={170}
                        height={40}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <p className="footer-widget-three__about-text">
                    Eros vivamus platea nullam id consequat eu sociis lectus
                    aliquam nibh auctor elitsed libero pharetra consequat and
                    fad sociis conubia favorite to risus.
                  </p>
                  <div className="site-footer-three__social">
                    <Link href="#">
                      <i className="icon-facebook-app-symbol"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon-instagram"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                  </div>
                </div>
              </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={200}>
                <div className="footer-widget-three__column footer-widget-three__usefull-link">
                  <div className="footer-widget-three__title-box">
                    <h3 className="footer-widget-three__title">Navigation</h3>
                  </div>
                  <div className="footer-widget-three__link-box">
                    <ul className="footer-widget-three__link list-unstyled">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/service-areas">Service Areas</Link>
                      </li>
                      <li>
                        <Link href="/brands">Brands</Link>
                      </li>
                      <li>
                        <Link href="/self-care">Self Care</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInAdvanced>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={300}>
                <div className="footer-widget-three__column footer-widget-three__services">
                  <div className="footer-widget-three__title-box">
                    <h3 className="footer-widget-three__title">Our Services</h3>
                  </div>
                  <ul className="footer-widget-three__link list-unstyled">
                    <li>
                      <Link href="/hydronic-heating">Hydronic Heating</Link>
                    </li>
                    <li>
                      <Link href="/gas-ducted-heating">Gas Ducted Heating</Link>
                    </li>
                    <li>
                      <Link href="/split-system-air-conditioning">
                        Split Systems
                      </Link>
                    </li>
                    <li>
                      <Link href="/emergency-services">Emergency Services</Link>
                    </li>
                  </ul>
                </div>
              </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={400}>
                <div className="footer-widget-three__column footer-widget-three__instagram">
                  <div className="footer-widget-three__title-box">
                    <h3 className="footer-widget-three__title">Instagram</h3>
                  </div>
                  <ul className="footer-widget-three__instagram-list list-unstyled clearfix">
                    <li>
                      <div className="footer-widget-three__instagram-img">
                        <Image
                          src={FooterWidgetInstagramImg1}
                          width={83}
                          height={83}
                          alt="Image"
                        />
                        <Link href="/project-details">
                          <span className="fab fa-instagram"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-three__instagram-img">
                        <Image
                          src={FooterWidgetInstagramImg2}
                          width={83}
                          height={83}
                          alt="Image"
                        />
                        <Link href="/project-details">
                          <span className="fab fa-instagram"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-three__instagram-img">
                        <Image
                          src={FooterWidgetInstagramImg3}
                          width={83}
                          height={83}
                          alt="Image"
                        />
                        <Link href="/project-details">
                          <span className="fab fa-instagram"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-three__instagram-img">
                        <Image
                          src={FooterWidgetInstagramImg4}
                          width={83}
                          height={83}
                          alt="Image"
                        />
                        <Link href="/project-details">
                          <span className="fab fa-instagram"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-three__instagram-img">
                        <Image
                          src={FooterWidgetInstagramImg5}
                          width={83}
                          height={83}
                          alt="Image"
                        />
                        <Link href="/project-details">
                          <span className="fab fa-instagram"></span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-three__instagram-img">
                        <Image
                          src={FooterWidgetInstagramImg6}
                          width={83}
                          height={83}
                          alt="Image"
                        />
                        <Link href="/project-details">
                          <span className="fab fa-instagram"></span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeInAdvanced>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer-two__bottom">
        <div className="container">
          <div className="site-footer-two__bottom-inner">
            <p className="site-footer-two__bottom-text">
              © Copywright 2026 by <Link href="#">tanspot</Link> All Rights
              Reserved.
            </p>
            <ul className="list-unstyled site-footer-two__bottom-menu">
              <li>
                <Link href="/contact">Support</Link>
              </li>
              <li>
                <Link href="/about">Terms and Condition</Link>
              </li>
              <li>
                <Link href="/about">Privacy and Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
