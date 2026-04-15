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
            <i className={icon} style={{ color: "#fd5523" }}></i>
          ) : (
            icon
          )}
        </div>
        <div
          className="stat-value mb-2"
          style={{ fontSize: "2.8rem", fontWeight: 800, color: "#fd5523" }}
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
          <i className={icon} style={{ color: "#fd5523" }}></i>
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
        title="Underfloor Slab Heating Repair Melbourne – No Concrete Breaking"
        subTitle="Advanced Thermal Imaging Leak Detection & Repair Services"
        titleLink="/hydronic-heating"
      />

      {/* HERO */}
      <section
        className="hero-underfloor py-5"
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
                    color: "#062f3a",
                    lineHeight: "1.2",
                  }}
                >
                  Underfloor Heating Not Working? We Fix It Without Breaking
                  Concrete
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Expert thermal imaging technology pinpoints leaks with laser
                  precision. Modern epoxy repair methods restore full heat
                  performance without concrete excavation or floor damage.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  Same-day leak detection. Repairs completed in hours, not days.
                  Permanent solutions with 12-month guarantee.
                </p>

                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href="/contact"
                      className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#fd5523", fontSize: "1rem" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#e04a1a";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#fd5523";
                      }}
                    >
                      <i className="fas fa-thermometer-half me-2"></i> Get
                      Thermal Imaging
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
                        fontSize: "1rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f4f5f9";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                      }}
                    >
                      <i className="fas fa-phone me-2"></i> Call Us
                    </a>
                  </motion.div>
                </div>

                <div className="d-flex gap-3 flex-wrap">
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#fff3e0",
                      color: "#fd5523",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    ✓ THERMAL IMAGING
                  </span>
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#e8f5e9",
                      color: "#1b5e20",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    ✓ NO CONCRETE BREAKING
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
                    ✓ 12-MONTH WARRANTY
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
                  alt="Advanced thermal imaging camera detecting underfloor heating leaks in Melbourne slab systems"
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
                    backgroundColor: "#fd5523",
                    color: "white",
                    boxShadow: "0 8px 24px rgba(26, 26, 26, 0.12)",
                  }}
                >
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>
                      ✓ Thermal Imaging
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      Professional leak detection
                    </span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
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
              icon="fas fa-crosshairs"
              value={99}
              suffix="%"
              label="Detection Accuracy"
            />
            <StatCard
              icon="fas fa-hammer"
              value={95}
              suffix="%"
              label="Avoid Breaking"
            />
            <StatCard
              icon="fas fa-star"
              value={4}
              suffix=".9"
              label="Star Rating"
            />
            <StatCard
              icon="fas fa-shield-alt"
              value={12}
              suffix="mo"
              label="Repair Warranty"
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
                {/* Why Underfloor */}
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
                        <i className="fas fa-snowflake"></i>
                      </div>
                      <h6 className="section-title__tagline">
                        Modern Technology
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-snowflake"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Advanced Thermal <span>Imaging Repair</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Traditional slab heating leaks meant breaking concrete and
                    excavating floors—a $3,000-$8,000 nightmare. Our thermal
                    imaging technology has transformed underfloor repair. We now
                    pinpoint leaks with 99% accuracy, repair with modern epoxy
                    methods, and restore full heating performance WITHOUT
                    concrete breaking.
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>The result:</strong>{" "}
                    Fast repairs ($800-$1,400 average), no structural damage,
                    complete comfort restored in hours—not weeks.
                  </p>
                </motion.div>

                {/* Leak Scenarios */}
                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-water"></i>
                      </div>
                      <h6 className="section-title__tagline">Leak Types</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-water"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Common Repair <span>Scenarios</span>
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
                        icon: "fas fa-puzzle-piece",
                        title: "Pre-Slab Pipe Leaks",
                        description:
                          "Piping from boiler to slab connection leaking. Thermal imaging pinpoints location. Fixed with epoxy sealing—no slab work needed.",
                      },
                      {
                        icon: "fas fa-link",
                        title: "Manifold Leaks",
                        description:
                          "Manifold connection or valve leaking. Common repair point. Usually fixed in 1-2 hours with specialized epoxy or replacement.",
                      },
                      {
                        icon: "fas fa-spoon",
                        title: "Micro-Leak Epoxy Repair",
                        description:
                          "Small pinhole leaks in slab piping. Thermal imaging finds the exact spot. Modern epoxy injection seals leak permanently from inside.",
                      },
                      {
                        icon: "fas fa-grip-lines",
                        title: "Full Section Replacement",
                        description:
                          "Extensively damaged slab section requiring isolation and reroute. Modern piping installed adjacent to slab. Full functionality restored.",
                      },
                      {
                        icon: "fas fa-check-circle",
                        title: "Thermal Imaging Discovery",
                        description:
                          "Uneven heating patterns detected. Thermal scan reveals break, corrosion, or compression. Repair strategy determined, comfort restored.",
                      },
                      {
                        icon: "fas fa-shower",
                        title: "System Flushing & Rebalance",
                        description:
                          "Sediment buildup reducing flow and heat. System flushed, inhibitor added, circulation restored. Heating performance optimized.",
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

                {/* Our Process */}
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
                        <i className="fas fa-list-ol"></i>
                      </div>
                      <h6 className="section-title__tagline">Process</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-list-ol"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Our Repair <span>Process</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <div className="row">
                    {[
                      {
                        step: 1,
                        title: "Thermal Imaging Scan",
                        description:
                          "Advanced infrared camera detects temperature variations. Pinpoints leak location, measures severity, identifies repair approach.",
                      },
                      {
                        step: 2,
                        title: "System Pressure Test",
                        description:
                          "System pressurized to verify leak location under operational pressure. Confirms thermal findings. Identifies secondary leaks if present.",
                      },
                      {
                        step: 3,
                        title: "Repair Quote & Explanation",
                        description:
                          "We explain the repair needed, cost, timeline, and warranty. No surprises. You approve before work starts. Transparent pricing always.",
                      },
                      {
                        step: 4,
                        title: "Expert Repair & Testing",
                        description:
                          "Modern repair methods (epoxy injection, valve replacement, or isolation/reroute). System pressure tested post-repair. Full heating performance verified.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          variants={itemVariants}
                          viewport={{ once: true }}
                          className="p-4 bg-white rounded-4"
                          style={{
                            boxShadow: "0 4px 20px rgba(26, 26, 26, 0.06)",
                          }}
                        >
                          <div
                            className="step-badge mb-3"
                            style={{
                              display: "inline-block",
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              backgroundColor: "#fd5523",
                              color: "white",
                              // display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "1.5rem",
                              fontWeight: 700,
                            }}
                          >
                            {item.step}
                          </div>
                          <h5
                            className="fw-bolder mb-2"
                            style={{ color: "#062f3a" }}
                          >
                            {item.title}
                          </h5>
                          <p
                            className="text-secondary mb-0"
                            style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Why Professional */}
                <div className="my-5">
                  <WhyProfessionalMatters />
                </div>

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
                      <h6 className="section-title__tagline">Questions</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-question-circle"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Underfloor Repair <span>Questions Answered</span>
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
                              borderBottom: "2px solid #fd5523",
                            }}
                          >
                            <i
                              className="fas fa-cube me-2"
                              style={{ color: "#fd5523" }}
                            ></i>
                            Concrete & Installation
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {[
                              {
                                id: 1,
                                question: "Will you break my concrete floor?",
                                answer:
                                  "No. Modern thermal imaging + epoxy repair methods mean we fix leaks without concrete breaking in 95% of cases. Only extensive damage requires minor penetration, and we minimize it completely.",
                              },
                              {
                                id: 2,
                                question: "How long does repair take?",
                                answer:
                                  "Most repairs completed in 3-6 hours. System pressurized overnight to verify success. You walk on your floor normally the next day. No extended downtime.",
                              },
                              {
                                id: 3,
                                question:
                                  "What about my warranty after repair?",
                                answer:
                                  "All repairs covered under 12-month warranty. Parts and labor guaranteed. If any issue within warranty period, we fix it at no cost. Full protection.",
                              },
                              {
                                id: 4,
                                question:
                                  "Can you temporarily bypass the leak?",
                                answer:
                                  "Yes. For severe leaks, we can isolate the damaged section and reroute heating to functioning piping. Maintains 90%+ heating in remaining area while permanent repair is planned.",
                              },
                              {
                                id: 5,
                                question:
                                  "Will my floor be damaged during diagnosis?",
                                answer:
                                  "Thermal imaging is completely non-invasive. We scan from the surface. No tools, no marks, no damage. Only if repair is approved do we proceed with precision fixed methods.",
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
                              borderBottom: "2px solid #fd5523",
                            }}
                          >
                            <i
                              className="fas fa-dollar-sign me-2"
                              style={{ color: "#fd5523" }}
                            ></i>
                            Cost & Warranty
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {[
                              {
                                id: 6,
                                question: "How much does thermal imaging cost?",
                                answer:
                                  "$180-250 for comprehensive thermal scan + pressure testing. Fee waived if you proceed with repair. Minimal investment to pinpoint the exact issue and avoid guesswork.",
                              },
                              {
                                id: 7,
                                question: "What's the typical repair cost?",
                                answer:
                                  "Epoxy micro-leak fixes: $800-$1,200. Manifold replacement: $600-$900. Full section isolation/reroute: $1,400-$2,200. Always quoted upfront with no surprises.",
                              },
                              {
                                id: 8,
                                question:
                                  "Is that cheaper than traditional breaking?",
                                answer:
                                  "Absolutely. Traditional concrete breaking + excavation: $3,000-$8,000+. Our thermal + modern repair: $800-$2,200. Save $1,800-$6,000 with no floor damage.",
                              },
                              {
                                id: 9,
                                question: "What warranty comes with repair?",
                                answer:
                                  "12-month parts + labor warranty included. Any issue within warranty period repaired at no cost. We stand behind our work completely.",
                              },
                              {
                                id: 10,
                                question:
                                  "Do you offer guarantees on preventing future leaks?",
                                answer:
                                  "We repair to modern standards. Regular maintenance (annual inspection + pressure check) prevents 99% of future issues. We recommend annual check-up post-repair.",
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
                    backgroundColor: "#fd5523",
                    boxShadow: "0 8px 32px rgba(253, 85, 35, 0.15)",
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
                    Advanced Thermal Imaging Repair – No Concrete Breaking
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#ffe0cc",
                      lineHeight: "1.7",
                    }}
                  >
                    Save $2,000-$6,000 vs. traditional concrete breaking.
                    Pinpoint diagnostics. Modern repair methods. 12-month
                    warranty. Melbourne-wide service.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        href="/contact"
                        className="px-5 py-3 text-black text-decoration-none rounded-3 fw-bold"
                        style={{ backgroundColor: "white", fontSize: "1rem" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#f4f5f9";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "white";
                        }}
                      >
                        <i className="fas fa-thermometer-half me-2"></i> Get
                        Thermal Imaging
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
                          fontSize: "1rem",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "rgba(255,255,255,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <i className="fas fa-phone me-2"></i> Learn More
                      </a>
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
