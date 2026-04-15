"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
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
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;

interface StatCardProps { icon: string; value: number; suffix?: string; label: string; }
const StatCard: React.FC<StatCardProps> = ({ icon, value, suffix = "", label }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={itemVariants} className="col-md-3 col-sm-6 mb-4">
      <motion.div whileHover={{ y: -6 }} className="p-5 bg-white rounded-4 h-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{ boxShadow: "0 4px 20px rgba(26,26,26,0.06)", transition: "box-shadow 0.3s ease" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(26,26,26,0.12)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(26,26,26,0.06)"; }}
      >
        <div className="mb-4" style={{ fontSize: "2.5rem" }}><i className={icon} style={{ color: "#1a3a52" }}></i></div>
        <div className="mb-2" style={{ fontSize: "2.8rem", fontWeight: 800, color: "#1a3a52" }}>
          {inView && <CountUp start={0} end={value} duration={2.5} separator="," suffix={suffix} />}
        </div>
        <div style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280" }}>{label}</div>
      </motion.div>
    </motion.div>
  );
};

interface FeatureCardProps { icon: string; title: string; description: string; }
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} whileHover={{ y: -8 }}
      className="p-5 bg-white rounded-4 h-100 text-center"
      style={{ boxShadow: "0 4px 20px rgba(26,26,26,0.06)", transition: "box-shadow 0.3s ease" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(26,26,26,0.12)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(26,26,26,0.06)"; }}
    >
      <div className="mb-4" style={{ fontSize: "2.5rem" }}><i className={icon} style={{ color: "#1a3a52" }}></i></div>
      <h5 className="fw-bolder mb-3" style={{ color: "#1a1a1a", fontSize: "1.125rem" }}>{title}</h5>
      <p className="text-secondary mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{description}</p>
    </motion.div>
  );
};

