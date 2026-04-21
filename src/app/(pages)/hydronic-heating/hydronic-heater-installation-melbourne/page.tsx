"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { generateServiceSchema } from "@/utils/seo/jsonLd";
import { JSONLDScript } from "@/components/seo/JSONLDScript";
import { SEOBreadcrumbs } from "@/components/seo/SEOBreadcrumbs";
import { ServiceAreasNearYou } from "@/components/seo/ServiceAreasNearYou";
import ServiceDetailsImg1 from "@/assets/images/services/service-details-img-1.jpg";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import { WhyProfessionalMatters } from "@/components/hydronic/WhyProfessionalMatters";
import { faqDataHydronic, FaqItem } from "@/contents/faqs/Faqs";
import Image from "next/image";
import Link from "next/link";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TextAnimation from "@/components/elements/TextAnimation";
import ProcessOne from "@/features/home-one/ProcessOne";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
} as const;

// ============================================================================
// ANIMATED STAT CARD COMPONENT
// ============================================================================

interface StatCardProps {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  suffix = "",
  label,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className="col-md-3 col-sm-6 mb-4"
    >
      <motion.div
        whileHover={{ y: -6 }}
        className="stat-card p-5 bg-white rounded-4 h-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          boxShadow: "0 4px 20px rgba(26, 26, 26, 0.06)",
          transition: "box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 12px 40px rgba(26, 26, 26, 0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 4px 20px rgba(26, 26, 26, 0.06)";
        }}
      >
        <div className="stat-icon mb-4" style={{ fontSize: "2.5rem" }}>
          {icon.startsWith("fas ") ? (
            <i className={icon} style={{ color: "#1a3a52" }}></i>
          ) : (
            icon
          )}
        </div>
        <div
          className="stat-value mb-2"
          style={{ fontSize: "2.8rem", fontWeight: 800, color: "#1a3a52" }}
        >
          {inView && (
            <CountUp
              start={0}
              end={value}
              duration={2.5}
              separator=","
              suffix={suffix}
            />
          )}
        </div>
        <div
          className="stat-label"
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#6b7280",
          }}
        >
          {label}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================================================
