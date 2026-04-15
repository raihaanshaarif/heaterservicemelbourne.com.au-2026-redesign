"use client";

import { useState } from 'react';
import TextAnimation from '@/components/elements/TextAnimation';
import QuoteTransportForm from './QuoteTransportForm';
import TrackTransportForm from './TrackTransportForm';

export default function QuoteOne() {
    const [activeTransport, setTransport] = useState<string>("quote");

    const handleTransPort = (tr: string): void => {
        if (tr) setTransport(tr);
    }
    return (
        <section className="quote-one" id='contactThree'>
            <div className="quote-one-shape__bg"> </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center sec-title-animation animation-style1">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline-border"></span>
                                <div className="section-title__shape-1">
                                    <i className="fas fa-plane"></i>
                                </div>
                                <h6 className="section-title__tagline">Shipping</h6>
                                <span className="section-title__tagline-border"></span>
                                <div className="section-title__shape-2">
                                    <i className="fas fa-plane"></i>
                                </div>
                            </div>
                            <h3 className="section-title__title">
                                <TextAnimation animationStyle="style1">
                                    Request For A <span>Qoute</span>
                                </TextAnimation>
                            </h3>
                        </div>

                        <div className="quote-tab">

                            <div className="quote-tab__button">
                                <ul className="tabs-button-box clearfix">
                                    <li className={`tab-btn-item ${activeTransport === "quote" ? "active-btn-item" : ""}`} onClick={() => handleTransPort("quote")}>
                                        <div className="quote-tab__button-inner">
                                            <h3>Request A Quote</h3>
                                        </div>
                                    </li>
                                    <li className={`tab-btn-item ${activeTransport === "track" ? "active-btn-item" : ""}`} onClick={() => handleTransPort("track")}>
                                        <div className="quote-tab__button-inner">
                                            <h3>Track & Trace</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/*Start Tabs Content Box*/}
                            <div className="tabs-content-box">
                                {/*Start Tab*/}
                                <div className={`tab-content-box-item ${activeTransport === "quote" ? "tab-content-box-item-active" : ""}`} >
                                    <QuoteTransportForm />
                                </div>
                                {/*End Tab*/}

                                {/*Start Tab*/}
                                <div className={`tab-content-box-item ${activeTransport === "track" ? "tab-content-box-item-active" : ""}`}>
                                    <TrackTransportForm />
                                </div>
                                {/*End Tab*/}
                            </div>
                            {/*End Tabs Content Box*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
