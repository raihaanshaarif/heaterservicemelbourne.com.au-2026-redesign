"use client";

import TextAnimation from "@/components/elements/TextAnimation";
import React from "react";

const DetailsContact: React.FC = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="team-details-contact">
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-1">
              <i className="fas fa-cogs"></i>
            </div>
            <h6 className="section-title__tagline">Contact Our Team</h6>
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-2">
              <i className="fas fa-cogs"></i>
            </div>
          </div>
          <h3 className="section-title__title">
            <TextAnimation animationStyle="style1">
              Give Us A Message
            </TextAnimation>
          </h3>
        </div>
        <div className="team-details-contact__inner">
          <form
            className="contact-form-validated team-details-contact__form"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details-contact__input-box">
                  <input type="text" name="name" placeholder="Your Name" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details-contact__input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details-contact__input-box">
                  <input type="text" name="Phone" placeholder="Phone Number" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details-contact__input-box">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
              </div>
              <div className="col-xl-12">
                <div className="team-details-contact__input-box text-message-box">
                  <textarea name="message" placeholder="Messege"></textarea>
                </div>
                <div className="team-details-contact__btn-box">
                  <button type="submit" className="thm-btn">
                    send a message
                    <span>
                      <i className="icon-right-arrow"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="result"></div>
        </div>
      </div>
    </section>
  );
};

export default DetailsContact;