const faqData = [
  { id: 1, question: "What is a multi-head split system?", answer: "A multi-head split system connects two or more indoor units (heads) to a single outdoor unit. This allows multiple rooms or zones in a home to be heated or cooled from one compact outdoor unit, reducing the number of penetrations through the building fabric and the overall system footprint compared to installing individual split systems in each room." },
  { id: 2, question: "How many indoor heads can be connected to one outdoor unit?", answer: "Most residential multi-head systems support between two and five indoor units. Commercial multi-head or VRF systems can connect significantly more. The number of heads that can run simultaneously and the combined capacity they can deliver is governed by the outdoor unit's capacity and the manufacturer's specifications." },
  { id: 3, question: "Can each indoor head operate independently?", answer: "Yes. Each indoor head has its own remote control and thermostat and can be set to a different temperature and mode. In practice, the outdoor unit allocates capacity across active heads, so running all heads simultaneously at maximum output may reduce individual head performance on some systems." },
  { id: 4, question: "Can a faulty indoor head be repaired without affecting the other zones?", answer: "In most cases, yes. A faulty indoor head can be isolated and repaired while the other heads continue to operate. Our technicians carry parts for all major brands and can diagnose individual head faults without having to take the entire system offline in most repair scenarios." },
  { id: 5, question: "How often does a multi-head system need servicing?", answer: "We recommend an annual service for residential multi-head systems and a six-monthly service for high-use or commercial installations. Each service includes cleaning all indoor heads, checking refrigerant levels and circuit integrity, inspecting electrical connections, and verifying zone balancing across the full system." },
  { id: 6, question: "What brands of multi-head systems do you service?", answer: "We service all major multi-head split system brands including Daikin, Mitsubishi Electric, Fujitsu, Panasonic, Samsung, LG, Hitachi, and Carrier. Our technicians have brand-specific training and carry diagnostic tools required for each manufacturer's system." },
  { id: 7, question: "Is a multi-head system more efficient than separate single splits?", answer: "A well-designed multi-head system with an inverter outdoor unit can be more efficient than running multiple single split systems individually. The outdoor unit only needs to work as hard as the required combined load, and modern inverter multi-head systems deliver strong seasonal efficiency ratings." },
  { id: 8, question: "What is zone balancing and why does it matter?", answer: "Zone balancing ensures each indoor head receives the correct refrigerant flow for its capacity and the room's load. An unbalanced system can result in one room being over-cooled or over-heated while another fails to reach the set temperature. We check and adjust zone balancing as part of every multi-head service." },
  { id: 9, question: "Do you install new multi-head systems as well as service existing ones?", answer: "Yes. We design, supply, and install multi-head split systems for new builds, renovations, and replacement of existing systems. We carry out a room-by-room load assessment to ensure each head is correctly sized for the space before recommending a system." },
  { id: 10, question: "Which Melbourne suburbs do you cover for multi-head system service?", answer: "We cover all Melbourne suburbs for multi-head split system installation and service, including inner city, northern, southern, eastern, and western areas. Contact us to check availability and book your service." },
];

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const handleFaqItem = (id: number): void => { setActiveFaq(id); };

  return (
    <>
      <DefaultBanner
        title="Multi-Head Split System Service Melbourne – Multi-Zone AC Installation and Maintenance"
        subTitle="Multi-Head System Service"
        titleLink="/split-system-air-conditioning"
      />

      <section className="hero-installation py-5" style={{ backgroundColor: "#f4f5f9" }}>
        <div className="container">
          <motion.div ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="row align-items-center gy-5">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <h1 className="fw-bolder mb-4" style={{ fontSize: "3rem", color: "#062f3a", lineHeight: "1.2" }}>
                  Multi-Head Split System Service Melbourne
                </h1>
                <p className="text-secondary mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  Expert installation, service, and repair for multi-head and multi-zone split systems across all Melbourne suburbs. One outdoor unit, multiple rooms, complete climate control. ARCtick licensed technicians with deep experience across all major multi-head system brands.
                </p>
                <p className="text-secondary mb-5" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                  Individual zone service. Refrigerant circuit diagnostics. All brands and configurations.
                </p>
                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/contact" className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#fd5523", fontSize: "1rem" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#e54a1f"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fd5523"; }}
                    >Book a Service</Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a href="tel:0405133761" className="px-5 py-3 text-decoration-none rounded-3 fw-bold border"
                      style={{ backgroundColor: "white", color: "#fd5523", borderColor: "#fd5523", fontSize: "1rem" }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f4f5f9"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "white"; }}
                    ><i className="icon-phone-call"></i> Call Now</a>
                  </motion.div>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#f0fdf4", color: "#166534", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; ARCTICK LICENSED</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#eff6ff", color: "#1e40af", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; UP TO 8 ZONES</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#f0f9ff", color: "#0369a1", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; ALL BRANDS</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="position-relative">
                <Image src={ServiceDetailsImg1}
                  alt="Multi-head split system service Melbourne – technician servicing multi-zone air conditioning system"
                  className="img-fluid rounded-4" priority
                  style={{ width: "100%", height: "auto", boxShadow: "0 10px 40px rgba(26,26,26,0.1)" }} />
                <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{ maxWidth: "220px", backgroundColor: "#1a3a52", color: "white", boxShadow: "0 8px 24px rgba(26,26,26,0.12)" }}>
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>Multi-Zone Specialists</strong><br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>1500+ systems serviced</span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="stats-banner py-5" style={{ backgroundColor: "#f4f5f9", borderTop: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6" }}>
        <div className="container">
          <div className="row gy-4">
            <StatCard icon="fas fa-clock" value={15} suffix="+" label="Years Experience" />
            <StatCard icon="fas fa-snowflake" value={1500} suffix="+" label="Multi-Head Systems Serviced" />
            <StatCard icon="fas fa-star" value={4} suffix=".9" label="Star Rating" />
            <StatCard icon="fas fa-layer-group" value={8} label="Zones Supported" />
          </div>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__left">

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-layer-group"></i></div>
                      <h6 className="section-title__tagline">What We Offer</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-layer-group"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Complete Multi-Head System <span>Installation and Care</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    Multi-head split systems require more careful design, commissioning, and servicing than single split systems. The refrigerant circuit serves multiple indoor heads simultaneously, and zone balancing, piping losses, and individual head capacity all interact to determine overall system performance.
                  </p>
                  <p className="text-secondary" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    Our technicians carry brand-specific diagnostic tools and have hands-on experience with the distinctive service requirements of every major multi-head system on the Melbourne market.
                  </p>
                </motion.div>

                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-star"></i></div>
                      <h6 className="section-title__tagline">Service Coverage</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-star"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">What Our Multi-Head Service <span>Covers</span></TextAnimation>
                    </h2>
                  </div>
                  <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: "-100px" }} className="row gy-4">
                    {[
                      { icon: "fas fa-layer-group", title: "Multi-Zone Climate Control", description: "We design and install multi-head systems that give each room or zone independent temperature control. From 2-zone bedroom configurations to whole-home multi-zone systems, we size and configure each installation to the specific layout of your property." },
                      { icon: "fas fa-home", title: "Single Outdoor Unit Efficiency", description: "One outdoor unit serving multiple indoor heads reduces outdoor equipment footprint, simplifies maintenance access, and allows modern inverter technology to work across the full combined load. We advise on outdoor unit positioning to maximise efficiency and minimise noise impact." },
                      { icon: "fas fa-tools", title: "Individual Head Service and Repair", description: "Each indoor head can be individually serviced, cleaned, and repaired without taking the whole system offline. We carry parts for all major brands and can attend to a faulty or underperforming head with minimal disruption to the rest of your system." },
                      { icon: "fas fa-thermometer-half", title: "Refrigerant Circuit Inspection", description: "A multi-head system shares one refrigerant circuit across all indoor heads. We pressure-test the circuit, check for leaks at all indoor and outdoor connections, verify refrigerant charge, and inspect all piping runs for compliance and condition." },
                      { icon: "fas fa-balance-scale", title: "Zone Balancing", description: "Unbalanced refrigerant distribution leads to rooms that run too cold while others struggle to reach set temperature. We measure supply and return conditions at each head and adjust the system to ensure equitable and efficient performance across all zones." },
                      { icon: "fas fa-sliders-h", title: "Control System Programming", description: "We program zone-specific setpoints, fan speeds, scheduling, and modes on all indoor heads and configure any central control or timer systems included with the installation. We walk through the operation of each control system with you before completing the job." },
                    ].map((feature, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <FadeInAdvanced variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"} delay={(index + 1) * 50} duration={600}>
                          <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                        </FadeInAdvanced>
                      </div>
                    ))}
                  </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }} className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-cogs"></i></div>
                      <h6 className="section-title__tagline">Installation Process</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-cogs"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Our Multi-Head Installation <span>Approach</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    A multi-head installation starts with a room-by-room load assessment. We calculate heat gain and loss for each space, then select indoor head capacities that match each room's actual requirements. We design the piping run layout to minimise refrigerant charge and pressure losses before any work begins.
                  </p>
                  <div className="p-4 rounded-3" style={{ backgroundColor: "#f4f5f9", borderLeft: "4px solid #fd5523" }}>
                    <strong style={{ color: "#fd5523", fontSize: "1rem" }}>
                      <i className="fas fa-certificate me-2" style={{ color: "#fd5523" }}></i>ARCtick Licensed — Refrigerant Handling Compliance
                    </strong>
                    <p className="mb-0 mt-2 text-secondary" style={{ lineHeight: "1.7" }}>
                      All refrigerant handling on multi-head systems must be carried out by ARCtick licensed technicians. Our team holds current licence certification, ensuring all multi-head installations and refrigerant-related service work fully comply with Australian regulations.
                    </p>
                  </div>
                </motion.div>

                <div className="my-5"><WhyProfessionalMatters /></div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }} className="my-5 p-5 rounded-4" style={{ backgroundColor: "#f0f5fa", border: "1px solid #e0e8f0" }}>
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-map-marker-alt"></i></div>
                      <h6 className="section-title__tagline">Service Area</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-map-marker-alt"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Multi-Head System Service Across <span>Greater Melbourne</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="row gy-3">
                    {[
                      { title: "All Melbourne Suburbs", sub: "Inner city, north, south, east, western suburbs" },
                      { title: "Residential and Commercial", sub: "Homes, townhouses, offices, retail premises" },
                      { title: "New Install and Existing Systems", sub: "New builds, renovations, replacements" },
                      { title: "All Major Brands", sub: "Daikin, Mitsubishi, Fujitsu, Panasonic and more" },
                    ].map((item, i) => (
                      <div key={i} className="col-md-6">
                        <div className="d-flex align-items-start" style={{ gap: "12px" }}>
                          <i className="fas fa-check-circle" style={{ color: "#fd5523", fontSize: "1.25rem", flexShrink: 0, marginTop: "2px" }}></i>
                          <div>
                            <strong style={{ color: "#1a1a1a" }}>{item.title}</strong>
                            <p className="text-secondary mb-0" style={{ fontSize: "0.95rem" }}>{item.sub}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div className="my-5"><ProcessOne /></div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }} className="my-5 py-5">
                  <div className="section-title text-center sec-title-animation animation-style1 mb-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-question-circle"></i></div>
                      <h6 className="section-title__tagline">Frequently Asked</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-question-circle"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Multi-Head System Questions <span>Answered</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#062f3a", fontSize: "1.3rem", borderBottom: "2px solid #fd5523" }}>
                            <i className="fas fa-layer-group me-2" style={{ color: "#fd5523" }}></i>System and Installation
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {faqData.slice(0, 5).map((item) => (
                              <FadeInAdvanced key={item.id} variant="fadeInLeft" delay={item.id * 50} duration={100} className={`accrodion ${activeFaq === item.id ? "active" : ""}`}>
                                <div className="accrodion-title" onClick={() => handleFaqItem(item.id)} style={{ cursor: "pointer" }}><h4>{item.question}</h4></div>
                                <motion.div initial={{ y: -40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} viewport={{ amount: 0.05 }}
                                  className="accrodion-content" style={{ display: activeFaq === item.id ? "block" : "none" }}>
                                  <div className="inner"><p>{item.answer}</p></div>
                                </motion.div>
                              </FadeInAdvanced>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#062f3a", fontSize: "1.3rem", borderBottom: "2px solid #fd5523" }}>
                            <i className="fas fa-tools me-2" style={{ color: "#fd5523" }}></i>Service and Efficiency
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {faqData.slice(5, 10).map((item) => (
                              <FadeInAdvanced key={item.id} variant="fadeInRight" delay={(item.id * 50) / 2} duration={100} className={`accrodion ${activeFaq === item.id ? "active" : ""}`}>
                                <div className="accrodion-title" onClick={() => handleFaqItem(item.id)} style={{ cursor: "pointer" }}><h4>{item.question}</h4></div>
                                <motion.div initial={{ y: -40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} viewport={{ amount: 0.05 }}
                                  className="accrodion-content" style={{ display: activeFaq === item.id ? "block" : "none" }}>
                                  <div className="inner"><p>{item.answer}</p></div>
                                </motion.div>
                              </FadeInAdvanced>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}
                  className="my-5 p-5 rounded-4 text-center" style={{ backgroundColor: "#062f3a", boxShadow: "0 8px 32px rgba(6,47,58,0.15)" }}>
                  <h3 className="fw-bolder mb-4" style={{ fontSize: "2rem", color: "white", lineHeight: "1.3" }}>
                    Multi-Head System Service or Installation
                  </h3>
                  <p className="mb-5" style={{ fontSize: "1.1rem", color: "#d9e0eb", lineHeight: "1.7" }}>
                    Expert service and installation for all multi-zone configurations. All Melbourne suburbs. ARCtick licensed technicians.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Link href="/contact" className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                        style={{ backgroundColor: "white", color: "#062f3a", fontSize: "1rem", display: "inline-block" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f4f5f9"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                      >Request a Quote</Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <a href="tel:0405133761" className="px-5 py-3 text-decoration-none rounded-3 fw-bold border"
                        style={{ backgroundColor: "transparent", color: "white", borderColor: "white", fontSize: "1rem", display: "inline-block" }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                      ><i className="fas fa-phone me-2"></i> 0405 133 761</a>
                    </motion.div>
                  </div>
                  <p className="mt-5 mb-0" style={{ fontSize: "0.9rem", color: "#a8b8cc", letterSpacing: "0.5px" }}>
                    &#10003; ALL MELBOURNE SUBURBS &bull; &#10003; ARCTICK LICENSED &bull; &#10003; ALL BRANDS &bull; &#10003; 2–8 ZONE SYSTEMS
                  </p>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
