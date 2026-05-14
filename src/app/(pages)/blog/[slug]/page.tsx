import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import blogData from "@/contents/blog/blogData";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug.replace("/blog/", ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === `/blog/${slug}`);
  if (!post) return {};
  return {
    title: `${post.title} | Heater Service Melbourne`,
    description: post.excerpt,
    alternates: {
      canonical: `https://heaterservicemelbourne.com.au/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://heaterservicemelbourne.com.au/blog/${slug}`,
      siteName: "Heater Service Melbourne",
      locale: "en_AU",
      type: "article",
    },
  };
}

const BlogDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === `/blog/${slug}`);

  if (!post) notFound();

  const otherPosts = blogData.filter((p) => p.id !== post.id);

  return (
    <>
      <DefaultBanner title={post.title} asH1={false} />

      {/* ─── Page wrapper ─────────────────────────────────────────── */}
      <section style={{ padding: "90px 0 100px", background: "#f5f6fa" }}>
        <div className="container">
          <div className="row" style={{ gap: "0" }}>

            {/* ══════════════════════════════
                MAIN CONTENT
            ══════════════════════════════ */}
            <div className="col-xl-8 col-lg-7" style={{ paddingRight: "30px" }}>

              {/* Article card */}
              <article style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 2px 40px rgba(0,0,0,0.07)",
              }}>

                {/* Hero image with category pill overlay */}
                <div style={{ position: "relative", overflow: "hidden", maxHeight: "460px" }}>
                  <Image
                    src={post.image}
                    width={860}
                    height={460}
                    alt={post.title}
                    priority
                    style={{ width: "100%", height: "460px", objectFit: "cover", display: "block" }}
                  />
                  {/* Gradient scrim */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
                  }} />
                  {/* Category pill */}
                  <span style={{
                    position: "absolute", bottom: "24px", left: "28px",
                    background: "var(--tanspot-base)",
                    color: "#fff",
                    fontSize: "12px", fontWeight: 700,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    padding: "6px 16px", borderRadius: "30px",
                  }}>
                    {post.category}
                  </span>
                </div>

                {/* Content area */}
                <div style={{ padding: "40px 44px 48px" }}>

                  {/* Meta strip */}
                  <div style={{
                    display: "flex", alignItems: "center", flexWrap: "wrap",
                    gap: "18px", marginBottom: "22px",
                  }}>
                    {/* Author */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "40px", height: "40px", borderRadius: "50%",
                        overflow: "hidden", flexShrink: 0,
                        border: "2px solid var(--tanspot-base)",
                      }}>
                        {/* <Image
                          src={post.authorImage}
                          width={40} height={40}
                          alt={post.authorName}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        /> */}
                      </div>
                      <span style={{ fontSize: "14px", fontWeight: 600, color: "#333" }}>
                        {post.authorName}
                      </span>
                    </div>

                    {/* Divider dot */}
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ccc" }} />

                    {/* Date */}
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#888" }}>
                      <i className="fas fa-calendar-alt" style={{ color: "var(--tanspot-base)" }}></i>
                      {post.date}
                    </span>

                    {/* Divider dot */}
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ccc" }} />

                    {/* Read time placeholder */}
                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#888" }}>
                      <i className="fas fa-clock" style={{ color: "var(--tanspot-base)" }}></i>
                      5 min read
                    </span>
                  </div>

                  {/* Title */}
                  <h1 style={{
                    fontSize: "clamp(24px, 3.2vw, 36px)",
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: "#111",
                    marginBottom: "28px",
                    letterSpacing: "-0.02em",
                  }}>
                    {post.title}
                  </h1>

                  {/* Excerpt highlight bar */}
                  <div style={{
                    borderLeft: "4px solid var(--tanspot-base)",
                    paddingLeft: "18px",
                    marginBottom: "32px",
                    background: "#fafafa",
                    borderRadius: "0 8px 8px 0",
                    padding: "16px 20px",
                  }}>
                    <p style={{
                      fontSize: "16px", lineHeight: 1.7,
                      color: "#555", margin: 0, fontStyle: "italic",
                    }}>
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Body HTML */}
                  <div
                    className="blog-details__content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    style={{ fontSize: "16px", lineHeight: 1.85, color: "#444" }}
                  />

                  {/* Divider */}
                  <div style={{
                    height: "1px", background: "linear-gradient(to right, var(--tanspot-base), transparent)",
                    margin: "44px 0 36px",
                  }} />

                  {/* Footer: author card + back link */}
                  <div style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", flexWrap: "wrap", gap: "20px",
                  }}>

                    {/* Author card */}
                    <div style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      background: "#f5f6fa", borderRadius: "14px",
                      padding: "14px 20px",
                    }}>
                      <div style={{
                        width: "52px", height: "52px",
                        borderRadius: "50%", overflow: "hidden", flexShrink: 0,
                        border: "3px solid var(--tanspot-base)",
                      }}>
                        {/* <Image
                          src={post.authorImage}
                          width={52} height={52}
                          alt={post.authorName}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        /> */}
                      </div>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: "15px", margin: 0, color: "#111" }}>
                          {post.authorName}
                        </p>
                        <p style={{ fontSize: "12px", color: "#999", margin: 0 }}>
                          Heater Service Melbourne
                        </p>
                      </div>
                    </div>

                    {/* Back button */}
                    <Link href="/blog" className="thm-btn">
                      Back to Blog
                      <span><i className="fas fa-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* ══════════════════════════════
                SIDEBAR
            ══════════════════════════════ */}
            <div className="col-xl-4 col-lg-5">
              <aside style={{ position: "sticky", top: "100px" }}>

                {/* ── Recent Posts ── */}
                <div style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  marginBottom: "28px",
                  boxShadow: "0 2px 40px rgba(0,0,0,0.06)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "26px" }}>
                    <span style={{
                      width: "4px", height: "22px",
                      background: "var(--tanspot-base)",
                      borderRadius: "4px", flexShrink: 0,
                    }} />
                    <h3 style={{ fontSize: "18px", fontWeight: 700, margin: 0, color: "#111" }}>
                      Recent Articles
                    </h3>
                  </div>

                  {otherPosts.map((other, idx) => (
                    <Link
                      key={other.id}
                      href={other.slug}
                      style={{
                        display: "flex",
                        gap: "14px",
                        alignItems: "flex-start",
                        padding: "14px 0",
                        borderTop: idx === 0 ? "none" : "1px solid #f0f0f0",
                        textDecoration: "none",
                      }}
                    >
                      <div style={{
                        flexShrink: 0, borderRadius: "10px",
                        overflow: "hidden", width: "76px", height: "60px",
                      }}>
                        <Image
                          src={other.image}
                          width={76} height={60}
                          alt={other.title}
                          style={{ width: "76px", height: "60px", objectFit: "cover", display: "block" }}
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{
                          fontWeight: 600, fontSize: "14px",
                          color: "#1a1a1a", lineHeight: 1.45,
                          margin: "0 0 6px",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical" as const,
                          overflow: "hidden",
                        }}>
                          {other.title}
                        </p>
                        <span style={{ fontSize: "12px", color: "#aaa" }}>
                          <i className="fas fa-calendar-alt" style={{ marginRight: "4px", color: "var(--tanspot-base)" }}></i>
                          {other.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* ── CTA Card ── */}
                <div style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                  padding: "40px 28px",
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
                }}>
                  {/* Glow accent */}
                  <div style={{
                    position: "absolute", top: "-40px", right: "-40px",
                    width: "160px", height: "160px",
                    background: "var(--tanspot-base)",
                    borderRadius: "50%", opacity: 0.15, filter: "blur(40px)",
                  }} />

                  {/* Icon ring */}
                  <div style={{
                    width: "68px", height: "68px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                    backdropFilter: "blur(8px)",
                  }}>
                    <i className="fas fa-fire" style={{
                      fontSize: "26px",
                      color: "var(--tanspot-base)",
                    }}></i>
                  </div>

                  <h4 style={{
                    fontSize: "22px", fontWeight: 800,
                    color: "#fff", marginBottom: "12px",
                    letterSpacing: "-0.02em",
                  }}>
                    Need a Service?
                  </h4>

                  <p style={{
                    fontSize: "14px", color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7, marginBottom: "28px",
                  }}>
                    Licensed technicians across all Melbourne suburbs. Fast response, fair pricing.
                  </p>

                  {/* Stat pills */}
                  <div style={{
                    display: "flex", justifyContent: "center", gap: "10px",
                    marginBottom: "28px", flexWrap: "wrap",
                  }}>
                    {["Same-day", "Licensed", "Affordable"].map((tag) => (
                      <span key={tag} style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#fff", fontSize: "11px", fontWeight: 600,
                        padding: "5px 12px", borderRadius: "30px",
                        letterSpacing: "0.04em",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className="thm-btn" style={{ justifyContent: "center" }}>
                    Book a Technician
                    <span><i className="fas fa-arrow-right"></i></span>
                  </Link>
                </div>

              </aside>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;
