"use client";
import React, { useEffect, useState } from "react";
import logoOne from "@/assets/images/resources/logo-1.png";
import useTransportContext from "../context/useTransportContext";
import MainManuList from "../menu/MainManuList";
import Link from "next/link";
import Image from "next/image";
const StrickyHeader: React.FC = () => {
  const { setIsSearch, setIsSidebar, setIsMobileManu } = useTransportContext();
  const [isStick, setIsSticky] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div
      className={`stricky-header stricked-menu main-menu ${isStick ? "stricky-fixed" : ""}`}
    >
      <div className="sticky-header__content">
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
              {/* <div className="main-menu__search-cart-box">
                <div className="main-menu__search-cart-box">
                  <div className="main-menu__search-box" onClick={handleSearch}>
                    <a
                      href="#"
                      className="main-menu__search searcher-toggler-box icon-search"
                    ></a>
                  </div>
                  <div className="main-menu__cart-box">
                    <a href="cart.html" className="main-menu__cart">
                      <span className="far fa-shopping-cart"></span>
                      <span className="main-menu__cart-count">02</span>
                    </a>
                  </div>
                </div>
              </div> */}
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
                  0405133761
                  <span>
                    <i className="icon-right-arrow"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrickyHeader;
