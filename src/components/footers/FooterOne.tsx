"use client";
import React from "react";
import FooterLogo from "@/assets/images/resources/footer-logo.png";
import FadeInAdvanced from "../elements/FadeInAdvanced";
import Link from "next/link";
import Image from "next/image";
const FooterOne: React.FC = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__shape-bg"></div>
      <div className="container">
        <div className="site-footer__top">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-widget__column footer-widget__newsletter">
                <h3 className="footer-widget__newsletter-title">
                  If you need heating & cooling services, technical support,{" "}
                  <br /> or have any other questions, we’re here to help.
                </h3>
                <Link href="tel:0405133761">
                  <button className="footer-widget__newsletter-btn thm-btn">
                    0405 133 761
                    <span>
                      <i className="icon-phone-call"></i>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__middle">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={100}>
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="/">
                      <Image
                        src={FooterLogo}
                        width={170}
                        height={40}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">
                    Professional heating and hydronic services in Melbourne. We
                    offer expert repairs, service, and installation across
                    Clayton South and surrounding areas.
                  </p>
                  <div className="site-footer__social">
                    <Link href="#">
                      <i className="icon-facebook-app-symbol"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon-twitter1"></i>
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
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={200}>
                <div className="footer-widget__column footer-widget__usefull-link">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Navigation</h3>
                  </div>
                  <div className="footer-widget__link-box">
                    <ul className="footer-widget__link list-unstyled">
                      <li>
                        <Link href="/about">About</Link>
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
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={300}>
                <div className="footer-widget__column footer-widget__services">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Our Services</h3>
                  </div>
                  <ul className="footer-widget__link list-unstyled">
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
                <div className="footer-widget__contact-box">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Official info</h3>
                  </div>
                  <ul className="footer-widget__contact list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <div className="content">
                        <p>
                          <a href="tel:0405133761">0405 133 761</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>
                      <div className="content">
                        <p>
                          <a href="mailto:heating.melbourne@gmail.com">
                            heating.melbourne@gmail.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-location1"></span>
                      </div>
                      <div className="content">
                        <p>5 Frank Ave, Clayton South, Melbourne, VIC</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeInAdvanced>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <div className="site-footer__bottom-inner">
            <p className="site-footer__bottom-text">
              © Copyright 2026 by <a href="#">Heater Service Melbourne</a> All
              Rights Reserved.
            </p>
            <ul className="list-unstyled site-footer__bottom-menu">
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

export default FooterOne;
