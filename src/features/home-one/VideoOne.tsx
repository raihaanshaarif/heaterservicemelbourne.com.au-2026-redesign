"use client";

import useTransportContext from "@/components/context/useTransportContext";

export default function VideoOne() {
    const { handleVideoClick } = useTransportContext();
    return (
        <section className="video-one">
            <div className="video-one__bg jarallax"></div>
            <div className="container">
                <div className="video-one__inner">
                    <div className="video-one__single">
                        <div className="video-one__title-box">
                            <p>Logistic Video Tour</p>
                            <h2>Provide Efficient Logistics <br /> <span>Solutions</span> for Business </h2>
                        </div>
                        <div className="video-one__video-link">
                            <a href="#" className="video-popup" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=rbFoRH2deeY")}>
                                <div className="video-one__video-icon">
                                    <span className="icon-play-button"></span>
                                    <i className="ripple"></i>
                                </div>
                                <div className="video-one__round-text">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
