"use client";
import AboutTwoShape1 from '@/assets/images/shapes/about-two-shape-1.png';
import AboutTwoShape2 from '@/assets/images/shapes/about-two-shape-2.png';
import AboutTwoShape3 from '@/assets/images/shapes/about-two-shape-3.png';
import AboutTwoShape4 from '@/assets/images/shapes/about-two-shape-4.png';
import AboutTwoImg1 from '@/assets/images/resources/about-two-img-1.jpg';
import AboutTwoImg2 from '@/assets/images/resources/about-two-img-2.jpg';
import AboutOneAuthorImg1 from '@/assets/images/resources/about-one-author-img-1.jpg'; 
import useTransportContext from '@/components/context/useTransportContext';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import Image from 'next/image';
import CounterUp from '@/components/elements/CounterUp';
import Link from 'next/link';
import CirculaProgressOnView from '@/components/elements/CirculaProgressOnView';
import TextAnimation from '@/components/elements/TextAnimation';

export default function AboutTwo() {
    const { handleVideoClick } = useTransportContext()
    return (
        <>
            {/*About Two Start*/}
            <section className="about-two" id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__left">
                                <FadeInAdvanced
                                    variant={'slideInLeft'}
                                    delay={100}
                                    duration={2500}
                                >
                                    <div className="about-two__img-box">
                                        <div className="about-two__img">
                                            <Image src={AboutTwoImg1} width={350} height={330} alt='' />
                                        </div>
                                        <div className="about-two__img-two">
                                            <Image src={AboutTwoImg2} width={382} height={360} alt='' />
                                        </div>
                                        <div className="about-two__counter">
                                            <div className="shape1"><Image src={AboutTwoShape1} width={129} height={130} alt='' /> </div>
                                            <div className="count-text-box count-box">
                                                <h2   ><CounterUp ending={25} duration={1500} /></h2>
                                                <span className="plus">+</span>
                                            </div>

                                            <p>Years Of <br />
                                                Experience</p>
                                        </div>
                                        <div className="about-two__shape-2 float-bob-x">
                                            <Image src={AboutTwoShape2} width={67} height={102} alt='shape' />
                                        </div>
                                        <div className="about-two__shape-3">
                                            <Image src={AboutTwoShape3} width={111} height={174} alt='shape' />
                                        </div>
                                        <div className="about-two__shape-4 float-bob-y">
                                            <Image src={AboutTwoShape4} width={104} height={72} alt='shape' />
                                        </div>
                                    </div>
                                </FadeInAdvanced>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-two__right">
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
                                <p className="about-two__text">Logistic service provider company plays a pivotal role in the
                                    global supply chain ecosystem by efficiently managing the movement of goods from origin
                                    to final destination. These companies offer a diverse.</p>
                                <div className="about-two__progress-box-outer">
                                    <div className="about-two__progress-single">
                                        <div className="about-two__progress-box"> 
                                            <CirculaProgressOnView endValue={95} size={100}/> 
                                        </div>
                                        <div className="about-two__progress-content">
                                            <p>Supper
                                                <br /> Fast Delivery</p>
                                        </div>
                                    </div>
                                    <div className="about-two__progress-single">
                                        <div className="about-two__progress-box">
                                            <CirculaProgressOnView endValue={97} size={100}/> 
                                        </div>
                                        <div className="about-two__progress-content">
                                            <p>Customer <br /> Satisfied</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-two__point-box-one">
                                    <ul className="about-two__point-one">
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Safety And Reliability</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>End-to-End Transportation</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="about-two__point-one about-two__point-one--two">
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Warehousing & Distribution</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-check"></span>
                                            </div>
                                            <div className="text">
                                                <p>Fast Transportation</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="about-two__btn-and-author-box">
                                    <div className="about-two__btn-box">
                                        <Link href="/about" className="thm-btn">Read More
                                            <span><i className="icon-right-arrow"></i></span>
                                        </Link>
                                    </div>
                                    <div className="about-two__author-box">
                                        <div className="about-two__author-details">
                                            <div className="about-two__author-img-box">
                                                <div className="about-two__author-img">
                                                    <Image src={AboutOneAuthorImg1} width={72} height={72} alt='client' />
                                                </div>
                                            </div>
                                            <div className="about-two__author-content">
                                                <h4>Dainel Brain</h4>
                                                <p>Co-Founder</p>
                                            </div>
                                        </div>
                                        <div className="about-two__video-link">
                                            <a href="#" className="video-popup" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=rbFoRH2deeY")}>
                                                <div className="about-two__video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Two End*/}
        </>

    );
}
