"use client";
import React from "react";
import useTransportContext from "../context/useTransportContext";
import Logo from "@/assets/images/resources/logo-3.png";
import MobileManuList from "./MobileManuList";
import SinglePageManuList from "../menu/SinglePageManuList";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const MobileNav: React.FC = () => {
  const { isMobileManu, setIsMobileManu } = useTransportContext();
  const currentPath = usePathname();
  const isOnePage = currentPath.includes("single-page");

  const handleMobileManu = (): void => {
    setIsMobileManu((pre) => !pre);
  };

  return (
    <div className={`mobile-nav__wrapper ${isMobileManu ? "expanded" : ""}`}>
      <div
        className="mobile-nav__overlay mobile-nav__toggler"
        onClick={handleMobileManu}
      ></div>
      {/* <!-- /.mobile-nav__overlay --> */}
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close mobile-nav__toggler"
          onClick={handleMobileManu}
        >
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/" aria-label="logo image" onClick={handleMobileManu}>
            <Image src={Logo} width={140} height={33} alt="Logo" />
          </Link>
        </div>
        <div className="mobile-nav__container">
          {isOnePage ? <SinglePageManuList /> : <MobileManuList />}
        </div>
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:heating.melbourne@gmail.com">
              heating.melbourne@gmail.com
            </a>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href="tel:0405133761">0405 133 761</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-facebook-square"></a>
            <a href="#" className="fab fa-pinterest-p"></a>
            <a href="#" className="fab fa-instagram"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
