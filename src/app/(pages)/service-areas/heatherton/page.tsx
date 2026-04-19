"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import Head from 'next/head';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
  subServices: string[];
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Split System Air Conditioning",
    description:
      "Professional installation, deep cleaning, repair, and maintenance of split system air conditioning units. All brands, ARCtick licensed.",
    icon: "fas fa-snowflake",
    link: "/split-system-air-conditioning",
    subServices: [
      "Installation & New System Setup",
      "Cleaning & Maintenance",
      "Repair & Emergency Service",
      "Upgrade & Replacement",
    ],
  },
  {
    id: 2,
    title: "Gas Ducted Heating",
    description:
      "Expert gas ducted heating installation, servicing, repair, and emergency maintenance. VBA registered gas fitters with full diagnostics.",
    icon: "fas fa-fire",
    link: "/gas-ducted-heating",
    subServices: [
      "Installation & System Setup",
      "Repair & Emergency Service",
      "Annual Servicing",
      "Gas Leak Detection",
    ],
  },
  {
    id: 3,
    title: "Hydronic Heating",
    description:
      "Complete hydronic heating systems including installation, maintenance, repair, and water heating solutions for your home.",
    icon: "fas fa-water",
    link: "/hydronic-heating",
    subServices: [
      "System Installation",
      "Repair & Troubleshooting",
      "Boiler Maintenance",
      "Leak Detection & Repair",
    ],
  },
  {
    id: 4,
    title: "24/7 Emergency Services",
    description:
      "Round-the-clock emergency heating and cooling repairs. We target 4-hour response times for all emergency breakdowns.",
    icon: "fas fa-exclamation-triangle",
    link: "/emergency-services",
    subServices: [
      "Emergency Breakdown Rescue",
      "Same-Day Repairs",
      "After-Hours Service",
      "All System Types",
    ],
  },
];

