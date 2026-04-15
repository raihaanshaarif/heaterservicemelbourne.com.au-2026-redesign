"use client";

import useTransportContext from '@/components/context/useTransportContext';
import CounterUp from '@/components/elements/CounterUp';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import Progresbar from '@/components/elements/Progressbar';
export default function ContactTwo() {
    const { handleVideoClick } = useTransportContext();
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <section className="contact-one" id='contact'>
            <div className="contact-one__shape-bg"></div>
            <div className="contact-one__bg-img" ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__left">
                            <div className="contact-one__video-link">
                                <a href="#" className="video-popup" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=rbFoRH2deeY")}>
                                    <div className="contact-one__video-icon">
                                        <span className="fa fa-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__right">
                            <FadeInAdvanced
                                variant={'slideInRight'}
                                delay={100}
                                duration={2500}
                            >
                                <div className="contact-one__content">
                                    <p className="contact-one__tagline">GET FREE QUOTE</p>
                                    <h2 className="contact-one__title">Request a Quote</h2>
                                    <form className="contact-one__form contact-form-validated" onSubmit={handleSubmit}>
                                        <div className="contact-one__content-box">
                                            <div className="contact-one__input-box">
                                                <input type="text" placeholder="Your Name" name="name" required={true} />
                                            </div>
                                            <div className="contact-one__input-box">
                                                <input type="email" placeholder="Email Address" name="email" required={true} />
                                            </div>
                                            <div className="contact-one__input-box">
                                                <input type="text" placeholder="Phone Number" name="phone" required={true} />
                                            </div>
                                            <div className="contact-one__input-box">
                                                <input type="text" placeholder="Property Types" name="subject" required={true} />
                                            </div>
                                        </div>
                                        <div className="contact-one__progress">
                                            <div className="contact-one__progress-single">
                                                <h4 className="contact-one__progress-title">DIST (Miles):</h4>
                                                <Progresbar title='c' value={65} showProgress={false} showTitle={false} height={"10px"} />
                                            </div>
                                        </div>
                                        <div className="contact-one__content-bottom">
                                            <button type="submit" className="thm-btn">Get Your Quote<span><i
                                                className="icon-right-arrow"></i></span></button>
                                            <div className="contact-one__content-bottom-text-box">
                                                <div className="contact-one__count-box">
                                                    <div className="contact-one__count count-box">
                                                        <h3> <CounterUp ending={212} duration={1500} /> </h3>
                                                        <span>+</span>
                                                    </div>
                                                    <p>Reviews</p>
                                                </div>
                                                <div className="contact-one__ratting">
                                                    <span className="fas fa-star"></span>
                                                    <span className="fas fa-star"></span>
                                                    <span className="fas fa-star"></span>
                                                    <span className="fas fa-star"></span>
                                                    <span className="fas fa-star"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="result"></div>
                                    </form>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
