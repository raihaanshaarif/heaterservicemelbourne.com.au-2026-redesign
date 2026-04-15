"use client"

import React from 'react';
import TeamDetailsImg1 from '@/assets/images/team/team-details-img-1.jpg';
import Image from 'next/image';
import Link from 'next/link';
import TeamDetaislProgress from './TeamDetaislProgress';

const progress: { id: number; title: string; progressValue: number }[] = [
    { id: 1, title: "Product Delivery", progressValue: 80 },
    { id: 2, title: "Quick Response", progressValue: 95 },
    { id: 3, title: "Customer Satisfaction", progressValue: 65 },
]
const MemberDetails: React.FC = () => {
    return (
        <section className="team-details">
            <div className="container">
                <div className="team-details__top">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="team-details__top-left">
                                <div className="team-details__img-1">
                                    <Image src={TeamDetailsImg1} width={520} height={470} alt='team-details' />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="team-details__top-right">
                                <div className="team-details__client-box">
                                    <h3 className="team-details__client-name">William Barbara</h3>
                                    <span className="team-details__client-sub-title">Business Lawyer</span>
                                    <div className="team-details__social">
                                        <Link href="#"><i className="icon-facebook-app-symbol"></i></Link>
                                        <Link href="#"><i className="icon-twitter1"></i></Link>
                                        <Link href="#"><i className="icon-instagram"></i></Link>
                                        <Link href="#"><i className="icon-instagram"></i></Link>
                                    </div>
                                    <p className="team-details__client-text">Neque porro quisquam est, qui dolorem ipsum
                                        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                        tempora incidunt ut labore et dolore ma gnam aliquam quaerat voluptatem. Ut enim
                                        ad minima veniam</p>
                                    <ul className="team-details__client-address list-unstyled">
                                        <li>
                                            <p><span className="icon-location1"></span>Address</p>
                                            <h5>4140 Parker Rd. Allentown, New Mexico 31134</h5>
                                        </li>
                                        <li>
                                            <p><span className="icon-phone-call"></span>Phone Number</p>
                                            <h5><a href="tel:2085550112">(208) 555-0112</a></h5>
                                        </li>
                                        <li>
                                            <p><span className="icon-email"></span>Email</p>
                                            <h5><a href="mailto:michael.mitc@example.com">michael.mitc@example.com</a>
                                            </h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-details__bottom">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="team-details__bottom-left">
                                <h3 className="team-details__bottom-title">Biography</h3>
                                <p className="team-details__bottom-text">Neque porro quisquam est, qui dolorem ipsum quia
                                    dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                                    incidunt ut labore et dolore ma gnam aliquam quaerat voluptatem. Ut enim ad minima
                                    veniam</p>
                                <div className="team-details__practice-area">
                                    <h4 className="team-details__practice-area-title">Practice Area</h4>
                                    <div className="team-details__practice-area-list-box">
                                        <ul className="list-unstyled team-details__practice-area-list">
                                            <li>
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <p>Ocean Freight</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <p>Road Freight</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <p>Fast Personal Delivery</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul
                                            className="list-unstyled team-details__practice-area-list team-details__practice-area-list--two">
                                            <li>
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <p>International Shipping</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <p>Rail Freight</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"></div>
                                                <div className="text">
                                                    <p>Local Truck Transport</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="team-details__bottom-right">
                                <h3 className="team-details__progress-title-1">Skills</h3>
                                <ul className="team-details__progress-list list-unstyled">
                                    {
                                        progress.map((item) => <TeamDetaislProgress key={item?.id} title={item?.title} value={item?.progressValue} />)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MemberDetails;