const ServiceCardComponent: React.FC<{
  service: ServiceCard;
  index: number;
}> = ({ service, index }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className="col-lg-6"
    >
      <motion.div
        whileHover={{ y: -8 }}
        className="h-100 p-5 rounded-4 bg-white"
        style={{
          boxShadow: "0 4px 25px rgba(185,28,28,0.08)",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          border: "1px solid rgba(185,28,28,0.05)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 12px 40px rgba(185,28,28,0.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 4px 25px rgba(185,28,28,0.08)";
        }}
      >
        <div className="d-flex align-items-center gap-4 mb-4">
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, rgba(185,28,28,0.1) 0%, rgba(185,28,28,0.05) 100%)",
              flexShrink: 0,
            }}
          >
            <i
              className={service.icon}
              style={{ fontSize: "1.8rem", color: "#b91c1c" }}
            ></i>
          </div>
          <div>
            <h3
              className="fw-bolder mb-0"
              style={{ fontSize: "1.3rem", color: "#1a1a1a" }}
            >
              {service.title}
            </h3>
            <small style={{ color: "#b91c1c", fontWeight: 600 }}>
              Heatherton Service
            </small>
          </div>
        </div>

        <p
          style={{
            color: "#4b5563",
            lineHeight: "1.7",
            marginBottom: "1.5rem",
          }}
        >
          {service.description}
        </p>

        <div className="mb-4">
          <h6
            className="fw-bolder mb-3"
            style={{ color: "#1a1a1a", fontSize: "0.95rem" }}
          >
            <i
              className="fas fa-check-circle me-2"
              style={{ color: "#b91c1c" }}
            ></i>
            What We Offer:
          </h6>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {service.subServices.map((subService, idx) => (
              <li key={idx} className="mb-2">
                <span style={{ color: "#4b5563", fontSize: "0.95rem" }}>
                  <i
                    className="fas fa-chevron-right me-2"
                    style={{ color: "#b91c1c", fontSize: "0.75rem" }}
                  ></i>
                  {subService}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-flex gap-2">
          <Link href={service.link} style={{ flex: 1, textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-100 py-2 px-4 rounded-3 fw-bold text-white border-0"
              style={{
                background: "linear-gradient(135deg, #b91c1c 0%, #c21e1e 100%)",
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
              }}
            >
              Learn More
            </motion.button>
          </Link>
          <motion.a
            href="tel:0405133761"
            whileHover={{ scale: 1.02 }}
            className="py-2 px-4 rounded-3 fw-bold text-decoration-none"
            style={{
              background: "rgba(185,28,28,0.1)",
              color: "#b91c1c",
              border: "1.5px solid rgba(185,28,28,0.2)",
              fontSize: "0.9rem",
              transition: "all 0.3s ease",
            }}
          >
            <i className="icon-phone-call me-1"></i> Call
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Page: React.FC = () => {
  const { ref: introRef, inView: introInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Heating Service Melbourne",
  "image": [
    "https://heaterservicemelbourne.com.au/assets/images/website-img.jpg"
  ],
  "@id": "https://heaterservicemelbourne.com.au/",
  "url": "https://heaterservicemelbourne.com.au/",
  "telephone": "0405 133 761",
  "email": "heating.melbourne@gmail.com",
  "priceRange": "$200 - $5000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5 Frank Ave",
    "addressLocality": "Clayton South",
    "addressRegion": "VIC",
    "postalCode": "3169",
      "addressCountry": "Australia"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Heatherton, Melbourne, VIC"
  },
  "logo": "https://heaterservicemelbourne.com.au/assets/images/resources/logo-2.png",
  "description": "Local heating and cooling specialists offering installation, repair, maintenance and 24/7 emergency service in Heatherton, Melbourne, VIC.",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Mo",
        "Fr"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sa",
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "sameAs": []
}
` }} />
        <link rel="canonical" href="https://heatingservicemelbourne.com.au/service-areas/heatherton" />
        <meta name="robots" content="index, follow" />
      </Head>
      <DefaultBanner
        title="Heating & Cooling Services in Heatherton, Melbourne"
        subTitle="Heatherton Service Area"
        titleLink="/service-areas/heatherton"
      />

      {/* Introduction Section */}
      <section className="py-5" style={{ backgroundColor: "#fff5f5" }}>
        <div className="container">
          <motion.div
            ref={introRef}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="row">
              <motion.div className="col-lg-8 mx-auto" variants={itemVariants}>
                <div className="text-center mb-5">
                  <motion.div
                    className="mb-3 px-4 py-2 d-inline-block rounded-3"
                    style={{
                      backgroundColor: "rgba(185,28,28,0.1)",
                      border: "1px solid rgba(185,28,28,0.2)",
                    }}
                  >
                    <span
                      style={{
                        color: "#b91c1c",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      <i className="fas fa-map-marker-alt me-2"></i>HEATHERTON
                      HEATING & COOLING
                    </span>
                  </motion.div>

                  <h1
                    className="fw-bolder mb-4"
                    style={{
                      fontSize: "2.5rem",
                      color: "#7f1d1d",
                      lineHeight: "1.3",
                    }}
                  >
                    Professional Heating & Cooling Services in Heatherton
                  </h1>

                  <p
                    className="text-secondary mb-4"
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.8",
                      color: "#4b5563",
                    }}
                  >
                    Welcome to your trusted local heating and cooling specialist
                    serving Heatherton and surrounding suburbs. For over 15 years,
                    we&apos;ve been helping Heatherton residents and businesses
                    maintain comfortable indoor temperatures year-round with
                    professional installation, maintenance, and emergency repair
                    services.
                  </p>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: "1.8",
                      color: "#4b5563",
                      marginBottom: "2rem",
                    }}
                  >
                    Whether you need a new split system installed, your gas
                    heating repaired, emergency air conditioning service, or
                    regular maintenance, our ARCtick licensed technicians are
                    ready to help Heatherton residents with same-day service and
                    professional solutions.
                  </p>

                  <motion.a
                    href="tel:0405133761"
                    whileHover={{ scale: 1.05 }}
                    className="btn btn-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #b91c1c 0%, #c21e1e 100%)",
                      color: "#fff",
                      fontWeight: 700,
                      border: "none",
                      padding: "1rem 2.5rem",
                      letterSpacing: "0.5px",
                      boxShadow: "0 8px 20px rgba(185,28,28,0.25)",
                    }}
                  >
                    <i className="icon-phone-call"></i>
                    Call for Heatherton Service: 0405 133 761
                  </motion.a>
                </div>

                {/* Quick Stats */}
                <div className="row gy-3 mt-5">
                  <div className="col-md-4">
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-white rounded-3 text-center h-100"
                      style={{ boxShadow: "0 4px 15px rgba(185,28,28,0.08)" }}
                    >
                      <div
                        style={{
                          fontSize: "2rem",
                          marginBottom: "0.5rem",
                          color: "#b91c1c",
                          fontWeight: 700,
                        }}
                      >
                        15+
                      </div>
                      <p
                        style={{
                          color: "#4b5563",
                          marginBottom: 0,
                          fontSize: "0.9rem",
                        }}
                      >
                        Years Local Experience
                      </p>
                    </motion.div>
                  </div>

                  <div className="col-md-4">
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-white rounded-3 text-center h-100"
                      style={{ boxShadow: "0 4px 15px rgba(185,28,28,0.08)" }}
                    >
                      <div
                        style={{
                          fontSize: "2rem",
                          marginBottom: "0.5rem",
                          color: "#b91c1c",
                          fontWeight: 700,
                        }}
                      >
                        24/7
                      </div>
                      <p
                        style={{
                          color: "#4b5563",
                          marginBottom: 0,
                          fontSize: "0.9rem",
                        }}
                      >
                        Emergency Service Available
                      </p>
                    </motion.div>
                  </div>

                  <div className="col-md-4">
                    <motion.div
                      variants={itemVariants}
                      className="p-4 bg-white rounded-3 text-center h-100"
                      style={{ boxShadow: "0 4px 15px rgba(185,28,28,0.08)" }}
                    >
                      <div
                        style={{
                          fontSize: "2rem",
                          marginBottom: "0.5rem",
                          color: "#b91c1c",
                          fontWeight: 700,
                        }}
                      >
                        4hrs
                      </div>
                      <p
                        style={{
                          color: "#4b5563",
                          marginBottom: 0,
                          fontSize: "0.9rem",
                        }}
                      >
                        Average Response Time
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-5">
        <div className="container">
          <motion.div
            ref={servicesRef}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div className="text-center mb-5" variants={itemVariants}>
              <h2
                className="fw-bolder"
                style={{
                  fontSize: "2.2rem",
                  color: "#7f1d1d",
                  marginBottom: "1rem",
                }}
              >
                Our Complete Service Range in Heatherton
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4b5563",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                From installation to emergency repair, we provide comprehensive
                heating and cooling solutions for Heatherton residents and
                businesses.
              </p>
            </motion.div>

            <div className="row gy-4">
              {services.map((service, index) => (
                <ServiceCardComponent
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-5">
              <h2
                className="fw-bolder mb-3"
                style={{ fontSize: "2.2rem", color: "#7f1d1d" }}
              >
                Why Heatherton Residents Choose Us
              </h2>
            </div>

            <div className="row gy-4">
              {[
                {
                  icon: "fas fa-certificate",
                  title: "Fully Licensed & Insured",
                  description:
                    "ARCtick and VBA registered with comprehensive insurance coverage.",
                },
                {
                  icon: "fas fa-tools",
                  title: "Expert Technicians",
                  description:
                    "Highly trained professionals with 15+ years of local experience.",
                },
                {
                  icon: "fas fa-clock",
                  title: "Same-Day Service",
                  description:
                    "Fast response times with most jobs completed on first visit.",
                },
                {
                  icon: "icon-phone-call",
                  title: "24/7 Emergency Service",
                  description:
                    "Available round-the-clock for heating and cooling emergencies.",
                },
                {
                  icon: "fas fa-tag",
                  title: "Transparent Pricing",
                  description:
                    "Fixed pricing with no hidden charges or surprise costs.",
                },
                {
                  icon: "fas fa-guarantee",
                  title: "Warranty Backed",
                  description:
                    "All work backed by parts and labour warranty for peace of mind.",
                },
              ].map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-4">
                  <motion.div
                    variants={itemVariants}
                    className="p-4 bg-white rounded-3 h-100 text-center"
                    style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.04)" }}
                  >
                    <div
                      style={{
                        fontSize: "2.5rem",
                        marginBottom: "1rem",
                        color: "#b91c1c",
                      }}
                    >
                      <i className={item.icon}></i>
                    </div>
                    <h5 className="fw-bolder mb-2" style={{ color: "#1a1a1a" }}>
                      {item.title}
                    </h5>
                    <p
                      style={{
                        color: "#4b5563",
                        fontSize: "0.95rem",
                        marginBottom: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: "#7f1d1d" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="row align-items-center gy-4"
          >
            <motion.div className="col-lg-8">
              <h2
                className="fw-bolder mb-3"
                style={{ fontSize: "2rem", color: "#fff" }}
              >
                Need Heating or Cooling Service in Heatherton?
              </h2>
              <p
                style={{
                  color: "#f3f4f6",
                  fontSize: "1.05rem",
                  lineHeight: "1.6",
                }}
              >
                Whether it&apos;s installation, repair, maintenance, or an
                emergency breakdown, our Heatherton-based team is ready to help.
                With 24/7 availability and fast response times, we&apos;re your
                trusted local partner for all heating and cooling needs.
              </p>
            </motion.div>
            <motion.div className="col-lg-4 text-lg-end">
              <motion.a
                href="tel:0405133761"
                whileHover={{ scale: 1.05 }}
                className="btn btn-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
                  color: "#b91c1c",
                  fontWeight: 700,
                  border: "2px solid rgba(255,255,255,0.3)",
                  padding: "1rem 2.5rem",
                  letterSpacing: "0.5px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                }}
              >
                <i className="icon-phone-call"></i>Call: 0405 133 761
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-5">
              <h2
                className="fw-bolder mb-3"
                style={{ fontSize: "2.2rem", color: "#7f1d1d" }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#4b5563",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Common questions about our Heatherton heating and cooling services
              </p>
            </div>

            <div className="row">
              <div className="col-lg-8 mx-auto">
                {[
                  {
                    q: "Do you service the Heatherton area?",
                    a: "Yes, we proudly serve Heatherton and all surrounding Melbourne suburbs. We have multiple dispatch locations to ensure fast response times.",
                  },
                  {
                    q: "What's your response time for emergency calls in Heatherton?",
                    a: "We target a 4-hour response window for all emergency calls, including Heatherton. For gas-related emergencies, we aim for 1-2 hours.",
                  },
                  {
                    q: "Do you offer same-day service?",
                    a: "Yes. In the majority of cases, we complete service calls in a single visit with our comprehensive parts inventory.",
                  },
                  {
                    q: "Are your technicians licensed?",
                    a: "Yes. All our technicians hold current ARCtick refrigerant handling licenses and VBA gas fitting licenses for lawful repairs.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="mb-4 p-4 rounded-3 bg-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h6 className="fw-bolder mb-2" style={{ color: "#1a1a1a" }}>
                      <i
                        className="fas fa-question-circle me-2"
                        style={{ color: "#b91c1c" }}
                      ></i>
                      {item.q}
                    </h6>
                    <p
                      style={{
                        color: "#4b5563",
                        marginBottom: 0,
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Page;
