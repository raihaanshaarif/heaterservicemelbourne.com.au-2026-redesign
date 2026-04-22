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
          boxShadow: "0 4px 20px rgba(185,28,28,0.08)",
          transition: "box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 12px 40px rgba(185,28,28,0.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 4px 20px rgba(185,28,28,0.08)";
        }}
      >
        <div className="mb-4" style={{ fontSize: "2.5rem" }}>
          <i className={icon} style={{ color: "#b91c1c" }}></i>
        </div>
        <div
          className="mb-2"
          style={{ fontSize: "2.8rem", fontWeight: 800, color: "#b91c1c" }}
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
        boxShadow: "0 4px 20px rgba(185,28,28,0.08)",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 12px 40px rgba(185,28,28,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 20px rgba(185,28,28,0.08)";
      }}
    >
      <div className="mb-4" style={{ fontSize: "2.5rem" }}>
        <i className={icon} style={{ color: "#b91c1c" }}></i>
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
    question: "What are the most common emergency gas ducted faults?",
    answer:
      "The most common emergency faults are: complete no-heat failure (system runs but produces no warm air), ignition failure (system attempts to start but the burner does not light), gas valve failure, heat exchanger issues causing safety switch trips, cracked or blocked flue causing the system to shut down on safety, and damaged or faulty ductwork causing pressure failures. Our technicians carry parts for all of these common failure modes.",
  },
  {
    id: 2,
    question: "What should I do if my gas heater stops working in winter?",
    answer:
      "First, check that the gas supply is on and that the pilot or ignition is attempting. If you can smell gas, do not operate any switches — leave the property and call the gas emergency line. If there is no gas smell but the system simply will not produce heat, call our emergency line for a same-day diagnostic and repair. Use portable electric heaters safely while waiting.",
  },
  {
    id: 3,
    question: "Is a gas ducted repair safe to do as an emergency?",
    answer:
      "Yes, when performed by a   registered gas fitter. Under Australian regulations, all gas appliance repair work — including emergency repairs — must be carried out by licensed gas fitters. Our technicians hold current   registration and carry gas detection equipment to ensure every repair is performed safely and to code.",
  },
  {
    id: 4,
    question:
      "My ducted heater is running but blowing cold air – is this an emergency?",
    answer:
      "Yes. Cold air from a running ducted heater indicates a burner, ignition, gas valve, or heat exchanger fault. Running the system with a compromised heat exchanger can introduce combustion gases including carbon monoxide into the duct system. Turn the system off and call for emergency service. Do not run a gas ducted heater that produces cold air.",
  },
  {
    id: 5,
    question: "How quickly can you respond to a gas ducted heating emergency?",
    answer:
      "We target a 4-hour response window for all gas ducted heating emergency calls across Greater Melbourne. For suspected gas leaks associated with the ducted system, we target 1 to 2 hours. Our technicians carry parts for all major gas ducted brands including Brivis, Braemar, Rinnai, Pyrox, Escea, and Bonaire.",
  },
  {
    id: 6,
    question: "Can you fix any brand of gas ducted heater?",
    answer:
      "Yes. We service and repair all major gas ducted heating brands sold in the Australian market: Brivis, Braemar, Rinnai, Pyrox, Escea, Bonaire, Carrier, and Ducted Gas. Our technicians carry gas-system specific diagnostic tools and stock parts for the most common failure components across all these brands.",
  },
  {
    id: 7,
    question: "What is a cracked heat exchanger and why is it dangerous?",
    answer:
      "The heat exchanger is the metal component that separates the combustion gases from the air blown through your ducts. A cracked heat exchanger allows carbon monoxide and combustion products to enter the duct system and circulate through your home. It is odourless and invisible and can be fatal at elevated concentrations. Carbon monoxide is the reason a gas heater that produces cold air must be turned off immediately and not operated until inspected.",
  },
  {
    id: 8,
    question: "Will my ducted heater be fixed in one visit?",
    answer:
      "In the majority of cases, yes. We carry igniter assemblies, gas valves, control boards, capacitors, limit switches, and fan motors for all major ducted heating brands. For unusual or older system–specific parts, we make the system safe on the first visit and complete the repair at the earliest possible follow-up appointment, typically the next business day.",
  },
  {
    id: 9,
    question: "Is there a warranty on emergency gas ducted repairs?",
    answer:
      "Yes. All emergency repair work carries our standard parts and labour warranty. We use genuine manufacturer parts wherever available. Warranty terms will be confirmed before work begins and a written service report is provided on completion.",
  },
  {
    id: 10,
    question:
      "Which Melbourne suburbs do you cover for emergency gas ducted repair?",
    answer:
      "We cover all Melbourne suburbs for emergency gas ducted heating repair — inner city, northern, eastern, southern, and western Melbourne extending to the outer fringe suburbs. Call our 24/7 emergency line any time.",
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
        title="Emergency Gas Ducted Heating Repair Melbourne – 24/7 Rapid Response for Gas Heater Breakdowns"
        subTitle="Emergency Gas Ducted Repair"
        titleLink="/emergency-services"
      />

      {/* JSON-LD Schema */}
      <JSONLDScript
        schema={generateServiceSchema(
          "Emergency Gas Ducted Repair",
          "24/7 emergency repair for gas ducted heating systems in Melbourne",
          "https://heaterservicemelbourne.com.au/emergency-services",
        )}
        id="emergency-gas-ducted-schema"
      />

      {/* Breadcrumbs */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Emergency Services", url: "/emergency-services" },
          { name: "Gas Ducted Repair", url: "#" },
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
            <motion.div className="col-lg-6" variants={itemVariants}>
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
                    <i className="fas fa-exclamation-triangle me-2"></i>24/7 GAS
                    DUCTED EMERGENCY — LICENSED
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
                  Emergency Gas Ducted Heating Repair Melbourne
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  24/7 emergency response for gas ducted heating failures across
                  Melbourne. No heat in winter, ignition failures, gas valve
                  faults, heat exchanger issues, and complete system breakdowns
                  — licensed gas fitters dispatched fast to get your heating
                  back online.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  registered gas fitters. All major brands. Target 4-hour
                  response. Parts on board.
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
                      <i className="fas fa-phone me-2"></i> Call Emergency
                      Repair Line
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
                    &#10003; LICENSED
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
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="position-relative"
              >
                <Image
                  src={ServiceDetailsImg1}
                  alt="Emergency gas ducted heating repair Melbourne –   licensed gas fitter attending urgent ducted heater breakdown"
                  className="img-fluid rounded-4"
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    boxShadow: "0 10px 40px rgba(185,28,28,0.15)",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{
                    maxWidth: "220px",
                    backgroundColor: "#b91c1c",
                    color: "white",
                    boxShadow: "0 8px 24px rgba(185,28,28,0.2)",
                  }}
                >
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>
                      Licensed Gas Fitters
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      5000+ gas emergencies fixed
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
              label="Emergency Availability"
            />
            <StatCard
              icon="fas fa-bolt"
              value={4}
              suffix=" hrs"
              label="Target Response Time"
            />
            <StatCard
              icon="fas fa-star"
              value={4}
              suffix=".9"
              label="Star Rating"
            />
            <StatCard
              icon="fas fa-tools"
              value={5000}
              suffix="+"
              label="Gas Ducted Emergencies Fixed"
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
                        <i className="fas fa-fire"></i>
                      </div>
                      <h6 className="section-title__tagline">
                        Emergency Fault Types
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-fire"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Gas Ducted Emergency Faults <span>We Fix Fast</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Gas ducted heating failures in Melbourne winter are genuine
                    emergencies — particularly for households with young
                    children, elderly residents, or people with medical
                    conditions. Our licensed gas fitters are available 24/7 to
                    diagnose and resolve every category of gas ducted heating
                    failure.
                  </p>
                </motion.div>

                <div className="my-5 py-5">
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
                        title: "No Heat — Burner Not Lighting",
                        description:
                          "When your gas ducted system runs but produces cold air, the burner, igniter, or gas valve has failed. This fault also poses a carbon monoxide risk if the heat exchanger is compromised. We diagnose and resolve the root cause — do not continue operating a gas heater that blows cold air.",
                      },
                      {
                        icon: "fas fa-fire-alt",
                        title: "Ignition and Pilot Failure",
                        description:
                          "Modern electronic ignition systems can fail due to faulty igniters, failed flame sensors, or control board faults. Older pilot-light systems can experience thermocouple failure. In both cases the heater will attempt to light but no flame is established. We carry ignition system components for all major brands.",
                      },
                      {
                        icon: "fas fa-cogs",
                        title: "Gas Valve Fault",
                        description:
                          "A failed gas valve prevents gas from reaching the burner, resulting in no heat. Gas valves can fail open (gas leak risk), closed (no heat), or intermittently. Our technicians test gas valve operation and replace faulty valves safely and to regulatory standards.",
                      },
                      {
                        icon: "fas fa-wind",
                        title: "Heat Exchanger Fault — Safety Switch Tripped",
                        description:
                          "A damaged or cracked heat exchanger will trip the system's high-temperature safety limit switch. This is a safety-critical fault — the heat exchanger separates combustion gases from the air entering your home. We inspect, confirm, and advise on repair or replacement.",
                      },
                      {
                        icon: "fas fa-bolt",
                        title: "Control Board and Electrical Faults",
                        description:
                          "Gas ducted heating control boards can fail due to power surges, age, or component fatigue. A failed board may prevent ignition, fan operation, or correct temperature control. We carry replacement control boards for all major ducted heating brands.",
                      },
                      {
                        icon: "fas fa-smog",
                        title: "Blocked or Damaged Flue",
                        description:
                          "A blocked or cracked gas flue causes the system to trip safety sensors and shut down. It can also allow combustion gases to re-enter the home. We inspect flue systems, clear blockages, and repair or replace damaged flue sections to restore safe operation.",
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
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h6 className="section-title__tagline">Safety First</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Licensed — Every Gas Emergency <span>Done Safely</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Under Australian regulations, all gas appliance repair work
                    must be performed by a registered gas fitter. This is not
                    optional — unlicensed gas work is illegal and dangerous. Our
                    technicians hold current registration, carry gas a detection
                    equipment, and follow all safe work procedures for every
                    emergency repair.
                  </p>
                  <div
                    className="p-4 rounded-3"
                    style={{
                      backgroundColor: "#fff5f5",
                      borderLeft: "4px solid #d32f2f",
                    }}
                  >
                    <strong style={{ color: "#d32f2f", fontSize: "1rem" }}>
                      <i className="fas fa-exclamation-triangle me-2"></i>Carbon
                      Monoxide Warning
                    </strong>
                    <p
                      className="mb-0 mt-2 text-secondary"
                      style={{ lineHeight: "1.7" }}
                    >
                      If your gas ducted heater blows cold air or has been shut
                      down by its safety switch, do not attempt to restart it
                      before it has been inspected by a licensed gas fitter. A
                      compromised heat exchanger allows carbon monoxide —
                      colourless and odourless — to enter your home via the duct
                      system.
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
                      <h6 className="section-title__tagline">
                        Emergency Coverage
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Gas Ducted Emergency Coverage <span>All Melbourne</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <div className="row gy-3">
                    {[
                      {
                        title: "Inner Melbourne",
                        sub: "Priority coverage, fast dispatch",
                      },
                      {
                        title: "Northern Melbourne",
                        sub: "Preston, Reservoir, Epping, Craigieburn",
                      },
                      {
                        title: "Eastern Melbourne",
                        sub: "Box Hill, Doncaster, Ringwood, Knox",
                      },
                      {
                        title: "Southern Melbourne",
                        sub: "St Kilda, Brighton, Frankston, Mornington",
                      },
                      {
                        title: "Western Melbourne",
                        sub: "Footscray, Sunshine, Werribee, Melton",
                      },
                      {
                        title: "All Major Gas Ducted Brands",
                        sub: "Brivis, Braemar, Rinnai, Pyrox, Bonaire, Escea",
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
                            <strong style={{ color: "#7f1d1d" }}>
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
                        Gas Ducted Emergency Questions <span>Answered</span>
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
                              color: "#7f1d1d",
                              fontSize: "1.3rem",
                              borderBottom: "2px solid #d32f2f",
                            }}
                          >
                            <i
                              className="fas fa-fire me-2"
                              style={{ color: "#d32f2f" }}
                            ></i>
                            Faults and Safety
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
                              color: "#7f1d1d",
                              fontSize: "1.3rem",
                              borderBottom: "2px solid #d32f2f",
                            }}
                          >
                            <i
                              className="fas fa-tools me-2"
                              style={{ color: "#d32f2f" }}
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
                    backgroundColor: "#d32f2f",
                    boxShadow: "0 8px 32px rgba(185,28,28,0.25)",
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
                    Gas Ducted Heater Not Working? Call Now.
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#fecaca",
                      lineHeight: "1.7",
                    }}
                  >
                    24/7 emergency gas ducted heating repair across all
                    Melbourne suburbs. licensed gas fitters. All major brands.
                    Target 4-hour response.
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
                          color: "#b91c1c",
                          fontSize: "1.1rem",
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
                        <i className="fas fa-phone me-2"></i> 0405 133 761 —
                        Emergency Line
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
                    &#10003; 24/7 EMERGENCY &bull; &#10003; LICENSED &bull;
                    &#10003; ALL BRANDS &bull; &#10003; CARBON MONOXIDE SAFE
                    &bull; &#10003; ALL MELBOURNE
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
        subtitle="24/7 emergency response available across all Melbourne suburbs"
      />
    </>
  );
};

export default Page;
