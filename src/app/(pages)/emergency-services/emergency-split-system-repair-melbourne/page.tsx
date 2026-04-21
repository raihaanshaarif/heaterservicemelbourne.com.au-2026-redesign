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
    question:
      "Why is my split system running but blowing warm air in cooling mode?",
    answer:
      "This is most commonly caused by a refrigerant low-charge or leak, a dirty or blocked condenser coil (preventing heat rejection), a faulty expansion valve, or a failed compressor. Low refrigerant is the most frequent cause in older units. We diagnose the specific fault rather than defaulting to a regas — refrigerant top-up without locating a leak is a temporary fix that will recur.",
  },
  {
    id: 2,
    question:
      "How quickly can you respond to a split system emergency in Melbourne?",
    answer:
      "We target a 4-hour response window across Edinburgh Melbourne metro area for split system emergencies. Our technicians carry a full diagnostic toolkit as well as common parts — capacitors, contactors, expansion valves, fan motors, and control boards — to maximise first-visit fix rates.",
  },
  {
    id: 3,
    question:
      "My split system is leaking water inside the room — is this urgent?",
    answer:
      "Yes, an indoor water leak needs to be addressed promptly to prevent ceiling or wall damage. Common causes include blocked drain pipe or condensate pump, incorrectly pitched unit, dirty evaporator coil reducing airflow and causing excessive condensation, or a cracked drain tray. We diagnose and fix the specific cause in one visit.",
  },
  {
    id: 4,
    question:
      "The split system trips the circuit breaker when it starts — what is causing this?",
    answer:
      "Breaker trips on startup are usually caused by a failed run capacitor (allowing the motor to draw excessive start-up current), a failing compressor drawing locked-rotor current, a short circuit in the control board, wiring fault, or overloaded circuit. We test each component systematically to pinpoint the fault before any parts are replaced.",
  },
  {
    id: 5,
    question: "Can you repair a refrigerant leak on a split system?",
    answer:
      "Yes. We locate the leak source — most commonly at flare connections, valve stems, or indoor coil micro-cracks — seal it where possible, or replace the leaking component where sealing is not a viable long-term solution. After repairing the leak, we carry out a pressure test to confirm integrity and then recharge to manufacturer specification. ARCtick licensed refrigerant handling throughout.",
  },
  {
    id: 6,
    question:
      "My split system makes a loud noise and then shuts off — what is wrong?",
    answer:
      "Loud shutdown noise followed by unit cutout is typically compressor hard-starting (weak capacitor), debris in the outdoor fan blades causing vibration and motor protection trip, loss of refrigerant causing low-pressure cutout, or a faulty PCB. We run a full diagnostic to determine the exact cause before proceeding with any repair recommendation.",
  },
  {
    id: 7,
    question:
      "Which split system brands do you service for emergency repairs in Melbourne?",
    answer:
      "We service all major split system brands across Melbourne — Daikin, Mitsubishi Electric, Fujitsu, Panasonic, Samsung, LG, Toshiba, Carrier, Kelvinator, Hitachi, and all other residential and commercial brands. Our technicians are experienced with inverter and non-inverter systems of all capacities.",
  },
  {
    id: 8,
    question: "Is post-storm split system damage covered by insurance?",
    answer:
      "Sudden accidental damage from storm events is commonly covered by home and contents insurance policies. We can provide a detailed service report, fault diagnosis, and repair quote to support an insurance claim. Whether storm damage or surge damage caused the fault will be noted in our documentation.",
  },
  {
    id: 9,
    question: "My split system is out of warranty — is it worth repairing?",
    answer:
      "This depends on the age of the unit, the nature of the fault, and current system replacement costs. We provide transparent repair quotes before starting work. Minor faults such as capacitor failure or drain blockage are typically cost-effective to repair on any modern unit. Major compressor or coil replacements on units over 10–12 years old may warrant a replacement cost comparison, which we are happy to discuss with you honestly.",
  },
  {
    id: 10,
    question:
      "Which Melbourne suburbs do you cover for emergency split system repair?",
    answer:
      "We cover all Melbourne suburbs for emergency split system repair — inner city, northern, eastern, southeastern, southern, and western suburbs. Our 4-hour response window applies across the entire Melbourne metro area. Units in commercial premises and properties on builder guarantee call-backs are also served across our full service area.",
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
        title="Emergency Split System Repair Melbourne – 24/7 Split System Fault Diagnosis and Same-Day Repair"
        subTitle="Emergency Split System Repair"
        titleLink="/emergency-services"
      />

      {/* JSON-LD Schema */}
      <JSONLDScript
        schema={generateServiceSchema(
          "Emergency Split System Repair",
          "24/7 emergency repair for split system air conditioning breakdowns",
          "https://heaterservicemelbourne.com.au/emergency-services",
        )}
        id="emergency-split-schema"
      />

      {/* Breadcrumbs */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Emergency Services", url: "/emergency-services" },
          { name: "Split System Repair", url: "#" },
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
                  className="mb-3 px-3 py-2 d-inline-block rounded-3"
                  style={{
                    backgroundColor: "#fef2f2",
                    border: "2px solid #d32f2f",
                  }}
                >
                  <span
                    style={{
                      color: "#b91c1c",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    <i className="fas fa-exclamation-triangle me-2"></i>24/7
                    EMERGENCY SPLIT SYSTEM REPAIR
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
                  Emergency Split System Repair Melbourne
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                >
                  Split system broken down — not cooling, not heating, leaking
                  water, tripping the breaker, or not turning on at all? Our
                  emergency technicians travel to all Melbourne suburbs within 4
                  hours. ARCtick licensed for refrigerant work. We carry parts
                  for all brands.
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
                      <i className="fas fa-phone me-2"></i> Call Urgent Repair
                      Line
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
                    &#10003; 4-HOUR RESPONSE
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
                    &#10003; ARCtick LICENSED
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
                  alt="Emergency split system repair Melbourne – licensed technician diagnosing and repairing failed split system air conditioner"
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
                      Split System Specialists
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      5000+ repairs completed
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
              label="Response Window"
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
              label="Split System Faults Fixed"
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
                        Fault Types We Fix
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-snowflake"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Split System Emergency Faults <span>We Respond To</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Whether your system has stopped working entirely or is
                    showing a specific fault, our emergency technicians carry
                    the diagnostic tools and parts to identify and fix the
                    problem fast. All refrigerant work is performed by ARCtick
                    licensed technicians.
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
                        icon: "fas fa-power-off",
                        title: "Complete System Failure",
                        description:
                          "Unit will not power on, or powers on but delivers no heating or cooling. We diagnose control board faults, electrical wiring faults, blown fuses, failed contactors, and communication errors between indoor and outdoor units to pinpoint the exact cause.",
                      },
                      {
                        icon: "fas fa-temperature-low",
                        title: "Not Cooling or Not Heating",
                        description:
                          "System runs but fails to reach the setpoint in cooling or heating mode. Most commonly caused by low refrigerant charge, dirty coils, failed expansion valve, or faulty thermistor. We diagnose the root cause before recommending any refrigerant work.",
                      },
                      {
                        icon: "fas fa-tint-slash",
                        title: "Refrigerant Leak",
                        description:
                          "Loss of refrigerant charge causes reduced performance and can damage the compressor if left unaddressed. We locate the leak source, repair it, pressure-test the system, and recharge to manufacturer specification using ARCtick licensed refrigerant handling practices.",
                      },
                      {
                        icon: "fas fa-bolt",
                        title: "Electrical Fault and Breaker Tripping",
                        description:
                          "Units that trip the circuit breaker on startup or during operation typically have a failed run capacitor, a failing compressor drawing excessive current, or a wiring fault. We test each component systematically and replace only what is faulty.",
                      },
                      {
                        icon: "fas fa-tint",
                        title: "Water Leak from Indoor Unit",
                        description:
                          "Water dripping or pooling below the indoor unit is most commonly caused by a blocked condensate drain, failed condensate pump, incorrectly pitched unit, or a dirty evaporator coil. We clear and test the drain system and address the root cause in the same visit.",
                      },
                      {
                        icon: "fas fa-cloud-rain",
                        title: "Post-Storm and Power Surge Fault",
                        description:
                          "Storm-related power surges can damage capacitors, control boards, and PCBs. Physical storm damage to the outdoor unit can cause fan blade strikes, coil damage, and refrigerant leaks. We assess and repair all storm-related damage for insurance and non-insurance repairs.",
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
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <h6 className="section-title__tagline">
                        Service Coverage
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Emergency Split System Repair{" "}
                        <span>Across All Melbourne</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <div className="row gy-3 mb-4">
                    {[
                      {
                        icon: "fas fa-city",
                        area: "Inner Melbourne",
                        suburbs:
                          "CBD, Fitzroy, Richmond, South Yarra, St Kilda, Collingwood",
                      },
                      {
                        icon: "fas fa-compass",
                        area: "Northern Suburbs",
                        suburbs:
                          "Brunswick, Coburg, Preston, Reservoir, Epping, Bundoora",
                      },
                      {
                        icon: "fas fa-compass",
                        area: "Eastern Suburbs",
                        suburbs:
                          "Hawthorn, Doncaster, Box Hill, Knox, Ringwood, Maroondah",
                      },
                      {
                        icon: "fas fa-compass",
                        area: "South-Eastern Suburbs",
                        suburbs:
                          "Oakleigh, Dandenong, Berwick, Cranbourne, Frankston, Narre Warren",
                      },
                      {
                        icon: "fas fa-compass",
                        area: "Southern Suburbs",
                        suburbs:
                          "Brighton, Bayside, Cheltenham, Moorabbin, Chelsea, Mentone",
                      },
                      {
                        icon: "fas fa-compass",
                        area: "Western Suburbs",
                        suburbs:
                          "Footscray, Sunshine, Werribee, Hoppers Crossing, Melton, Altona",
                      },
                    ].map((item, i) => (
                      <div key={i} className="col-md-4">
                        <div
                          className="d-flex align-items-start gap-3 p-3 rounded-3 h-100"
                          style={{
                            backgroundColor: "#fff5f5",
                            border: "1px solid #fecaca",
                          }}
                        >
                          <i
                            className={item.icon}
                            style={{
                              color: "#d32f2f",
                              marginTop: "2px",
                              fontSize: "1.2rem",
                              flexShrink: 0,
                            }}
                          ></i>
                          <div>
                            <strong
                              style={{ color: "#7f1d1d", fontSize: "0.95rem" }}
                            >
                              {item.area}
                            </strong>
                            <br />
                            <span
                              className="text-secondary"
                              style={{ fontSize: "0.85rem" }}
                            >
                              {item.suburbs}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="p-4 rounded-3"
                    style={{
                      backgroundColor: "#fff5f5",
                      borderLeft: "4px solid #d32f2f",
                    }}
                  >
                    <strong style={{ color: "#d32f2f", fontSize: "1rem" }}>
                      <i className="fas fa-certificate me-2"></i>ARCtick
                      Licensed — Daikin, Mitsubishi, Fujitsu, Panasonic,
                      Samsung, LG and All Other Brands
                    </strong>
                    <p
                      className="mb-0 mt-2 text-secondary"
                      style={{ lineHeight: "1.7" }}
                    >
                      All refrigerant handling is carried out by ARCtick
                      licensed technicians. We service all major and minor split
                      system brands — single split, multi-head, cassette, floor
                      console, ducted split, and all inverter systems of all
                      capacity sizes.
                    </p>
                  </div>
                </motion.div>

                <div className="my-5">
                  <WhyProfessionalMatters />
                </div>

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
                        Split System Emergency Questions <span>Answered</span>
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
                              className="fas fa-diagnoses me-2"
                              style={{ color: "#d32f2f" }}
                            ></i>
                            Fault Diagnosis
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
                              className="fas fa-wrench me-2"
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
                    Split System Broken Down? We Will Be There in 4 Hours.
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#fecaca",
                      lineHeight: "1.7",
                    }}
                  >
                    24/7 emergency split system repair across all Melbourne
                    suburbs. ARCtick licensed technicians. All major brands.
                    Most faults fixed same visit.
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
                        Split System Emergency
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
                    &#10003; 24/7 AVAILABLE &bull; &#10003; 4-HR RESPONSE &bull;
                    &#10003; ARCtick LICENSED &bull; &#10003; ALL BRANDS &bull;
                    &#10003; ALL MELBOURNE
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
