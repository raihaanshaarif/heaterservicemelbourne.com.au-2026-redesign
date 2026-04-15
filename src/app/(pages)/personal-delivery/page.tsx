"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion'
import ServiceDetailsImg1 from '@/assets/images/services/service-details-img-3.jpg';
import ServiceDetailsImgBoxImg1 from '@/assets/images/services/service-details-img-box-img-1.jpg';
import ServiceDetailsImgBoxImg2 from '@/assets/images/services/service-details-img-box-img-2.jpg';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import TransportSidebar from '@/features/transport/TransportSidebar';
import { faqDataOne, FaqItem } from '@/contents/faqs/Faqs';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import Image from 'next/image';

const Page: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number>(2);
    const handleFaqItem = (id: number): void => {
        setActiveFaq(id)
    }
    return (
        <>
            <DefaultBanner title='Services' subTitle='International Transport' titleLink='/services' />
            <section className="service-details">
                <div className="container">
                    <div className="row">
                        <TransportSidebar />
                        <div className="col-xl-8 col-lg-7">
                            <div className="service-details__left">
                                <div className="service-details__img">
                                    <Image src={ServiceDetailsImg1} width={850} height={400} alt='service' />
                                </div>
                                <h3 className="service-details__title-1">International Transport</h3>
                                <p className="service-details__text-1">Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa</p>
                                <p className="service-details__text-2">Consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut laborer et dolore magna aliqua. Out enigma ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure
                                    dolor in the reprehenderit in voluptate velit esse cillum dolore eu fugiat null
                                    pariatur. Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.</p>
                                <ul className="service-details__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-arrow"></span>
                                        </div>
                                        <p>It is a long established fact that a reader will be distr acted bioiiy the rea
                                            dablea </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-arrow"></span>
                                        </div>
                                        <p>Distr acted bioiiy the rea dablea content of a page when looking at its layout
                                        </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-arrow"></span>
                                        </div>
                                        <p>Content of a page when looking at its layout toile point</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-arrow"></span>
                                        </div>
                                        <p>Reader will be distr acted bioiiy the rea dablea content of a page when looking
                                        </p>
                                    </li>
                                </ul>
                                <div className="service-details__img-box">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="service-details__img-box-single">
                                                <div className="service-details__img-box-img">
                                                    <Image src={ServiceDetailsImgBoxImg1} width={410} height={300} alt='service' />
                                                </div>
                                                <div className="service-details__img-box-content">
                                                    <div className="service-details__img-box-content-icon-and-title">
                                                        <div className="service-details__img-box-content-icon">
                                                            <span className="icon-new-product"></span>
                                                        </div>
                                                        <h3 className="service-details__img-box-content-title">Quality Full Work
                                                        </h3>
                                                    </div>
                                                    <p className="service-details__img-box-content-text">Duis acute arura dolor
                                                        in
                                                        reprehenderit in voluptate velit esse cillum dolore Velit esse quam
                                                        nihil molestiae thos consequatur, Velia ease chillum dolore</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="service-details__img-box-single">
                                                <div className="service-details__img-box-img">
                                                    <Image src={ServiceDetailsImgBoxImg2} width={410} height={300} alt='service' />
                                                </div>
                                                <div className="service-details__img-box-content">
                                                    <div className="service-details__img-box-content-icon-and-title">
                                                        <div className="service-details__img-box-content-icon">
                                                            <span className="icon-customer-loyalty"></span>
                                                        </div>
                                                        <h3 className="service-details__img-box-content-title">100% Work
                                                            Satisfication</h3>
                                                    </div>
                                                    <p className="service-details__img-box-content-text">Duis acute arura dolor
                                                        in
                                                        reprehenderit in voluptate velit esse cillum dolore Velit esse quam
                                                        nihil molestiae thos consequatur, Velia ease chillum dolore</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-page__single">
                                    <div className="accrodion-grp faq-one-accrodion" >
                                        {
                                            faqDataOne.map((item: FaqItem) => (
                                                <FadeInAdvanced
                                                    key={item.id}
                                                    variant={item?.id % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                                                    delay={item?.id * 70}
                                                    distance={30}
                                                    duration={300}
                                                    className={`accrodion ${activeFaq === item.id ? 'active' : ''}`}
                                                >
                                                    <div className="accrodion-title" onClick={() => handleFaqItem(item?.id)}>
                                                        <h4>{item?.question}</h4>
                                                    </div>
                                                    <motion.div
                                                        initial={{ y: -40, opacity: 0 }}
                                                        whileInView={{ y: 0, opacity: 1 }}
                                                        transition={{
                                                            duration: 0.5,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ amount: 0.05 }}

                                                        className="accrodion-content" style={{ display: `${activeFaq === item.id ? 'block' : 'none'}` }}>
                                                        <div className="inner">
                                                            <p>{item?.answer}</p>
                                                        </div>{/* /.inner */}
                                                    </motion.div>
                                                </FadeInAdvanced>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
