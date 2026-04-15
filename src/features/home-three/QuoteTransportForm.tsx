"use client";

import CustomSelect from '@/components/elements/CustomSelect';
import React from 'react';

const QuoteTransportForm: React.FC = () => {
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div className="quote-tab-content-box-item">
            <div className="tab-content-box-item-img" >
            </div>
            <div className="quotes-wrapper">
                <div className="quotes-wrapper-inner">
                    <div className="title-box">
                        <h2>Shipment Point</h2>
                    </div>

                    <div className="quotes-weight">
                        <form className="contact-form-validated quote-one__form" onSubmit={handleSubmit}>

                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Name</label>
                                        <input type="text" name="name"
                                            placeholder="Enter Name" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Email Name</label>
                                        <input type="email" name="email"
                                            placeholder="Email Address" /></div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone"
                                            placeholder="Mobile Num" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Freight</label>
                                        <div className="select-box">
                                            <CustomSelect
                                                optionArray={[
                                                    { id: 1, value: "Freight Type", label: "Freight Type" },
                                                    { id: 2, value: "Freight Type 01", label: "Freight Type 01" },
                                                    { id: 3, value: "Freight Type 02", label: "Freight Type 02" },
                                                    { id: 4, value: "Freight Type 03", label: "Freight Type 03" },
                                                    { id: 5, value: "Freight Type 04", label: "Freight Type 04" },
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Weight</label>
                                        <input type="text" name="weight"
                                            placeholder="Weight" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Lenght</label>
                                        <input type="number" name="lenght"
                                            placeholder="Lenght" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="quote-redio-box">
                                        <div className="quote-redio">
                                            <label className="custom-rario">
                                                <input type="radio" name="myRadios" value="1" readOnly defaultChecked />
                                                <span className="radio-dot"></span>
                                                <span className="radio-text">Express Delivery</span>
                                            </label>
                                            <label className="custom-rario">
                                                <input type="radio" name="myRadios" value="2" readOnly />
                                                <span className="radio-dot"></span>
                                                <span className="radio-text">Insurance</span>
                                            </label>
                                            <label className="custom-rario">
                                                <input type="radio" name="myRadios" value="3" readOnly />
                                                <span className="radio-dot"></span>
                                                <span className="radio-text">Packaging</span>
                                            </label>
                                            <label className="custom-rario">
                                                <input type="radio" name="myRadios" value="4" readOnly />
                                                <span className="radio-dot"></span>
                                                <span className="radio-text">Incoterms</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="quote-two__btn">
                                        <button type="submit" className="thm-btn">
                                            Request For A Quote
                                            <span><i className="icon-right-arrow"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteTransportForm;
