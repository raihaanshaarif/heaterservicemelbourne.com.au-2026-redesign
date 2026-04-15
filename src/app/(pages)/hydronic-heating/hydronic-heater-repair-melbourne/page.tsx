"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ServiceDetailsImg1 from "@/assets/images/services/service-details-img-1.jpg";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import { WhyProfessionalMatters } from "@/components/hydronic/WhyProfessionalMatters";
import Image from "next/image";
import Link from "next/link";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TextAnimation from "@/components/elements/TextAnimation";

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
  const [activeFaq, setActiveFaq] = useState<number>(1);

  const handleFaqItem = (id: number): void => {
    setActiveFaq(id);
  };

  return (
    <>
      <DefaultBanner
        title="Hydronic Heating Repair Melbourne – 24/7 Emergency Service"
        subTitle="Fast, Professional & Reliable Repair Solutions"
        titleLink="/hydronic-heating"
      />

      {/* HERO SECTION WITH SPLIT LAYOUT */}
      <section
        className="hero-repair py-5"
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
                  Expert Hydronic Heating Repair
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Don&apos;t let a faulty heating system leave your family
                  shivering. When your hydronic system fails, we respond fast
                  with VBA-licensed technicians available 24/7.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  2-4 hour emergency response across Melbourne. Transparent
                  pricing. 12-month warranty on all repairs.
                </p>

                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <a
                      href="tel:0405133761"
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
                      <i className="fas fa-phone me-2"></i> Call Emergency Now
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href="/contact"
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
                      <i className="fas fa-calendar-alt me-2"></i> Book Repair
                    </Link>
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
                    ✓ 24/7 EMERGENCY SERVICE
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
                    ✓ 12-MONTH WARRANTY
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
                    ✓ VBA LICENSED
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
                  alt="Professional hydronic heating repair technician in Melbourne performing emergency boiler service and diagnostics"
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
                    backgroundColor: "#dc2626",
                    color: "white",
                    boxShadow: "0 8px 24px rgba(26, 26, 26, 0.12)",
                  }}
                >
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>
                      🚨 Emergency Dispatch
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      2-4 hours in Melbourne metro
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
              label="Years Repair Experience"
            />
            <StatCard
              icon="fas fa-wrench"
              value={5000}
              suffix="+"
              label="Repairs Completed"
            />
            <StatCard
              icon="fas fa-star"
              value={4}
              suffix=".9"
              label="Star Rating"
            />
            <StatCard
              icon="fas fa-phone"
              value={24}
              suffix="/7"
              label="Emergency Service"
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
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
                        <i className="fas fa-tools"></i>
                      </div>
                      <h6 className="section-title__tagline">Why Us</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-tools"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Why Choose Us for Hydronic <span>Repair?</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    When your hydronic heating system fails, there&apos;s no
                    time to waste. Heating Service Melbourne delivers rapid
                    response times with expert technicians who diagnose and fix
                    hydronic problems fast. We understand heating failure is an
                    emergency, especially during Melbourne&apos;s cold winters.
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      What makes us different:
                    </strong>{" "}
                    We&apos;re available 24/7/365 for emergency repairs, provide
                    transparent pricing with quotes before work, and back every
                    repair with a 12-month warranty. Our VBA-licensed
                    technicians have 15+ years experience with all hydronic
                    system types.
                  </p>
                </motion.div>

                {/* Repair Services Section */}
                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <h6 className="section-title__tagline">Services</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-check-circle"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Repair Services We <span>Provide</span>
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
                        icon: "fas fa-fire",
                        title: "Boiler Repair & Service",
                        description:
                          "Boiler malfunction, ignition failure, pressure issues, and leaks. We diagnose and repair all boiler types with parts warranty.",
                      },
                      {
                        icon: "fas fa-water",
                        title: "Circulation System Repair",
                        description:
                          "Pump failures, blocked pipes, air in system, and pressure tank issues. Complete circulation diagnostics and repairs.",
                      },
                      {
                        icon: "fas fa-thermometer-half",
                        title: "Thermostat & Control Issues",
                        description:
                          "Temperature sensor problems, control board failures, program issues. Expert diagnosis and part replacement.",
                      },
                      {
                        icon: "fas fa-plug",
                        title: "Emergency Repairs",
                        description:
                          "No heat output, system shutdown, water leaks, and loud noises. 24/7 response for urgent heating emergencies.",
                      },
                      {
                        icon: "fas fa-pipe",
                        title: "Radiator & Pipe Work",
                        description:
                          "Radiator leaks, corrosion, damaged pipes, and blockages. Quick replacement and repair for restored heat.",
                      },
                      {
                        icon: "fas fa-cogs",
                        title: "System Maintenance & Flushing",
                        description:
                          "Annual maintenance, system flushing, pressure balancing, and preventative care to avoid future breakdowns.",
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

                {/* Repair Process Section */}
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
                      <h6 className="section-title__tagline">Our Process</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-cogs"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Our Repair <span>Process</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    We follow a proven 4-step repair process ensuring your
                    heating system is fixed right the first time with minimal
                    downtime.
                  </p>
                  <div className="row gy-4">
                    <div className="col-lg-6">
                      <h5
                        className="mb-3"
                        style={{ color: "#1a1a1a", fontWeight: 700 }}
                      >
                        <i
                          className="fas fa-clipboard-check me-2"
                          style={{ color: "#fd5523" }}
                        ></i>
                        Step 1: Rapid Diagnosis
                      </h5>
                      <p
                        className="text-secondary"
                        style={{ lineHeight: "1.7" }}
                      >
                        Our technician arrives equipped with diagnostic tools to
                        identify the exact problem. We assess boiler,
                        circulation, controls, and all components to pinpoint
                        the fault. Diagnostic fee typically $80-150 (credited
                        toward repair).
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h5
                        className="mb-3"
                        style={{ color: "#1a1a1a", fontWeight: 700 }}
                      >
                        <i
                          className="fas fa-dollar-sign me-2"
                          style={{ color: "#fd5523" }}
                        ></i>
                        Step 2: Transparent Quote
                      </h5>
                      <p
                        className="text-secondary"
                        style={{ lineHeight: "1.7" }}
                      >
                        We explain the issue in plain language and provide a
                        clear, itemized quote showing all costs before work
                        begins. No surprises, no hidden fees. You approve before
                        repair work starts.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h5
                        className="mb-3"
                        style={{ color: "#1a1a1a", fontWeight: 700 }}
                      >
                        <i
                          className="fas fa-tools me-2"
                          style={{ color: "#fd5523" }}
                        ></i>
                        Step 3: Professional Repair
                      </h5>
                      <p
                        className="text-secondary"
                        style={{ lineHeight: "1.7" }}
                      >
                        Our VBA-licensed technicians complete the repair using
                        quality replacement parts. We repair or replace—pump,
                        valve, thermostat, radiator, boiler components, or pipes
                        as needed.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h5
                        className="mb-3"
                        style={{ color: "#1a1a1a", fontWeight: 700 }}
                      >
                        <i
                          className="fas fa-check-double me-2"
                          style={{ color: "#fd5523" }}
                        ></i>
                        Step 4: Testing & Verification
                      </h5>
                      <p
                        className="text-secondary"
                        style={{ lineHeight: "1.7" }}
                      >
                        We test your system thoroughly ensuring full capacity
                        operation. All functions verified, temperature checked,
                        and performance confirmed before we leave your home.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Why Professional Matters */}
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
                      24/7 Emergency repair coverage across all Melbourne
                      suburbs
                    </strong>
                    —from inner city to outer metropolitan areas. When your
                    heating fails, we dispatch immediately with 2-4 hour
                    response time.
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
                            Urban, suburban, and outer regions covered
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
                            Fast Emergency Response
                          </strong>
                          <p
                            className="text-secondary mb-0"
                            style={{ fontSize: "0.95rem" }}
                          >
                            2-4 hour dispatch guaranteed
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
                            24/7 Availability
                          </strong>
                          <p
                            className="text-secondary mb-0"
                            style={{ fontSize: "0.95rem" }}
                          >
                            Weekends and public holidays included
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
                            12-Month Warranty
                          </strong>
                          <p
                            className="text-secondary mb-0"
                            style={{ fontSize: "0.95rem" }}
                          >
                            All repairs covered with warranty
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

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
                        Repair Questions <span>Answered</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      {/* Left Column - Repair FAQs */}
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
                              className="fas fa-wrench me-2"
                              style={{ color: "#fd5523" }}
                            ></i>
                            Repair Services
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {[
                              {
                                id: 1,
                                question:
                                  "What's the fastest way to get emergency repair?",
                                answer:
                                  "Call us immediately at 0405 133 761 for urgent dispatch. We maintain 2-4 hour response times across Melbourne metro, 24/7/365. For emergencies outside business hours, there's a small after-hours surcharge ($100-200). We prioritize emergencies to get your heating back online quickly.",
                              },
                              {
                                id: 2,
                                question:
                                  "How much does hydronic heating repair cost?",
                                answer:
                                  "Repair costs range $150-$1,500+ depending on the problem. Diagnostic is typically $80-150 (credited toward repair). Simple repairs: $200-400. Component replacement: $400-800. Complex repairs: $800-1,500+. We always provide detailed quotes before work with no hidden fees.",
                              },
                              {
                                id: 3,
                                question:
                                  "Do you offer emergency repair on weekends?",
                                answer:
                                  "Yes. Our emergency service is available 24/7 including all weekends and public holidays. We're always on-call for heating emergencies. Emergency rates apply outside standard 8am-5pm weekday hours, with surcharge typically $100-200.",
                              },
                              {
                                id: 4,
                                question: "Is repair work guaranteed?",
                                answer:
                                  "Yes! All repair work includes a 12-month warranty. If the same issue recurs within 12 months, we fix it at no charge. We stand behind our work with complete confidence. Parts also come with manufacturer warranties.",
                              },
                              {
                                id: 5,
                                question:
                                  "What should I do if my heating stops working?",
                                answer:
                                  "Call us immediately at 0405 133 761 for emergency service. Don't repeatedly restart the system as this can damage components. Check if the thermostat is set correctly and the boiler is powered on. If still no heat, it's a system malfunction requiring expert diagnosis.",
                              },
                            ].map((item) => (
                              <FadeInAdvanced
                                key={item.id}
                                variant={"fadeInLeft"}
                                delay={item.id * 50}
                                duration={100}
                                className={`accrodion ${
                                  activeFaq === item.id ? "active" : ""
                                }`}
                              >
                                <div
                                  className="accrodion-title"
                                  onClick={() => handleFaqItem(item.id)}
                                  style={{ cursor: "pointer" }}
                                >
                                  <h4>{item.question}</h4>
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
                                    <p>{item.answer}</p>
                                  </div>
                                </motion.div>
                              </FadeInAdvanced>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Additional FAQs */}
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
                              className="fas fa-info-circle me-2"
                              style={{ color: "#fd5523" }}
                            ></i>
                            General Questions
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {[
                              {
                                id: 6,
                                question:
                                  "Why is my hydronic system making strange noises?",
                                answer:
                                  "Strange banging or whistling typically indicates air in the system or pressure issues. This needs immediate attention as it can damage the compressor and boiler. Common causes: low system pressure, air trapped in pipes, circulation pump cavitation, or cracked heat exchanger.",
                              },
                              {
                                id: 7,
                                question:
                                  "What if there's water leaking from my boiler?",
                                answer:
                                  "Water leaks are serious and require urgent repair. Causes include cracked heat exchanger, failed seals, corrosion, or loose connections. A leaking boiler loses efficiency and can cause damage. Don't delay—call for emergency service. Most leaks require component replacement or boiler replacement.",
                              },
                              {
                                id: 8,
                                question:
                                  "How do I know if my thermostat is broken?",
                                answer:
                                  "Signs of thermostat failure: system doesn't respond to temperature changes, won't turn on/off, displays error codes, or temperature reading is incorrect. Test by adjusting the thermostat—if nothing happens or behaves erratically, it likely needs replacement. Thermostat replacement typically costs $300-600.",
                              },
                              {
                                id: 9,
                                question: "Can I repair the system myself?",
                                answer:
                                  "Hydronic systems are complex and require professional expertise. DIY repairs risk damaging the system, voiding warranties, and creating safety hazards (gas, water damage, electrical). Most jurisdictions require licensed technicians. Always hire a VBA-licensed professional.",
                              },
                              {
                                id: 10,
                                question:
                                  "How often should I service my hydronic system?",
                                answer:
                                  "We recommend annual maintenance to prevent breakdowns and extend system life. Annual service includes pressure check, system flushing, component inspection, and performance testing. Regular maintenance catches problems early, improves efficiency, and saves money.",
                              },
                            ].map((item) => (
                              <FadeInAdvanced
                                key={item.id}
                                variant={"fadeInRight"}
                                delay={(item.id * 50) / 2}
                                duration={100}
                                className={`accrodion ${
                                  activeFaq === item.id ? "active" : ""
                                }`}
                              >
                                <div
                                  className="accrodion-title"
                                  onClick={() => handleFaqItem(item.id)}
                                  style={{ cursor: "pointer" }}
                                >
                                  <h4>{item.question}</h4>
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
                                    <p>{item.answer}</p>
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
                <motion.div
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
                    Your Heating Emergency Needs Immediate Help?
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#d9e0eb",
                      lineHeight: "1.7",
                    }}
                  >
                    We&apos;re available 24/7 with rapid response times. Our
                    VBA-licensed technicians will diagnose and fix your hydronic
                    system fast.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <a
                        href="tel:0405133761"
                        className="px-5 py-3 text-black text-decoration-none rounded-3 fw-bold border"
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                          borderColor: "white",
                          transition: "all 0.3s ease",
                          fontSize: "1rem",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "white";
                          e.currentTarget.style.color = "#062f3a";
                          e.currentTarget.style.borderColor = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "white";
                          e.currentTarget.style.borderColor = "white";
                        }}
                      >
                        <i className="icon-phone-call"></i> Call Emergency: 0405
                        133 761
                      </a>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        href="/contact"
                        className="px-5 py-3 text-decoration-none rounded-3 fw-bold border"
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                          borderColor: "white",
                          transition: "all 0.3s ease",
                          fontSize: "1rem",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "white";
                          e.currentTarget.style.color = "#062f3a";
                          e.currentTarget.style.borderColor = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "white";
                          e.currentTarget.style.borderColor = "white";
                        }}
                      >
                        <i className="fas fa-calendar-alt me-2"></i> Book Repair
                        Online
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
