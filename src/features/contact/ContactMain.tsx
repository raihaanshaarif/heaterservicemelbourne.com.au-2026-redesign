"use client";

import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import { useState } from "react";
import { trackFormSubmission, trackAdsConversion } from "@/lib/gtm";

const ContactMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormMessage("Message sent successfully! We'll be in touch soon.");
        form.reset();
        trackFormSubmission("contact_form");
        trackAdsConversion("contact_form_lead");
      } else {
        setFormMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section className="contact-info">
        <div className="container">
          <div className="row">
            {/*Contact Two Single Start*/}
            <div className="col-xl-3 col-lg-6">
              <FadeInAdvanced variant={"fadeInLeft"} delay={100}>
                <div
                  className="contact-info__single"
                  style={{
                    height: "240px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="contact-info__icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <p style={{ wordWrap: "break-word", marginBottom: "8px" }}>
                    Contact Us
                  </p>
                  <h5
                    style={{
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      margin: "0",
                      lineHeight: "1.5",
                    }}
                  >
                    <a href="tel:0405133761">0405 133 761</a>
                  </h5>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Contact Two Single End*/}
            {/*Contact Two Single Start*/}
            <div className="col-xl-3 col-lg-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={200}>
                <div
                  className="contact-info__single"
                  style={{
                    height: "240px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="contact-info__icon">
                    <span className="icon-email"></span>
                  </div>
                  <p style={{ wordWrap: "break-word", marginBottom: "8px" }}>
                    Mail Us
                  </p>
                  <h5
                    style={{
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      margin: "0",
                      lineHeight: "1.5",
                    }}
                  >
                    <a href="mailto:heating.melbourne@gmail.com">
                      heating.melbourne@gmail.com
                    </a>
                  </h5>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Contact Two Single End*/}
            {/*Contact Two Single Start*/}
            <div className="col-xl-3 col-lg-6">
              <FadeInAdvanced variant={"fadeInRight"} delay={300}>
                <div
                  className="contact-info__single"
                  style={{
                    height: "240px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="contact-info__icon">
                    <span className="icon-24-hours-service"></span>
                  </div>
                  <p style={{ wordWrap: "break-word", marginBottom: "8px" }}>
                    Working Hours
                  </p>
                  <h5
                    style={{
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      margin: "0",
                      lineHeight: "1.5",
                    }}
                  >
                    Mon - Fri: 08:00 AM - 06:00 PM
                    <br /> Emergency 24/7 Service
                  </h5>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Contact Two Single End*/}
            {/*Contact Two Single Start*/}
            <div className="col-xl-3 col-lg-6">
              <FadeInAdvanced variant={"fadeInRight"} delay={400}>
                <div
                  className="contact-info__single"
                  style={{
                    height: "240px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="contact-info__icon">
                    <span className="icon-location1"></span>
                  </div>
                  <p style={{ wordWrap: "break-word", marginBottom: "8px" }}>
                    Our Office Location
                  </p>
                  <h5
                    style={{
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      margin: "0",
                      lineHeight: "1.5",
                    }}
                  >
                    5 Frank Ave, Clayton South, Melbourne, VIC
                  </h5>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Contact Two Single End*/}
          </div>
        </div>
      </section>
      <section className="contact-page">
        <div className="container">
          <div className="contact-page__inner">
            <div className="row">
              <div className="col-xl-6">
                <div className="contact-page__left">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.92630413944!2d145.11330037651337!3d-37.93215207194603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b3d8224a0af%3A0x79ba4175339b3119!2s5%20Frank%20Ave%2C%20Clayton%20South%20VIC%203169%2C%20Australia!5e0!3m2!1sen!2sbd!4v1776628541439!5m2!1sen!2sbd"
                    className="google-map__one"
                  ></iframe>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="contact-page__right">
                  <h3 className="contact-page__form-title">Get A Free Quote</h3>
                  <form
                    className="contact-form-validated contact-page__form"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input type="text" placeholder="Phone" name="phone" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <select
                            name="service"
                            style={{
                              width: "100%",
                              height: "60px",
                              border: "1px solid #dfe3e7",
                              paddingLeft: "30px",
                              borderRadius: "10px",
                              color: "#707885",
                              outline: "none",
                            }}
                          >
                            <option value="">Select Service Type</option>
                            <option value="hydronic">Hydronic Heating</option>
                            <option value="gas-ducted">
                              Gas Ducted Heating
                            </option>
                            <option value="split-system">Split Systems</option>
                            <option value="emergency">
                              Emergency Services
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-page__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Messege"
                          ></textarea>
                        </div>
                        <div className="contact-page__btn-box">
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="footer-widget__newsletter-btn thm-btn"
                            style={{
                              opacity: isLoading ? 0.6 : 1,
                              cursor: isLoading ? "not-allowed" : "pointer",
                            }}
                          >
                            {isLoading ? "Sending..." : "Send A Message"}
                            <span>
                              <i className="icon-right-arrow"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {formMessage && (
                      <div
                        style={{
                          marginTop: "15px",
                          padding: "12px 15px",
                          borderRadius: "6px",
                          textAlign: "center",
                          backgroundColor: formMessage.includes("successfully")
                            ? "#d4edda"
                            : "#f8d7da",
                          color: formMessage.includes("successfully")
                            ? "#155724"
                            : "#721c24",
                          fontSize: "14px",
                          lineHeight: "1.5",
                        }}
                      >
                        {formMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMain;
