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
import ProcessOne from "@/features/home-one/ProcessOne";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
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
        className="p-5 bg-white rounded-4 h-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          boxShadow: "0 4px 20px rgba(26,26,26,0.06)",
          transition: "box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 12px 40px rgba(26,26,26,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 4px 20px rgba(26,26,26,0.06)";
        }}
      >
        <div className="mb-4" style={{ fontSize: "2.5rem" }}>
          <i className={icon} style={{ color: "#1a3a52" }}></i>
        </div>
        <div
          className="mb-2"
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
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -8 }}
      className="p-5 bg-white rounded-4 h-100 text-center"
      style={{
        boxShadow: "0 4px 20px rgba(26,26,26,0.06)",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 12px 40px rgba(26,26,26,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 20px rgba(26,26,26,0.06)";
      }}
    >
      <div className="mb-4" style={{ fontSize: "2.5rem" }}>
        <i className={icon} style={{ color: "#1a3a52" }}></i>
      </div>
      <h5
        className="fw-bolder mb-3"
        style={{ color: "#1a1a1a", fontSize: "1.125rem" }}
      >
        {title}
      </h5>
      <p
        className="text-secondary mb-0"
        style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
      >
        {description}
      </p>
    </motion.div>
  );
};

const faqData = [
  {
    id: 1,
    question: "How often should I service my gas ducted heating system?",
    answer:
      "We recommend an annual service before the winter season. Annual servicing ensures your system runs at peak efficiency, extends its working life, and keeps it safe. Gas appliances with cracked heat exchangers can produce carbon monoxide, making regular checks essential.",
  },
  {
    id: 2,
    question: "What does a gas ducted heating service include?",
    answer:
      "Our comprehensive service includes heat exchanger inspection, burner cleaning, flue gas testing (CO and CO2 levels), filter replacement, thermostat calibration, gas pressure testing, zone damper checks, and a full safety assessment.",
  },
  {
    id: 3,
    question: "How long does a service take?",
    answer:
      "A standard annual service takes approximately 60 to 90 minutes. If additional cleaning or minor repairs are required, this may extend slightly. We will let you know upfront if any additional work is needed before proceeding.",
  },
  {
    id: 4,
    question: "Can a service prevent a breakdown?",
    answer:
      "Yes. The majority of gas ducted heating breakdowns are caused by issues that are identifiable and preventable during routine servicing, such as dirty burners reducing ignition reliability, failing thermocouples, and restricted filters causing overheating.",
  },
  {
    id: 5,
    question: "When is the best time to book a service?",
    answer:
      "March to April (before winter) is the ideal time. We also service outside winter months and are less busy in summer. Booking early in the season avoids wait times and ensures your system is ready the moment temperatures drop.",
  },
  {
    id: 6,
    question: "Do you service all brands of gas ducted heaters?",
    answer:
      "Yes. We service all major brands including Brivis, Rinnai, Braemar, Vulcan, Bonaire, Carrier, and Daikin. Our technicians carry service parts for the most common units and can complete most services in a single visit.",
  },
  {
    id: 7,
    question: "Will the technician let me know if something needs repair?",
    answer:
      "Absolutely. If our technician identifies a fault or worn component during servicing, they will explain the issue clearly and provide an upfront repair quote before any additional work is carried out. There are no surprise charges.",
  },
  {
    id: 8,
    question: "Is servicing required to maintain my warranty?",
    answer:
      "Many manufacturers require documented annual servicing to maintain the warranty on your gas ducted heating system. We provide a service report that can be kept with your warranty documents for this purpose.",
  },
  {
    id: 9,
    question: "Do you service rental properties?",
    answer:
      "Yes. We provide gas ducted heating services for rental properties on behalf of landlords and property managers across all Melbourne suburbs. We can provide service reports and safety certificates for compliance purposes.",
  },
  {
    id: 10,
    question: "What if my heater needs a repair during the service?",
    answer:
      "If we identify a fault during servicing, we will provide an upfront fixed-price quote. In most cases where common parts are required, we can carry out the repair on the same visit using parts from our fully stocked service van.",
  },
];

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
        title="Gas Ducted Heating Service Melbourne – Annual Maintenance by Licensed Technicians"
        subTitle="Professional Gas Heater Service"
        titleLink="/gas-ducted-heating"
      />

      {/* JSON-LD Schema */}
      <JSONLDScript
        schema={generateServiceSchema(
          "Gas Heating Service & Maintenance",
          "Professional annual maintenance and service for gas ducted heating systems in Melbourne",
          "https://heaterservicemelbourne.com.au/gas-ducted-heating",
        )}
        id="gas-service-schema"
      />

      {/* Breadcrumbs */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Gas Ducted Heating", url: "/gas-ducted-heating" },
          { name: "Service & Maintenance", url: "#" },
        ]}
        schema={true}
      />

      {/* HERO SECTION */}
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
                  Gas Ducted Heating Service Melbourne
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Keep your gas ducted heating system running safely and
                  efficiently with an annual service from our licensed gas
                  fitters. We carry out a comprehensive 20-point inspection and
                  service on all major brands across all Melbourne suburbs.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  Book before winter for priority scheduling. Fixed-price
                  servicing, fully stocked vans, and a written service report on
                  every job.
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
                          "#e54a1f";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#fd5523";
                      }}
                    >
                      Book a Service
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
                      <i className="icon-phone-call"></i> Call Now
                    </a>
                  </motion.div>
                </div>
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
                    &#10003; VBA LICENSED
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
                    &#10003; FIXED PRICE
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
                    &#10003; 20-POINT CHECK
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
                  alt="Gas ducted heating service Melbourne – licensed gas fitter performing annual maintenance on a ducted heating system"
                  className="img-fluid rounded-4"
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    boxShadow: "0 10px 40px rgba(26,26,26,0.1)",
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
                    boxShadow: "0 8px 24px rgba(26,26,26,0.12)",
                  }}
                >
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>
                      Annual Service Specialists
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      2500+ systems serviced
                    </span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS BANNER */}
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
              icon="fas fa-tools"
              value={2500}
              suffix="+"
              label="Systems Serviced"
            />
            <StatCard
              icon="fas fa-star"
              value={4}
              suffix=".9"
              label="Star Rating"
            />
            <StatCard
              icon="fas fa-list-check"
              value={20}
              suffix="-point"
              label="Comprehensive Check"
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__left">
                {/* Intro */}
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
                      <h6 className="section-title__tagline">
                        Why Service Matters
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-flame"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Why Regular Gas Heater <span>Servicing Matters</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Gas ducted heating systems require annual servicing to
                    maintain safe and efficient operation. A cracked heat
                    exchanger can allow combustion gases including carbon
                    monoxide to enter your living spaces. Regular servicing
                    catches these issues before they become dangerous or costly.
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      What makes us different:
                    </strong>{" "}
                    Our service is a genuine 20-point inspection and clean, not
                    a short visual check. We test combustion gas quality,
                    measure heat exchanger performance, calibrate your
                    thermostat, and check all safety controls.
                  </p>
                </motion.div>

                {/* Features - 20-point service breakdown */}
                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-star"></i>
                      </div>
                      <h6 className="section-title__tagline">
                        Service Checklist
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        What Our Gas Heater Service <span>Covers</span>
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
                        icon: "fas fa-wind",
                        title: "Heat Exchanger Inspection",
                        description:
                          "We visually inspect and test the heat exchanger for cracks, corrosion, and carbon buildup. A compromised heat exchanger is the primary source of carbon monoxide spillage in gas ducted systems.",
                      },
                      {
                        icon: "fas fa-smog",
                        title: "Flue Gas Testing",
                        description:
                          "We analyse flue gas composition using calibrated instruments to measure CO and CO2 levels, verifying that combustion is clean and complete and that no dangerous gases are re-entering your home.",
                      },
                      {
                        icon: "fas fa-filter",
                        title: "Filter Cleaning and Replacement",
                        description:
                          "Dirty return air filters restrict airflow, causing the system to overheat and reducing efficiency. We clean or replace filters to restore full system airflow and extend heat exchanger life.",
                      },
                      {
                        icon: "fas fa-sliders-h",
                        title: "Thermostat Calibration",
                        description:
                          "We verify and calibrate your thermostat to ensure the displayed temperature matches actual room conditions, improving comfort and reducing unnecessary gas consumption from overshooting.",
                      },
                      {
                        icon: "fas fa-network-wired",
                        title: "Duct Sealing Check",
                        description:
                          "We inspect accessible duct connections and dampers for air leaks. Leaking ducts can waste 20 to 30% of your heated air before it reaches the rooms, significantly increasing your gas bills.",
                      },
                      {
                        icon: "fas fa-tachometer-alt",
                        title: "Gas Pressure Testing",
                        description:
                          "We verify gas inlet pressure is within the manufacturer's specified operating range. Incorrect gas pressure affects combustion quality and can cause ignition failures, short cycling, or unsafe operation.",
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

                {/* How It Works */}
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
                      <h6 className="section-title__tagline">Our Approach</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-cogs"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        What Happens During a <span>Service Visit</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Our licensed gas fitter arrives at your scheduled time and
                    carries out a systematic 20-point inspection of your entire
                    gas ducted heating system. We test the system under
                    operating conditions, clean key components, carry out any
                    adjustments needed, and provide you with a written service
                    report when complete.
                  </p>
                  <div
                    className="p-4 rounded-3"
                    style={{
                      backgroundColor: "#f4f5f9",
                      borderLeft: "4px solid #fd5523",
                    }}
                  >
                    <strong style={{ color: "#fd5523", fontSize: "1rem" }}>
                      <i
                        className="fas fa-lightbulb me-2"
                        style={{ color: "#fd5523" }}
                      ></i>
                      Our Commitment
                    </strong>
                    <p
                      className="mb-0 mt-2 text-secondary"
                      style={{ lineHeight: "1.7" }}
                    >
                      If we identify any faults or worn components during the
                      service, we explain the issue clearly and provide an
                      upfront quote before any repair work begins. No pressure,
                      no surprises.
                    </p>
                  </div>
                </motion.div>

                {/* Why Professional Matters */}
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
                    </strong>{" "}
                    for gas ducted heating maintenance, from inner city
                    apartments to outer metropolitan homes. Our VBA licensed gas
                    fitters travel to all areas of Greater Melbourne.
                  </p>
                  <div className="row gy-3 mt-4">
                    {[
                      {
                        title: "All Melbourne Suburbs",
                        sub: "Inner city, north, south, east, west",
                      },
                      {
                        title: "Priority Winter Booking",
                        sub: "Book early for guaranteed pre-winter slots",
                      },
                      {
                        title: "Rental Property Service",
                        sub: "Compliance reports for landlords available",
                      },
                      {
                        title: "All Brands Covered",
                        sub: "Brivis, Rinnai, Braemar, Vulcan and more",
                      },
                    ].map((item, i) => (
                      <div key={i} className="col-md-6">
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
                              {item.title}
                            </strong>
                            <p
                              className="text-secondary mb-0"
                              style={{ fontSize: "0.95rem" }}
                            >
                              {item.sub}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Process */}
                <div className="my-5">
                  <ProcessOne />
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
                            Servicing Questions
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {faqData.slice(0, 5).map((item) => (
                              <FadeInAdvanced
                                key={item.id}
                                variant="fadeInLeft"
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
                                    display:
                                      activeFaq === item.id ? "block" : "none",
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
                              className="fas fa-lightbulb me-2"
                              style={{ color: "#fd5523" }}
                            ></i>
                            Brands and Coverage
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {faqData.slice(5, 10).map((item) => (
                              <FadeInAdvanced
                                key={item.id}
                                variant="fadeInRight"
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
                                    display:
                                      activeFaq === item.id ? "block" : "none",
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
                    backgroundColor: "#062f3a",
                    boxShadow: "0 8px 32px rgba(6,47,58,0.15)",
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
                    Ready to Book Your Annual Gas Heater Service?
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#d9e0eb",
                      lineHeight: "1.7",
                    }}
                  >
                    Book before winter for priority scheduling. Our licensed gas
                    fitters will have your system running safely and efficiently
                    for the season ahead.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        href="/contact"
                        className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                        style={{
                          backgroundColor: "white",
                          color: "#062f3a",
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
                        Book a Service
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
                          display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "rgba(255,255,255,0.1)";
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
                    &#10003; ALL MELBOURNE SUBURBS &bull; &#10003; VBA LICENSED
                    &bull; &#10003; FIXED PRICE &bull; &#10003; 20-POINT CHECK
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Near You - Internal Linking */}
      <ServiceAreasNearYou
        limit={12}
        title="Service & Maintenance Areas"
        subtitle="Regular maintenance available throughout Melbourne"
      />
    </>
  );
};

export default Page;
