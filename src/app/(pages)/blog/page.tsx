import type { Metadata } from "next";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import blogData from "@/contents/blog/blogData";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & News | Heater Service Melbourne",
  description:
    "Read the latest heating tips, guides, and news from Heater Service Melbourne. Expert advice on gas ducted heating, hydronic heating, and split systems.",
  keywords:
    "heating blog melbourne, gas ducted heating tips, hydronic heating guide, HVAC advice melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/blog",
  },
  openGraph: {
    title: "Blog & News | Heater Service Melbourne",
    description:
      "Expert heating tips and guides from Melbourne's licensed HVAC specialists.",
    url: "https://heaterservicemelbourne.com.au/blog",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const BlogPage: React.FC = () => {
  return (
    <>
      <DefaultBanner title="Blog & News" asH1 />
      <section className="blog-two" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1" style={{ marginBottom: "50px" }}>
            <div className="section-title__tagline-box">
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-1">
                <i className="fas fa-cogs"></i>
              </div>
              <h6 className="section-title__tagline">Latest Articles</h6>
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-2">
                <i className="fas fa-cogs"></i>
              </div>
            </div>
            <h2 className="section-title__title">
              Heating Tips &amp; <span>News</span>
            </h2>
          </div>
          <div className="row">
            {blogData.map((post) => (
              <div key={post.id} className="col-xl-4 col-lg-6 col-md-6" style={{ marginBottom: "40px" }}>
                <div className="blog-two__single">
                  <div className="blog-two__img">
                    <Image
                      src={post.image}
                      width={380}
                      height={280}
                      alt={post.title}
                      style={{ width: "100%", height: "auto" }}
                    />
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
                    </ul>
                    <h3 className="blog-two__title">
                      <Link href={post.slug}>{post.title}</Link>
                    </h3>
                    <p style={{ marginBottom: "20px", color: "#777" }}>{post.excerpt}</p>
                    <div className="blog-two__author-and-btn">
                      <div className="blog-two__author-info">
                        <div className="blog-two__author-img-box">
                          <div className="blog-two__author-img">
                            <Image
                              src={post.authorImage}
                              width={55}
                              height={55}
                              alt={post.authorName}
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
