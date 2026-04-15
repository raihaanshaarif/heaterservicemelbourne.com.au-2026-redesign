
"use client";

import DownloadAppImg1 from '@/assets/images/icon/download-app-img1.png';
import DownloadAppImg2 from '@/assets/images/icon/download-app-img2.png';
import DownloadAppImg12 from '@/assets/images/resources/download-app-img-1.png';
import DownloadAppTrackImg1 from '@/assets/images/resources/download-app-track-img-1.png';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import TextAnimation from '@/components/elements/TextAnimation';
import Image from 'next/image';
import Link from 'next/link';

export default function DownloadAppOne() {
    return (
        <section className="download-app-one">
            <div className="download-app-one__shape-bg" ></div>
            <div className="download-app-one__shape-bg-two" ></div>
            <div className="container">
                <div className="download-app-one__inner">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <div className="download-app-one__content sec-title-animation animation-style2">
                                <p className="download-app-one__sub-title">Download Our App</p>
                                <h2 className="download-app-one__title">
                                    <TextAnimation animationStyle="style2">
                                        Tanspot User Friendly <br /> <span>App
                                            Available</span>
                                    </TextAnimation>
                                </h2>
                                <p className="download-app-one__text">Get our mobile app for easy and convenient usage</p>
                                <div className="download-app-one__google-and-app-store">
                                    <Link href="/contact"><Image src={DownloadAppImg1} width={130} height={30} alt='Image' /></Link>
                                    <Link href="/contact"><Image src={DownloadAppImg2} width={130} height={30} alt='Image' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="download-app-one__right">
                                <div className="download-app-one__img">
                                    <FadeInAdvanced
                                        className='download-app-one__img1'
                                    // variant='fadeInLeft'
                                    >
                                        <Image src={DownloadAppImg12} width={470} height={445} alt='Image' />
                                    </FadeInAdvanced>
                                </div>
                                <div className="download-app-one-car__img float-bob-x">
                                    <Image src={DownloadAppTrackImg1} width={420} height={230} alt='track' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
