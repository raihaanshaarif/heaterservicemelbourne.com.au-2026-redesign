"use client";

import WhyChooseTwoImg1 from "@/assets/images/resources/why-choose-two-img-1.png";
import WhyChooseTwoReviewImg11 from "@/assets/images/resources/why-choose-two-review-img-1-1.jpg";
import WhyChooseTwoReviewImg12 from "@/assets/images/resources/why-choose-two-review-img-1-2.jpg";
import WhyChooseTwoReviewImg13 from "@/assets/images/resources/why-choose-two-review-img-1-3.jpg";
import WhyChooseTwoReviewImg14 from "@/assets/images/resources/why-choose-two-review-img-1-4.jpg";
import CounterUp from "@/components/elements/CounterUp";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TextAnimation from "@/components/elements/TextAnimation";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseTwo() {
  return (
    <section className="why-choose-two">
      <div className="why-choose-two__pattern"></div>
      <div className="why-choose-two__bg-box">
        <div className="why-choose-two__shape-bg"></div>
      </div>
      <FadeInAdvanced className="why-choose-two__img">
        <Image src={WhyChooseTwoImg1} width={601} height={500} alt="Image" />
      </FadeInAdvanced>
      <div className="why-choose-two__client-box">
        <ul className="why-choose-two__review-list">
          <li>
            <div className="why-choose-two__review-img">
              <Image
                src={WhyChooseTwoReviewImg11}
                width={54}
                height={54}
                alt="review"
              />
            </div>
          </li>
          <li>
            <div className="why-choose-two__review-img">
              <Image
                src={WhyChooseTwoReviewImg12}
                width={54}
                height={54}
                alt="review"
              />
            </div>
          </li>
          <li>
            <div className="why-choose-two__review-img">
              <Image
                src={WhyChooseTwoReviewImg13}
                width={54}
                height={54}
                alt="review"
              />
            </div>
          </li>
          <li>
            <div className="why-choose-two__review-img">
              <Image
                src={WhyChooseTwoReviewImg14}
                width={54}
                height={54}
                alt="review"
              />
            </div>
          </li>
        </ul>
        <div className="why-choose-two__client-content">
          <div className="why-choose-two__client-count">
            <h3>
              <CounterUp ending={2500} />
            </h3>
            <span>+</span>
          </div>
          <p className="why-choose-two__client-text">Happy Clients</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="why-choose-two__left">
              <div className="why-choose-two__title-box">
                <div className="section-title text-left sec-title-animation animation-style1">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline-border"></span>
                    <div className="section-title__shape-1">
                      <i className="fas fa-cogs"></i>
                    </div>
                    <h6 className="section-title__tagline">Why Choose us</h6>
                    <span className="section-title__tagline-border"></span>
                    <div className="section-title__shape-2">
                      <i className="fas fa-cogs"></i>
                    </div>
                  </div>
                  <h3 className="section-title__title">
                    <TextAnimation animationStyle="style1">
                      Reason For Choosing
                      <span>Logistics Solution!</span>
                    </TextAnimation>
                  </h3>
                </div>
                <p className="why-choose-two__text">
                  A logistic service provider company plays a pivotal role in
                  the global supply chain ecosystem by efficiently managing the
                  movement of goods from point of origin to final destination.
                  These companies offer a diverse range.
                </p>
              </div>
              <div className="why-choose-two__point-box">
                <ul className="why-choose-two__point">
                  <li>
                    <div className="why-choose-two__icon">
                      <span className="icon-international-shipping"></span>
                    </div>
                    <div className="why-choose-two__content">
                      <h4>
                        Global Logistics <br /> Operation
                      </h4>
                      <p>
                        A logistic service provider company plays a role in the
                        global chain
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="why-choose-two__icon">
                      <span className="icon-professional-services"></span>
                    </div>
                    <div className="why-choose-two__content">
                      <h4>
                        Professional Logistics <br /> Management
                      </h4>
                      <p>
                        A logistic service provider company plays a role in the
                        global chain
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="why-choose-two__point why-choose-two__point--two">
                  <li>
                    <div className="why-choose-two__icon">
                      <span className="icon-protection"></span>
                    </div>
                    <div className="why-choose-two__content">
                      <h4>
                        Safety & Security <br /> Delivery
                      </h4>
                      <p>
                        A logistic service provider company plays a role in the
                        global chain
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="why-choose-two__icon">
                      <span className="icon-tracking"></span>
                    </div>
                    <div className="why-choose-two__content">
                      <h4>
                        Real Time location <br /> Tracking
                      </h4>
                      <p>
                        A logistic service provider company plays a role in the
                        global chain
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="why-choose-two__btn-box">
                <Link href="/about" className="thm-btn">
                  Read More
                  <span>
                    <i className="icon-right-arrow"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
