import React from 'react';
import FooterOne from '@/components/footers/FooterOne';
import HeaderOne from '@/components/headers/HeaderOne';
import StrickyHeader from '@/components/headers/StrickyHeader';
import Image from 'next/image';
import ErrorPageImg1 from '../assets/images/resources/error-page-img1.png';
import Link from 'next/link';

const page: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderOne />
            <section className="error-page">
                <div className="container">
                    <div className="error-page__inner text-center">
                        <div className="error-page__img float-bob-y">
                            <Image src={ErrorPageImg1} width={903} height={524} alt='error' />
                        </div>

                        <div className="error-page__content">
                            <h2>Oops! Page Not Found!</h2>
                            <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                            <div className="btn-box">
                                <Link href="/" className="thm-btn">Back To Home<span><i className="icon-right-arrow"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterOne />
            <StrickyHeader />
        </div>
    );
};

export default page;
