"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const SelfCareClient: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: guideRef, inView: guideInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: emergencyRef, inView: emergencyInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: codesRef, inView: codesInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: brandsRef, inView: brandsInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: maintenanceRef, inView: maintenanceInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const brands = [
    { name: "Braemar", slug: "braemar", icon: "fa-fire" },
    { name: "Brivis", slug: "brivis", icon: "fa-fire" },
    { name: "Mitsubishi", slug: "mitsubishi-electric", icon: "fa-snowflake" },
    { name: "Panasonic", slug: "panasonic", icon: "fa-wind" },
    { name: "LG", slug: "lg", icon: "fa-wind" },
    { name: "Samsung", slug: "samsung", icon: "fa-wind" },
    { name: "Fujitsu", slug: "fujitsu", icon: "fa-snowflake" },
    { name: "Toshiba", slug: "toshiba", icon: "fa-wind" },
    { name: "Carrier", slug: "carrier", icon: "fa-snowflake" },
    { name: "Hitachi", slug: "hitachi", icon: "fa-snowflake" },
    { name: "Haier", slug: "haier", icon: "fa-wind" },
    { name: "Kaden", slug: "kaden", icon: "fa-bolt" },
    { name: "Sharp", slug: "sharp", icon: "fa-wind" },
    { name: "Breezair", slug: "breezair", icon: "fa-fire" },
    { name: "ActronAir", slug: "actronair", icon: "fa-wind" },
    { name: "Rinnai", slug: "rinnai", icon: "fa-fire" },
    { name: "Vulcan", slug: "vulcan", icon: "fa-wind" },
    { name: "York", slug: "york", icon: "fa-snowflake" },
    { name: "Celair", slug: "celair", icon: "fa-wind" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          paddingTop: "140px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(185,28,28,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="row align-items-center"
          >
            <div className="col-lg-8">
              <motion.div variants={itemVariants}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "#ef4444",
                    paddingBottom: "8px",
                    borderBottom: "2px solid #ef4444",
                    marginBottom: "20px",
                  }}
                >
                  Self-Care Guide
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                style={{
                  color: "#fff",
                  fontSize: "56px",
                  lineHeight: "1.2",
                  marginBottom: "24px",
                  letterSpacing: "-1px",
                  fontWeight: 800,
                }}
              >
                Heating System Error Codes & Troubleshooting
              </motion.h1>

              <motion.p
                variants={itemVariants}
                style={{
                  color: "#ddd",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  marginBottom: "36px",
                  maxWidth: "650px",
                }}
              >
                Comprehensive self-care guides for all heating services in Melbourne. Find error codes, troubleshooting steps, and maintenance tips for hydronic heating, gas ducted systems, split systems, and emergency repairs.
              </motion.p>

              <motion.div variants={itemVariants} className="d-flex gap-3">
                <a
                  href="tel:0405133761"
                  style={{
                    background:
                      "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "15px",
                    padding: "15px 36px",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow:
                      "0 12px 32px rgba(185,28,28,0.4), 0 8px 16px rgba(0,0,0,0.2)",
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <i
                    className="fas fa-phone-alt"
                    style={{ fontSize: "14px", fontFamily: "Font Awesome" }}
                  ></i>
                  CALL NOW: 0405 133 761
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Notice */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <motion.div
            ref={guideRef}
            initial="hidden"
            animate={guideInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(220,38,38,0.1) 0%, rgba(239,68,68,0.08) 100%)",
                border: "2px solid rgba(220,38,38,0.3)",
                borderRadius: "12px",
                padding: "48px 40px",
                marginBottom: "60px",
              }}
            >
              <motion.div
                variants={itemVariants}
                className="d-flex gap-3 align-items-start mb-4"
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background:
                      "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "24px",
                    color: "#fff",
                  }}
                >
                  ⚠️
                </div>
                <div>
                  <h3
                    style={{
                      color: "#b91c1c",
                      fontSize: "22px",
                      fontWeight: 700,
                      marginBottom: "16px",
                      marginTop: 0,
                    }}
                  >
                    Important Safety Notice
                  </h3>
                  <ul
                    style={{
                      color: "#666",
                      fontSize: "15px",
                      lineHeight: "1.8",
                      margin: 0,
                      paddingLeft: "24px",
                    }}
                  >
                    <li style={{ marginBottom: "12px" }}>
                      Always turn off your heating system before attempting any
                      troubleshooting
                    </li>
                    <li style={{ marginBottom: "12px" }}>
                      If you&apos;re unsure about any procedure, contact a
                      licensed technician immediately
                    </li>
                    <li style={{ marginBottom: "12px" }}>
                      Never attempt electrical repairs or refrigerant handling
                      yourself
                    </li>
                    <li>
                      Gas heating systems require professional servicing for
                      safety compliance
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Quick Help Guide */}
            <div style={{ marginBottom: "60px" }}>
              <motion.h2
                variants={itemVariants}
                style={{
                  color: "#1a1a1a",
                  fontSize: "36px",
                  fontWeight: 700,
                  marginBottom: "40px",
                  letterSpacing: "-1px",
                }}
              >
                Quick Help Guide
              </motion.h2>

              <div className="row g-4">
                {[
                  {
                    num: "1",
                    title: "Turn Off Your System",
                    desc: "Switch off your heating system immediately and ensure power is safely disconnected",
                  },
                  {
                    num: "2",
                    title: "Note Any Error Codes",
                    desc: "Look for error codes on your control panel or system display screen",
                  },
                  {
                    num: "3",
                    title: "Find Your Brand Below",
                    desc: "Locate your heating brand in our error code database and sections below",
                  },
                  {
                    num: "4",
                    title: "Follow Troubleshooting Steps",
                    desc: "Review specific troubleshooting steps but don't attempt complex repairs",
                  },
                  {
                    num: "5",
                    title: "Call Our Team",
                    desc: "If the problem persists, contact our licensed technicians immediately",
                  },
                ].map((step, i) => (
                  <div key={i} className="col-md-6 col-lg-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        guideInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: i * 0.1 }}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.88) 100%)",
                        border: "1px solid rgba(185,28,28,0.1)",
                        borderRadius: "12px",
                        padding: "32px 28px",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          background:
                            "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 20px",
                          fontSize: "28px",
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        {step.num}
                      </div>
                      <h5
                        style={{
                          color: "#1a1a1a",
                          fontSize: "18px",
                          fontWeight: 700,
                          marginBottom: "12px",
                        }}
                      >
                        {step.title}
                      </h5>
                      <p
                        style={{
                          color: "#666",
                          fontSize: "14px",
                          lineHeight: "1.7",
                          margin: 0,
                        }}
                      >
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service-Specific Troubleshooting */}
      <section
        style={{
          background: "linear-gradient(135deg, #f9f9f9 0%, #f5f5f5 100%)",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              style={{ textAlign: "center", marginBottom: "60px" }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#b91c1c",
                  paddingBottom: "8px",
                  borderBottom: "2px solid #b91c1c",
                  marginBottom: "20px",
                }}
              >
                All Services Covered
              </span>
              <h2
                style={{
                  color: "#1a1a1a",
                  fontSize: "44px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "-1px",
                }}
              >
                Service-Specific Troubleshooting
              </h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  maxWidth: "700px",
                  margin: "0 auto",
                  lineHeight: "1.8",
                }}
              >
                We specialize in all major heating systems in Melbourne. Find troubleshooting tips specific to your system type below.
              </p>
            </motion.div>

            <div className="row g-4">
              {[
                {
                  title: "Hydronic Heating",
                  icon: "fa-droplet",
                  color: "#3b82f6",
                  issues: [
                    "No heat from floor or radiators",
                    "Water leaks or strange sounds",
                    "Uneven heating distribution",
                    "System won't turn on",
                  ],
                  quick: "Check water level in expansion tank and ensure pump is running. Listen for air in the pipes.",
                  cta: "/hydronic-heating",
                },
                {
                  title: "Gas Ducted Heating",
                  icon: "fa-fire",
                  color: "#ef5350",
                  issues: [
                    "Furnace not igniting",
                    "Weak airflow from vents",
                    "Strange burning odor",
                    "Thermostat not responding",
                  ],
                  quick: "Check that gas valve is on and thermostat is set to HEAT. Replace furnace filter if dirty.",
                  cta: "/gas-ducted-heating",
                },
                {
                  title: "Split Systems",
                  icon: "fa-wind",
                  color: "#06b6d4",
                  issues: [
                    "Indoor unit not cooling/heating",
                    "Water leaking from unit",
                    "Error codes displayed",
                    "Remote control not working",
                  ],
                  quick: "Verify indoor and outdoor units are powered on. Check if filters need cleaning. Check remote batteries.",
                  cta: "/split-system-air-conditioning",
                },
                {
                  title: "Emergency Services",
                  icon: "fa-phone",
                  color: "#dc2626",
                  issues: [
                    "Complete system failure",
                    "Gas smell or safety concerns",
                    "Urgent repairs needed",
                    "After-hours breakdowns",
                  ],
                  quick: "Turn off your system immediately and call us. Don't attempt repairs on dangerous issues.",
                  cta: "/emergency-services",
                },
              ].map((service, i) => (
                <div key={i} className="col-md-6 col-lg-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.88) 100%)",
                      border: "1px solid rgba(185,28,28,0.1)",
                      borderRadius: "12px",
                      padding: "32px 28px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: service.color,
                      }}
                    />

                    <div
                      style={{
                        fontSize: "40px",
                        color: service.color,
                        marginBottom: "16px",
                      }}
                    >
                      <i
                        className={`fas ${service.icon}`}
                        style={{ fontFamily: "Font Awesome" }}
                      ></i>
                    </div>

                    <h5
                      style={{
                        color: "#1a1a1a",
                        fontSize: "18px",
                        fontWeight: 700,
                        marginBottom: "12px",
                      }}
                    >
                      {service.title}
                    </h5>

                    <div style={{ marginBottom: "20px", flexGrow: 1 }}>
                      <p
                        style={{
                          color: "#666",
                          fontSize: "13px",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          marginBottom: "12px",
                          marginTop: 0,
                        }}
                      >
                        Common Issues
                      </p>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {service.issues.map((issue, j) => (
                          <li
                            key={j}
                            style={{
                              fontSize: "13px",
                              color: "#666",
                              marginBottom: "8px",
                              paddingLeft: "20px",
                              position: "relative",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 0,
                                color: service.color,
                                fontWeight: 700,
                              }}
                            >
                              •
                            </span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      style={{
                        background: "rgba(185,28,28,0.05)",
                        border: "1px solid rgba(185,28,28,0.1)",
                        borderRadius: "8px",
                        padding: "12px",
                        marginBottom: "16px",
                        fontSize: "13px",
                        color: "#666",
                        lineHeight: "1.6",
                      }}
                    >
                      <strong style={{ color: "#333", display: "block", marginBottom: "4px" }}>
                        Quick Tip:
                      </strong>
                      {service.quick}
                    </div>

                    <Link
                      href={service.cta}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        background: "transparent",
                        color: service.color,
                        fontSize: "14px",
                        fontWeight: 700,
                        textDecoration: "none",
                        padding: "10px",
                        border: `1.5px solid ${service.color}`,
                        borderRadius: "6px",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.background = service.color;
                        el.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.background = "transparent";
                        el.style.color = service.color;
                      }}
                    >
                      Learn More
                      <i
                        className="fas fa-arrow-right"
                        style={{ fontSize: "12px", fontFamily: "Font Awesome" }}
                      ></i>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 24/7 Emergency Service */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(185,28,28,0.1) 0%, rgba(239,68,68,0.05) 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
          borderTop: "2px solid rgba(185,28,28,0.2)",
          borderBottom: "2px solid rgba(185,28,28,0.2)",
        }}
      >
        <div className="container">
          <motion.div
            ref={emergencyRef}
            initial="hidden"
            animate={emergencyInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              style={{ marginBottom: "20px" }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#b91c1c",
                  paddingBottom: "8px",
                  borderBottom: "2px solid #b91c1c",
                }}
              >
                Available Now
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              style={{
                color: "#1a1a1a",
                fontSize: "44px",
                fontWeight: 700,
                marginBottom: "24px",
                letterSpacing: "-1px",
              }}
            >
              24/7 Emergency Heating Service
            </motion.h2>

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "16px",
                color: "#666",
                marginBottom: "40px",
                maxWidth: "700px",
                margin: "0 auto 40px",
                lineHeight: "1.8",
              }}
            >
              System completely down? Strange noises or burning smell? Heating
              failure in winter? Our licensed technicians are available 24/7 for
              emergency repairs across all Melbourne suburbs.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="d-flex gap-3 justify-content-center flex-wrap"
            >
              <a
                href="tel:0405133761"
                style={{
                  background:
                    "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "16px",
                  padding: "18px 40px",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow:
                    "0 12px 32px rgba(185,28,28,0.4), 0 8px 16px rgba(0,0,0,0.2)",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <i
                  className="fas fa-phone-alt"
                  style={{ fontSize: "16px", fontFamily: "Font Awesome" }}
                ></i>
                Call Now: 0405 133 761
              </a>
              <div
                style={{
                  fontSize: "14px",
                  color: "#666",
                  marginTop: "12px",
                  width: "100%",
                }}
              >
                <i
                  className="fas fa-check"
                  style={{ color: "#b91c1c", marginRight: "8px" }}
                ></i>
                Same-Day Service Available
                <span style={{ margin: "0 8px" }}>•</span>
                <i
                  className="fas fa-check"
                  style={{ color: "#b91c1c", marginRight: "8px" }}
                ></i>
                Licensed Technicians
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Common Error Codes */}
      <section style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="container">
          <motion.div
            ref={codesRef}
            initial="hidden"
            animate={codesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              style={{ textAlign: "center", marginBottom: "60px" }}
            >
              <h2
                style={{
                  color: "#1a1a1a",
                  fontSize: "44px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "-1px",
                }}
              >
                Most Common Heating Error Codes
              </h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  marginBottom: 0,
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Quick reference guide for common heating system error codes
                across popular brands
              </p>
            </motion.div>

            <div className="row g-4">
              {[
                {
                  code: "E1/E2",
                  issue: "Temperature Sensor Issues",
                  detail: "Thermostat or indoor/outdoor sensor malfunction",
                },
                {
                  code: "E3/E4",
                  issue: "Fan Motor Problems",
                  detail: "Indoor or outdoor fan motor not operating properly",
                },
                {
                  code: "E5/E6",
                  issue: "Compressor Issues",
                  detail: "Compressor protection activated or startup failure",
                },
                {
                  code: "E7/E8",
                  issue: "Refrigerant Pressure",
                  detail:
                    "Low refrigerant levels or pressure abnormality detected",
                },
                {
                  code: "F1/F2",
                  issue: "Communication Error",
                  detail: "Indoor and outdoor units not communicating properly",
                },
                {
                  code: "L3/L4",
                  issue: "Power Supply Issue",
                  detail: "Power supply malfunction or insufficient voltage",
                },
                {
                  code: "H1/H2",
                  issue: "High Pressure Protection",
                  detail: "System protecting against high pressure condition",
                },
                {
                  code: "P1/P2",
                  issue: "Indoor Unit Protection",
                  detail: "Indoor unit protection mode activated",
                },
              ].map((error, i) => (
                <div key={i} className="col-md-6 col-lg-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      codesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: i * 0.05 }}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.88) 100%)",
                      border: "1px solid rgba(185,28,28,0.1)",
                      borderRadius: "12px",
                      padding: "28px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background:
                          "linear-gradient(90deg, #b91c1c 0%, #ef4444 100%)",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                      }}
                    />

                    <div
                      style={{
                        background:
                          "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: 700,
                        padding: "8px 16px",
                        borderRadius: "6px",
                        display: "inline-block",
                        marginBottom: "16px",
                      }}
                    >
                      {error.code}
                    </div>

                    <h5
                      style={{
                        color: "#1a1a1a",
                        fontSize: "16px",
                        fontWeight: 700,
                        marginBottom: "8px",
                      }}
                    >
                      {error.issue}
                    </h5>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "13px",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {error.detail}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Selector */}
      <section
        style={{
          background: "linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <motion.div
            ref={brandsRef}
            initial="hidden"
            animate={brandsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              style={{ textAlign: "center", marginBottom: "60px" }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#b91c1c",
                  paddingBottom: "8px",
                  borderBottom: "2px solid #b91c1c",
                  marginBottom: "20px",
                }}
              >
                Select Your Brand
              </span>
              <h2
                style={{
                  color: "#1a1a1a",
                  fontSize: "44px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "-1px",
                }}
              >
                Choose Your Heating Brand
              </h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Select your brand below to view specific error codes,
                troubleshooting guides, and maintenance tips tailored to your
                heating system.
              </p>
            </motion.div>

            <div className="row g-3">
              {brands.map((brand, i) => (
                <div key={i} className="col-6 col-sm-4 col-md-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      brandsInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ y: -8 }}
                  >
                    <Link
                      href={`/self-care/${brand.slug}`}
                      style={{
                        display: "block",
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.88) 100%)",
                        border: "1.5px solid rgba(185,28,28,0.1)",
                        borderRadius: "12px",
                        padding: "28px 20px",
                        textAlign: "center",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "rgba(185,28,28,0.3)";
                        el.style.boxShadow = "0 12px 32px rgba(185,28,28,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "rgba(185,28,28,0.1)";
                        el.style.boxShadow = "none";
                      }}
                    >
                      <div
                        style={{
                          fontSize: "32px",
                          color: "#b91c1c",
                          marginBottom: "12px",
                        }}
                      >
                        <i
                          className={`fas ${brand.icon}`}
                          style={{ fontFamily: "Font Awesome" }}
                        ></i>
                      </div>
                      <h5
                        style={{
                          color: "#1a1a1a",
                          fontSize: "16px",
                          fontWeight: 700,
                          marginBottom: "8px",
                        }}
                      >
                        {brand.name}
                      </h5>
                      <div
                        style={{
                          color: "#b91c1c",
                          fontSize: "12px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        View Error Codes →
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="container">
          <motion.div
            ref={maintenanceRef}
            initial="hidden"
            animate={maintenanceInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              style={{ textAlign: "center", marginBottom: "60px" }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#b91c1c",
                  paddingBottom: "8px",
                  borderBottom: "2px solid #b91c1c",
                  marginBottom: "20px",
                }}
              >
                Preventative Care
              </span>
              <h2
                style={{
                  color: "#1a1a1a",
                  fontSize: "44px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "-1px",
                }}
              >
                Heating Maintenance Tips
              </h2>
            </motion.div>

            <div className="row g-4">
              {[
                {
                  title: "Annual Servicing",
                  desc: "Schedule professional servicing before winter to ensure peak performance and identify issues early.",
                  tips: [
                    "Arrange pre-season inspection",
                    "Check filters and clean/replace as needed",
                    "Verify temperature output",
                    "Test emergency features",
                  ],
                },
                {
                  title: "Filter Management",
                  desc: "Regular filter changes prevent system strain and maintain air quality throughout heating season.",
                  tips: [
                    "Check filters monthly",
                    "Replace every 1-3 months",
                    "Use correct filter size",
                    "Keep spares on hand",
                  ],
                },
                {
                  title: "Thermostat Care",
                  desc: "Proper thermostat maintenance ensures accurate temperature control and energy efficiency.",
                  tips: [
                    "Check battery levels",
                    "Clean sensor area",
                    "Verify settings monthly",
                    "Avoid blocking vents",
                  ],
                },
                {
                  title: "System Inspection",
                  desc: "Regular visual inspections help catch potential issues before they become expensive problems.",
                  tips: [
                    "Look for water leaks",
                    "Listen for unusual noises",
                    "Check for error codes",
                    "Inspect vents and registers",
                  ],
                },
              ].map((maintenance, i) => (
                <div key={i} className="col-md-6 col-lg-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      maintenanceInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: i * 0.1 }}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(185,28,28,0.06) 0%, rgba(239,68,68,0.04) 100%)",
                      border: "1px solid rgba(185,28,28,0.12)",
                      borderRadius: "12px",
                      padding: "32px 28px",
                    }}
                  >
                    <h5
                      style={{
                        color: "#b91c1c",
                        fontSize: "18px",
                        fontWeight: 700,
                        marginBottom: "12px",
                      }}
                    >
                      {maintenance.title}
                    </h5>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        marginBottom: "20px",
                      }}
                    >
                      {maintenance.desc}
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {maintenance.tips.map((tip, j) => (
                        <li
                          key={j}
                          style={{
                            fontSize: "13px",
                            color: "#666",
                            marginBottom: "8px",
                            paddingLeft: "24px",
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              color: "#b91c1c",
                              fontWeight: 700,
                            }}
                          >
                            ✓
                          </span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2
              style={{
                color: "#fff",
                fontSize: "44px",
                marginBottom: "24px",
                fontWeight: 700,
                letterSpacing: "-1px",
              }}
            >
              Need Professional Help?
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "#ddd",
                marginBottom: "36px",
                maxWidth: "700px",
                margin: "0 auto 36px",
                lineHeight: "1.8",
              }}
            >
              Can&apos;t find your error code or unable to fix the issue? Our
              licensed technicians are available 24/7 for emergency repairs and
              maintenance across all Melbourne suburbs.
            </p>

            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a
                href="tel:0405133761"
                style={{
                  background:
                    "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "16px 40px",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow:
                    "0 12px 32px rgba(185,28,28,0.4), 0 8px 16px rgba(0,0,0,0.2)",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <i
                  className="fas fa-phone-alt"
                  style={{ fontSize: "14px", fontFamily: "Font Awesome" }}
                ></i>
                Emergency: 0405 133 761
              </a>
              <Link
                href="/contact"
                style={{
                  background: "rgba(239,68,68,0.15)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "15px",
                  padding: "16px 40px",
                  border: "1.5px solid rgba(239,68,68,0.3)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <i
                  className="fas fa-envelope"
                  style={{ fontSize: "14px", fontFamily: "Font Awesome" }}
                ></i>
                Book Service Online
              </Link>
            </div>

            <div
              style={{
                marginTop: "36px",
                display: "flex",
                gap: "24px",
                justifyContent: "center",
                flexWrap: "wrap",
                fontSize: "14px",
                color: "#aaa",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span style={{ color: "#ef4444", fontWeight: 700 }}>✓</span>
                Same-Day Service Available
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span style={{ color: "#ef4444", fontWeight: 700 }}>✓</span>
                Licensed Technicians
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span style={{ color: "#ef4444", fontWeight: 700 }}>✓</span>
                All Brands Supported
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SelfCareClient;
