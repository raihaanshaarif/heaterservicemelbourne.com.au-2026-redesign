"use client";

import AboutThreeShape2 from '@/assets/images/shapes/about-three-shape-2.png';
import AboutThreeImg1 from '@/assets/images/resources/about-three-img-1.jpg';
import AboutThreeImg2 from '@/assets/images/resources/about-three-img-2.jpg';
import useTransportContext from '@/components/context/useTransportContext';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import CounterUp from '@/components/elements/CounterUp';
import TextAnimation from '@/components/elements/TextAnimation';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutThree() {
    const { handleVideoClick } = useTransportContext();
    return (
        <section className="about-three" id='aboutThree'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-three__left">
                            <FadeInAdvanced
                                variant={'slideInLeft'}
                                delay={100}
                                duration={2500}
                            >
                                <div className="about-three__img-box">
                                    <div className="about-three__img">
                                        <Image src={AboutThreeImg1} width={370} height={535} alt='about' />
                                    </div>
                                    <div className="about-three__img-2">
                                        <Image src={AboutThreeImg2} width={280} height={343} alt='about' />
                                    </div>
                                    <div className="about-three__shape-2 float-bob-y">
                                        <Image src={AboutThreeShape2} width={100} height={100} alt='about' />
                                    </div>
                                    <div className="about-three__experience-box">
                                        <div className="about-three__count-box">
                                            <h3  ><CounterUp ending={25} /></h3>
                                            <span>+</span>
                                        </div>
                                        <p className="about-three__experience-text">Years of Experiences</p>
                                    </div>
                                    <div className="about-three__shape-1 float-bob-x"></div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-three__right">
                            <FadeInAdvanced
                                variant={'fadeInRight'}
                                delay={300}
                            >
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline-border"></span>
                                        <div className="section-title__shape-1">
                                            <i className="fas fa-plane"></i>
                                        </div>
                                        <h6 className="section-title__tagline">ABOUT US</h6>
                                        <span className="section-title__tagline-border"></span>
                                        <div className="section-title__shape-2">
                                            <i className="fas fa-plane"></i>
                                        </div>
                                    </div>
                                    <h3 className="section-title__title">
                                        <TextAnimation animationStyle="style2">
                                            Our Expertise Stands in <span>Logistics
                                                Solutions</span>
                                        </TextAnimation>
                                    </h3>
                                </div>
                                <p className="about-three__text">There are many variations of passages available randomised
                                    words
                                    which the majority have suffered alteration in some form, by injected humour look page
                                    when looking at its layout even slightly believable.</p>
                                <div className="about-three__points-box">
                                    <ul className="about-three__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-quote"></span>
                                            </div>
                                            <div className="content">
                                                <h4>Our Affordable Price</h4>
                                                <p>There are many variations of passage majority</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-customer-loyalty"></span>
                                            </div>
                                            <div className="content">
                                                <h4>Customer Satisfied</h4>
                                                <p>There are many variations of passage majority</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="about-three__points-two list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Monotonically predominate next-generation.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Interactively predominate out-of-the-box best practices.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Skilled Technicians Invest in a quality phone case to protect device.</p>
                                    </li>
                                </ul>
                                <div className="about-three__btn-and-video">
                                    <div className="about-three__btn-box">
                                        <Link href="/about" className="thm-btn">Discover More<span><i className="icon-right-arrow"></i></span></Link>
                                    </div>
                                    <div className="about-three__video-box">
                                        <div className="about-three__video-link">
                                            <a href="#" className="video-popup" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=rbFoRH2deeY")}>
                                                <div className="about-three__video-icon">
                                                    <span className="fas fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <p className="about-three__video-text">
                                            Watch Our Support</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
