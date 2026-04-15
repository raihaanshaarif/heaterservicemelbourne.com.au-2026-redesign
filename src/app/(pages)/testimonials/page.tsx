import React from 'react';
import TestimonialTwoShape1 from '@/assets/images/shapes/testimonial-two-shape-1.png';
import Testimonial21 from '@/assets/images/testimonial/testimonial-2-1.jpg';
import Testimonial22 from '@/assets/images/testimonial/testimonial-2-2.jpg';
import Testimonial23 from '@/assets/images/testimonial/testimonial-2-3.jpg';
import Testimonial24 from '@/assets/images/testimonial/testimonial-2-4.jpg';
import Testimonial25 from '@/assets/images/testimonial/testimonial-2-5.jpg';
import Testimonial26 from '@/assets/images/testimonial/testimonial-2-6.jpg';
import Image, { StaticImageData } from 'next/image';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import Link from 'next/link';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string | StaticImageData; // Imported image variable
    text: string;
    rating: number;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Hazard Will",
        role: "Delivery Man",
        image: Testimonial21,
        text: "Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide fina",
        rating: 5,
    },
    {
        id: 2,
        name: "Alisha Martin",
        role: "Delivery Man",
        image: Testimonial22,
        text: "Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide fina",
        rating: 5,
    },
    {
        id: 3,
        name: "Robert Son",
        role: "Delivery Man",
        image: Testimonial23,
        text: "Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide fina",
        rating: 5,
    },
    {
        id: 4,
        name: "Saila Sara",
        role: "Delivery Man",
        image: Testimonial24,
        text: "Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide fina",
        rating: 5,
    },
    {
        id: 5,
        name: "Oliva Sara",
        role: "Delivery Man",
        image: Testimonial25,
        text: "Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide fina",
        rating: 5,
    },
    {
        id: 6,
        name: "Kevin Smith",
        role: "Delivery Man",
        image: Testimonial26,
        text: "Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide fina",
        rating: 5,
    },
];

const page: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Testimonials' />
            <section className="testimonial-page">
                <div className="container">
                    <div className="row">
                        {testimonialsData.map((item) => (
                            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__single-inner">
                                        <div className="testimonial-two__shape-1">
                                            <Image src={TestimonialTwoShape1} width={163} height={164} alt="shape" />
                                        </div>
                                        <div className="testimonial-two__quote">
                                            <i className="fas fa-quote-left"></i>
                                        </div>
                                        <div className="testimonial-two__ratting">
                                            {/* Creates an array of stars based on the rating number */}
                                            {[...Array(item.rating)].map((_, index) => (
                                                <span key={index} className="fas fa-star"></span>
                                            ))}
                                        </div>
                                        <p className="testimonial-two__text">{item.text}</p>
                                        <div className="testimonial-two__client-info">
                                            <div className="testimonial-two__client-img">
                                                <Image src={item.image} width={65} height={65} alt={item.name} />
                                            </div>
                                            <div className="testimonial-two__client-content">
                                                <h3>
                                                    <Link href="#">{item.name}</Link>
                                                </h3>
                                                <p>{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;
