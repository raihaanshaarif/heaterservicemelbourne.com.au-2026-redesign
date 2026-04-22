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
            <i className={icon} style={{ color: "#1b5e20" }}></i>
          ) : (
            icon
          )}
        </div>
        <div
          className="stat-value mb-2"
          style={{ fontSize: "2.8rem", fontWeight: 800, color: "#1b5e20" }}
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
          <i className={icon} style={{ color: "#1b5e20" }}></i>
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
        title="Hydronic Heating Maintenance Melbourne – Annual Service Plans"
        subTitle="Join Our Maintenance Membership – Protect Your System"
        titleLink="/hydronic-heating"
      />

      {/* JSON-LD Schema */}
      <JSONLDScript
        schema={generateServiceSchema(
          "Hydronic Heating Maintenance",
          "Annual maintenance service plans for hydronic heating systems in Melbourne",
          "https://heaterservicemelbourne.com.au/hydronic-heating",
        )}
        id="hydronic-maintenance-schema"
      />

      {/* Breadcrumbs */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Hydronic Heating", url: "/hydronic-heating" },
          { name: "Maintenance", url: "#" },
        ]}
        schema={true}
      />

      {/* HERO */}
      <section
        className="hero-maintenance py-5"
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
                  Keep Your Heating System Running Perfectly
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Regular maintenance prevents expensive emergency repairs,
                  extends your system life, and maintains warranty coverage.
                  Join our affordable maintenance membership program today.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  Professional maintenance service to keep your system running
                  smoothly. licensed technicians serving Melbourne.
                </p>

                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href="/contact"
                      className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#1b5e20", fontSize: "1rem" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#0d3817";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#1b5e20";
                      }}
                    >
                      <i className="fas fa-check-circle me-2"></i> Get
                      Maintenance
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
                        color: "#1b5e20",
                        borderColor: "#1b5e20",
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
                      backgroundColor: "#e8f5e9",
                      color: "#1b5e20",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    ✓ ANNUAL SERVICE
                  </span>
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#e3f2fd",
                      color: "#1565c0",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    ✓ SAVE UP TO $800
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
                    ✓ WARRANTY PROTECTION
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
                  alt="Professional hydronic heating maintenance technician performing annual system service in Melbourne"
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
                    backgroundColor: "#1b5e20",
                    color: "white",
                    boxShadow: "0 8px 24px rgba(26, 26, 26, 0.12)",
                  }}
                >
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>
                      ✓ Annual Maintenance
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      Prevent costly repairs
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
              label="Star Rating
