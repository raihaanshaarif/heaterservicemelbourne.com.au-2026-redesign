"use client";

import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TextAnimation from "@/components/elements/TextAnimation";
import { servicesThreeData, ServiceThreeItem } from "@/contents/services/serviceData";
import Link from "next/link";


export default function ServicesThree() {
    return (
        <section className="services-three" id="services">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-1">
                            <i className="fas fa-plane"></i>
                        </div>
                        <h6 className="section-title__tagline">Our Services</h6>
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-2">
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                    <h3 className="section-title__title">
                        <TextAnimation animationStyle="style1">
                            Efficient Logistics Services <br />
                            <span>for Your Business</span>
                        </TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    {servicesThreeData.map((service: ServiceThreeItem) => (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={service.id}>
                            <FadeInAdvanced
                                variant={service.animationVariant}
                                delay={service.delay}
                            >
                                <div className="services-three__single">
                                    <div className="services-three__single-inner text-center">
                                        <div className="services-three__single-icon">
                                            <span className={service.icon}></span>
                                        </div>
                                        <h3>
                                            <Link href={service.link}>{service.title}</Link>
                                        </h3>
                                        <p>{service.description}</p>
                                        <div className="services-three__btn-box">
                                            <Link href={service.link}>
                                                Read More <span className="icon-right-arrow"></span>
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
    );
}
