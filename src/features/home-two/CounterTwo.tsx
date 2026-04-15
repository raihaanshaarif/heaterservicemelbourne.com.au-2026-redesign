"use client";

import CounterUp from "@/components/elements/CounterUp";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

export default function CounterTwo() {
    return (
        <section className="counter-two">
            <div className="container">
                <div className="row">
                    {/*Counter Two Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <FadeInAdvanced
                            variant={'fadeInLeft'}
                            delay={100}
                        >
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-world-wide-web"></span>
                                </div>
                                <div className="counter-two__content">
                                    <div className="counter-two__count">
                                        <h3  ><CounterUp ending={850} /></h3>
                                        <span>+</span>
                                    </div>
                                    <p className="counter-two__count-text">Worldwide Branches</p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Counter Two Single End*/}
                    {/*Counter Two Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <FadeInAdvanced
                            variant={'fadeInLeft'}
                            delay={300}
                        >
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-user-avatar"></span>
                                </div>
                                <div className="counter-two__content">
                                    <div className="counter-two__count">
                                        <h3  ><CounterUp ending={50} /></h3>
                                        <span>k</span>
                                    </div>
                                    <p className="counter-two__count-text">Total Clients in World</p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Counter Two Single End*/}
                    {/*Counter Two Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <FadeInAdvanced
                            variant={'fadeInRight'}
                            delay={500}
                        >
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-rating"></span>
                                </div>
                                <div className="counter-two__content">
                                    <div className="counter-two__count">
                                        <h3> <CounterUp ending={7.2} /></h3>
                                        <span>k</span>
                                    </div>
                                    <p className="counter-two__count-text">Satisfied Customers</p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Counter Two Single End*/}
                    {/*Counter Two Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <FadeInAdvanced
                            variant={'fadeInRight'}
                            delay={700}
                        >
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-delivery-man-1"></span>
                                </div>
                                <div className="counter-two__content">
                                    <div className="counter-two__count">
                                        <h3  ><CounterUp ending={99} /></h3>
                                        <span>%</span>
                                    </div>
                                    <p className="counter-two__count-text">Successful Delivery</p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Counter Two Single End*/}
                </div>
            </div>
        </section>

    );
}
