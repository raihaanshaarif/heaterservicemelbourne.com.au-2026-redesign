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

const faqData = [
  {
    id: 1,
    question:
      "How do I know if my gas heater needs replacing rather than repairing?",
    answer:
      "If your system is over 15 years old, has required multiple repairs in the past 2 years, is experiencing a major component failure such as a heat exchanger or control board, or is running at significantly reduced efficiency, replacement is typically more cost-effective than continued repair. We provide honest assessments with no pressure.",
  },
  {
    id: 2,
    question: "How long does a full gas ducted heating replacement take?",
    answer:
      "A standard replacement typically takes one full day. The old system is removed in the morning and the new system commissioned in the afternoon. Multi-storey homes or complex duct configurations may require two days. We minimise disruption and clean up fully on completion.",
  },
  {
    id: 3,
    question: "Which brands are available for replacement?",
    answer:
      "We supply and install all major brands including Brivis, Rinnai, Braemar, Vulcan, and Bonaire. We will recommend the best unit for your home size, insulation, and usage patterns. All units we supply are authorised distributor stock with full Australian manufacturer warranty.",
  },
  {
    id: 4,
    question: "Can I get a VEU rebate when replacing my gas heater?",
    answer:
      "Victoria's VEU (Victorian Energy Upgrades) program may provide rebates when upgrading to a higher Star Rating system. Rebate eligibility depends on your existing system, the replacement unit, and your circumstances. We assist with rebate paperwork and can advise on eligibility at your assessment.",
  },
  {
    id: 5,
    question: "What is included in a replacement?",
    answer:
      "Our replacement service includes full removal of your old system, supply and installation of the new unit, reconnection to existing ductwork, commissioning and testing, thermostat upgrade if required, and a Certificate of Compliance. We also provide disposal of your old system.",
  },
  {
    id: 6,
    question: "Do you reuse the existing ductwork?",
    answer:
      "In most cases, existing ductwork can be reused if it is in good condition. During our assessment we inspect the duct condition, check for deterioration or leaks, and advise whether duct replacement or repairs are needed alongside the heater replacement.",
  },
  {
    id: 7,
    question: "Can you add zone control when replacing my system?",
    answer:
      "Yes. A heater replacement is the ideal time to add or upgrade zone control. We can install motorised zone dampers, a new zoning controller, and additional outlet dampers, giving you independent temperature management in different areas of your home.",
  },
  {
    id: 8,
    question: "How much does a gas ducted heating replacement cost?",
    answer:
      "Replacement costs vary depending on the brand, star rating, home size, and whether duct work or zoning upgrades are needed. We provide fully itemised upfront quotes with no hidden charges. Contact us for a free assessment and no-obligation quote.",
  },
  {
    id: 9,
    question: "How much can I save on gas bills with a new system?",
    answer:
      "Modern 6-star gas ducted heating systems can use 30 to 50% less gas than older 2 to 3-star units. The typical Melbourne household sees meaningful bill reductions every winter. Combined with any available rebates, the payback period on a quality replacement is often 4 to 6 years.",
  },
  {
    id: 10,
    question: "What areas of Melbourne do you cover for replacements?",
    answer:
      "We carry out gas ducted heating replacements across all suburbs of Greater Melbourne including inner city, northern, southern, eastern, and western corridors. Contact us to confirm availability in your specific suburb and to book a free assessment.",
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
        title="Gas Heater Replacement Melbourne – Upgrade to Energy Efficient Ducted Heating"
        subTitle="Gas Ducted Heating Replacement"
        titleLink="/gas-ducted-heating"
      />

      {/* JSON-LD Schema */}
      <JSONLDScript
        schema={generateServiceSchema(
          "Gas Heater Replacement",
          "Energy-efficient gas heating system replacement and upgrades in Melbourne",
          "https://heaterservicemelbourne.com.au/gas-ducted-heating",
        )}
        id="gas-replacement-schema"
      />

      {/* Breadcrumbs */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Gas Ducted Heating", url: "/gas-ducted-heating" },
          { name: "Replacement", url: "#" },
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
                  Gas Heater Replacement Melbourne
                </h1>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                >
                  Upgrade from your ageing gas ducted heater to a modern,
                  high-efficiency system with full installation by licensed gas
                  fitters. We supply and install all major brands, handle duct
                  inspection, and manage VEU rebate paperwork on your behalf.
                </p>
                <p
                  className="text-secondary mb-5"
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  Free on-site assessment. Fully itemised upfront quote.
                  Complete installation in one day.
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
                    &#10003; LICENSED
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
                    &#10003; FREE ASSESSMENT
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
                    &#10003; MANUFACTURER WARRANTY
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
                  alt="Gas heater replacement Melbourne – licensed technician installing a new energy-efficient gas ducted heating system"
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
                      Replacement Specialists
                    </strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      1500+ systems replaced
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
              icon="fas fa-exchange-alt"
              value={1500}
              suffix="+"
              label="Systems Replaced"
            />
            <StatCard
              icon="fas fa-star"
              value={4}
              suffix=".9"
              label="Star Rating"
            />
            <StatCard
              icon="fas fa-bolt"
              value={6}
              suffix=".5★"
              label="High Efficiency Systems"
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
                      <h6 className="section-title__tagline">
                        Upgrade Your Heating
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-flame"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        When to Consider Replacing Your{" "}
                        <span>Gas Ducted Heater</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    Most gas ducted heating systems have a service life of 15 to
                    20 years with proper maintenance. If your system is ageing,
                    running inefficiently, requiring frequent repairs, or no
                    longer heating your home evenly, replacement with a modern
                    high-efficiency system is likely the smarter long-term
                    investment.
                  </p>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>Our approach:</strong>{" "}
                    We carry out a thorough assessment of your existing system
                    and ductwork before recommending replacement. We will always
                    give you honest advice — if a repair makes more sense, we
                    will tell you.
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
                        What We Include
                      </h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        What Is Included in Your <span>Replacement</span>
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
                        icon: "fas fa-search",
                        title: "Full System Assessment",
                        description:
                          "Before any replacement, we assess your home size, insulation, duct condition, and existing zoning to recommend the right system capacity and star rating for your specific needs.",
                      },
                      {
                        icon: "fas fa-tag",
                        title: "Brand and Model Selection",
                        description:
                          "We supply all leading brands including Brivis, Rinnai, Braemar, Vulcan, and Bonaire. Our technicians will explain the differences and help you choose based on your budget and efficiency goals.",
                      },
                      {
                        icon: "fas fa-bolt",
                        title: "High Efficiency Upgrade",
                        description:
                          "We install 6.5-star rated systems that use significantly less gas than older units. Reducing your heating star rating from a 2-star to a 6-star system can cut your winter gas consumption by up to 50%.",
                      },
                      {
                        icon: "fas fa-hand-holding-usd",
                        title: "VEU Rebate Assistance",
                        description:
                          "Victoria's VEU program offers rebates on qualifying gas heater replacements. We help assess your eligibility and complete all required documentation to ensure you receive any available rebate.",
                      },
                      {
                        icon: "fas fa-th-large",
                        title: "Zone Control Integration",
                        description:
                          "Take full advantage of your new system with zone control installation. We can add motorised dampers and a new zone controller so you can independently heat different areas of your home.",
                      },
                      {
                        icon: "fas fa-shield-alt",
                        title: "Manufacturer Warranty Covered",
                        description:
                          "All systems we supply and install come with full manufacturer warranty — typically 5 to 10 years depending on the brand. We are authorised installers for all brands we supply.",
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
                        How Your Replacement <span>Day Works</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-4"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    On replacement day, our team arrives with your new unit and
                    all required materials. We disconnect and remove the old
                    system, inspect and clean the duct connections, install and
                    connect the new heater, commission it to manufacturer
                    specifications, and test all zones and the thermostat before
                    leaving.
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
                      One-Day Completion
                    </strong>
                    <p
                      className="mb-0 mt-2 text-secondary"
                      style={{ lineHeight: "1.7" }}
                    >
                      Most standard replacements are completed in a single day.
                      You will have a Certificate of Compliance and a fully
                      operational new heating system before we leave.
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
                      <h6 className="section-title__tagline">Coverage</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">
                        Replacement Services Across All{" "}
                        <span>Melbourne Suburbs</span>
                      </TextAnimation>
                    </h2>
                  </div>
                  <p
                    className="text-secondary mb-0"
                    style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
                  >
                    <strong style={{ color: "#1a1a1a" }}>
                      We cover all of Greater Melbourne
                    </strong>{" "}
                    for gas ducted heating replacement. Our supply chain ensures
                    we can source and install your chosen system quickly,
                    minimising how long you are without heating during winter.
                  </p>
                  <div className="row gy-3 mt-4">
                    {[
                      {
                        title: "All Melbourne Suburbs",
                        sub: "Inner, north, south, east, western suburbs",
                      },
                      {
                        title: "All Major Brands Available",
                        sub: "Brivis, Rinnai, Braemar, Vulcan, Bonaire",
                      },
                      {
                        title: "Rebate Assistance Included",
                        sub: "VEU rebates assessed and paperwork handled",
                      },
                      {
                        title: "Old System Removed",
                        sub: "Full removal and responsible disposal included",
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
                        Your Replacement Questions <span>Answered</span>
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
                              className="fas fa-exchange-alt me-2"
                              style={{ color: "#fd5523" }}
                            ></i>
                            Replacement Process
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
                            Costs and Savings
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
                    Ready to Upgrade Your Gas Ducted Heating?
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontSize: "1.1rem",
                      color: "#d9e0eb",
                      lineHeight: "1.7",
                    }}
                  >
                    Get a free on-site assessment and fully itemised quote. No
                    obligation, no pressure — just honest advice from licensed
                    gas heating specialists.
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
                        Get a Free Assessment
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
                    &#10003; ALL MELBOURNE SUBURBS &bull; &#10003; LICENSED
                    &bull; &#10003; FREE ASSESSMENT &bull; &#10003; MANUFACTURER
                    WARRANTY
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
        title="Replacement Service Areas"
        subtitle="System replacement available across all Melbourne suburbs"
      />
    </>
  );
};

export default Page;
