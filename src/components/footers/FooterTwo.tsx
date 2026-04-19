"use client";
import React from "react";
import FadeInAdvanced from "../elements/FadeInAdvanced";
import SiteFooterTwoShape1 from "@/assets/images/shapes/site-footer-two-shape-1.png";
import Logo3 from "@/assets/images/resources/logo-3.png";
import Image from "next/image";
import Link from "next/link";

const FooterTwo: React.FC = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <footer className="site-footer-two">
      <div className="site-footer-two__shape-1 float-bob-x">
        <Image src={SiteFooterTwoShape1} width={700} height={486} alt="Shape" />
      </div>
      <div className="container">
        <div className="site-footer-two__top">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={100}>
                <div className="footer-widget-two__column footer-widget-two__about">
                  <div className="footer-widget-two__logo">
                    <Link href="/">
                      <Image src={Logo3} width={170} height={40} alt="Logo" />
                    </Link>
                  </div>
                  <p className="footer-widget-two__about-text">
                    Secure other greater pleasures, or else he endures
                    <br />
                    pains to avoid worse pains selection{" "}
                  </p>
                  <ul className="footer-widget-two__contact list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <div className="content">
                        <h5>Contact</h5>
                        <p>
                          <a href="tel:885747546027">(88) 574 7546 027</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-location1"></span>
                      </div>
                      <div className="content">
                        <h5>Location</h5>
                        <p>4517 Washington Ave. Manchester, 95</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeInAdvanced>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={200}>
                <div className="footer-widget-two__column footer-widget-two__usefull-link">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Navigation</h3>
                  </div>
                  <div className="footer-widget-two__link-box">
                    <ul className="footer-widget-two__link list-unstyled">
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
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={300}>
                <div className="footer-widget-two__column footer-widget-two__services">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Our Services</h3>
                  </div>
                  <ul className="footer-widget-two__link list-unstyled">
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
                <div className="footer-widget-two__column footer-widget-two__newsletter">
                  <h3 className="footer-widget-two__newsletter-title">
                    Subscribe To Our Newsletter To Get Latest Update
                  </h3>
                  <form
                    className="footer-widget-two__newsletter-form contact-form-validated"
                    onSubmit={handleSubmit}
                  >
                    <div className="footer-widget-two__newsletter-form-input-box">
                      <input
                        type="email"
                        placeholder="Enter email address..."
                        name="email"
                        required={true}
                      />
                      <button
                        type="submit"
                        className="footer-widget-two__newsletter-btn"
                      >
                        <span className="icon-paper-plane"></span>
                      </button>
                    </div>
                    <div className="result"></div>
                  </form>
                  <div className="site-footer-two__social">
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

export default FooterTwo;
