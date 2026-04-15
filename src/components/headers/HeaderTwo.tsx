"use client";
import React from 'react';
import Logo2 from '@/assets/images/resources/logo-2.png';
import useTransportContext from '../context/useTransportContext';
import Link from 'next/link';
import MainManuList from '../menu/MainManuList';
import Image from 'next/image';

const HeaderTwo: React.FC = () => {
    const { setIsSearch, setIsSidebar, setIsMobileManu } = useTransportContext();

    const handleMobileManu = (): void => {
        setIsMobileManu((pre: boolean) => !pre)
    }
    const handleSidebar = (): void => {
        setIsSidebar((pre) => !pre)
    }
    const handleSearch = (): void => {
        setIsSearch((pre: boolean) => !pre)
    }

    return (
        <header className="main-header-two">
            <div className="main-menu-two__top">
                <div className="main-menu-two__top-inner">
                    <ul className="list-unstyled main-menu-two__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-phone-call"></i>
                            </div>
                            <div className="text">
                                <p><a href="tel:15502505260">+1 (550) 250 5260</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-email"></i>
                            </div>
                            <div className="text">
                                <p><a href="mailto:info@tanspot24.com">info@tanspot24.com</a>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-location1"></i>
                            </div>
                            <div className="text">
                                <p>4124 Cimmaron Road, CA 92806</p>
                            </div>
                        </li>
                    </ul>
                    <div className="main-menu-two__top-right">
                        <div className="main-menu-two__top-time">
                            <div className="main-menu-two__top-time-icon">
                                <span className="fas fa-clock"></span>
                            </div>
                            <p className="main-menu-two__top-text">Mon - Fri: 09:00 - 05:00</p>
                        </div>
                        <div className="main-menu-two__social">
                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                            <Link href="#"><i className="fab fa-facebook"></i></Link>
                            <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link href="/"><Image src={Logo2} width={170} height={40} alt='Logo' /></Link>
                            </div>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                            <Link href="#" className="mobile-nav__toggler" onClick={handleMobileManu}><i className="fa fa-bars"></i></Link>
                            <MainManuList />
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__right-content">
                                <div className="main-menu-two__call">
                                    <div className="main-menu-two__call-icon">
                                        <i className="icon-phone-call"></i>
                                    </div>
                                    <div className="main-menu-two__call-content">
                                        <p className="main-menu-two__call-sub-title">Call Anytime</p>
                                        <h5 className="main-menu-two__call-number"><a href="tel:9288006780">+92 ( 8800 ) -
                                            6780</a></h5>
                                    </div>
                                </div>
                                <div className="main-menu-two__search-cart-box">
                                    <div className="main-menu-two__search-cart-box">
                                        <div className="main-menu-two__search-box" onClick={handleSearch}>
                                            <Link href="#" className="main-menu-two__search searcher-toggler-box icon-search"></Link>
                                        </div>
                                        <div className="main-menu-two__cart-box">
                                            <Link href="/cart" className="main-menu-two__cart">
                                                <span className="far fa-shopping-cart"></span>
                                                <span className="main-menu-two__cart-count">02</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-menu-two__nav-sidebar-icon" onClick={handleSidebar}>
                                    <a className="navSidebar-button" href="#">
                                        <span className="icon-dots-menu-one"></span>
                                        <span className="icon-dots-menu-two"></span>
                                        <span className="icon-dots-menu-three"></span>
                                    </a>
                                </div>
                                <div className="main-menu-two__btn-box">
                                    <Link href="/contact" className="thm-btn">Track Order<span> <i className="icon-right-arrow"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderTwo;
