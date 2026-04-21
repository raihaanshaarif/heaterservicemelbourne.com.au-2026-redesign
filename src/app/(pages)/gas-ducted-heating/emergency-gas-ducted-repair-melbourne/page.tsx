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
          <i className={icon} style={{ color: "#d32f2f" }}></i>
        </div>
        <div
          className="mb-2"
          style={{ fontSize: "2.8rem", fontWeight: 800, color: "#d32f2f" }}
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
        <i className={icon} style={{ color: "#d32f2f" }}></i>
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
    question: "How quickly can you respond to an emergency heating fault?",
    answer:
      "We aim to have a licensed gas fitter on-site within 2 to 4 hours of your call across most Melbourne suburbs. Our emergency technicians are dispatched 24 hours a day, 7 days a week including public holidays.",
  },
  {
    id: 2,
    question: "What counts as a gas heating emergency?",
    answer:
      "Any situation where your gas ducted heater has completely stopped working in cold conditions, where you suspect a gas leak, or where there is a risk of carbon monoxide exposure counts as an emergency. Call 000 for confirmed gas leaks, then call us.",
  },
  {
    id: 3,
    question:
      "Is emergency gas repair more expensive than a standard appointment?",
    answer:
      "After-hours and emergency callouts carry a premium rate compared to standard business-hours repairs. We are transparent about call-out fees and provide upfront pricing before starting any work, even on emergency jobs.",
  },
  {
    id: 4,
    question: "What should I do if I smell gas?",
    answer:
      "Evacuate your home immediately, do not use electrical switches, leave the property, call Victoria Emergency Gas on 132 771, then call us. Only re-enter once cleared by Multinet or APA.",
  },
  {
    id: 5,
    question: "Can you fix a fault the same night?",
    answer:
      "In most cases yes. Our emergency vans are fully stocked with common replacement parts for all major brands, including ignitors, thermocouples, gas valves, and control boards. We resolve the majority of emergency callouts on the first visit.",
  },
  {
    id: 6,
    question: "Do emergencies include complete system failure in winter?",
    answer:
      "Yes. A gas ducted heater that completely stops heating in cold Melbourne winter temperatures is treated as an emergency. We prioritise these calls and dispatch same-night or early-morning technicians.",
  },
  {
    id: 7,
    question: "Is a suspected carbon monoxide leak an emergency?",
    answer:
      "Absolutely. If occupants are experiencing headaches, nausea, or dizziness when the heater runs, exit the building immediately, ventilate, and call us. CO is colourless and odourless and symptoms are the only warning you may get.",
  },
  {
    id: 8,
    question: "What brands can you repair on emergency callouts?",
    answer:
      "Our emergency technicians carry parts and are trained on all popular brands: Brivis, Braemar, Rinnai, Vulcan, Bonaire, Carrier, and Daikin. For obscure units we will assess on-site and advise you honestly about repair options.",
  },
  {
    id: 9,
    question:
      "Will you issue a certificate of compliance for emergency repairs?",
    answer:
      "Yes. All emergency gas repair work is carried out to AS/NZS 5601 standards and we issue a Certificate of Compliance for every job. This is required for insurance purposes and rental property compliance.",
  },
  {
    id: 10,
    question: "Do you cover all Melbourne suburbs for emergency callouts?",
    answer:
      "We cover all Greater Melbourne suburbs for emergency callouts including inner city, north, south, east, west, and the Mornington Peninsula. Response times may vary based on your location and current demand. Call us for an ETA when you book.",
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
        title="Emergency Gas Ducted Heating Repair Melbourne – 24/7 Response"
        subTitle="24/7 Emergency Gas Heating Repair"
        titleLink="/gas-ducted-heating"
      />

      {/* JSON-LD Schema */}
      <JSONLDScript
        schema={generateServiceSchema(
          "Emergency Gas Ducted Heating Repair",
          "24/7 emergency gas heating repair service in Melbourne with 2-4 hour response time",
          "https://heaterservicemelbourne.com.au/gas-ducted-heating",
        )}
        id="emergency-gas-repair-schema"
      />

      {/* Breadcrumbs */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Gas Ducted Heating", url: "/gas-ducted-heating" },
          { name: "Emergency Repair", url: "#" },
        ]}
        schema={true}
      />

      {/* HERO SECTION */}
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
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <h1
                  className="fw-bolder mb-4"
                  style={{
                    fontSize: "3rem",
                    color: "#b71c1c",
                    lineHeight: "1.2",
                  }}
                >
                  Emergency Gas Ducted Heating Repair &#8211; 24/7
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Gas ducted heater failed? Our licensed emergency gas fitters
                  respond within 2 to 4 hours, day or night, across all
                  Melbourne suburbs. We carry parts for all major brands so most
                  emergencies are resolved on the first visit.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  Available 24/7 including weekends and public holidays.
                  Fixed-price emergency repairs with a certificate of compliance
                  for every job.
                </p>
                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <a
                      href="tel:0405133761"
                      className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#d32f2f", fontSize: "1rem" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#b71c1c";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "#d32f2f";
                      }}
                    >
                      <i className="fas fa-phone me-2"></i> Call Emergency Line
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
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#fff5f5";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                      }}
                    >
                      Book Online
                    </Link>
                  </motion.div>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <span
                    className="px-3 py-2 rounded-2"
                    style={{
                      backgroundColor: "#fef2f2",
                      color: "#991b1b",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    &#10003; 24/7 EMERGENCY
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
                    &#10003; 2-4 HR RESPONSE
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
                    &#10003; COMPLIANCE CERT
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
                  alt="Emergency gas ducted heating repair Melbourne – licensed gas fitter responding to after-hours heating emergency"
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
                    backgroundColor: "#d32f2f",
                    color: "white",
                    boxShadow: "0 8px 24px rgba(26,26,26,0.12)",
                  }}
                >
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>
                      24/7 Emergency Response
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      2 to 4 hr response, all Melbourne
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
          backgroundColor: "#fff5f5",
          borderTop: "1px solid #fecaca",
          borderBottom: "1px solid #fecaca",
        }}
      >
        <div className="container">
          <div className="row gy-4">
            <StatCard
              icon="fas fa-clock"
              value={24}
              suffix="/7"
              label="Emergency Service"
            />
            <StatCard
              icon="fas fa-hourglass-half"
              value={4}
              suffix=" hrs"
              label="Max Response Time"
            />
            <StatCard
              icon="fas fa-star"
              value={4}
              suffix=".9"
              label="Star Rating"
            />
            <StatCard
              icon="fas fa-wrench"
              value={5000}
              suffix="+"
              label="Emergency Fixes"
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
                        <i className="fas fa-exclamation-circle"></i>
                      </div>
                      <h6 className="section-title__tagline">
                        Emergency Service
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-exclamation-circle"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Why Choose Our Emergency <span>Response?</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    A gas ducted heater failure in the middle of a Melbourne
                    winter is a genuine emergency, especially with young
                    children or elderly household members. Our dedicated
                    emergency team is on call around the clock, dispatching
                    fully equipped gas fitters to your door within 2 to 4 hours.
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>Why choose us:</strong>{" "}
                    Our emergency vehicles are stocked with parts for all major
                    gas heater brands. We resolve over 90% of emergency callouts
                    on the first visit and issue a Certificate of Compliance
                    with every repair.
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
                      <h6 className="section-title__tagline">
                        Emergency Faults
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Emergency Gas Heating <span>Issues We Fix</span>
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
                        icon: "fas fa-power-off",
                        title: "Complete System Failure",
                        description:
                          "Your gas ducted heater has completely stopped working and will not restart. We diagnose controller faults, ignition failures, gas supply issues, and safety lockout conditions to restore heating fast.",
                      },
                      {
                        icon: "fas fa-skull-crossbones",
                        title: "Suspected Gas Leak",
                        description:
                          "Gas smell near your heater or in your home requires immediate attention. We respond as an emergency, carry out pressure testing, locate the leak source, and perform certified repair work to AS/NZS 5601 standards.",
                      },
                      {
                        icon: "fas fa-smog",
                        title: "Carbon Monoxide Concern",
                        description:
                          "Yellow flames, soot deposits, or occupants feeling headaches near the heater are warning signs of CO spillage. We carry calibrated CO analysers and conduct full AS4575 spillage tests on the same visit.",
                      },
                      {
                        icon: "fas fa-fire-alt",
                        title: "Pilot Light or Ignition Failure",
                        description:
                          "Electronic ignition fault or standing pilot that will not stay lit in freezing temperatures. We stock ignitors, thermocouples, and gas valves for all major brands to restore your heating the same night.",
                      },
                      {
                        icon: "fas fa-thermometer-quarter",
                        title: "Heater Not Reaching Set Temperature",
                        description:
                          "Your heater runs continuously but cannot reach the thermostat setpoint, leaving the home cold. We diagnose heat exchanger efficiency, zone damper function, gas pressure, and insulation issues.",
                      },
                      {
                        icon: "fas fa-bolt",
                        title: "Electrical or Control Board Fault",
                        description:
                          "Error codes on the thermostat display, flickering controller, or heater cycling on and off rapidly. Our technicians carry diagnostic interfaces for all major brand control boards and can replace them on-site.",
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
                      <h6 className="section-title__tagline">Our Process</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-cogs"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        How Our Emergency Response <span>Works</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    When you call our emergency line, we immediately dispatch
                    the nearest available licensed gas fitter to your address.
                    On arrival, they conduct a thorough safety and fault
                    diagnosis, provide you with an upfront repair quote, and
                    proceed with the repair upon your approval.
                  </p>
                  <div
                    className="p-4 rounded-3"
                    style={{
                      backgroundColor: "#fff5f5",
                      borderLeft: "4px solid #d32f2f",
                    }}
                  >
                    <strong style={{ color: "#d32f2f", fontSize: "1rem" }}>
                      <i
                        className="fas fa-shield-alt me-2"
                        style={{ color: "#d32f2f" }}
                      ></i>
                      Safety First
                    </strong>
                    <p
                      className="mb-0 mt-2 text-secondary"
                      style={{ lineHeight: "1.7" }}
                    >
                      Every emergency repair is safety-tested to AS/NZS 5601 and
                      AS4575 standards before we leave. You receive a
                      Certificate of Compliance confirming the system is safe
                      and legally operational.
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
                    backgroundColor: "#fff5f5",
                    border: "1px solid #fecaca",
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
                        24/7 Emergency Coverage All Melbourne{" "}
                        <span>Suburbs</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-0"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      We cover all Greater Melbourne suburbs
                    </strong>{" "}
                    for emergency gas heating repairs, from inner city Carlton
                    to outer suburbs like Frankston, Lilydale, and Sunbury. Call
                    us and we will confirm an ETA for your location.
                  </p>
                  <div className="row gy-3 mt-4">
                    {[
                      {
                        title: "24/7 Availability",
                        sub: "Nights, weekends and public holidays",
                      },
                      {
                        title: "2 to 4 Hour Response",
                        sub: "Fast dispatch to all Melbourne suburbs",
                      },
                      {
                        title: "All Major Brands",
                        sub: "Brivis, Rinnai, Braemar, Vulcan and more",
                      },
                      {
                        title: "Compliance Certified",
                        sub: "Certificate of compliance on every job",
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
                              color: "#d32f2f",
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
                              color: "#b71c1c",
                              fontSize: "1.3rem",
                              borderBottom: "2px solid #d32f2f",
                            }}
                          >
                            <i
                              className="fas fa-exclamation-triangle me-2"
                              style={{ color: "#d32f2f" }}
                            ></i>
                            Emergency Questions
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
                              color: "#b71c1c",
                              fontSize: "1.3rem",
                              borderBottom: "2px solid #d32f2f",
                            }}
                          >
                            <i
                              className="fas fa-lightbulb me-2"
                              style={{ color: "#d32f2f" }}
                            ></i>
                            Safety and Service Info
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
                    backgroundColor: "#d32f2f",
                    boxShadow: "0 8px 32px rgba(211,47,47,0.25)",
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
                    Heating Emergency? Call Now 24/7
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#ffd9d9",
                      lineHeight: "1.7",
                    }}
                  >
                    Do not wait in the cold. Our emergency gas heating team is
                    ready to respond right now. Fixed pricing, compliance
                    certificate included, all Melbourne suburbs covered.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <a
                        href="tel:0405133761"
                        className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                        style={{
                          backgroundColor: "white",
                          color: "#d32f2f",
                          fontSize: "1rem",
                          display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = "#fef2f2";
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLElement
                          ).style.backgroundColor = "white";
                        }}
                      >
                        <i className="fas fa-phone me-2"></i> 0405 133 761
                      </a>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        href="/contact"
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
                        Book Online
                      </Link>
                    </motion.div>
                  </div>
                  <p
                    className="mt-5 mb-0"
                    style={{
                      fontSize: "0.9rem",
                      color: "#ffd9d9",
                      letterSpacing: "0.5px",
                    }}
                  >
                    &#10003; ALL MELBOURNE SUBURBS &bull; &#10003; 24/7
                    AVAILABILITY &bull; &#10003; VBA LICENSED &bull; &#10003;
                    COMPLIANCE CERT INCLUDED
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
        title="Emergency Repair Service Areas"
        subtitle="24/7 emergency response available across Melbourne suburbs"
      />
    </>
  );
};

export default Page;
