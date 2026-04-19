"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

// Brand logos
import BraemerLogo from "@/assets/images/brands/Braemar.png";
import BrivisLogo from "@/assets/images/brands/Brivis.png";
import MitsubishiLogo from "@/assets/images/brands/mitsubishi.png";
import PanasonicLogo from "@/assets/images/brands/Panasonic.png";
import LGLogo from "@/assets/images/brands/Lg.png";
import SamsungLogo from "@/assets/images/brands/Samsung.png";
import FujitsuLogo from "@/assets/images/brands/Fujitsu.png";
import ToshibaLogo from "@/assets/images/brands/Toshiba.png";
import CarrierLogo from "@/assets/images/brands/Carrier.png";
import HitachiLogo from "@/assets/images/brands/Hitachi.png";
import HaierLogo from "@/assets/images/brands/Haier.png";
import KadenLogo from "@/assets/images/brands/Kaden.png";
import SharpLogo from "@/assets/images/brands/Sharp.png";
import BreezairLogo from "@/assets/images/brands/breezeair.png";
import ActronairLogo from "@/assets/images/brands/ActronAir.png";
import RinnaiLogo from "@/assets/images/brands/Rinnai.png";
import VulcanLogo from "@/assets/images/brands/Vulcan.png";
import YorkLogo from "@/assets/images/brands/York.png";
import CelairLogo from "@/assets/images/brands/Celair.png";

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
    { name: "Braemar", slug: "braemar", logo: BraemerLogo },
    { name: "Brivis", slug: "brivis", logo: BrivisLogo },
    { name: "Mitsubishi", slug: "mitsubishi-electric", logo: MitsubishiLogo },
    { name: "Panasonic", slug: "panasonic", logo: PanasonicLogo },
    { name: "LG", slug: "lg", logo: LGLogo },
    { name: "Samsung", slug: "samsung", logo: SamsungLogo },
    { name: "Fujitsu", slug: "fujitsu", logo: FujitsuLogo },
    { name: "Toshiba", slug: "toshiba", logo: ToshibaLogo },
    { name: "Carrier", slug: "carrier", logo: CarrierLogo },
    { name: "Hitachi", slug: "hitachi", logo: HitachiLogo },
    { name: "Haier", slug: "haier", logo: HaierLogo },
    { name: "Kaden", slug: "kaden", logo: KadenLogo },
    { name: "Sharp", slug: "sharp", logo: SharpLogo },
    { name: "Breezair", slug: "breezair", logo: BreezairLogo },
    { name: "ActronAir", slug: "actronair", logo: ActronairLogo },
    { name: "Rinnai", slug: "rinnai", logo: RinnaiLogo },
    { name: "Vulcan", slug: "vulcan", logo: VulcanLogo },
    { name: "York", slug: "york", logo: YorkLogo },
    { name: "Celair", slug: "celair", logo: CelairLogo },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          paddingTop: "80px",
          paddingBottom: "70px",
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
                Comprehensive self-care guides for all heating services in
                Melbourne. Find error codes, troubleshooting steps, and
                maintenance tips for hydronic heating, gas ducted systems, split
                systems, and emergency repairs.
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
      <section style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <div className="container">
          <motion.div
            ref={guideRef}
            initial="hidden"
            animate={guideInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              style={{
                background:
                  "linear-gradient(90deg, rgba(185,28,28,0.05) 0%, rgba(220,38,38,0.03) 100%)",
                border: "1px solid rgba(185,28,28,0.15)",
                borderRadius: "8px",
                padding: "16px 24px",
                marginBottom: "35px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background:
                    "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                ⚠️
              </div>
              <div>
                <p
                  style={{
                    color: "#b91c1c",
                    fontSize: "13px",
                    fontWeight: 700,
                    margin: 0,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Safety Notice:
                </p>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "13px",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  Turn off system before troubleshooting. Don&apos;t attempt
                  electrical or refrigerant work. Contact licensed technicians
                  for gas systems.
                </p>
              </div>
            </motion.div>

            {/* Quick Help Guide */}
            <div style={{ marginBottom: "30px" }}>
              <motion.h2
                variants={itemVariants}
                style={{
                  color: "#1a1a1a",
                  fontSize: "36px",
                  fontWeight: 700,
                  marginBottom: "24px",
                  letterSpacing: "-1px",
                }}
              >
                Quick Help Guide
              </motion.h2>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "nowrap",
                  overflowX: "auto",
                }}
              >
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
                  <div
                    key={i}
                    style={{
                      flex: "0 0 calc(20% - 12.8px)",
                      minWidth: "180px",
                      display: "flex",
                    }}
                  >
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
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
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

      {/* CTA: Quick Call Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(185,28,28,0.08) 0%, rgba(220,38,38,0.05) 100%)",
          paddingTop: "50px",
          paddingBottom: "50px",
          borderTop: "1px solid rgba(185,28,28,0.15)",
          borderBottom: "1px solid rgba(185,28,28,0.15)",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="row align-items-center g-4"
          >
            <div className="col-md-6">
              <div>
                <h3
                  style={{
                    color: "#1a1a1a",
                    fontSize: "24px",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  Urgent Issue?
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Our technicians are standing by for 24/7 emergency repairs
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                }}
              >
                <a
                  href="tel:0405133761"
                  style={{
                    background:
                      "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "14px",
                    padding: "12px 28px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0 4px 12px rgba(185,28,28,0.3)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(185,28,28,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(185,28,28,0.3)";
                  }}
                >
                  <i
                    className="fas fa-phone-alt"
                    style={{ fontSize: "13px", fontFamily: "Font Awesome" }}
                  ></i>
                  Call Now
                </a>

                <Link
                  href="/contact"
                  style={{
                    background: "transparent",
                    color: "#b91c1c",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: "12px 28px",
                    border: "1.5px solid rgba(185,28,28,0.25)",
                    borderRadius: "6px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(185,28,28,0.05)";
                    e.currentTarget.style.borderColor = "rgba(185,28,28,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(185,28,28,0.25)";
                  }}
                >
                  <i
                    className="fas fa-calendar"
                    style={{ fontSize: "13px", fontFamily: "Font Awesome" }}
                  ></i>
                  Book Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Error Codes */}
      <section style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <div className="container">
          <motion.div
            ref={codesRef}
            initial="hidden"
            animate={codesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              style={{ textAlign: "center", marginBottom: "35px" }}
            >
              <h2
                style={{
                  color: "#1a1a1a",
                  fontSize: "44px",
                  fontWeight: 700,
                  marginBottom: "16px",
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

      {/* CTA: Can't Find Error Code */}
      <section
        style={{
          background: "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
          paddingTop: "45px",
          paddingBottom: "45px",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3
              style={{
                color: "#fff",
                fontSize: "26px",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              Can&apos;t Find Your Error Code?
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "15px",
                marginBottom: "28px",
                maxWidth: "500px",
                margin: "0 auto 28px",
              }}
            >
              Our expert technicians can diagnose and fix any heating system
              issue. Get instant support now.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:0405133761"
                style={{
                  background: "#fff",
                  color: "#b91c1c",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "13px 32px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <i
                  className="fas fa-phone-alt"
                  style={{ fontSize: "13px", fontFamily: "Font Awesome" }}
                ></i>
                Call 0405 133 761
              </a>

              <Link
                href="/contact"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "13px 32px",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  borderRadius: "6px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                }}
              >
                <i
                  className="fas fa-headset"
                  style={{ fontSize: "13px", fontFamily: "Font Awesome" }}
                ></i>
                Talk to Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Selector */}
      <section
        style={{
          background: "linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)",
          paddingTop: "70px",
          paddingBottom: "70px",
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
              style={{ textAlign: "center", marginBottom: "35px" }}
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
                  marginBottom: "16px",
                }}
              >
                Select Your Brand
              </span>
              <h2
                style={{
                  color: "#1a1a1a",
                  fontSize: "44px",
                  fontWeight: 700,
                  marginBottom: "16px",
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
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "12px",
                        }}
                      >
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={80}
                          height={60}
                          style={{
                            objectFit: "contain",
                            maxWidth: "100%",
                            maxHeight: "100%",
                          }}
                        />
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
      <section style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <div className="container">
          <motion.div
            ref={maintenanceRef}
            initial="hidden"
            animate={maintenanceInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              style={{ textAlign: "center", marginBottom: "35px" }}
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
                  marginBottom: "16px",
                }}
              >
                Preventative Care
              </span>
              <h2
                style={{
                  color: "#1a1a1a",
                  fontSize: "44px",
                  fontWeight: 700,
                  marginBottom: "0px",
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
          paddingTop: "70px",
          paddingBottom: "70px",
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
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(185,28,28,0.5), 0 12px 24px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(185,28,28,0.4), 0 8px 16px rgba(0,0,0,0.2)";
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
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(239,68,68,0.25)";
                  e.currentTarget.style.borderColor = "rgba(239,68,68,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(239,68,68,0.15)";
                  e.currentTarget.style.borderColor = "rgba(239,68,68,0.3)";
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
