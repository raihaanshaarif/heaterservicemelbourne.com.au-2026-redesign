import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

const ContactMain = () => {
  return (
    <>
      <section className="contact-info">
        <div className="container">
          <div className="row">
            {/*Contact Two Single Start*/}
            <div className="col-xl-3 col-lg-6">
              <FadeInAdvanced variant={"fadeInLeft"} delay={100}>
                <div className="contact-info__single">
                  <div className="contact-info__icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <p>Contact Us</p>
                  <h5>
                    <a href="tel:0405133761">0405 133 761</a>
                  </h5>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Contact Two Single End*/}
            {/*Contact Two Single Start*/}
            <div className="col-xl-3 col-lg-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={200}>
                <div className="contact-info__single">
                  <div className="contact-info__icon">
                    <span className="icon-email"></span>
                  </div>
                  <p>Mail Us</p>
                  <h5>
                    <a href="mailto:faisalexpertise@gmail.com">
                      faisalexpertise@gmail.com
                    </a>
                  </h5>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Contact Two Single End*/}
            {/*Contact Two Single Start*/}
            <div className="col-xl-3 col-lg-6">
              <FadeInAdvanced variant={"fadeInRight"} delay={300}>
                <div className="contact-info__single">
                  <div className="contact-info__icon">
                    <span className="icon-24-hours-service"></span>
                  </div>
                  <p>Working Hours</p>
                  <h5>
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
                <div className="contact-info__single">
                  <div className="contact-info__icon">
                    <span className="icon-location1"></span>
                  </div>
                  <p>Our Office Location</p>
                  <h5>5 Frank Ave, Clayton South, Melbourne, VIC</h5>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    className="google-map__one"
                  ></iframe>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="contact-page__right">
                  <h3 className="contact-page__form-title">Get A Free Quote</h3>
                  <form className="contact-form-validated contact-page__form">
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
                            className="footer-widget__newsletter-btn thm-btn"
                          >
                            Send A Message
                            <span>
                              <i className="icon-right-arrow"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="result"></div>
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
