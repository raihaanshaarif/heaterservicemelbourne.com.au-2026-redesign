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
import { splitSystemServicesData } from "@/contents/services/serviceData";


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
    question: "What is a split system air conditioner?",
    answer:
      "A split system air conditioner consists of two units: an indoor unit that delivers conditioned air into the room and an outdoor unit that houses the compressor and condenser. The two units are connected by refrigerant piping and electrical cabling. Split systems can both cool and heat, making them year-round climate control solutions.",
  },
  {
    id: 2,
    question: "How energy efficient are modern split systems?",
    answer:
      "Modern inverter split systems are among the most energy efficient heating and cooling options available for residential use. High-efficiency models achieve Zoned Energy Rating Label (ZERL) ratings of 5 to 6 stars for both cooling and heating. An inverter compressor modulates its speed to match the room load, avoiding the energy waste of stop-start cycling.",
  },
  {
    id: 3,
    question: "What size split system do I need?",
    answer:
      "The correct capacity depends on room size, ceiling height, insulation levels, window area and orientation, and climate zone. As a rough guide, a 2.5kW unit suits rooms up to 25m², a 3.5kW unit suits 25–40m², and a 5–6kW unit suits larger open-plan spaces. We conduct a proper load assessment to recommend the right capacity for your space.",
  },
  {
    id: 4,
    question: "Does my split system need regular servicing?",
    answer:
      "Yes. Annual servicing keeps your system operating efficiently, prolongs equipment life, and maintains manufacturer warranty compliance. A service includes cleaning filters and coils, checking refrigerant charge, inspecting electrical connections, testing performance, and identifying any developing faults before they cause a breakdown.",
  },
  {
    id: 5,
    question: "Is ARCtick licensing required for split system work?",
    answer:
      "Yes. Handling refrigerants in a split system requires an ARCtick licence (Refrigerant Handling Licence) under Australian law. This applies to installation, repair, and any service work involving the refrigerant circuit. All our technicians hold current ARCtick licences.",
  },
  {
    id: 6,
    question: "Can I use my split system for heating as well as cooling?",
    answer:
      "Yes. Modern reverse cycle split systems provide both heating and cooling. In heating mode, the system extracts heat energy from the outside air and transfers it into the room. Reverse cycle heating is up to 3 times more efficient than resistive electric heating and works effectively in Melbourne winters.",
  },
  {
    id: 7,
    question: "How often should I clean the filters?",
    answer:
      "Most manufacturers recommend cleaning filters every 4 to 6 weeks during periods of regular use, or at least every 3 months. Dirty filters restrict airflow, reduce efficiency, increase energy consumption, and accelerate coil contamination. We show you how to clean the filters during every service visit.",
  },
  {
    id: 8,
    question: "What brands do you install and service?",
    answer:
      "We install and service all major split system brands available in Australia, including Daikin, Mitsubishi Electric, Fujitsu, Panasonic, Samsung, LG, Hitachi, and Carrier. We hold brand-specific training certifications and carry genuine parts for all these manufacturers.",
  },
  {
    id: 9,
    question: "Do you provide emergency split system repair?",
    answer:
      "Yes. We provide 24/7 emergency repair services for split system failures across all Melbourne suburbs. We target a 4-hour response time for all emergency calls. Our technicians carry a comprehensive parts inventory to enable same-visit repairs in the majority of emergency call-outs.",
  },
  {
    id: 10,
    question: "Which Melbourne suburbs do you service?",
    answer:
      "We provide split system installation, deep cleaning, service, and emergency repair across all Melbourne suburbs, including inner city, northern, southern, eastern, and western areas. Contact us to confirm availability and book your service.",
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
        title="Split System Air Conditioning Melbourne – Installation, Cleaning, Repair and Emergency Service"
        subTitle="Split System Air Conditioning"
        titleLink="/split-system-air-conditioning"
      />

      {/* JSON-LD Schema for Local SEO */}
      <JSONLDScript
        schema={generateServiceSchema(
          "Split System Air Conditioning Installation & Repair",
          "Professional split system air conditioning installation, repair, maintenance, and emergency services across Melbourne",
          "https://heaterservicemelbourne.com.au/split-system-air-conditioning",
        )}
        id="split-system-schema"
      />

      {/* Breadcrumb Navigation with Schema */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          {
            name: "Split System Air Conditioning",
            url: "/split-system-air-conditioning",
          },
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
            <motion.div className="col-lg-7" variants={itemVariants}>
              <div>
                <h1
                  className="fw-bolder mb-4"
                  style={{
                    fontSize: "3rem",
                    color: "#062f3a",
                    lineHeight: "1.2",
                  }}
                >
                  Split System Air Conditioning Melbourne
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Professional split system installation, deep cleaning, repair,
                  and 24/7 emergency service across all Melbourne suburbs.
                  ARCtick licensed technicians, all brands, fixed-price
                  servicing.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  From single-room installations to whole-home multi-head
                  systems, we design, install, and maintain every configuration
                  of split system air conditioning for Melbourne homes and
                  businesses.
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
                      Get a Free Quote
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
                    &#10003; ARCTICK LICENSED
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
                    &#10003; 24/7 EMERGENCY
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
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#fdf4ff",
                      color: "#7e22ce",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    &#10003; FIXED PRICE
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-5" variants={itemVariants}>
              <div
                className="p-5 rounded-4 bg-white"
                style={{ boxShadow: "0 10px 40px rgba(26,26,26,0.08)" }}
              >
                <h4 className="fw-bolder mb-4" style={{ color: "#062f3a" }}>
                  Quick Contact
                </h4>
                <div
                  className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3"
                  style={{ backgroundColor: "#f4f5f9" }}
                >
                  <i
                    className="fas fa-phone"
                    style={{
                      color: "#fd5523",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  ></i>
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#6b7280",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      Emergency Line
                    </div>
                    <a
                      href="tel:0405133761"
                      className="text-decoration-none fw-bold"
                      style={{ color: "#062f3a", fontSize: "1.1rem" }}
                    >
                      0405 133 761
                    </a>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3"
                  style={{ backgroundColor: "#f4f5f9" }}
                >
                  <i
                    className="fas fa-clock"
                    style={{
                      color: "#fd5523",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  ></i>
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#6b7280",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      Availability
                    </div>
                    <div
                      className="fw-bold"
                      style={{ color: "#062f3a", fontSize: "1rem" }}
                    >
                      24/7 Emergency Service
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center gap-3 p-3 rounded-3"
                  style={{ backgroundColor: "#f4f5f9" }}
                >
                  <i
                    className="fas fa-map-marker-alt"
                    style={{
                      color: "#fd5523",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  ></i>
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#6b7280",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      Coverage
                    </div>
                    <div
                      className="fw-bold"
                      style={{ color: "#062f3a", fontSize: "1rem" }}
                    >
                      All Melbourne Suburbs
                    </div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4"
                >
                  <Link
                    href="/contact"
                    className="d-block text-center px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
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
                    Request a Free Assessment
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
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
                  <i className="fas fa-snowflake"></i>
                </div>
                <h6 className="section-title__tagline">All Services</h6>
                <span className="section-title__tagline-border"></span>
                <div className="section-title__shape-2">
                  <i className="fas fa-snowflake"></i>
                </div>
              </div>
              <h2 className="section-title__title">
                <TextAnimation animationStyle="style1">
                  Our Split System Air Conditioning <span>Services</span>
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
            {splitSystemServicesData.map((service, index) => (
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
                    <div
                      className="position-relative"
                      style={{ height: "220px", overflow: "hidden" }}
                    >
                      <Image
                        src={service.image}
                        alt={`${service.title} Melbourne – professional split system air conditioning service`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className="position-absolute top-0 start-0 px-3 py-2 m-3 rounded-2"
                        style={{
                          backgroundColor: "#fd5523",
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
                        style={{ color: "#062f3a", fontSize: "1.2rem" }}
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
                        style={{ color: "#fd5523", fontSize: "0.95rem" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "#e54a1f";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "#fd5523";
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
        style={{ backgroundColor: "#f4f5f9" }}
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
                  Melbourne trusts us for <span>Split System Services</span>
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
                icon: "fas fa-certificate",
                title: "ARCtick Licensed Technicians",
                description:
                  "All refrigerant handling work is carried out by ARCtick licensed technicians, fully compliant with Australian refrigerant regulations and manufacturer requirements.",
              },
              {
                icon: "fas fa-tools",
                title: "All Brands and Configurations",
                description:
                  "From single-room wall splits to multi-head whole-home systems, we install, clean, service, and repair every brand and configuration available in the Australian market.",
              },
              {
                icon: "fas fa-bolt",
                title: "24/7 Emergency Response",
                description:
                  "Split system failures don't keep business hours. Our emergency technicians are available around the clock, targeting a 4-hour response time for urgent breakdowns across all Melbourne suburbs.",
              },
              {
                icon: "fas fa-dollar-sign",
                title: "Fixed-Price Transparent Quoting",
                description:
                  "We provide clear, itemised quotes before any work begins. No hidden call-out fees, no surprise add-ons. You know the total cost before we start.",
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
                    style={{ boxShadow: "0 4px 20px rgba(26,26,26,0.06)" }}
                  >
                    <div className="mb-4" style={{ fontSize: "2.5rem" }}>
                      <i className={item.icon} style={{ color: "#fd5523" }}></i>
                    </div>
                    <h5
                      className="fw-bolder mb-3"
                      style={{ color: "#062f3a", fontSize: "1.1rem" }}
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
                  Split System Questions <span>Answered</span>
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
                    color: "#062f3a",
                    fontSize: "1.3rem",
                    borderBottom: "2px solid #fd5523",
                  }}
                >
                  <i
                    className="fas fa-snowflake me-2"
                    style={{ color: "#fd5523" }}
                  ></i>
                  Installation and Efficiency
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
                    color: "#062f3a",
                    fontSize: "1.3rem",
                    borderBottom: "2px solid #fd5523",
                  }}
                >
                  <i
                    className="fas fa-tools me-2"
                    style={{ color: "#fd5523" }}
                  ></i>
                  Service and Maintenance
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
        className="my-5 p-5 rounded-4 text-center"
        style={{
          backgroundColor: "#062f3a",
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          boxShadow: "0 8px 32px rgba(6,47,58,0.15)",
        }}
      >
        <h3
          className="fw-bolder mb-4"
          style={{ fontSize: "2rem", color: "white", lineHeight: "1.3" }}
        >
          Split System Air Conditioning — Melbourne&apos;s Trusted Specialists
        </h3>
        <p
          className="mb-5"
          style={{ fontSize: "1.1rem", color: "#d9e0eb", lineHeight: "1.7" }}
        >
          Installation, cleaning, service, and 24/7 emergency response. ARCtick
          licensed. All Melbourne suburbs.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
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
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#f4f5f9";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "white";
              }}
            >
              Get a Free Quote
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
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
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
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
          &#10003; ARCTICK LICENSED &bull; &#10003; ALL BRANDS &bull; &#10003;
          24/7 EMERGENCY &bull; &#10003; FIXED PRICE &bull; &#10003; ALL
          MELBOURNE SUBURBS
        </p>
      </motion.div>

      {/* Service Areas Near You - Internal Linking */}
      <ServiceAreasNearYou
        limit={12}
        title="Split System Air Conditioning Service Areas"
        subtitle="Professional split system AC services available across Melbourne"
      />
    </>
  );
};

export default Page;