"
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

      {/* CONTENT */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__left">
                {/* Why Maintenance */}
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
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h6 className="section-title__tagline">
                        Preventative Care
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Why Maintenance <span>Matters</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Regular professional maintenance keeps your hydronic heating
                    system operating at peak performance, extending its life and
                    preventing costly emergency repairs. Our -licensed
                    technicians provide comprehensive 20-point service
                    inspections.
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      Professional maintenance:
                    </strong>{" "}
                    Keep your system running smoothly year-round with expert
                    care.
                  </p>
                </motion.div>

                {/* 20-Point Service */}
                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-tasks"></i>
                      </div>
                      <h6 className="section-title__tagline">Comprehensive</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-tasks"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Service We <span>Provide</span>
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
                        icon: "fas fa-gauge-high",
                        title: "System Pressure Check",
                        description:
                          "Full system pressure and expansion tank verified to ensure optimal operation.",
                      },
                      {
                        icon: "fas fa-fire",
                        title: "Boiler Combustion Analysis",
                        description:
                          "Advanced combustion testing ensures your boiler operates at peak efficiency.",
                      },
                      {
                        icon: "fas fa-fan",
                        title: "Circulation Pump Inspection",
                        description:
                          "Pump performance tested and verified. Valve operation checked throughout.",
                      },
                      {
                        icon: "fas fa-thermometer-half",
                        title: "Thermostat Calibration",
                        description:
                          "Thermostat tested, calibrated, and verified for accurate temperature control.",
                      },
                      {
                        icon: "fas fa-water",
                        title: "System Balancing",
                        description:
                          "Air bleeding and system balancing performed. Even temperature distribution confirmed.",
                      },
                      {
                        icon: "fas fa-check-double",
                        title: "Full Verification Report",
                        description:
                          "Written service report with findings, recommendations, and next steps provided.",
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
                        Maintenance Questions <span>Answered</span>
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
                              borderBottom: "2px solid #1b5e20",
                            }}
                          >
                            <i
                              className="fas fa-calendar-alt me-2"
                              style={{ color: "#1b5e20" }}
                            ></i>
                            Service Schedule
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {[
                              {
                                id: 1,
                                question:
                                  "How often should I service my system?",
                                answer:
                                  "Annual maintenance recommended. Most warranties require annual professional servicing for coverage to remain valid. Premier members get service twice yearly (spring + autumn).",
                              },
                              {
                                id: 2,
                                question:
                                  "When is the best time to schedule maintenance?",
                                answer:
                                  "Spring (before summer) or autumn (before winter). We recommend autumn service to ensure system is ready for heating season. Premium members get both.",
                              },
                              {
                                id: 3,
                                question:
                                  "How long does maintenance service take?",
                                answer:
                                  "Typically 1.5-2 hours for full 20-point service. We work efficiently to minimize disruption to your home.",
                              },
                              {
                                id: 4,
                                question: "What happens after the service?",
                                answer:
                                  "You receive a written report detailing findings, system condition, and any recommendations. We discuss results and next steps.",
                              },
                              {
                                id: 5,
                                question: "Can I skip a year of maintenance?",
                                answer:
                                  "Not recommended. Skipping maintenance increases risk of breakdowns. One emergency repair ($600+) typically costs more than 3 years of membership.",
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
                              borderBottom: "2px solid #1b5e20",
                            }}
                          >
                            <i
                              className="fas fa-piggy-bank me-2"
                              style={{ color: "#1b5e20" }}
                            ></i>
                            Savings & Benefits
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {[
                              {
                                id: 6,
                                question:
                                  "What maintenance services do you provide?",
                                answer:
                                  "Full 20-point inspection and service. Includes pressure checks, combustion analysis, pump inspection, thermostat calibration, system balancing, written report, and professional recommendations.",
                              },
                              {
                                id: 7,
                                question:
                                  "How often should I service my system?",
                                answer:
                                  "Annual professional maintenance is recommended. Spring or autumn is ideal timing. Contact us to schedule your service.",
                              },
                              {
                                id: 8,
                                question: "Are you   licensed?",
                                answer:
                                  "Yes. All our technicians are   licensed professionals. We're fully insured and certified to service all hydronic heating systems in Melbourne.",
                              },
                              {
                                id: 9,
                                question: "How long does service take?",
                                answer:
                                  "Typically 1.5-2 hours for comprehensive 20-point service. We work efficiently to minimize disruption to your home.",
                              },
                              {
                                id: 10,
                                question: "What if I need emergency repair?",
                                answer:
                                  "We provide emergency repair services. Contact us immediately if your heating fails. We'll dispatch a technician as soon as possible.",
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
                    backgroundColor: "#1b5e20",
                    boxShadow: "0 8px 32px rgba(27, 94, 32, 0.15)",
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
                    Professional Maintenance Service
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#c8e6c9",
                      lineHeight: "1.7",
                    }}
                  >
                    Keep your heating system running perfectly. Contact us for
                    professional maintenance service in Melbourne.
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
                        <i className="fas fa-check-circle me-2"></i> Contact Us
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

      {/* Service Areas Near You - Internal Linking */}
      <ServiceAreasNearYou
        limit={12}
        title="Maintenance Service Areas"
        subtitle="Annual maintenance plans available across all Melbourne suburbs"
      />
    </>
  );
};

export default Page;