// ANIMATED FEATURE CARD COMPONENT
// ============================================================================

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -8 }}
      className="feature-card p-5 bg-white rounded-4 h-100 text-center"
      style={{
        boxShadow: "0 4px 20px rgba(26, 26, 26, 0.06)",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 12px 40px rgba(26, 26, 26, 0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 20px rgba(26, 26, 26, 0.06)";
      }}
    >
      <div className="feature-icon mb-4" style={{ fontSize: "2.5rem" }}>
        {icon.startsWith("fas ") ? (
          <i className={icon} style={{ color: "#1a3a52" }}></i>
        ) : (
          icon
        )}
      </div>
      <h5
        className="feature-title mb-3 fw-bolder"
        style={{ color: "#1a1a1a", fontSize: "1.125rem" }}
      >
        {title}
      </h5>
      <p
        className="feature-desc text-secondary"
        style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
      >
        {description}
      </p>
    </motion.div>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // State for FAQ accordion management
  const [activeFaq, setActiveFaq] = useState<number>(1); // First item expanded by default

  const handleFaqItem = (id: number): void => {
    setActiveFaq(id);
  };

  return (
    <>
      <DefaultBanner
        title="Hydronic Heater Installation Melbourne – Professional System Design & Installation"
        subTitle="Expert Hydronic Heating Installation"
        titleLink="/hydronic-heating"
      />

      {/* JSON-LD Schema */}
      <JSONLDScript
        schema={generateServiceSchema(
          "Hydronic Heating Installation",
          "Professional hydronic heating system design and installation across Melbourne",
          "https://heaterservicemelbourne.com.au/hydronic-heating",
        )}
        id="hydronic-installation-schema"
      />

      {/* Breadcrumbs */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Hydronic Heating", url: "/hydronic-heating" },
          { name: "Installation", url: "#" },
        ]}
        schema={true}
      />

      {/* HERO SECTION WITH SPLIT LAYOUT */}
      <section
        className="hero-installation py-5"
        style={{ backgroundColor: "#f4f5f9" }}
      >
        <div className="container">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="row align-items-center gy-5"
          >
            {/* LEFT: Heading & CTA */}
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <h1
                  className="fw-bolder mb-4"
                  style={{
                    fontSize: "3rem",
                    color: "#062f3a",
                    lineHeight: "1.2",
                  }}
                >
                  Professional Hydronic Installation
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Are you tired of uneven heating? Discover quiet, efficient,
                  consistent warmth with custom hydronic heating designed
                  specifically for Melbourne homes.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  Serving all Melbourne suburbs with VBA Licensed technicians,
                  25-year warranties, and transparent pricing.
                </p>

                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href="/contact"
                      className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{
                        backgroundColor: "#fd5523",
                        transition: "background-color 0.3s ease",
                        fontSize: "1rem",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#e54a1f";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#fd5523";
                      }}
                    >
                      Book Free Assessment
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <a
                      href="tel:0405133761"
                      className="px-5 py-3 text-decoration-none rounded-3 fw-bold border"
                      style={{
                        backgroundColor: "white",
                        color: "#fd5523",
                        borderColor: "#fd5523",
                        transition: "all 0.3s ease",
                        fontSize: "1rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f4f5f9";
                        e.currentTarget.style.borderColor = "#fd5523";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.borderColor = "#fd5523";
                      }}
                    >
                      <i className="icon-phone-call"></i> Call Now
                    </a>
                  </motion.div>
                </div>

                {/* Trust Badges */}
                <div className="d-flex gap-3 flex-wrap">
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#f0fdf4",
                      color: "#166534",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    ✓ VBA LICENSED
                  </span>
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#eff6ff",
                      color: "#1e40af",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    ✓ WARRANTY
                  </span>
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#f0f9ff",
                      color: "#0369a1",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    ✓ FREE ASSESSMENT
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Hero Image */}
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="position-relative"
              >
                <Image
                  src={ServiceDetailsImg1}
                  alt="Professional hydronic heating system installation for Melbourne homes - expert technician working on radiator installation"
                  className="img-fluid rounded-4"
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    boxShadow: "0 10px 40px rgba(26, 26, 26, 0.1)",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{
                    maxWidth: "220px",
                    backgroundColor: "#1a3a52",
                    color: "white",
                    boxShadow: "0 8px 24px rgba(26, 26, 26, 0.12)",
                  }}
                >
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>
                      Professional Installation
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      Trusted by 2000+ Melbourne families
                    </span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STATS BANNER */}
      <section
        className="stats-banner py-5"
        style={{
          backgroundColor: "#f4f5f9",
          borderTop: "1px solid #e6e6e6",
          borderBottom: "1px solid #e6e6e6",
        }}
      >
        <div className="container">
          <div className="row gy-4">
            <StatCard
              icon="fas fa-clock"
              value={15}
              suffix="+"
              label="Years Experience"
            />
            <StatCard
              icon="fas fa-home"
              value={2000}
              suffix="+"
              label="Homes Installed"
            />
            <StatCard
              icon="fas fa-star"
              value={4}
              suffix=".9"
              label="Star Rating"
            />
            <StatCard
              icon="fas fa-user-tie"
              value={12}
              suffix="+"
              label="Licensed Technicians"
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            {/* <TransportSidebar /> */}
            <div className="col-xl-12 ">
              <div className="service-details__left">
                {/* Intro Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-flame"></i>
                      </div>
                      <h6 className="section-title__tagline">Why Choose Us</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-flame"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Why Choose Us for Hydronic <span>Installation?</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Are you tired of uneven heating, cold bedrooms, and noisy
                    forced-air systems? Hydronic heating delivers quiet,
                    consistent warmth that feels naturally comfortable. At
                    Heating Service Melbourne, we specialize in designing and
                    installing custom hydronic heating systems tailored to your
                    Melbourne home&apos;s unique needs.
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      What makes us different:
                    </strong>{" "}
                    Unlike forced-air systems that lose 20-30% of energy through
                    ductwork, our professionally designed and installed hydronic
                    systems operate at 85-95% efficiency.
                  </p>
                </motion.div>

                {/* Key Benefits Section */}
                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-star"></i>
                      </div>
                      <h6 className="section-title__tagline">Our Benefits</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Hydronic Heating <span>Benefits</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true, margin: "-100px" }}
                    className="row gy-4"
                  >
                    {[
                      {
                        icon: "fas fa-sliders-h",
                        title: "Easy Zoning",
                        description:
                          "Radiator panels with valve controls regulate climate in each room. Bedrooms cooler for restful sleep, bathrooms warmer for winter showers.",
                      },
                      {
                        icon: "fas fa-smile",
                        title: "Maximum Comfort",
                        description:
                          "Programmable thermostat suits your lifestyle. Control via smartphone anywhere. Experience even temperatures room-to-room with no draughts or cold spots.",
                      },
                      {
                        icon: "fas fa-wind",
                        title: "Clean & Quiet",
                        description:
                          "Dust-free radiant heat—ideal for asthma and allergy sufferers. No noisy fan systems, just naturally convected warmth.",
                      },
                      {
                        icon: "fas fa-cog",
                        title: "Durable & Low Maintenance",
                        description:
                          "Hydronic systems last 25+ years with minimal moving parts. Extremely durable materials ensure reliable performance.",
                      },
                      {
                        icon: "fas fa-cube",
                        title: "Versatile & Flexible",
                        description:
                          "Ideal for all property types—period renovations to modern homes. Perfect for 2-storey properties. Easily altered or extended anytime.",
                      },
                      {
                        icon: "fas fa-home",
                        title: "Adds Value to Your Home",
                        description:
                          "Most desirable heating form increases home value. High-quality European panels add style, or choose slab/floor heating for modern aesthetics.",
                      },
                    ].map((feature, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <FadeInAdvanced
                          variant={
                            index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                          }
                          delay={(index + 1) * 50}
                          duration={600}
                        >
                          <FeatureCard
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                          />
                        </FadeInAdvanced>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* How It Works Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="my-5 py-5"
                >
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <h6 className="section-title__tagline">How It Works</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-cogs"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        How Hydronic Heating <span>Works</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Hydronic heating works by circulating heated water through
                    pipes connected to radiators or underfloor tubing. A boiler
                    or heat source warms the water, which then travels through
                    the system and releases gentle, radiant warmth into each
                    room.
                  </p>
                  <div
                    className="p-4 rounded-3"
                    style={{
                      backgroundColor: "#f4f5f9",
                      borderLeft: "4px solid #fd5523",
                      boxShadow: "0 2px 8px rgba(6, 47, 58, 0.04)",
                    }}
                  >
                    <strong style={{ color: "#fd5523", fontSize: "1rem" }}>
                      <i
                        className="fas fa-lightbulb me-2"
                        style={{ color: "#fd5523" }}
                      ></i>
                      Key Advantage
                    </strong>
                    <p
                      className="mb-0 mt-2 text-secondary"
                      style={{ lineHeight: "1.7" }}
                    >
                      The warmth spreads gently through the space and maintains
                      consistent temperatures across your entire home.
                    </p>
                  </div>
                </motion.div>

                {/* Why Professional Matters - Using WhyProfessionalMatters Component */}
                <div className="my-5">
                  <WhyProfessionalMatters />
                </div>

                {/* Service Area Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="my-5 p-5 rounded-4"
                  style={{
                    backgroundColor: "#f0f5fa",
                    border: "1px solid #e0e8f0",
                  }}
                >
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <h6 className="section-title__tagline">Service Area</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        We Service All Melbourne <span>Suburbs</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-0"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      We service all Melbourne suburbs
                    </strong>
                    —from inner city apartments to outer metropolitan homes.
                    Regardless of your location in Greater Melbourne, our VBA
                    licensed technicians are equipped to handle your hydronic
                    heating installation and maintenance needs.
                  </p>
                  <div className="row gy-3 mt-4">
                    <div className="col-md-6">
                      <div
                        className="d-flex align-items-start"
                        style={{ gap: "12px" }}
                      >
                        <i
                          className="fas fa-check-circle"
                          style={{
                            color: "#fd5523",
                            fontSize: "1.25rem",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        ></i>
                        <div>
                          <strong style={{ color: "#1a1a1a" }}>
                            All Melbourne Suburbs
                          </strong>
                          <p
                            className="text-secondary mb-0"
                            style={{ fontSize: "0.95rem" }}
                          >
                            Urban, suburban, and outer regions
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="d-flex align-items-start"
                        style={{ gap: "12px" }}
                      >
                        <i
                          className="fas fa-check-circle"
                          style={{
                            color: "#fd5523",
                            fontSize: "1.25rem",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        ></i>
                        <div>
                          <strong style={{ color: "#1a1a1a" }}>
                            Fast Response Times
                          </strong>
                          <p
                            className="text-secondary mb-0"
                            style={{ fontSize: "0.95rem" }}
                          >
                            Quick assessments and installations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="d-flex align-items-start"
                        style={{ gap: "12px" }}
                      >
                        <i
                          className="fas fa-check-circle"
                          style={{
                            color: "#fd5523",
                            fontSize: "1.25rem",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        ></i>
                        <div>
                          <strong style={{ color: "#1a1a1a" }}>
                            Emergency Services
                          </strong>
                          <p
                            className="text-secondary mb-0"
                            style={{ fontSize: "0.95rem" }}
                          >
                            24/7 heating repairs available
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="d-flex align-items-start"
                        style={{ gap: "12px" }}
                      >
                        <i
                          className="fas fa-check-circle"
                          style={{
                            color: "#fd5523",
                            fontSize: "1.25rem",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        ></i>
                        <div>
                          <strong style={{ color: "#1a1a1a" }}>
                            Local Expertise
                          </strong>
                          <p
                            className="text-secondary mb-0"
                            style={{ fontSize: "0.95rem" }}
                          >
                            15+ years serving Melbourne
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Installation Process - Using ProcessSteps Component */}
                <div className="my-5">
                  <ProcessOne />
                </div>

                {/* FAQ Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="my-5 py-5"
                >
                  <div className="section-title text-center sec-title-animation animation-style1 mb-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-question-circle"></i>
                      </div>
                      <h6 className="section-title__tagline">
                        Frequently Asked
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-question-circle"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Your Questions <span>Answered</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      {/* Left Column - First 5 Hydronic FAQs */}
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4
                            className="fw-bolder mb-5 pb-4"
                            style={{
                              color: "#062f3a",
                              fontSize: "1.3rem",
                              borderBottom: "2px solid #fd5523",
                            }}
                          >
                            <i
                              className="fas fa-fire me-2"
                              style={{ color: "#fd5523" }}
                            ></i>
                            Hydronic Systems
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {faqDataHydronic
                              .slice(0, 5)
                              .map((item: FaqItem) => (
                                <FadeInAdvanced
                                  key={item.id}
                                  variant={"fadeInLeft"}
                                  delay={item?.id * 50}
                                  duration={100}
                                  className={`accrodion ${
                                    activeFaq === item.id ? "active" : ""
                                  }`}
                                >
                                  <div
                                    className="accrodion-title"
                                    onClick={() => handleFaqItem(item?.id)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <h4>{item?.question}</h4>
                                  </div>
                                  <motion.div
                                    initial={{ y: -40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                      duration: 0.5,
                                      ease: "easeOut",
                                    }}
                                    viewport={{ amount: 0.05 }}
                                    className="accrodion-content"
                                    style={{
                                      display: `${
                                        activeFaq === item.id ? "block" : "none"
                                      }`,
                                    }}
                                  >
                                    <div className="inner">
                                      <p>{item?.answer}</p>
                                    </div>
                                  </motion.div>
                                </FadeInAdvanced>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Last 5 Hydronic FAQs */}
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4
                            className="fw-bolder mb-5 pb-4"
                            style={{
                              color: "#062f3a",
                              fontSize: "1.3rem",
                              borderBottom: "2px solid #fd5523",
                            }}
                          >
                            <i
                              className="fas fa-lightbulb me-2"
                              style={{ color: "#fd5523" }}
                            ></i>
                            Related Topics
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {faqDataHydronic
                              .slice(5, 10)
                              .map((item: FaqItem) => (
                                <FadeInAdvanced
                                  key={item.id}
                                  variant={"fadeInRight"}
                                  delay={(item?.id * 50) / 2}
                                  duration={100}
                                  className={`accrodion ${
                                    activeFaq === item.id ? "active" : ""
                                  }`}
                                >
                                  <div
                                    className="accrodion-title"
                                    onClick={() => handleFaqItem(item?.id)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <h4>{item?.question}</h4>
                                  </div>
                                  <motion.div
                                    initial={{ y: -40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                      duration: 0.5,
                                      ease: "easeOut",
                                    }}
                                    viewport={{ amount: 0.05 }}
                                    className="accrodion-content"
                                    style={{
                                      display: `${
                                        activeFaq === item.id ? "block" : "none"
                                      }`,
                                    }}
                                  >
                                    <div className="inner">
                                      <p>{item?.answer}</p>
                                    </div>
                                  </motion.div>
                                </FadeInAdvanced>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Final CTA Section */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="my-5 p-5 rounded-4 text-center"
                  style={{
                    backgroundColor: "#062f3a",
                    boxShadow: "0 8px 32px rgba(6, 47, 58, 0.15)",
                  }}
                >
                  <h3
                    className="fw-bolder mb-4"
                    style={{
                      fontSize: "2rem",
                      color: "white",
                      lineHeight: "1.3",
                    }}
                  >
                    Ready to Upgrade Your Heating?
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#d9e0eb",
                      lineHeight: "1.7",
                    }}
                  >
                    Schedule your free heating assessment today. No obligation,
                    no pressure&mdash;just expert advice about what&apos;s right
                    for your home.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        href="/contact"
                        className="px-5 py-3 text-black text-decoration-none rounded-3 fw-bold"
                        style={{
                          backgroundColor: "white",
                          color: "#062f3a",
                          transition: "background-color 0.3s ease",
                          fontSize: "1rem",
                          display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = "#f4f5f9";
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = "white";
                        }}
                      >
                        Book Free Assessment
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <a
                        href="tel:0405133761"
                        className="px-5 py-3 text-decoration-none rounded-3 fw-bold border"
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                          borderColor: "white",
                          transition: "all 0.3s ease",
                          fontSize: "1rem",
                          display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "rgba(255, 255, 255, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <i className="fas fa-phone me-2"></i> 0405 133 761
                      </a>
                    </motion.div>
                  </div>
                  <p
                    className="mt-5 mb-0"
                    style={{
                      fontSize: "0.9rem",
                      color: "#a8b8cc",
                      letterSpacing: "0.5px",
                    }}
                  >
                    ✓ ALL MELBOURNE SUBURBS • ✓ VBA LICENSED • ✓ WARRANTY • ✓
                    FREE ASSESSMENT
                  </p>
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Near You - Internal Linking */}
      <ServiceAreasNearYou
        limit={12}
        title="Installation Service Areas"
        subtitle="Professional installation available across all Melbourne suburbs"
      />
    </>
  );
};

export default Page;
