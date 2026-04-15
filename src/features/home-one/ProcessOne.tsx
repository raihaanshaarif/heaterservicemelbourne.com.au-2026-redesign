"use client";

import TextAnimation from "@/components/elements/TextAnimation";

export default function ProcessOne() {
  return (
    <section className="process-one">
      <div className="process-one__map"> </div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-1">
              <i className="fas fa-plane"></i>
            </div>
            <h6 className="section-title__tagline">Working Process</h6>
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-2">
              <i className="fas fa-plane"></i>
            </div>
          </div>
          <h3 className="section-title__title">
            <TextAnimation animationStyle="style2">
              Efficient & Professional
              <br /> <span>Working Process</span>
            </TextAnimation>
          </h3>
        </div>
        <div className="process-one__inner">
          <ul className="process-one__list list-unstyled">
            <li>
              <div className="process-one__icon">
                <span className="icon-phone-call"></span>
                <div className="process-one__count"></div>
              </div>
              <h4 className="process-one__title">Consultation</h4>
              <p className="process-one__text">
                We discuss your specific heating requirements for your home.
              </p>
              <div className="process-one__shpae-1"></div>
            </li>
            <li>
              <div className="process-one__icon">
                <span className="icon-box1"></span>
                <div className="process-one__count"></div>
              </div>
              <h4 className="process-one__title">On-Site Quote</h4>
              <p className="process-one__text">
                We provide a transparent quote after assessing your space.
              </p>
              <div className="process-one__shpae-1"></div>
            </li>
            <li>
              <div className="process-one__icon">
                <span className="icon-packaging"></span>
                <div className="process-one__count"></div>
              </div>
              <h4 className="process-one__title">Professional Work</h4>
              <p className="process-one__text">
                Our licensed technicians carry out the necessary tasks.
              </p>
              <div className="process-one__shpae-1"></div>
            </li>
            <li>
              <div className="process-one__icon">
                <span className="icon-truck"></span>
                <div className="process-one__count"></div>
              </div>
              <h4 className="process-one__title">Quality Check</h4>
              <p className="process-one__text">
                Final inspection to ensure optimal performance and safety.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
