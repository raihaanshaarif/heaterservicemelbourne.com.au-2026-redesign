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

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

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

// ============================================================================
// STAT CARD COMPONENT
// ============================================================================

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

// ============================================================================
// FEATURE CARD COMPONENT
// ============================================================================

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

// ============================================================================
// INLINE FAQ DATA
// ============================================================================

const faqData = [
  {
    id: 1,
    question: "How long does a gas ducted heating installation take?",
    answer:
      "Most installations are completed within 1–2 days depending on home size and complexity. New builds or full system installs with extensive ducting may take an additional day. We provide a clear timeline during your free in-home assessment.",
  },
  {
    id: 2,
    question: "What brands of gas ducted heaters do you install?",
    answer:
      "We install all major brands including Brivis, Rinnai, Braemar, Ducted, Daikin, and Carrier. Our technicians are trained and certified across these brands and will recommend the best unit for your home's size and budget.",
  },
  {
    id: 3,
    question: "What size system do I need for my Melbourne home?",
    answer:
      "Sizing depends on your home's floor area, insulation quality, ceiling height, and orientation. A typical 3–4 bedroom Melbourne home requires a 16–20 kW unit. We perform a full heat-load calculation to ensure your system is correctly sized.",
  },
  {
    id: 4,
    question: "Can I install gas ducted heating in an existing home?",
    answer:
      "Yes. Retrofitting gas ducted heating into an existing home is very achievable. We assess your roof space, sub-floor, and existing ducting to design the most cost-effective installation with minimal disruption to your home.",
  },
  {
    id: 5,
    question: "Does gas ducted heating qualify for any rebates?",
    answer:
      "Yes. Under the Victorian Energy Upgrades (VEU) program, eligible households can receive significant rebates when upgrading to a high-efficiency gas ducted system. Ask us about current rebate availability during your consultation.",
  },
  {
    id: 6,
    question: "How efficient are modern gas ducted heaters?",
    answer:
      "Modern 6-star rated gas ducted systems convert up to 92% of gas energy into usable heat, making them highly efficient. Proper zoning can further reduce running costs by 20–30% compared to heating the whole home at once.",
  },
  {
    id: 7,
    question: "What maintenance does a new system require?",
    answer:
      "We recommend an annual service to inspect the heat exchanger, check gas pressure, clean filters, and test safety controls. A well-maintained system can last 15–20 years.",
  },
  {
    id: 8,
    question: "Can I add zone control to my ducted heating?",
    answer:
      "Absolutely. Multi-zone control lets you independently heat different areas of your home, reducing running costs significantly. We can install motorised zone dampers and a zoning controller as part of your installation or as an upgrade.",
  },
  {
    id: 9,
    question: "Are your gas fitters VBA licensed?",
    answer:
      "Yes. All our gas fitters are fully licensed with the Victorian Building Authority (VBA), Type A gas appliance certified, and carry full public liability insurance. You can be fully confident in the safety and compliance of our work.",
  },
  {
    id: 10,
    question: "Do you service all Melbourne suburbs?",
    answer:
      "Yes. We cover all Greater Melbourne suburbs — inner city, eastern, western, northern, and southern corridors — including the Mornington Peninsula and Yarra Ranges. Contact us to confirm availability in your area.",
  },
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

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
        title="Gas Ducted Heating Installation Melbourne – Professional System Design & Installation"
        subTitle="Expert Gas Ducted Heating Installation"
        titleLink="/gas-ducted-heating"
      />

      {/* JSON-LD Schema */}
      <JSONLDScript
        schema={generateServiceSchema(
          "Gas Ducted Heating Installation",
          "Professional gas ducted heating system design and installation across Melbourne",
          "https://heaterservicemelbourne.com.au/gas-ducted-heating",
        )}
        id="gas-installation-schema"
      />

      {/* Breadcrumbs */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Gas Ducted Heating", url: "/gas-ducted-heating" },
          { name: "Installation", url: "#" },
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
                  Professional Gas Ducted Heating Installation
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Keep your whole home warm this winter with a professionally
                  designed and installed gas ducted heating system. We deliver
                  whole-home comfort, zone control, and 6-star rated efficiency
                  – tailored to your Melbourne home.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  Serving all Melbourne suburbs with VBA Licensed gas fitters,
                  manufacturer warranties, and transparent fixed pricing.
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
                      Book Free Assessment
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
                    ✓ VBA LICENSED
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
                    ✓ MANUFACTURER WARRANTY
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
                    ✓ FREE ASSESSMENT
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
                  alt="Professional gas ducted heating installation Melbourne – licensed gas fitter installing a ducted heating system in a Melbourne home"
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
                      Expert Installation
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      Trusted by 3000+ Melbourne families
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
              icon="fas fa-home"
              value={3000}
              suffix="+"
              label="Homes Installed"
            />
            <StatCard
              icon="fas fa-star"
              value={4}
              suffix=".9"
              label="Star Rating"
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
                      <h6 className="section-title__tagline">Why Choose Us</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-flame"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Why Choose Us for Gas Ducted <span>Installation?</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Gas ducted heating is the most popular whole-home heating
                    solution in Melbourne, installed in nearly 45% of Victorian
                    homes. At Heater Service Melbourne, we specialise in
                    designing and installing high-efficiency gas ducted systems
                    that deliver consistent warmth to every room, reduce energy
                    bills, and last 15–20 years with proper servicing.
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      What makes us different:
                    </strong>{" "}
                    We size every system precisely using heat-load calculations,
                    recommend only VEU-approved 6-star rated units, and back
                    every installation with full manufacturer and workmanship
                    warranties.
                  </p>
                </motion.div>

                {/* Features */}
                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1">
                        <i className="fas fa-star"></i>
                      </div>
                      <h6 className="section-title__tagline">Our Benefits</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Gas Ducted Heating <span>Benefits</span>
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
                        icon: "fas fa-home",
                        title: "Whole-Home Comfort",
                        description:
                          "Gas ducted heating distributes warm air evenly through every room via ceiling or floor vents, eliminating cold spots and giving you consistent, comfortable temperatures throughout your home.",
                      },
                      {
                        icon: "fas fa-sliders-h",
                        title: "Multi-Zone Control",
                        description:
                          "Control different areas of your home independently. Heat only the rooms you are using and save 20–30% on running costs compared to single-zone, whole-home operation.",
                      },
                      {
                        icon: "fas fa-leaf",
                        title: "6-Star Energy Efficiency",
                        description:
                          "Modern gas ducted systems achieve 6–6.5 star energy ratings, converting up to 92% of gas into usable heat. This translates to lower energy bills and reduced carbon footprint.",
                      },
                      {
                        icon: "fas fa-volume-mute",
                        title: "Quiet Operation",
                        description:
                          "The heater unit sits in your roof cavity, keeping noise away from living areas. Enjoy warm, silent comfort with no intrusive fan noise disrupting your home environment.",
                      },
                      {
                        icon: "fas fa-mobile-alt",
                        title: "Smart Thermostat Control",
                        description:
                          "Control your heating from anywhere using a smartphone app. Set schedules, adjust temperatures remotely, and monitor energy usage with a compatible smart thermostat and Wi-Fi controller.",
                      },
                      {
                        icon: "fas fa-shield-alt",
                        title: "Manufacturer Warranty",
                        description:
                          "All systems we install come with full manufacturer warranties – typically 5–10 years on the heat exchanger and parts. Our workmanship is also fully warranted for your peace of mind.",
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
                      <h6 className="section-title__tagline">How It Works</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-cogs"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        How Gas Ducted Heating <span>Works</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    A gas ducted heating system draws return air from the home,
                    heats it through a gas-fired heat exchanger in the rooftop
                    unit, and then distributes the warm air through a network of
                    ducts and registers to every room. The thermostat constantly
                    monitors the temperature and cycles the system on and off to
                    maintain your set comfort level.
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
                      Key Advantage
                    </strong>
                    <p
                      className="mb-0 mt-2 text-secondary"
                      style={{ lineHeight: "1.7" }}
                    >
                      Zone dampers can be added to close off unused areas of
                      ducting, reducing energy consumption and letting you
                      maintain different temperatures in different zones
                      simultaneously.
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
                    — from inner city apartments to outer metropolitan homes.
                    Our VBA licensed gas fitters are equipped to handle your gas
                    ducted heating installation and servicing needs across all
                    of Greater Melbourne.
                  </p>
                  <div className="row gy-3 mt-4">
                    {[
                      {
                        title: "All Melbourne Suburbs",
                        sub: "Urban, suburban, and outer regions",
                      },
                      {
                        title: "Fast Response Times",
                        sub: "Quick assessments and installations",
                      },
                      {
                        title: "Emergency Services",
                        sub: "24/7 heating repairs available",
                      },
                      {
                        title: "Local Expertise",
                        sub: "15+ years serving Melbourne",
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
                            Installation Questions
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
                            System & Service Info
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
                    Ready to Install Gas Ducted Heating?
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#d9e0eb",
                      lineHeight: "1.7",
                    }}
                  >
                    Schedule your free in-home heating assessment today. No
                    obligation, no pressure&mdash;just expert advice on the
                    right gas ducted system for your Melbourne home.
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
                        Book Free Assessment
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
                    ✓ ALL MELBOURNE SUBURBS &bull; ✓ VBA LICENSED &bull; ✓
                    MANUFACTURER WARRANTY &bull; ✓ FREE ASSESSMENT
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
        title="Installation Service Areas"
        subtitle="Professional installation available across all Melbourne suburbs"
      />
    </>
  );
};

export default Page;
