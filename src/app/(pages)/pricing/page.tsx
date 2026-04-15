"use client";
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import { pricingData } from '@/contents/pricing/pricingData';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import Link from 'next/link';
import React from 'react';


const Pricing: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Pricing' />
            <section className="pricing-one pricing-page">
                <div className="container">
                    <div className="row">
                        {pricingData.map((plan) => (
                            <div key={plan.id} className="col-xl-4 col-lg-4">
                                <FadeInAdvanced
                                    variant={plan.animationVariant}
                                    delay={plan.delay}
                                >
                                    <div className="pricing-one__single">
                                        <div className="pricing-one__single-inner">
                                            <div className="pricing-one__shape-1"></div>
                                            <div className="pricing-one__shape-2"></div>
                                            <div className="pricing-one__icon">
                                                <span className={plan.iconClass}></span>
                                            </div>
                                            <p className="pricing-one__title">{plan.title}</p>
                                            <div className="pricing-one__price-box">
                                                <h3 className="pricing-one__price">
                                                    {plan.price} <span>{plan.period}</span>
                                                </h3>
                                            </div>
                                            <ul className="list-unstyled pricing-one__price-list">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index}>
                                                        <div className="icon">
                                                            <span className="icon-check"></span>
                                                        </div>
                                                        <p>{feature}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="pricing-one__btn-box">
                                                <Link href="/pricing" className="thm-btn">
                                                    Choose Plan
                                                    <span>
                                                        <i className="icon-right-arrow"></i>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </FadeInAdvanced>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
