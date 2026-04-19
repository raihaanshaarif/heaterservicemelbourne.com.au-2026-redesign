"use client";

import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TextAnimation from "@/components/elements/TextAnimation";
import { blogData } from "@/contents/blog/blogData";
import Image from "next/image";
import Link from "next/link";

export default function BlogTwo() {
  const blog = blogData.filter((item) => item?.id <= 3);
  return (
    <section className="blog-two" id="blog">
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-1">
              <i className="fas fa-cogs"></i>
            </div>
            <h6 className="section-title__tagline">Blog & News</h6>
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-2">
              <i className="fas fa-cogs"></i>
            </div>
          </div>
          <h3 className="section-title__title">
            <TextAnimation animationStyle="style1">
              Latest <span>News</span> from Insight
            </TextAnimation>
          </h3>
        </div>
        <div className="row">
          {blog.map((post) => (
            <FadeInAdvanced
              key={post.id}
              variant={
                post?.id === 1
                  ? "fadeInLeft"
                  : post?.id === 2
                    ? "fadeInUp"
                    : "fadeInRight"
              }
              delay={100}
              className="col-xl-4 col-lg-6"
            >
              <div className="blog-two__single">
                <div className="blog-two__img">
                  <Image src={post.image} width={380} height={280} alt="blog" />
                  <div className="blog-two__plus">
                    <Link href={post.slug}>
                      <i className="icon-plus"></i>
                    </Link>
                  </div>
                  <div className="blog-two__tag">
                    <Link href={post.slug}>{post.category}</Link>
                  </div>
                </div>
                <div className="blog-two__content">
                  <ul className="blog-two__meta list-unstyled">
                    <li>
                      <Link href={post.slug}>
                        <span className="fas fa-calendar-alt"></span>
                        {post.date}
                      </Link>
                    </li>
                    <li>
                      <Link href={post.slug}>
                        <span className="fas fa-comments"></span>Comment
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-two__title">
                    <Link href={post.slug}>{post.title}</Link>
                  </h3>
                  <div className="blog-two__author-and-btn">
                    <div className="blog-two__author-info">
                      <div className="blog-two__author-img-box">
                        <div className="blog-two__author-img">
                          <Image
                            src={post.authorImage}
                            width={55}
                            height={55}
                            alt="author"
                          />
                        </div>
                      </div>
                      <div className="blog-two__author-content">
                        <h5>{post.authorName}</h5>
                        <p>{post.date}</p>
                      </div>
                    </div>
                    <div className="blog-two__arrow-box">
                      <Link href={post.slug} className="blog-two__arrow">
                        <span className="icon-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInAdvanced>
          ))}
        </div>
      </div>
    </section>
  );
}
