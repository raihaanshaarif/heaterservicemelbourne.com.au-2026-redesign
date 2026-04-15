
"use client";
import React, { useEffect, useState } from 'react';
import Logo1 from '../../assets/images/resources/logo-1.png';
import useTransportContext from '../context/useTransportContext';
import Link from 'next/link';
import MainManuList from '../menu/MainManuList';
import Image from 'next/image';

const StrickyHeaderThree: React.FC = () => {
    const { setIsSearch, setIsMobileManu } = useTransportContext();
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
        setIsMobileManu((pre: boolean) => !pre)
    }
    const handleSearch = (): void => {
        setIsSearch((pre: boolean) => !pre)
    }
    return (
        <div className={`stricky-header stricked-menu main-menu main-menu-three ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
                <div className="main-menu-three__wrapper">
                    <div className="container">
                        <div className="main-menu-three__wrapper-inner">
                            <div className="main-menu-three__left">
                                <div className="main-menu-three__logo">
                                    <Link href="/"><Image src={Logo1} width={170} height={40} alt='Logo' /></Link>
                                </div>
                            </div>
                            <div className="main-menu-three__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileManu}><i className="fa fa-bars"></i></Link>
                                <MainManuList />
                            </div>
                            <div className="main-menu-three__right">
                                <div className="main-menu-three__right-content">
                                    <div className="main-menu-three__search-cart-box">
                                        <div className="main-menu-three__search-cart-box">
                                            <div className="main-menu-three__search-box" onClick={handleSearch}>
                                                <Link href="#" className="main-menu-three__search searcher-toggler-box icon-search"></Link>
                                            </div>
                                            <div className="main-menu-three__cart-box">
                                                <Link href="/cart" className="main-menu-three__cart">
                                                    <span className="far fa-shopping-cart"></span>
                                                    <span className="main-menu-three__cart-count">02</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-menu-three__btn-box">
                                        <Link href="/contact" className="thm-btn">Track Order<span><i className="icon-right-arrow"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrickyHeaderThree;
