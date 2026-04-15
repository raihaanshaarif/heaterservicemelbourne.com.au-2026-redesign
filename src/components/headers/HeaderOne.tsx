"use client";
import React from "react";
import logoOne from "@/assets/images/resources/logo-1.png";
import useTransportContext from "../context/useTransportContext";
import Link from "next/link";
import Image from "next/image";
import MainManuList from "../menu/MainManuList";
const HeaderOne: React.FC = () => {
  const { setIsSearch, setIsSidebar, setIsMobileManu } = useTransportContext();
  const handleMobileManu = (): void => {
    setIsMobileManu((pre: boolean) => !pre);
  };
  const handleSidebar = (): void => {
    setIsSidebar((pre) => !pre);
  };
  const handleSearch = (): void => {
    setIsSearch((pre: boolean) => !pre);
  };
  return (
    <header className="main-header">
      <div className="main-menu__top">
        <div className="main-menu__top-inner">
          <ul className="list-unstyled main-menu__contact-list">
            <li>
              <div className="icon">
                <i className="icon-phone-call"></i>
              </div>
              <div className="text">
                <p>
                  <a href="tel:0405133761">0405 133 761</a>
                </p>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="icon-email"></i>
              </div>
              <div className="text">
                <p>
                  <a href="mailto:faisalexpertise@gmail.com">
                    faisalexpertise@gmail.com
                  </a>
                </p>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="icon-location1"></i>
              </div>
              <div className="text">
                <p>5 Frank Ave Clayton South, Melbourne, VIC</p>
              </div>
            </li>
          </ul>
          <p className="main-menu__top-welcome-text">
            Professional Heating & Hydronic Services
          </p>
          <div className="main-menu__top-right">
            <div className="main-menu__top-time">
              <div className="main-menu__top-time-icon">
                <span className="fas fa-clock"></span>
              </div>
              <p className="main-menu__top-text">Mon - Sat: 09:00 - 08:00</p>
            </div>
            {/* <div className="main-menu__social">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <nav className="main-menu">
        <div className="main-menu__wrapper">
          <div className="main-menu__wrapper-inner">
            <div className="main-menu__left">
              <div className="main-menu__logo">
                <Link href="/">
                  <Image src={logoOne} width={170} height={40} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="main-menu__main-menu-box">
              <a
                href="#"
                className="mobile-nav__toggler"
                onClick={handleMobileManu}
              >
                <i className="fa fa-bars"></i>
              </a>
              <MainManuList />
            </div>
            <div className="main-menu__right">
              <div className="main-menu__call">
                <div className="main-menu__call-icon">
                  <i className="icon-phone-call"></i>
                </div>
                <div className="main-menu__call-content">
                  <p className="main-menu__call-sub-title">Call Anytime</p>
                  <h5 className="main-menu__call-number">
                    <a href="tel:0405133761">0405 133 761</a>
                  </h5>
                </div>
              </div>

              <div
                className="main-menu__nav-sidebar-icon"
                onClick={handleSidebar}
              >
                <a className="navSidebar-button" href="#">
                  <span className="icon-dots-menu-one"></span>
                  <span className="icon-dots-menu-two"></span>
                  <span className="icon-dots-menu-three"></span>
                </a>
              </div>
              <div className="main-menu__btn-box">
                <Link href="tel:0405133761" className="thm-btn">
                  0405 133 761
                  <span>
                    <i className="icon-right-arrow"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderOne;
