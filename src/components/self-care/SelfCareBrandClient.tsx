"use client";

import React, { useState, useMemo } from "react";
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

interface BrandData {
  name: string;
  slug: string;
  systemType: string;
  commonErrors: Array<{
    code: string;
    title: string;
    severity: string;
    description: string;
    action: string;
    serviceType: string;
  }>;
  maintenanceTips: string[];
}

interface Props {
  brand: BrandData;
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "URGENT":
      return "#dc2626";
    case "HIGH":
      return "#ea580c";
    case "MEDIUM":
      return "#eab308";
    case "LOW":
      return "#16a34a";
    default:
      return "#666";
  }
};

const SERVICE_TYPES = {
  "gas-ducted": "Gas Ducted Heating",
  "split-system": "Split System Air Conditioning",
  hydronic: "Hydronic Heating",
  "ai-heat-pump": "AI Heat Pump",
};

const SelfCareBrandClient: React.FC<Props> = ({ brand }) => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: errorsRef, inView: errorsInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: maintenanceRef, inView: maintenanceInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          paddingTop: "140px",
          paddingBottom: "100px",
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
          >
            <Link
              href="/self-care"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#ef4444",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              <i
                className="fas fa-chevron-left"
                style={{ fontSize: "12px", fontFamily: "Font Awesome" }}
              ></i>
              Back to Self-Care Guide
            </Link>

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
              {brand.name} Error Codes & Troubleshooting
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{
                color: "#ddd",
                fontSize: "18px",
                lineHeight: "1.8",
                marginBottom: "36px",
                maxWidth: "700px",
              }}
            >
              Complete error code database and troubleshooting guide for{" "}
              {brand.name} systems. Find solutions to common issues or contact
              our experts.
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
                Emergency: 0405 133 761
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Error Codes Section */}
      <section style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="container">
          <motion.div
            ref={errorsRef}
            initial="hidden"
            animate={errorsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              style={{ marginBottom: "60px" }}
            >
              <h2
                style={{
                  color: "#1a1a1a",
                  fontSize: "42px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "-1px",
                }}
              >
                {brand.name} Error Codes
              </h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  maxWidth: "700px",
                  marginBottom: "40px",
                }}
              >
                Complete error code reference for {brand.name} systems. Each
                error code includes severity level, description, and
                troubleshooting steps.
              </p>
            </motion.div>

            <div className="row g-3">
              {brand.commonErrors.map((error, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      errorsInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: i * 0.08 }}
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      padding: "24px",
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    {/* Error Code Badge */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "16px",
                      }}
                    >
                      <div
                        style={{
                          background: "#b91c1c",
                          color: "#fff",
                          fontSize: "16px",
                          fontWeight: 700,
                          padding: "8px 16px",
                          borderRadius: "4px",
                        }}
                      >
                        {error.code}
                      </div>
                      <span
                        style={{
                          background: getSeverityColor(error.severity),
                          color: "#fff",
                          fontSize: "10px",
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: "3px",
                        }}
                      >
                        {error.severity}
                      </span>
                    </div>

                    {/* Title */}
                    <h5
                      style={{
                        color: "#1a1a1a",
                        fontSize: "16px",
                        fontWeight: 700,
                        marginBottom: "10px",
                        lineHeight: "1.4",
                      }}
                    >
                      {error.title}
                    </h5>

                    {/* Description */}
                    <p
                      style={{
                        color: "#6b7280",
                        fontSize: "13px",
                        lineHeight: "1.6",
                        marginBottom: "12px",
                        flex: 1,
                      }}
                    >
                      {error.description}
                    </p>

                    {/* Action */}
                    <div style={{ marginBottom: "16px" }}>
                      <p
                        style={{
                          color: "#374151",
                          fontSize: "13px",
                          lineHeight: "1.6",
                          margin: 0,
                          fontWeight: 500,
                        }}
                      >
                        {error.action}
                      </p>
                    </div>

                    {/* Call Button */}
                    <a
                      href="tel:0405133761"
                      style={{
                        background: "#b91c1c",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "13px",
                        padding: "10px 16px",
                        border: "none",
                        borderRadius: "6px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        marginTop: "auto",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#991818";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#b91c1c";
                      }}
                    >
                      <i
                        className="fas fa-phone-alt"
                        style={{ fontSize: "12px", fontFamily: "Font Awesome" }}
                      ></i>
                      Call Now
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(185,28,28,0.08) 0%, rgba(239,68,68,0.05) 100%)",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <motion.div
            ref={maintenanceRef}
            initial="hidden"
            animate={maintenanceInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              style={{ marginBottom: "60px" }}
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
                  fontSize: "42px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "-1px",
                }}
              >
                {brand.name} Maintenance Tips
              </h2>

              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  maxWidth: "700px",
                }}
              >
                Regular maintenance helps prevent error codes and keeps your
                system running efficiently. Follow these {brand.name}-specific
                tips for optimal performance.
              </p>
            </motion.div>

            <div className="row g-4">
              {brand.maintenanceTips.map((tip, i) => (
                <div key={i} className="col-md-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      maintenanceInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: i * 0.06 }}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background:
                          "linear-gradient(135deg, rgba(185,28,28,0.15) 0%, rgba(239,68,68,0.1) 100%)",
                        border: "1.5px solid rgba(185,28,28,0.25)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "#b91c1c",
                        fontWeight: 700,
                        fontSize: "18px",
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <p
                        style={{
                          color: "#333",
                          fontSize: "15px",
                          lineHeight: "1.6",
                          margin: 0,
                        }}
                      >
                        {tip}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Still Need Help?
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
              Our licensed technicians specialize in {brand.name}{" "}
              {brand.systemType} systems and are available 24/7 for emergency
              repairs and expert support.
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
                Call Now: 0405 133 761
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
                Book Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SelfCareBrandClient;
