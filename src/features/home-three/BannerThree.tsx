"use client";

import React, { useState } from 'react';
import BannerTwoMap1 from '@/assets/images/shapes/banner-two-map-1.png';
import Image from 'next/image';
import TypingEffect from '@/components/elements/TypingEffect';
import SearchTransportForm from './SearchTransportForm';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import CustomSelect from '@/components/elements/CustomSelect';
const BannerThree: React.FC = () => {
    const [transportType, setTransportType] = useState<string>("road");

    const handleTransportType = (ty: string): void => {
        if (ty) setTransportType(ty);
    }
    return (
        <section className="banner-two" id='home'>
            <div className="banner-two__pattern" ></div>
            <div className="banner-two__map-1">
                <Image src={BannerTwoMap1} width={550} height={550} className="img-bounce" alt='map' />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="banner-two__left">
                            <p className="banner-two__sub-title">Specialist In Modern Transportation</p>
                            <h2 className="banner-two__title">Expert & Easy <br /> Transportation <br />
                                <TypingEffect strings={["Solutions", "Provider", "Services", "Business"]} />
                            </h2>
                            <p className="banner-two__text">If you have a parcel and want to know its latest update, then
                                check the latest update with your parcel ID in the form below. {`Don't`} forget to select
                                the correct category to search. Thank You.</p>
                            <div className="banner-two__tab-box tabs-box">
                                <ul className="tab-buttons clearfix list-unstyled">
                                    <li className={`tab-btn ${transportType === "air" ? "active-btn" : ""}`} onClick={() => handleTransportType("air")}>
                                        <p>Air Freight</p>
                                    </li>
                                    <li className={`tab-btn ${transportType === "road" ? "active-btn" : ""}`} onClick={() => handleTransportType("road")}>
                                        <p>Road Freight</p>
                                    </li>
                                    <li className={`tab-btn ${transportType === "ocean" ? "active-btn" : ""}`} onClick={() => handleTransportType("ocean")}>
                                        <p>Ocean Freight</p>
                                    </li>
                                </ul>
                                <div className="tabs-content">
                                    {transportType === "road" && <SearchTransportForm />}
                                    {transportType === "air" && <SearchTransportForm />}
                                    {transportType === "ocean" && <SearchTransportForm />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="banner-two__right">
                            <FadeInAdvanced
                                variant={'slideInRight'}
                                delay={100}
                                duration={2500}
                            >
                                <div className="banner-two__form-box">
                                    <form className="contact-form-validated banner-two__form">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" name="name" placeholder="Name" required={true} />
                                                    <div className="icon"><span className="icon-user-1"></span></div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="email" name="email" placeholder="Email" required={true} />
                                                    <div className="icon"><span className="icon-email"></span></div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={[
                                                                { id: 1, value: "Freight Type", label: "Freight Type" },
                                                                { id: 2, value: "Freight Type 01", label: "Freight Type 01" },
                                                                { id: 3, value: "Freight Type 02", label: "Freight Type 02" },
                                                                { id: 4, value: "Freight Type 03", label: "Freight Type 03" },
                                                                { id: 5, value: "Freight Type 04", label: "Freight Type 04" },
                                                                { id: 6, value: "Freight Type 05", label: "Freight Type" },
                                                            ]}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={[
                                                                { id: 1, value: "Load", label: "Load" },
                                                                { id: 2, value: "Rail", label: "Rail" },
                                                                { id: 3, value: "Ocean Freight", label: "Ocean Freight" },
                                                                { id: 4, value: "Ocean", label: "Ocean" },
                                                            ]}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="input-box">
                                                    <textarea name="message" placeholder="Message" required={true}></textarea>
                                                    <div className="icon style2"><span className="icon-user-1"></span></div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="banner-two__form-btn">
                                                    <button type="submit" className="thm-btn"> Submit Request
                                                        <span><i className="icon-right-arrow"></i></span>
                                                    </button>
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
};

export default BannerThree;
