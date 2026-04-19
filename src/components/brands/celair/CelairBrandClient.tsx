"use client";
import React from "react";
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

const CelairBrandClient: React.FC = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: brandRef, inView: brandInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: systemsRef, inView: systemsInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const { ref: faqRef, inView: faqInView } = useInView({
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
          paddingBottom: "140px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(185,28,28,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-20%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }} />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="row align-items-center"
          >
            <div className="col-lg-7">
              <motion.div variants={itemVariants}>
                <span style={{
                  display: "inline-block",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#ef4444",
                  paddingBottom: "8px",
                  borderBottom: "2px solid #ef4444",
                  marginBottom: "20px",
                }}>
                  Celair Heating Specialists
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="fw-bold"
                style={{
                  color: "#fff",
                  fontSize: "64px",
                  lineHeight: "1.15",
                  marginBottom: "24px",
                  letterSpacing: "-1px",
                  fontWeight: 800,
                }}
              >
                Professional Celair Heating Solutions Melbourne
              </motion.h1>

              <motion.p
                variants={itemVariants}
                style={{
                  color: "#ddd",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  marginBottom: "36px",
                  maxWidth: "650px",
                  fontWeight: 400,
                }}
              >
                Expert installation, repair and maintenance for Celair heating systems. Same-day service and 24/7 emergency support across Melbourne.
              </motion.p>

              <motion.div variants={itemVariants} className="d-flex gap-3">
                <a
                  href="tel:0405133761"
                  style={{
                    background: "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "15px",
                    padding: "15px 36px",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 12px 32px rgba(185,28,28,0.4), 0 8px 16px rgba(0,0,0,0.2)",
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <i className="fas fa-phone-alt" style={{ fontSize: "14px" }}></i>
                  Call Now: 0405 133 761
                </a>
                <Link
                  href="/contact"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "15px",
                    padding: "15px 36px",
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    borderRadius: "8px",
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <i className="fas fa-envelope" style={{ fontSize: "14px" }}></i>
                  Get Free Quote
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} style={{ marginTop: "48px", display: "flex", gap: "32px" }}>
                {[
                  { icon: "fa-tachometer-alt", text: "Same-Day Service" },
                  { icon: "fa-certificate", text: "Full Warranty" },
                  { icon: "fa-headset", text: "24/7 Emergency" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{
                      width: "40px",
                      height: "40px",
                      background: "linear-gradient(135deg, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.1) 100%)",
                      border: "1px solid rgba(239,68,68,0.3)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <i className={item.icon} style={{ color: "#ef4444", fontSize: "16px", fontFamily: "Font Awesome" }}></i>
                    </div>
                    <span style={{
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginTop: "4px",
                    }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="col-lg-5">
              <motion.div variants={itemVariants} style={{
                textAlign: "center",
                fontSize: "160px",
                opacity: 0.1,
                color: "#ef4444",
              }}>
                <i className="fas fa-fire" style={{ fontFamily: "Font Awesome" }}></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        background: "linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}>
        <div className="container">
          <motion.div
            ref={servicesRef}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="row gy-5"
          >
            {[
              {
                icon: "fa-wrench",
                title: "Emergency Repairs",
                description:
                  "24/7 emergency repair service for Celair heating systems. Fast response across all Melbourne suburbs.",
              },
              {
                icon: "fa-hammer",
                title: "Professional Installation",
                description:
                  "Expert installation with precision sizing and full warranty compliance.",
              },
              {
                icon: "fa-sync-alt",
                title: "Maintenance & Service",
                description:
                  "Annual preventative maintenance for optimal performance and extended system lifespan.",
              },
              {
                icon: "fa-check-shield",
                title: "Genuine Parts",
                description:
                  "Only genuine parts used with full manufacturer warranty protection.",
              },
              {
                icon: "fa-certificate",
                title: "Licensed & Insured",
                description:
                  "Fully licensed technicians with comprehensive insurance coverage.",
              },
              {
                icon: "fa-lightbulb",
                title: "Expert Consultation",
                description:
                  "Professional system assessment and expert recommendations for your needs.",
              },
            ].map((service, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -12 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.88) 100%)",
                    border: "1px solid rgba(185,28,28,0.1)",
                    borderRadius: "12px",
                    padding: "36px 28px",
                    textAlign: "left",
                    position: "relative",
                  }}
                >
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #b91c1c 0%, #ef4444 100%)",
                  }} />

                  <div style={{
                    width: "52px",
                    height: "52px",
                    background: "linear-gradient(135deg, rgba(185,28,28,0.12) 0%, rgba(239,68,68,0.08) 100%)",
                    border: "1px solid rgba(185,28,28,0.2)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    fontSize: "22px",
                    color: "#b91c1c",
                  }}>
                    <i className={service.icon} style={{ fontFamily: "Font Awesome" }}></i>
                  </div>

                  <h5 style={{
                    color: "#1a1a1a",
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}>
                    {service.title}
                  </h5>
                  <p style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: "1.7",
                    margin: 0,
                  }}>
                    {service.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="container">
          <motion.div
            ref={benefitsRef}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-5"
            style={{ marginBottom: "80px" }}
          >
            <motion.div variants={itemVariants} style={{ marginBottom: "20px" }}>
              <span style={{
                display: "inline-block",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "#b91c1c",
                paddingBottom: "8px",
                borderBottom: "2px solid #b91c1c",
              }}>
                Why Choose Celair
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="fw-bold"
              style={{
                color: "#1a1a1a",
                fontSize: "48px",
                lineHeight: "1.1",
                marginBottom: "20px",
                letterSpacing: "-1px",
                fontWeight: 800,
              }}
            >
              Superior Heating Solutions for Melbourne
            </motion.h2>

            <motion.p
              variants={itemVariants}
              style={{
                maxWidth: 650,
                margin: "0 auto",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#666",
              }}
            >
              Reliable, efficient heating for Melbourne winters with proven technology and durability.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="row gy-5"
          >
            {[
              { icon: "fa-bolt", title: "Energy Efficiency", description: "Advanced technology minimizes consumption." },
              { icon: "fa-snowflake", title: "Consistent Warmth", description: "Reliable heating throughout your home." },
              { icon: "fa-globe", title: "Global Quality", description: "Proven reliability worldwide." },
              { icon: "fa-sound-low", title: "Quiet Operation", description: "Comfort without noise." },
              { icon: "fa-cogs", title: "Smart Controls", description: "Personalized comfort and savings." },
              { icon: "fa-shield-check", title: "Proven Reliability", description: "Comprehensive warranty protection." },
            ].map((benefit, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(185,28,28,0.06) 0%, rgba(239,68,68,0.04) 100%)",
                    border: "1px solid rgba(185,28,28,0.12)",
                    borderRadius: "12px",
                    padding: "36px 28px",
                    textAlign: "left",
                  }}
                >
                  <div style={{
                    width: "56px",
                    height: "56px",
                    background: "linear-gradient(135deg, rgba(185,28,28,0.15) 0%, rgba(239,68,68,0.1) 100%)",
                    border: "1.5px solid rgba(185,28,28,0.25)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    fontSize: "24px",
                    color: "#b91c1c",
                  }}>
                    <i className={benefit.icon} style={{ fontFamily: "Font Awesome" }}></i>
                  </div>

                  <h5 style={{
                    color: "#1a1a1a",
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}>
                    {benefit.title}
                  </h5>
                  <p style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: "1.7",
                    margin: 0,
                  }}>
                    {benefit.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section - UNIQUE */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(185,28,28,0.08) 0%, rgba(239,68,68,0.05) 100%)",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <motion.div
            ref={brandRef}
            initial="hidden"
            animate={brandInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="row align-items-center gy-5"
          >
            <div className="col-lg-6">
              <motion.div variants={itemVariants}>
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
                  Brand Heritage
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="fw-bold"
                style={{
                  color: "#1a1a1a",
                  fontSize: "42px",
                  lineHeight: "1.2",
                  marginBottom: "24px",
                  letterSpacing: "-1px",
                  fontWeight: 800,
                }}
              >
                Australian specialty brand focused on split system innovation
              </motion.h2>

              <motion.div variants={itemVariants} style={{ marginBottom: "28px" }}>
                <h4 style={{
                  color: "#b91c1c",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}>
                  <i className="fas fa-star" style={{ fontSize: "18px", fontFamily: "Font Awesome" }}></i>
                  Compact design optimized for Australian apartment living
                </h4>
                <h4 style={{
                  color: "#b91c1c",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginTop: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}>
                  <i className="fas fa-star" style={{ fontSize: "18px", fontFamily: "Font Awesome" }}></i>
                  Silent-Comfort technology with noise levels under 22dB at night setting
                </h4>
              </motion.div>

              <motion.p
                variants={itemVariants}
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#666",
                  marginBottom: "24px",
                }}
              >
                <strong>Certifications & Recognition:</strong> Australian standard certified, Noise performance rated, Compact specialist
              </motion.p>

              <motion.p
                variants={itemVariants}
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#666",
                  fontStyle: "italic",
                  borderLeft: "3px solid #b91c1c",
                  paddingLeft: "20px",
                }}
              >
                "Silent-Comfort technology delivers whisper-quiet heating for peaceful homes"
              </motion.p>
            </div>

            <div className="col-lg-6">
              <motion.div
                variants={itemVariants}
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.88) 100%)",
                  border: "1px solid rgba(185,28,28,0.1)",
                  borderRadius: "14px",
                  padding: "48px 36px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                }}
              >
                <h4 style={{
                  color: "#1a1a1a",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}>
                  <i className="fas fa-cube" style={{ color: "#b91c1c", fontFamily: "Font Awesome" }}></i>
                  Our Celair Product Range
                </h4>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}>
                  {["Silent-Comfort","Compact Ductless","Ultra-Quiet"].map((product, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        paddingBottom: "12px",
                        marginBottom: "12px",
                        borderBottom: "1px solid rgba(185,28,28,0.1)",
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          width: "24px",
                          height: "24px",
                          background: "linear-gradient(135deg, rgba(185,28,28,0.15) 0%, rgba(239,68,68,0.1) 100%)",
                          border: "1px solid rgba(185,28,28,0.2)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#b91c1c",
                        }}
                      >
                        ✓
                      </span>
                      {product}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Range Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <motion.div
            ref={systemsRef}
            initial="hidden"
            animate={systemsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-5"
            style={{ marginBottom: "80px" }}
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
                Full Range
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="fw-bold"
              style={{
                color: "#1a1a1a",
                fontSize: "48px",
                lineHeight: "1.1",
                marginBottom: "20px",
                letterSpacing: "-1px",
                fontWeight: 800,
              }}
            >
              Celair Heating Systems We Install & Service
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={systemsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="row gy-5"
          >
            {[
              {
                title: "Celair Gas Ducted Heating",
                subtitle: "Efficient Whole-Home Heating",
                features: [
                  "Advanced climate control",
                  "Whole-home coverage",
                  "Smart zone management",
                  "Energy-efficient operation",
                ],
                icon: "fa-fire",
              },
              {
                title: "Celair Hydronic Heating",
                subtitle: "Premium Radiant Heat System",
                features: [
                  "Underfloor heating systems",
                  "Wall heating radiators",
                  "Smart temperature control",
                  "Energy-efficient operation",
                ],
                icon: "fa-bolt",
              },
              {
                title: "Celair Split System Heating",
                subtitle: "Flexible Zone Heating",
                features: [
                  "Wall-mounted indoor units",
                  "Ceiling cassette options",
                  "Wifi smart controls",
                  "Quiet operation design",
                ],
                icon: "fa-wind",
              },
            ].map((system, i) => (
              <div key={i} className="col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    systemsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -16, scale: 1.02 }}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.88) 100%)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(185,28,28,0.1)",
                    borderRadius: "14px",
                    padding: "48px 36px",
                    boxShadow:
                      "0 8px 32px rgba(0,0,0,0.05), 0 20px 60px rgba(0,0,0,0.03)",
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
                      height: "3px",
                      background:
                        "linear-gradient(90deg, #b91c1c 0%, #ef4444 50%, #dc2626 100%)",
                    }}
                  />

                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background:
                        "linear-gradient(135deg, rgba(185,28,28,0.15) 0%, rgba(239,68,68,0.1) 100%)",
                      border: "1.5px solid rgba(185,28,28,0.25)",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      fontSize: "28px",
                      color: "#b91c1c",
                    }}
                  >
                    <i className={system.icon} style={{ fontFamily: "Font Awesome" }}></i>
                  </div>

                  <h4
                    style={{
                      color: "#1a1a1a",
                      fontSize: "22px",
                      fontWeight: 700,
                      marginBottom: "8px",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {system.title}
                  </h4>

                  <p
                    style={{
                      color: "#b91c1c",
                      fontSize: "13px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      marginBottom: "24px",
                    }}
                  >
                    {system.subtitle}
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {system.features.map((feature, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: "14px",
                          color: "#333",
                          marginBottom: "14px",
                          display: "flex",
                          gap: "12px",
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            color: "#b91c1c",
                            fontWeight: 700,
                            fontSize: "16px",
                            marginTop: "-2px",
                          }}
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="tel:0405133761"
                    style={{
                      marginTop: "28px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#b91c1c",
                      fontWeight: 700,
                      fontSize: "13px",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "#ef4444";
                      (e.target as HTMLElement).style.transform =
                        "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "#b91c1c";
                      (e.target as HTMLElement).style.transform =
                        "translateX(0)";
                    }}
                  >
                    <i
                      className="fas fa-phone-alt"
                      style={{ fontSize: "11px", fontFamily: "Font Awesome" }}
                    ></i>
                    Call for Details
                  </a>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="container">
          <motion.div
            ref={faqRef}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-5"
            style={{ marginBottom: "80px" }}
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
                Common Questions
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="fw-bold"
              style={{
                color: "#1a1a1a",
                fontSize: "48px",
                lineHeight: "1.1",
                marginBottom: "20px",
                letterSpacing: "-1px",
                fontWeight: 800,
              }}
            >
              Celair Heating FAQs
            </motion.h2>
          </motion.div>

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <motion.div
                initial="hidden"
                animate={faqInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="d-flex flex-column gap-4"
              >
                {[
                  {
                    q: "Which Celair heating system is best for my home?",
                    a: "The best system depends on your home size and layout. Gas ducted heating suits whole-home heating, hydronic is ideal for new homes or renovations, and split systems work well for zone heating. We assess your needs and recommend the perfect solution.",
                  },
                  {
                    q: "Can I install Celair hydronic heating in an existing home?",
                    a: "Yes! Hydronic heating can be retrofitted into existing homes, though renovation scope varies. We evaluate your home's compatibility and provide cost-effective installation options.",
                  },
                  {
                    q: "How often should I service my Celair heating system?",
                    a: "Annual pre-winter servicing is essential to ensure safe, efficient operation. This prevents breakdowns during cold months and extends system lifespan significantly.",
                  },
                  {
                    q: "Do you provide emergency heating repairs?",
                    a: "Absolutely! We offer 24/7 emergency heating repair service for all Celair systems across Melbourne. Call 0405 133 761 for immediate assistance during winter heating emergencies.",
                  },
                  {
                    q: "Are your technicians licensed for heating installations?",
                    a: "Yes, all our technicians are fully licensed, insured, and factory-trained for Celair heating systems. We guarantee genuine parts and professional workmanship with full warranty compliance.",
                  },
                  {
                    q: "What areas of Melbourne do you service?",
                    a: "We provide professional Celair heating installation, repair, and maintenance throughout all Melbourne suburbs with same-day service available. Contact us for your specific location.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(185,28,28,0.08) 0%, rgba(239,68,68,0.05) 100%)",
                      border: "1px solid rgba(185,28,28,0.12)",
                      borderRadius: "12px",
                      padding: "28px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h5
                      style={{
                        color: "#1a1a1a",
                        fontSize: "16px",
                        fontWeight: 700,
                        marginBottom: "12px",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      <i
                        className="fas fa-circle-question"
                        style={{
                          color: "#b91c1c",
                          marginRight: "12px",
                          fontSize: "14px",
                          fontFamily: "Font Awesome",
                        }}
                      ></i>
                      {item.q}
                    </h5>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "14px",
                        lineHeight: "1.8",
                        margin: 0,
                      }}
                    >
                      {item.a}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          paddingTop: "100px",
          paddingBottom: "100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="fw-bold" style={{
              color: "#fff",
              fontSize: "44px",
              marginBottom: "24px",
              letterSpacing: "-1px",
              fontWeight: 800,
            }}>
              Ready for Expert Celair Heating?
            </h2>

            <p style={{
              fontSize: "16px",
              color: "#ddd",
              marginBottom: "36px",
              maxWidth: "700px",
              margin: "0 auto 36px",
              lineHeight: "1.8",
            }}>
              Professional installation, emergency repairs, and maintenance from licensed technicians. Same-day service with genuine parts and warranty.
            </p>

            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a
                href="tel:0405133761"
                style={{
                  background: "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "16px 40px",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 12px 32px rgba(185,28,28,0.4), 0 8px 16px rgba(0,0,0,0.2)",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <i className="fas fa-phone-alt" style={{ fontSize: "14px", fontFamily: "Font Awesome" }}></i>
                Call: 0405 133 761
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
                <i className="fas fa-envelope" style={{ fontSize: "14px", fontFamily: "Font Awesome" }}></i>
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CelairBrandClient;
