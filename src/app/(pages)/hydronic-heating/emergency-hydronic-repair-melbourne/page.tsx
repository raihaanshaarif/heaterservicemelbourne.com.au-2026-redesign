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
            <i className={icon} style={{ color: "#d32f2f" }}></i>
          ) : (
            icon
          )}
        </div>
        <div
          className="stat-value mb-2"
          style={{ fontSize: "2.8rem", fontWeight: 800, color: "#d32f2f" }}
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
          <i className={icon} style={{ color: "#d32f2f" }}></i>
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

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeFaq, setActiveFaq] = useState<number>(1);

  const handleFaqItem = (id: number): void => {
    setActiveFaq(id);
  };

  return (
    <>
      <DefaultBanner
        title="🚨 Emergency Hydronic Repair Melbourne – 24/7 Available"
        subTitle="Heating Failed? We Arrive Within 2-4 Hours"
        titleLink="/hydronic-heating"
      />

      {/* HERO SECTION */}
      <section
        className="hero-emergency py-5"
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
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <h1
                  className="fw-bolder mb-4"
                  style={{
                    fontSize: "3rem",
                    color: "#d32f2f",
                    lineHeight: "1.2",
                  }}
                >
                  Heating Emergency? We&apos;re Here 24/7
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Your heating just failed. We understand the panic. Available
                  24/7/365, we respond within 2-4 hours with emergency
                  technicians equipped to diagnose and often repair same-day.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  VBA licensed. Transparent pricing. Limited warranty on all
                  emergency repairs.
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
                        backgroundColor: "#d32f2f",
                        fontSize: "1rem",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#b71c1c";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#d32f2f";
                      }}
                    >
                      <i className="fas fa-phone me-2"></i> Call Emergency
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
                        color: "#d32f2f",
                        borderColor: "#d32f2f",
                        fontSize: "1rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f4f5f9";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                      }}
                    >
                      <i className="fas fa-calendar-alt me-2"></i> Book Now
                    </Link>
                  </motion.div>
                </div>

                <div className="d-flex gap-3 flex-wrap">
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#ffebee",
                      color: "#c62828",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    ✓ 2-4 HOUR RESPONSE
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
                    ✓ 24/7 AVAILABLE
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

            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="position-relative"
              >
                <Image
                  src={ServiceDetailsImg1}
                  alt="Emergency hydronic heating repair technician arriving quickly to Melbourne home"
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
                    backgroundColor: "#d32f2f",
                    color: "white",
                    boxShadow: "0 8px 24px rgba(26, 26, 26, 0.12)",
                  }}
                >
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>
                      🚨 EMERGENCY AVAILABLE
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      Call now, we respond in hours
                    </span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STATS */}
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
              value={24}
              suffix="/7"
              label="Emergency Available"
            />
            <StatCard
              icon="fas fa-hourglass-end"
              value={2}
              suffix="-4"
              label="Hours Response"
            />
            <StatCard
              icon="fas fa-star"
              value={4}
              suffix=".9"
              label="Star Rating"
            />
            <StatCard
              icon="fas fa-check-circle"
              value={2000}
              suffix="+"
              label="Emergencies Fixed"
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__left">
                {/* Why Us */}
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
                        <i className="fas fa-heartbeat"></i>
                      </div>
                      <h6 className="section-title__tagline">
                        Emergency Response
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-heartbeat"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Why Choose Us for <span>Emergency Repair?</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    When heating fails, you need immediate professional help. We
                    arrive fast with VBA-licensed technicians equipped to
                    diagnose and fix hydronic emergencies on-site, often within
                    the same day.
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      What sets us apart:
                    </strong>{" "}
                    24/7 availability means no waiting for business hours. Our
                    emergency vehicles are equipped with diagnostic tools and
                    common replacement parts, enabling same-day fixes for most
                    problems.
                  </p>
                </motion.div>

                {/* Emergency Issues */}
                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-exclamation-circle"></i>
                      </div>
                      <h6 className="section-title__tagline">Common Issues</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-exclamation-circle"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Emergency Issues We <span>Fix Fast</span>
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
                        title: "No Heat or Hot Water",
                        description:
                          "System shutdown or no output. Often a simple reset, pump restart, or control issue. Fixed same-day in most cases.",
                      },
                      {
                        icon: "fas fa-warning",
                        title: "Boiler Won't Ignite",
                        description:
                          "Error codes (E110, EA, etc.). Diagnosed and fixed immediately. Most ignition failures resolved within 2 hours.",
                      },
                      {
                        icon: "fas fa-tint",
                        title: "Pressure Loss",
                        description:
                          "System constantly losing pressure. Usually a small leak, valve issue, or expansion tank problem. Quickly diagnosed and repaired.",
                      },
                      {
                        icon: "fas fa-wind",
                        title: "Strange Noises",
                        description:
                          "Banging, kettling, or whistling sounds. Air in system or pressure issues. Fixed by bleeding, adjusting, or replacing components.",
                      },
                      {
                        icon: "fas fa-water",
                        title: "Water Leaking",
                        description:
                          "Boiler or pipe leaks. Assessed immediately and repaired or replaced. Prevents further water damage to your home.",
                      },
                      {
                        icon: "fas fa-snowflake",
                        title: "Cold Radiators",
                        description:
                          "No flow to specific zones. Air, blockage, or pump failure. Circulation restored quickly to warm your home again.",
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

                {/* Process */}
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
                        <i className="fas fa-tasks"></i>
                      </div>
                      <h6 className="section-title__tagline">Quick Start</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-tasks"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Emergency Response <span>Steps</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <div className="row gy-4">
                    <div className="col-lg-6">
                      <h5
                        className="mb-3"
                        style={{ color: "#1a1a1a", fontWeight: 700 }}
                      >
                        <i
                          className="fas fa-phone me-2"
                          style={{ color: "#d32f2f" }}
                        ></i>
                        Step 1: Call Immediately
                      </h5>
                      <p
                        className="text-secondary"
                        style={{ lineHeight: "1.7" }}
                      >
                        Call 0405 133 761 for emergency dispatch. Our dispatcher
                        confirms your issue, provides an exact arrival window
                        (typically 2-4 hours), and answers initial questions.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h5
                        className="mb-3"
                        style={{ color: "#1a1a1a", fontWeight: 700 }}
                      >
                        <i
                          className="fas fa-clipboard me-2"
                          style={{ color: "#d32f2f" }}
                        ></i>
                        Step 2: Rapid Diagnosis
                      </h5>
                      <p
                        className="text-secondary"
                        style={{ lineHeight: "1.7" }}
                      >
                        Technician arrives with diagnostic tools. System
                        assessed immediately. We identify the exact problem
                        within 30-45 minutes of arrival.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h5
                        className="mb-3"
                        style={{ color: "#1a1a1a", fontWeight: 700 }}
                      >
                        <i
                          className="fas fa-quote-left me-2"
                          style={{ color: "#d32f2f" }}
                        ></i>
                        Step 3: Transparent Quote
                      </h5>
                      <p
                        className="text-secondary"
                        style={{ lineHeight: "1.7" }}
                      >
                        Clear cost estimate provided before any work. No
                        surprises, no hidden charges. You approve before repair
                        begins.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h5
                        className="mb-3"
                        style={{ color: "#1a1a1a", fontWeight: 700 }}
                      >
                        <i
                          className="fas fa-tools me-2"
                          style={{ color: "#d32f2f" }}
                        ></i>
                        Step 4: Fast Repair
                      </h5>
                      <p
                        className="text-secondary"
                        style={{ lineHeight: "1.7" }}
                      >
                        Professional repair using quality parts. System tested
                        and verified. Often completed same-day, restoring your
                        heat and comfort quickly.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Why Professional */}
                <div className="my-5">
                  <WhyProfessionalMatters />
                </div>

                {/* Service Area */}
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
                        <i className="fas fa-location-arrow"></i>
                      </div>
                      <h6 className="section-title__tagline">Coverage</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-location-arrow"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Emergency Service Across <span>Melbourne</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-0"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      24/7 Emergency response throughout all Melbourne suburbs
                      and surrounding areas.
                    </strong>{" "}
                    Inner city, suburbs, outer regions—whenever your heating
                    fails, we&apos;re there.
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
                            color: "#d32f2f",
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
                            24/7 emergency coverage everywhere
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
                            color: "#d32f2f",
                            fontSize: "1.25rem",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        ></i>
                        <div>
                          <strong style={{ color: "#1a1a1a" }}>
                            2-4 Hour Response
                          </strong>
                          <p
                            className="text-secondary mb-0"
                            style={{ fontSize: "0.95rem" }}
                          >
                            Fastest dispatch in Melbourne metro
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
                            color: "#d32f2f",
                            fontSize: "1.25rem",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        ></i>
                        <div>
                          <strong style={{ color: "#1a1a1a" }}>
                            No Waiting
                          </strong>
                          <p
                            className="text-secondary mb-0"
                            style={{ fontSize: "0.95rem" }}
                          >
                            Emergency service weekends & holidays
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
                            color: "#d32f2f",
                            fontSize: "1.25rem",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        ></i>
                        <div>
                          <strong style={{ color: "#1a1a1a" }}>
                            Often Same-Day Fix
                          </strong>
                          <p
                            className="text-secondary mb-0"
                            style={{ fontSize: "0.95rem" }}
                          >
                            Most emergencies resolved same visit
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* FAQ */}
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
                      <h6 className="section-title__tagline">Emergency Help</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-question-circle"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Emergency Questions <span>Answered</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4
                            className="fw-bolder mb-5 pb-4"
                            style={{
                              color: "#062f3a",
                              fontSize: "1.3rem",
                              borderBottom: "2px solid #d32f2f",
                            }}
                          >
                            <i
                              className="fas fa-hourglass-end me-2"
                              style={{ color: "#d32f2f" }}
                            ></i>
                            Fast Response
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {[
                              {
                                id: 1,
                                question:
                                  "How quickly do you respond to emergencies?",
                                answer:
                                  "Typically 2-4 hours anywhere in Melbourne metro. Call 0405 133 761 and our dispatcher provides exact arrival window while help is on the way.",
                              },
                              {
                                id: 2,
                                question:
                                  "Do you charge extra for after-hours emergencies?",
                                answer:
                                  "Yes, a $100-200 surcharge applies for night, evening, weekend, or holiday dispatch. This ensures 24/7 availability. Surcharge covered by emergency response fee.",
                              },
                              {
                                id: 3,
                                question: "Can my heating be fixed same-day?",
                                answer:
                                  "Most emergencies are fixed same-day. For complex issues requiring parts, we diagnose, provide temporary solutions, and schedule next-day repair.",
                              },
                              {
                                id: 4,
                                question:
                                  "Is emergency repair work guaranteed?",
                                answer:
                                  "Yes. All emergency repairs include Limited warranty. If the same issue recurs within 12 months, we fix it at no charge.",
                              },
                              {
                                id: 5,
                                question:
                                  "What if I can't afford the repair today?",
                                answer:
                                  "We provide transparent quotes upfront. Payment plans available for repairs over $500. Never an excuse to suffer in cold—call us to discuss options.",
                              },
                            ].map((item) => (
                              <FadeInAdvanced
                                key={item.id}
                                variant={"fadeInLeft"}
                                delay={item.id * 50}
                                duration={100}
                                className={`accrodion ${activeFaq === item.id ? "active" : ""}`}
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
                                    display: `${activeFaq === item.id ? "block" : "none"}`,
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

                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4
                            className="fw-bolder mb-5 pb-4"
                            style={{
                              color: "#062f3a",
                              fontSize: "1.3rem",
                              borderBottom: "2px solid #d32f2f",
                            }}
                          >
                            <i
                              className="fas fa-tools me-2"
                              style={{ color: "#d32f2f" }}
                            ></i>
                            Before Technician Arrives
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {[
                              {
                                id: 6,
                                question:
                                  "What should I do while waiting for the technician?",
                                answer:
                                  "Try ONE restart: turn boiler off for 5 minutes, then back on. Record any error codes displayed. Have your boiler model/brand ready. Don't repeatedly restart—this can damage components.",
                              },
                              {
                                id: 7,
                                question: "Can I try to fix it myself?",
                                answer:
                                  "Not recommended. Hydronic systems are complex and require professional expertise. DIY repairs risk damaging the system, voiding warranties, and creating safety hazards.",
                              },
                              {
                                id: 8,
                                question: "Should I turn off the boiler?",
                                answer:
                                  "If you smell gas or see water leaking, YES—turn it off immediately and call us urgently. Otherwise, leave boiler as-is so our technician can diagnose the problem accurately.",
                              },
                              {
                                id: 9,
                                question:
                                  "My radiators are stone cold—is this an emergency?",
                                answer:
                                  "Frozen radiators in winter could become an emergency. Call us urgently. Most cold radiator issues are air in system, blockage, or pump failure—fixable same-day.",
                              },
                              {
                                id: 10,
                                question:
                                  "How much does emergency repair typically cost?",
                                answer:
                                  "Emergency response fee: $150-250. Diagnosis: $80-150 (credited toward repair). Repairs: $200-1,200 depending on complexity. We quote before work begins.",
                              },
                            ].map((item) => (
                              <FadeInAdvanced
                                key={item.id}
                                variant={"fadeInRight"}
                                delay={(item.id * 50) / 2}
                                duration={100}
                                className={`accrodion ${activeFaq === item.id ? "active" : ""}`}
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
                                    display: `${activeFaq === item.id ? "block" : "none"}`,
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

                {/* Final CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="my-5 p-5 rounded-4 text-center"
                  style={{
                    backgroundColor: "#d32f2f",
                    boxShadow: "0 8px 32px rgba(211, 47, 47, 0.15)",
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
                    Your Heating Emergency Needs Immediate Help
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#fff9c4",
                      lineHeight: "1.7",
                    }}
                  >
                    Don&apos;t wait. Call now for 24/7 emergency dispatch. We
                    respond within 2-4 hours with professional VBA-licensed
                    technicians.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <a
                        href="tel:0405133761"
                        className="px-5 py-3 text-black text-decoration-none rounded-3 fw-bold"
                        style={{ backgroundColor: "white", fontSize: "1rem" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#f4f5f9";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "white";
                        }}
                      >
                        <i className="fas fa-phone me-2"></i> Call Now: 0405 133
                        761
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
                          fontSize: "1rem",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "white";
                          e.currentTarget.style.color = "#d32f2f";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "white";
                        }}
                      >
                        <i className="fas fa-calendar-alt me-2"></i> Schedule
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
