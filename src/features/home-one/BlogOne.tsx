"use client";

import Blog11 from '@/assets/images/blog/blog-1-1.jpg';
import BlogOneAuthorImg1 from '@/assets/images/blog/blog-one-author-img-1.jpg';
import Blog12 from '@/assets/images/blog/blog-1-2.jpg';
import BlogOneAuthorImg2 from '@/assets/images/blog/blog-one-author-img-2.jpg';
import Blog13 from '@/assets/images/blog/blog-1-3.jpg';
import BlogOneAuthorImg3 from '@/assets/images/blog/blog-one-author-img-3.jpg'; 
import TextAnimation from '@/components/elements/TextAnimation';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogOne() {
    return (
        <section className="blog-one" id='blog'>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-1">
                            <i className="fas fa-plane"></i>
                        </div>
                        <h6 className="section-title__tagline">Blog & News</h6>
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-2">
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                    <h3 className="section-title__title">
                        <TextAnimation animationStyle="style2">
                            Latest News Directly <br />
                            <span>From Our Blog</span>
                        </TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    <FadeInAdvanced
                        variant={'fadeInLeft'}
                        delay={100}
                        className='col-xl-6'
                    >
                        <div className="blog-one__single">
                            <div className="blog-one__img">
                                <Image src={Blog11} width={600} height={300} alt='blog' />
                                <div className="blog-one__plus">
                                    <Link href="/blog-details"><i className="icon-plus"></i></Link>
                                </div>
                                <div className="blog-one__tag">
                                    <Link href="/blog-details">Logistics</Link>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li>
                                        <Link href="/blog-details">
                                            <span className="fas fa-calendar-alt"></span>May 10, 2025
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-details">
                                            <span className="fas fa-comments"></span>Comment
                                        </Link>
                                    </li>
                                </ul>
                                <h3 className="blog-one__title"><Link href="/blog-details">Mastering Last Mile Delivery
                                    Strategies for Success in Your Business</Link></h3>
                                <div className="blog-one__author-and-btn">
                                    <div className="blog-one__author-info">
                                        <div className="blog-one__author-img-box">
                                            <div className="blog-one__author-img">
                                                <Image src={BlogOneAuthorImg1} width={55} height={55} alt='blog'/>
                                            </div>
                                        </div>
                                        <div className="blog-one__author-content">
                                            <h5>Janes Cooper</h5>
                                            <p>May 10, 2025</p>
                                        </div>
                                    </div>
                                    <div className="blog-one__btn-box">
                                        <Link href="/blog-details" className="thm-btn">Read More<span><i
                                            className="icon-right-arrow"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInAdvanced>
                    <div className="col-xl-6">
                        <div className="blog-one__right">
                            <FadeInAdvanced
                                variant={'fadeInRight'}
                                delay={300}
                                className='blog-one__single'
                            >
                                <div className="blog-one__img">
                                    <Image src={Blog12} width={250} height={240} alt='blog' />
                                    <div className="blog-one__plus">
                                        <Link href="/blog-details"><i className="icon-plus"></i></Link>
                                    </div>
                                    <div className="blog-one__tag">
                                        <Link href="/blog-details">Transport</Link>
                                    </div>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="blog-one__meta list-unstyled">
                                        <li>
                                            <Link href="/blog-details">
                                                <span className="fas fa-calendar-alt"></span>May 10, 2025
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog-details">
                                                <span className="fas fa-comments"></span>Comment
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-one__title"><Link href="/blog-details">Logistics Announces Launch
                                        of Greenhouse Gas Effect</Link></h3>
                                    <div className="blog-one__author-and-btn">
                                        <div className="blog-one__author-info">
                                            <div className="blog-one__author-img-box">
                                                <div className="blog-one__author-img">
                                                    <Image src={BlogOneAuthorImg2} width={55 } height={55} alt='client' />
                                                </div>
                                            </div>
                                            <div className="blog-one__author-content">
                                                <h5>Kevin Cooper</h5>
                                                <p>May 10, 2025</p>
                                            </div>
                                        </div>
                                        <div className="blog-one__arrow-box">
                                            <Link href="/blog-details" className="blog-one__arrow"><span
                                                className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                            <FadeInAdvanced
                                variant={'fadeInRight'}
                                delay={500}
                                className='blog-one__single'
                            >
                                <div className="blog-one__img">
                                    <Image src={Blog13} width={250} height={240} alt='blog' />
                                    <div className="blog-one__plus">
                                        <Link href="/blog-details"><i className="icon-plus"></i></Link>
                                    </div>
                                    <div className="blog-one__tag">
                                        <Link href="/blog-details">Agency</Link>
                                    </div>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="blog-one__meta list-unstyled">
                                        <li>
                                            <Link href="/blog-details">
                                                <span className="fas fa-calendar-alt"></span>May 10, 2025
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog-details">
                                                <span className="fas fa-comments"></span>Comment
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-one__title"><Link href="/blog-details">We ensures you the best
                                        quality services for your business</Link></h3>
                                    <div className="blog-one__author-and-btn">
                                        <div className="blog-one__author-info">
                                            <div className="blog-one__author-img-box">
                                                <div className="blog-one__author-img">
                                                    <Image src={BlogOneAuthorImg3} width={55} height={55} alt='client' />
                                                </div>
                                            </div>
                                            <div className="blog-one__author-content">
                                                <h5>Alisa Fox</h5>
                                                <p>May 10, 2025</p>
                                            </div>
                                        </div>
                                        <div className="blog-one__arrow-box">
                                            <Link href="/blog-details" className="blog-one__arrow"><span
                                                className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
