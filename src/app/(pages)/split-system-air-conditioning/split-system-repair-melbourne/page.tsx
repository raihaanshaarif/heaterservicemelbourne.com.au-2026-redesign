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
    question: "Why is my split system not cooling or heating properly?",
    answer:
      "The most common causes are a dirty air filter restricting airflow, low refrigerant level from a leak, a faulty thermistor giving incorrect temperature readings, or a failed capacitor on the compressor. Our technician will diagnose the exact fault and provide a fixed-price repair quote.",
  },
  {
    id: 2,
    question: "How much does a split system repair cost in Melbourne?",
    answer:
      "Repair costs depend on the specific fault and parts required. We provide a fully itemised, fixed-price quote after diagnostics before any work begins. Common repairs such as capacitor replacement, thermostat faults, and refrigerant recharging are carried out at flat rates with no hidden charges.",
  },
  {
    id: 3,
    question: "Do you repair all brands of split systems?",
    answer:
      "Yes. We repair all major brands including Daikin, Mitsubishi Electric, Fujitsu, Panasonic, Samsung, Hitachi, LG, and Carrier. Our vans are stocked with common replacement parts to complete most repairs in a single visit.",
  },
  {
    id: 4,
    question: "My split system is leaking water inside — what is causing it?",
    answer:
      "Indoor water leaks are usually caused by a blocked or disconnected condensate drain line, a dirty evaporator coil causing ice buildup that then melts, or incorrect unit tilt. We clear the drain and check the entire drainage system as part of the repair service.",
  },
  {
    id: 5,
    question: "Can a split system be repaired if it is leaking refrigerant?",
    answer:
      "Yes. We locate the leak using electronic leak detection, repair the refrigerant circuit, pressure-test the system, and recharge with the correct refrigerant type to manufacturer specification. All refrigerant handling is performed by ARCtick licensed technicians.",
  },
  {
    id: 6,
    question: "My split system is making a loud noise — should I be concerned?",
    answer:
      "Rattling or vibrating noises can indicate loose panels, a debris-blocked fan, or worn bearings. Hissing sounds often indicate a refrigerant leak. Grinding or squealing from the compressor is a serious fault. Do not ignore unusual noises — early diagnosis prevents more costly failures.",
  },
  {
    id: 7,
    question: "How long does a split system repair take?",
    answer:
      "Most common faults are diagnosed and repaired within 1 to 2 hours. Complex faults requiring parts to be ordered may require a return visit. We always advise you of the timeline and parts availability before starting work.",
  },
  {
    id: 8,
    question: "Do you provide a warranty on repairs?",
    answer:
      "Yes. All parts we supply carry manufacturer warranty and our labour is guaranteed. If the same fault recurs within the warranty period, we return and fix it at no additional charge.",
  },
  {
    id: 9,
    question: "Should I repair or replace my split system?",
    answer:
      "If your unit is less than 8 to 10 years old and the repair cost is less than half the replacement cost, repair is generally the better option. For older units with compressor failure or multiple component faults, replacement often offers better long-term value. We provide honest advice either way.",
  },
  {
    id: 10,
    question: "Do you repair split systems in rental properties?",
    answer:
      "Yes. We carry out split system repairs in rental properties across Melbourne on behalf of landlords and property managers. We provide written work reports for maintenance records and can provide compliance documentation where required.",
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
        title="Split System Repair Melbourne – Same-Day AC Fault Diagnosis & Repair"
        subTitle="Split System Air Conditioning Repair"
        titleLink="/split-system-air-conditioning"
      />

      {/* JSON-LD Schema */}
      <JSONLDScript
        schema={generateServiceSchema(
          "Split System Repair",
          "Professional split system air conditioning repair services with same-day diagnosis",
          "https://heaterservicemelbourne.com.au/split-system-air-conditioning",
        )}
        id="split-repair-schema"
      />

      {/* Breadcrumbs */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Split System AC", url: "/split-system-air-conditioning" },
          { name: "Repair", url: "#" },
        ]}
        schema={true}
      />

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
                  Split System Repair Melbourne
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Fast, reliable split system air conditioning repairs across
                  all Melbourne suburbs. Our ARCtick licensed technicians
                  diagnose and fix all faults — from refrigerant leaks and
                  compressor issues to drainage problems and electrical faults —
                  with same-day availability.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  Fixed-price quotes after diagnosis. Fully stocked service
                  vans. Most repairs completed on the first visit.
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
                      Book a Repair
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
                    &#10003; SAME-DAY SERVICE
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
                    &#10003; FIXED-PRICE REPAIRS
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
                    &#10003; ALL BRANDS
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
                  alt="Split system repair Melbourne – ARCtick licensed technician diagnosing a split system air conditioning fault"
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
                      Repair Specialists
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      3500+ units repaired
                    </span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              icon="fas fa-wrench"
              value={3500}
              suffix="+"
              label="Units Repaired"
            />
            <StatCard
              icon="fas fa-star"
              value={4}
              suffix=".9"
              label="Star Rating"
            />
            <StatCard
              icon="fas fa-calendar-day"
              value={1}
              suffix=" Day"
              label="Same-Day Service"
            />
          </div>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__left">
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
                        Expert Diagnosis
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-snowflake"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Common Split System Faults <span>We Fix</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Split system faults range from minor filter blockages to
                    refrigerant circuit failures and compressor issues. Our
                    technicians use electronic diagnostic tools to identify the
                    root cause accurately and carry the most common replacement
                    parts on every service van to complete repairs the same day.
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      Our commitment:
                    </strong>{" "}
                    Fixed-price quote after diagnosis, before any repair work
                    starts. No surprises on the invoice.
                  </p>
                </motion.div>

                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-star"></i>
                      </div>
                      <h6 className="section-title__tagline">Fault Types</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Split System Faults We <span>Diagnose and Repair</span>
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
                        icon: "fas fa-thermometer-empty",
                        title: "Not Cooling or Not Heating",
                        description:
                          "The most common complaint — the unit runs but the room temperature does not change. Causes include low refrigerant, a failed capacitor, a dirty coil, or a faulty compressor. We diagnose the root cause and repair on the spot where possible.",
                      },
                      {
                        icon: "fas fa-tint",
                        title: "Water Leaking Indoors",
                        description:
                          "Indoor water leaks are caused by a blocked condensate drain, ice buildup from low refrigerant or a dirty coil, or an incorrectly pitched indoor unit. We clear the drain and inspect the full refrigerant circuit to prevent recurrence.",
                      },
                      {
                        icon: "fas fa-wind",
                        title: "Refrigerant Leak",
                        description:
                          "Loss of refrigerant causes reduced capacity, ice formation, and increased electricity consumption. We locate leaks using electronic detectors, repair the circuit, pressure-test, and recharge with the correct refrigerant type.",
                      },
                      {
                        icon: "fas fa-volume-up",
                        title: "Unusual Noises",
                        description:
                          "Rattling, hissing, grinding, or clicking sounds indicate specific mechanical or refrigerant faults. We identify the source — whether a loose fan blade, debris, worn bearing, or leaking refrigerant — and fix it correctly.",
                      },
                      {
                        icon: "fas fa-bolt",
                        title: "Electrical and Control Faults",
                        description:
                          "Tripping circuit breakers, error codes on the display, or unresponsive remote controls can point to PCB faults, capacitor failure, or wiring issues. We carry PCBs and capacitors for the most common models.",
                      },
                      {
                        icon: "fas fa-sliders-h",
                        title: "Poor Airflow",
                        description:
                          "Reduced airflow is usually caused by a heavily soiled filter or evaporator coil. Left unaddressed, it causes the coil to freeze and the compressor to overheat. We clean the unit and restore full airflow as part of the repair.",
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
                        How Our Split System <span>Repair Process Works</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Our technician arrives with a fully stocked service van and
                    diagnostic equipment. We carry out a systematic inspection
                    of both the indoor and outdoor units — checking refrigerant
                    pressures, electrical components, airflow, and controls —
                    before identifying the fault and quoting the repair.
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
                      Fixed Price Before We Start
                    </strong>
                    <p
                      className="mb-0 mt-2 text-secondary"
                      style={{ lineHeight: "1.7" }}
                    >
                      After diagnosis we explain the fault clearly and provide a
                      fixed-price quote. We proceed only once you approve. No
                      surprises on the invoice.
                    </p>
                  </div>
                </motion.div>

                <div className="my-5">
                  <WhyProfessionalMatters />
                </div>

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
                        Split System Repairs Across All{" "}
                        <span>Melbourne Suburbs</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-0"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      We repair split systems across all of Greater Melbourne
                    </strong>
                    , from inner-city apartments to outer suburban homes and
                    commercial premises. Same-day availability in most areas
                    during business hours.
                  </p>
                  <div className="row gy-3 mt-4">
                    {[
                      {
                        title: "All Melbourne Suburbs",
                        sub: "Inner city, north, south, east, western suburbs",
                      },
                      {
                        title: "Same-Day Availability",
                        sub: "Most repairs booked and completed same day",
                      },
                      {
                        title: "Rental Property Repairs",
                        sub: "Written work reports provided on request",
                      },
                      {
                        title: "All Brands Covered",
                        sub: "Daikin, Mitsubishi, Fujitsu, Panasonic and more",
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

                <div className="my-5">
                  <ProcessOne />
                </div>

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
                        Split System Repair Questions <span>Answered</span>
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
                              className="fas fa-wrench me-2"
                              style={{ color: "#fd5523" }}
                            ></i>
                            Repair Process
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
                    Split System Not Working?
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#d9e0eb",
                      lineHeight: "1.7",
                    }}
                  >
                    Book a same-day repair with our ARCtick licensed
                    technicians. Fixed-price quotes after diagnosis. All
                    Melbourne suburbs covered.
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
                        Book a Repair
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
                    &#10003; ALL MELBOURNE SUBURBS &bull; &#10003; ARCTICK
                    LICENSED &bull; &#10003; SAME-DAY SERVICE &bull; &#10003;
                    FIXED PRICE
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
        title="Repair Service Areas"
        subtitle="Fast repair service available across all Melbourne suburbs"
      />
    </>
  );
};

export default Page;
