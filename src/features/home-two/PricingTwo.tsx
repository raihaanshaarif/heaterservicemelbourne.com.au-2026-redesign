"use client";

import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TextAnimation from "@/components/elements/TextAnimation";
import Link from "next/link";

// Dummy data for PricingTwo component (pricing content file was removed during cleanup)
const pricingData: any[] = [];

export default function PricingTwo() {
  return (
    <section className="pricing-one">
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-1">
              <i className="fas fa-cogs"></i>
            </div>
            <h6 className="section-title__tagline">Pricing Plan</h6>
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-2">
              <i className="fas fa-cogs"></i>
            </div>
          </div>
          <h3 className="section-title__title">
            <TextAnimation animationStyle="style2">
              Our Effective and Affordable
              <br /> <span>Pricing Plans</span>
            </TextAnimation>
          </h3>
        </div>
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
                      {plan.features.map((feature: any, index: number) => (
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
  );
}
