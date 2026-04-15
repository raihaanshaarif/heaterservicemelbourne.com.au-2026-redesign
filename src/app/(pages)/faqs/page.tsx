"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion'
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import { faqDataOne, faqDataTwo, FaqItem } from '@/contents/faqs/Faqs';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';


const Faqs: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number>(2);
    const handleFaqItem = (id: number): void => {
        setActiveFaq(id)
    }
    return (
        <>
            <DefaultBanner title='Our Faq' />
            <section className="faq-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 ">
                            <div className="faq-page__single">
                                <div className="accrodion-grp faq-one-accrodion" >
                                    {
                                        faqDataOne.map((item: FaqItem) => (
                                            <FadeInAdvanced
                                                key={item.id}
                                                variant={'fadeInLeft'}
                                                delay={item?.id * 50}
                                                duration={100}
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
                        <div className="col-xl-6 ">
                            <div className="faq-page__single">
                                <div className="accrodion-grp faq-one-accrodion" >
                                    {
                                        faqDataTwo.map((item: FaqItem) => (
                                            <FadeInAdvanced
                                                key={item.id}
                                                variant={'fadeInRight'}
                                                delay={(item?.id * 50) / 2}
                                                duration={100}
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
            </section>
        </>
    );
};

export default Faqs;
