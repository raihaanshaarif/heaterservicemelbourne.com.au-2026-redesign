"use client";
import { Metadata } from "next";
import { generateServiceMetadata } from "@/utils/seo/metadata";
import { generateServiceSchema } from "@/utils/seo/jsonLd";
import { JSONLDScript } from "@/components/seo/JSONLDScript";
import { SEOBreadcrumbs } from "@/components/seo/SEOBreadcrumbs";
import { ServiceAreasNearYou } from "@/components/seo/ServiceAreasNearYou";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TextAnimation from "@/components/elements/TextAnimation";
import ProcessOne from "@/features/home-one/ProcessOne";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import { emergencyServicesData } from "@/contents/services/serviceData";


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

const faqData = [
  {
    id: 1,
    question: "What counts as a heating or cooling emergency?",
    answer:
      "Any situation where your system fails completely during extreme weather, involves a gas smell or suspected gas leak, produces burning smells or unusual noises, causes water flooding inside your property, or involves electrical faults that trip circuit breakers constitutes an emergency. When in doubt, call us — we would rather attend and find a minor fault than have you wait with a serious problem developing.",
  },
  {
    id: 2,
    question: "How quickly can you respond to an emergency call?",
    answer:
      "We target a 4-hour response window for all emergency heating and cooling calls across our Melbourne service area, and a 1-hour response for gas leak emergencies. Our technicians operate from multiple Melbourne locations and carry extensive parts inventories to enable same-visit resolution in the majority of call-outs.",
  },
  {
    id: 3,
    question: "Do you handle gas leak emergencies?",
    answer:
      "Yes. If you smell gas, leave the property immediately, do not operate any switches, and call the gas emergency line (1800 GAS EMERGENCY) first, then call us. Our licensed gas fitters respond to gas leak emergencies and carry detection equipment to locate and fix the source safely. All our gas work is performed by VBA licensed gas fitters.",
  },
  {
    id: 4,
    question: "Do you charge after-hours emergency fees?",
    answer:
      "After-hours emergency call-out fees apply outside standard business hours. We are fully transparent about costs before dispatching — you will know the call-out rate before any technician is sent. For gas leaks and safety-critical emergencies, we prioritise attendance before discussing detailed pricing.",
  },
  {
    id: 5,
    question: "Can you repair any system brand in an emergency?",
    answer:
      "Yes. We carry equipment and parts for all major brands across all system types — hydronic heating (all boiler brands), gas ducted heating, split system air conditioning, and evaporative cooling. Our technicians hold brand-specific training and carry diagnostic tools for Daikin, Mitsubishi, Bosch, Rinnai, Braemar, Brivis, and all other major market brands.",
  },
  {
    id: 6,
    question: "What should I do while waiting for the emergency technician?",
    answer:
      "For heating failures in winter, use electric blankets or safe portable heaters. For cooling failures in summer, close blinds, use portable fans, and move to the coolest room. For gas smells, evacuate and stay outside. For water leaks from a hydronic system, turn off the water supply to the boiler if safe to do so. Do not attempt to repair any gas appliance yourself.",
  },
  {
    id: 7,
    question:
      "Which Melbourne suburbs do you cover for 24/7 emergency service?",
    answer:
      "We cover all Melbourne suburbs for 24/7 emergency heating and cooling service — inner city, northern, eastern, southern, and western suburbs. Emergency coverage extends across Greater Melbourne. Call us any time to confirm response availability for your location.",
  },
  {
    id: 8,
    question: "Will you fix it in one visit?",
    answer:
      "In the majority of emergency call-outs, yes. Our technicians carry a comprehensive parts inventory covering the most common failure components for every system type. For less common faults requiring specialist parts, we aim to make the system safe and operational on the first visit and complete final repairs at the earliest possible follow-up appointment.",
  },
  {
    id: 9,
    question: "Is there a warranty on emergency repair work?",
    answer:
      "Yes. All emergency repair work is backed by our standard parts and labour warranty. We will confirm the specific warranty terms for your repair before starting work.",
  },
  {
    id: 10,
    question: "Do you also fix the cause — not just the symptom?",
    answer:
      "Yes. We diagnose the root cause of every emergency failure, not just the immediate presenting fault. If a component failed because of a deeper underlying issue, we identify and address it so the same fault does not recur. We provide a written fault report for all emergency call-outs on request.",
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
        title="24/7 Emergency Heating and Cooling Repair Melbourne – Fast Response for All System Types"
        subTitle="Emergency Services"
        titleLink="/emergency-services"
      />

      {/* JSON-LD Schema for Local SEO */}
      <JSONLDScript
        schema={generateServiceSchema(
          "24/7 Emergency Heating & Cooling Repair",
          "Emergency response for all heating and cooling system failures. Gas ducted, hydronic, split systems, and all-system breakdowns. 24/7 availability across Melbourne",
          "https://heaterservicemelbourne.com.au/emergency-services",
        )}
        id="emergency-schema"
      />

      {/* Breadcrumb Navigation with Schema */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Emergency Services", url: "/emergency-services" },
        ]}
        schema={true}
      />

      <section
        className="hero-installation py-5"
        style={{ backgroundColor: "#fff5f5" }}
      >
        <div className="container">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="row align-items-center gy-5"
          >
            <motion.div className="col-lg-7" variants={itemVariants}>
              <div>
                <div
                  className="mb-4 px-3 py-2 d-inline-block rounded-3"
                  style={{
                    backgroundColor: "#fef2f2",
                    border: "1px solid #fecaca",
                  }}
                >
                  <span
                    style={{
                      color: "#b91c1c",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    <i className="fas fa-exclamation-triangle me-2"></i>24/7
                    EMERGENCY SERVICE — AVAILABLE NOW
                  </span>
                </div>
                <h1
                  className="fw-bolder mb-4"
                  style={{
                    fontSize: "3rem",
                    color: "#7f1d1d",
                    lineHeight: "1.2",
                  }}
                >
                  Emergency Heating &amp; Cooling Repair Melbourne
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  24/7 emergency response for all heating and cooling system
                  failures across Melbourne. Gas ducted breakdowns, hydronic
                  leaks, split system failures, gas leaks, and all-system
                  breakdown rescue — our licensed technicians arrive fast and
                  fix it right.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  VBA licensed gas fitters. ARCtick licensed AC technicians. All
                  brands. All suburbs.
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
                        fontSize: "1.05rem",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#b91c1c";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#d32f2f";
                      }}
                    >
                      <i className="fas fa-phone me-2"></i> Call Emergency Line
                      Now
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
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#fff5f5";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "white";
                      }}
                    >
                      Request Callback
                    </Link>
                  </motion.div>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#fef2f2",
                      color: "#b91c1c",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      border: "1px solid #fecaca",
                    }}
                  >
                    &#10003; 24/7 EMERGENCY
                  </span>
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#fef2f2",
                      color: "#b91c1c",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      border: "1px solid #fecaca",
                    }}
                  >
                    &#10003; GAS LEAK RESPONSE
                  </span>
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#fef2f2",
                      color: "#b91c1c",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      border: "1px solid #fecaca",
                    }}
                  >
                    &#10003; ALL SYSTEM TYPES
                  </span>
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#fef2f2",
                      color: "#b91c1c",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      border: "1px solid #fecaca",
                    }}
                  >
                    &#10003; ALL BRANDS
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-5" variants={itemVariants}>
              <div
                className="p-5 rounded-4"
                style={{
                  backgroundColor: "#b91c1c",
                  boxShadow: "0 10px 40px rgba(185,28,28,0.25)",
                }}
              >
                <h4 className="fw-bolder mb-4" style={{ color: "white" }}>
                  Emergency Contact
                </h4>
                <div
                  className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <i
                    className="fas fa-phone"
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  ></i>
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#fecaca",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      Emergency Line
                    </div>
                    <a
                      href="tel:0405133761"
                      className="text-decoration-none fw-bold"
                      style={{ color: "white", fontSize: "1.2rem" }}
                    >
                      0405 133 761
                    </a>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <i
                    className="fas fa-clock"
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  ></i>
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#fecaca",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      Availability
                    </div>
                    <div
                      className="fw-bold"
                      style={{ color: "white", fontSize: "1rem" }}
                    >
                      24 hours / 7 days
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <i
                    className="fas fa-bolt"
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  ></i>
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#fecaca",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      Response Target
                    </div>
                    <div
                      className="fw-bold"
                      style={{ color: "white", fontSize: "1rem" }}
                    >
                      4 hours — all Melbourne
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center gap-3 p-3 rounded-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <i
                    className="fas fa-exclamation-triangle"
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  ></i>
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#fecaca",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      Gas Leaks
                    </div>
                    <div
                      className="fw-bold"
                      style={{ color: "white", fontSize: "1rem" }}
                    >
                      1-hour priority response
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        className="stats-banner py-5"
        style={{
          backgroundColor: "#fff5f5",
          borderTop: "1px solid #fecaca",
          borderBottom: "1px solid #fecaca",
        }}
      >
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {[
              {
                icon: "fas fa-clock",
                label: "Emergency Availability",
                display: "24/7",
              },
              {
                icon: "fas fa-bolt",
                label: "Target Response Time",
                display: "4 hrs",
              },
              { icon: "fas fa-star", label: "Star Rating", display: "4.9★" },
              {
                icon: "fas fa-tools",
                label: "Emergencies Resolved",
                display: "8000+",
              },
            ].map((stat, i) => (
              <div key={i} className="col-md-3 col-sm-6 mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="p-5 bg-white rounded-4 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                  style={{ boxShadow: "0 4px 20px rgba(185,28,28,0.08)" }}
                >
                  <div className="mb-4" style={{ fontSize: "2.5rem" }}>
                    <i className={stat.icon} style={{ color: "#b91c1c" }}></i>
                  </div>
                  <div
                    className="mb-2 fw-bolder"
                    style={{ fontSize: "2.5rem", color: "#b91c1c" }}
                  >
                    {stat.display}
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
                    {stat.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="services-section py-5"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-title text-center sec-title-animation animation-style1 mb-5">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline-border"></span>
                <div className="section-title__shape-1">
                  <i className="fas fa-exclamation-circle"></i>
                </div>
                <h6 className="section-title__tagline">
                  All Emergency Services
                </h6>
                <span className="section-title__tagline-border"></span>
                <div className="section-title__shape-2">
                  <i className="fas fa-exclamation-circle"></i>
                </div>
              </div>
              <h2 className="section-title__title">
                <TextAnimation animationStyle="style1">
                  24/7 Emergency Heating &amp; Cooling{" "}
                  <span>Services Melbourne</span>
                </TextAnimation>
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
            className="row gy-4"
          >
            {emergencyServicesData.map((service, index) => (
              <div key={service.id} className="col-lg-4 col-md-6 mb-4">
                <FadeInAdvanced
                  variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                  delay={(index + 1) * 50}
                  duration={600}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="h-100 rounded-4 overflow-hidden bg-white"
                    style={{
                      boxShadow: "0 4px 20px rgba(185,28,28,0.08)",
                      transition: "box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 12px 40px rgba(185,28,28,0.18)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 4px 20px rgba(185,28,28,0.08)";
                    }}
                  >
                    <div
                      className="position-relative"
                      style={{ height: "220px", overflow: "hidden" }}
                    >
                      <Image
                        src={service.image}
                        alt={`${service.title} Melbourne – 24/7 emergency heating and cooling service`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className="position-absolute top-0 start-0 px-3 py-2 m-3 rounded-2"
                        style={{
                          backgroundColor: "#d32f2f",
                          color: "white",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                        }}
                      >
                        {service.count}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3
                        className="fw-bolder mb-3"
                        style={{ color: "#7f1d1d", fontSize: "1.2rem" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-secondary mb-4"
                        style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
                      >
                        {service.text}
                      </p>
                      <Link
                        href={service.link}
                        className="d-inline-flex align-items-center gap-2 text-decoration-none fw-bold"
                        style={{ color: "#d32f2f", fontSize: "0.95rem" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "#b91c1c";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "#d32f2f";
                        }}
                      >
                        View Service <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </motion.div>
                </FadeInAdvanced>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="why-choose py-5"
        style={{ backgroundColor: "#fff5f5" }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-title text-center sec-title-animation animation-style1 mb-5">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline-border"></span>
                <div className="section-title__shape-1">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h6 className="section-title__tagline">Why Choose Us</h6>
                <span className="section-title__tagline-border"></span>
                <div className="section-title__shape-2">
                  <i className="fas fa-shield-alt"></i>
                </div>
              </div>
              <h2 className="section-title__title">
                <TextAnimation animationStyle="style1">
                  Melbourne calls us first for <span>Heating Emergencies</span>
                </TextAnimation>
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
            className="row gy-4"
          >
            {[
              {
                icon: "fas fa-clock",
                title: "24/7 True Availability",
                description:
                  "Our emergency line is staffed around the clock, every day of the year including public holidays. When you call at 2am in a Melbourne winter, a real person answers.",
              },
              {
                icon: "fas fa-certificate",
                title: "VBA and ARCtick Licensed",
                description:
                  "Gas work by VBA registered gas fitters. AC refrigerant work by ARCtick licensed technicians. Every emergency repair is fully compliant with Australian licensing and safety regulations.",
              },
              {
                icon: "fas fa-tools",
                title: "Parts on Board — Fix First Visit",
                description:
                  "Our emergency vans carry parts for the most common failure modes across all major system brands. The majority of emergency call-outs are resolved in a single visit.",
              },
              {
                icon: "fas fa-map-marker-alt",
                title: "All Melbourne Suburbs",
                description:
                  "We dispatch from multiple Melbourne locations. Inner city, northern, eastern, southern and western suburbs are all within our 4-hour emergency response coverage area.",
              },
            ].map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <FadeInAdvanced
                  variant="fadeInUp"
                  delay={(index + 1) * 80}
                  duration={600}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="p-5 rounded-4 bg-white h-100 text-center"
                    style={{ boxShadow: "0 4px 20px rgba(185,28,28,0.08)" }}
                  >
                    <div className="mb-4" style={{ fontSize: "2.5rem" }}>
                      <i className={item.icon} style={{ color: "#d32f2f" }}></i>
                    </div>
                    <h5
                      className="fw-bolder mb-3"
                      style={{ color: "#7f1d1d", fontSize: "1.1rem" }}
                    >
                      {item.title}
                    </h5>
                    <p
                      className="text-secondary mb-0"
                      style={{ fontSize: "0.9rem", lineHeight: "1.6" }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </FadeInAdvanced>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="my-5">
        <ProcessOne />
      </div>

      <section
        className="faq-section py-5"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-title text-center sec-title-animation animation-style1 mb-5">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline-border"></span>
                <div className="section-title__shape-1">
                  <i className="fas fa-question-circle"></i>
                </div>
                <h6 className="section-title__tagline">Frequently Asked</h6>
                <span className="section-title__tagline-border"></span>
                <div className="section-title__shape-2">
                  <i className="fas fa-question-circle"></i>
                </div>
              </div>
              <h2 className="section-title__title">
                <TextAnimation animationStyle="style1">
                  Emergency Service Questions <span>Answered</span>
                </TextAnimation>
              </h2>
            </div>
          </motion.div>
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-page__single">
                <h4
                  className="fw-bolder mb-5 pb-4"
                  style={{
                    color: "#7f1d1d",
                    fontSize: "1.3rem",
                    borderBottom: "2px solid #d32f2f",
                  }}
                >
                  <i
                    className="fas fa-exclamation-triangle me-2"
                    style={{ color: "#d32f2f" }}
                  ></i>
                  When to Call
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
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ amount: 0.05 }}
                        className="accrodion-content"
                        style={{
                          display: activeFaq === item.id ? "block" : "none",
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
                    color: "#7f1d1d",
                    fontSize: "1.3rem",
                    borderBottom: "2px solid #d32f2f",
                  }}
                >
                  <i
                    className="fas fa-tools me-2"
                    style={{ color: "#d32f2f" }}
                  ></i>
                  Service and Coverage
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
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ amount: 0.05 }}
                        className="accrodion-content"
                        style={{
                          display: activeFaq === item.id ? "block" : "none",
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
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="my-5 p-5 rounded-4 text-center mx-3"
        style={{
          backgroundColor: "#d32f2f",
          boxShadow: "0 8px 32px rgba(185,28,28,0.25)",
        }}
      >
        <h3
          className="fw-bolder mb-4"
          style={{ fontSize: "2rem", color: "white", lineHeight: "1.3" }}
        >
          Heating or Cooling Emergency? Call Now.
        </h3>
        <p
          className="mb-5"
          style={{ fontSize: "1.1rem", color: "#fecaca", lineHeight: "1.7" }}
        >
          24/7 emergency response across all Melbourne suburbs. VBA and ARCtick
          licensed. All system types. All brands.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <a
              href="tel:0405133761"
              className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
              style={{
                backgroundColor: "white",
                color: "#b91c1c",
                fontSize: "1.1rem",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#fef2f2";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "white";
              }}
            >
              <i className="fas fa-phone me-2"></i> 0405 133 761 — Emergency
              Line
            </a>
          </motion.div>
        </div>
        <p
          className="mt-5 mb-0"
          style={{
            fontSize: "0.9rem",
            color: "#fecaca",
            letterSpacing: "0.5px",
          }}
        >
          &#10003; 24/7 AVAILABLE &bull; &#10003; GAS LEAKS &bull; &#10003;
          HYDRONIC &bull; &#10003; GAS DUCTED &bull; &#10003; SPLIT SYSTEM
          &bull; &#10003; ALL MELBOURNE SUBURBS
        </p>
      </motion.div>

      {/* Service Areas Near You - Internal Linking */}
      <ServiceAreasNearYou
        limit={12}
        title="Emergency Service Areas"
        subtitle="24/7 emergency response available across Melbourne"
      />
    </>
  );
};

export default Page;
