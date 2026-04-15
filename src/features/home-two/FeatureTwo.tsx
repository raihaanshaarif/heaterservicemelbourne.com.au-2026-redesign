"use client";

import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import Link from "next/link";

export default function FeatureTwo() {
    return (
        <>
            {/*Feature One Start*/}
            <section className="feature-one">
                <div className="container">
                    <div className="row">
                        {/*Feature One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInLeft'}
                                delay={100}
                            >
                                <div className="feature-one__single">
                                    <div className="feature-one__icon">
                                        <span className="icon-international-shipping"></span>
                                    </div>
                                    <div className="feature-one__content">
                                        <h3 className="feature-one__title"><Link href="/emergency-transport">Export Logistics</Link>
                                        </h3>
                                        <p className="feature-one__text">A logistic service provider company plays
                                            a pivotal role in the global logistic service.</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Feature One Single End*/}
                        {/*Feature One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInLeft'}
                                delay={300}
                            >
                                <div className="feature-one__single">
                                    <div className="feature-one__icon">
                                        <span className="icon-courier-services"></span>
                                    </div>
                                    <div className="feature-one__content">
                                        <h3 className="feature-one__title"><Link href="/ocean-transport">Safety And Reliability</Link>
                                        </h3>
                                        <p className="feature-one__text">A logistic service provider company plays
                                            a pivotal role in the global logistic service.</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Feature One Single End*/}
                        {/*Feature One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInRight'}
                                delay={500}
                            >
                                <div className="feature-one__single">
                                    <div className="feature-one__icon">
                                        <span className="icon-delivery-man"></span>
                                    </div>
                                    <div className="feature-one__content">
                                        <h3 className="feature-one__title"><Link href="/personal-delivery">Fast Delivery</Link></h3>
                                        <p className="feature-one__text">A logistic service provider company plays
                                            a pivotal role in the global logistic service.</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Feature One Single End*/}
                        {/*Feature One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInRight'}
                                delay={700}
                            >
                                <div className="feature-one__single">
                                    <div className="feature-one__icon">
                                        <span className="icon-24-hours-service"></span>
                                    </div>
                                    <div className="feature-one__content">
                                        <h3 className="feature-one__title"><Link href="/contact">24/7 Support</Link></h3>
                                        <p className="feature-one__text">A logistic service provider company plays
                                            a pivotal role in the global logistic service.</p>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Feature One Single End*/}
                    </div>
                </div>
            </section>
            {/*Feature One End*/}
        </>

    );
}
