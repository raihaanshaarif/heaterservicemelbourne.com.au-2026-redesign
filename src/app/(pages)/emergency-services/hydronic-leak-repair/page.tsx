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
        style={{ boxShadow: "0 4px 20px rgba(185,28,28,0.08)", transition: "box-shadow 0.3s ease" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(185,28,28,0.15)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(185,28,28,0.08)"; }}
      >
        <div className="mb-4" style={{ fontSize: "2.5rem" }}><i className={icon} style={{ color: "#b91c1c" }}></i></div>
        <div className="mb-2" style={{ fontSize: "2.8rem", fontWeight: 800, color: "#b91c1c" }}>
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
      style={{ boxShadow: "0 4px 20px rgba(185,28,28,0.08)", transition: "box-shadow 0.3s ease" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(185,28,28,0.15)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(185,28,28,0.08)"; }}
    >
      <div className="mb-4" style={{ fontSize: "2.5rem" }}><i className={icon} style={{ color: "#b91c1c" }}></i></div>
      <h5 className="fw-bolder mb-3" style={{ color: "#1a1a1a", fontSize: "1.125rem" }}>{title}</h5>
      <p className="text-secondary mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{description}</p>
    </motion.div>
  );
};

const faqData = [
  { id: 1, question: "How do I know if my hydronic system has a hidden leak?", answer: "Key indicators of a hidden hydronic leak include: persistent or recurring pressure loss (needing regular system top-up), unexplained damp patches on floors or walls near pipe routes, warm spots on floors in properties without underfloor heating, an unusually high water bill, or a damp smell without visible water source. If you notice any of these signs, we can carry out a systematic pressure test to confirm whether and where a leak exists." },
  { id: 2, question: "Can you find a hydronic leak under a concrete slab without breaking it up?", answer: "Yes. We use pressure testing combined with thermal imaging and moisture detection to map the exact location of concealed slab leaks before any concrete is disturbed. This allows us to plan the most minimal and precise access point for the repair — or in some cases, to reroute a short section of pipe above the slab to avoid slab work entirely. We discuss options with you before any work proceeds." },
  { id: 3, question: "What causes hydronic leaks at radiator joints?", answer: "Radiator joint leaks are most commonly caused by age-related corrosion of the radiator valve tail or adapter fitting, overtightened or cross-threaded connections from a previous service, thermoplastic valve body cracking in older systems, or repeated system pressure cycling causing connection fatigue. We assess the extent of corrosion to determine whether a fitting replacement or a radiator section replacement is the more cost-effective repair." },
  { id: 4, question: "My pressure relief valve keeps discharging water — is this serious?", answer: "Yes. A pressure relief valve that discharges regularly is indicating that system pressure is repeatedly exceeding the safe limit. This is almost always caused by a failed expansion vessel — the vessel's internal membrane collapses and the system loses its ability to absorb thermal expansion pressure. Left unaddressed, repeated PRV discharge can damage the valve seat causing it to leak continuously, and excessive system pressure puts stress on all pipe joints, valves, and the boiler. We replace the expansion vessel and test system pressure properly." },
  { id: 5, question: "How long does a hydronic leak repair typically take?", answer: "Accessible joint, pipe, and visible radiator leaks are typically completed in 2 to 3 hours including system refill and pressure test. Boiler connection leaks take 2 to 4 hours depending on access and part availability. Concealed slab leaks require additional time for leak location — typically a full day including access, repair, concrete reinstatement, and testing. We provide a time estimate before any work begins." },
  { id: 6, question: "Can you repair a small hydronic leak yourself with a sealant product?", answer: "We strongly advise against using chemical leak sealants in hydronic heating systems. These products can block zone valves, pump impellers, heat exchanger passages, expansion vessel connections, and narrow radiator sections. The resulting blockages often cause significantly more damage than the original leak. All hydronic leaks should be repaired physically — joint resealing, fitting replacement, or pipe section replacement — not chemically sealed." },
  { id: 7, question: "What is the difference between a visible leak and an internal leak?", answer: "A visible leak produces water discharge at a specific point — a pipe joint, radiator bleed valve, PRV, or boiler connection. An internal leak (or concealed leak) may not produce visible water but will cause ongoing pressure loss. Internal leaks in underfloor slab systems, concealed pipe runs in walls, or within the boiler heat exchanger are diagnosed by pressure drop testing across isolated system sections." },
  { id: 8, question: "Will you need to drain the whole system to fix a single radiator leak?", answer: "Not in most cases. We isolate the affected radiator or circuit using thermostatic valves and lockshield valves before carrying out the repair. For radiator connection leaks, we can typically isolate and repair a single radiator without draining the full system. Where a pipe run needs to be fully isolated, we use point isolation to minimise the drained volume." },
  { id: 9, question: "Which Melbourne suburbs do you cover for hydronic leak repair?", answer: "We cover all Melbourne suburbs for hydronic leak detection and repair, including inner-city areas, and all northern, eastern, southeastern, southern, and western Melbourne suburbs. Slab leak investigations in properties with underfloor hydronic systems are covered across the full Melbourne metro area." },
  { id: 10, question: "Will a hydronic leak repair affect the rest of my system?", answer: "A correctly carried out repair should have no negative impact on the rest of the system. After all repair work is completed, we refill, bleed, and pressure test the entire system to confirm normal operating pressure, check all zones for correct heat distribution, and verify that the boiler is not showing any fault codes before we leave the property." },
];

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const handleFaqItem = (id: number): void => { setActiveFaq(id); };

  return (
    <>
      <DefaultBanner
        title="Hydronic Heating Leak Repair Melbourne – Expert Leak Detection, Pipe Repair and Pressure Testing"
        subTitle="Hydronic Leak Repair"
        titleLink="/emergency-services"
      />

      <section className="hero-installation py-5" style={{ backgroundColor: "#fff5f5" }}>
        <div className="container">
          <motion.div ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="row align-items-center gy-5">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <div className="mb-3 px-3 py-2 d-inline-block rounded-3" style={{ backgroundColor: "#fef2f2", border: "2px solid #d32f2f" }}>
                  <span style={{ color: "#b91c1c", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.05em" }}>
                    <i className="fas fa-tint me-2"></i>HYDRONIC LEAK DETECTION AND REPAIR
                  </span>
                </div>
                <h1 className="fw-bolder mb-4" style={{ fontSize: "3rem", color: "#7f1d1d", lineHeight: "1.2" }}>
                  Hydronic Heating Leak Repair Melbourne
                </h1>
                <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  Visible or hidden hydronic leak? Active drip, recurring pressure loss, unexplained damp, or warm floor without explanation? We locate every hydronic leak — above slab, below slab, within the boiler — and carry out a lasting repair with full pressure testing and system certification.
                </p>
                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a href="tel:0405133761" className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#d32f2f", fontSize: "1.05rem", display: "inline-block" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#b91c1c"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#d32f2f"; }}
                    ><i className="fas fa-phone me-2"></i> Call for Leak Repair Now</a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/contact" className="px-5 py-3 text-decoration-none rounded-3 fw-bold border"
                      style={{ backgroundColor: "white", color: "#d32f2f", borderColor: "#d32f2f", fontSize: "1rem", display: "inline-block" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fff5f5"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                    >Request Callback</Link>
                  </motion.div>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; SLAB LEAK DETECTION</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; VBA LICENSED</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; 24/7 AVAILABLE</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="position-relative">
                <Image src={ServiceDetailsImg1}
                  alt="Hydronic heating leak repair Melbourne – specialist detecting and repairing hydronic pipe leak"
                  className="img-fluid rounded-4" priority
                  style={{ width: "100%", height: "auto", boxShadow: "0 10px 40px rgba(185,28,28,0.15)" }} />
                <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{ maxWidth: "220px", backgroundColor: "#b91c1c", color: "white", boxShadow: "0 8px 24px rgba(185,28,28,0.2)" }}>
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>Leak Specialists</strong><br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>2500+ hydronic leaks fixed</span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="stats-banner py-5" style={{ backgroundColor: "#fff5f5", borderTop: "1px solid #fecaca", borderBottom: "1px solid #fecaca" }}>
        <div className="container">
          <div className="row gy-4">
            <StatCard icon="fas fa-calendar-check" value={15} suffix="+ yrs" label="Hydronic Experience" />
            <StatCard icon="fas fa-tint-slash" value={2500} suffix="+" label="Hydronic Leaks Fixed" />
            <StatCard icon="fas fa-star" value={4} suffix=".9" label="Star Rating" />
            <StatCard icon="fas fa-clock" value={24} suffix="/7" label="Emergency Availability" />
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
                      <div className="section-title__shape-1"><i className="fas fa-search"></i></div>
                      <h6 className="section-title__tagline">Leak Types We Fix</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-search"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Every Type of Hydronic Leak <span>Located and Repaired</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    Hydronic leaks range from visible drips at accessible joints to concealed losses beneath concrete slabs. Accurate diagnosis determines the correct repair approach. We use pressure testing, thermal imaging, and targeted moisture detection to locate all leak types before any repair work begins.
                  </p>
                </motion.div>

                <div className="my-5 py-5">
                  <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: "-100px" }} className="row gy-4">
                    {[
                      { icon: "fas fa-dot-circle", title: "Radiator Joint and Connection Leak", description: "Leaks at radiator valve tails, adapter fittings, and bleed valve connections are among the most common hydronic leak types. We assess corrosion extent, replace compromised fittings, and reseal all radiator connections to current standards with full pressure test confirming repair integrity." },
                      { icon: "fas fa-pipe-section", title: "Visible Pipe Leak", description: "Visible water discharge from above-slab pipe runs, boiler room pipe work, or exposed circuit pipes. We locate the exact failure point, isolate the affected section, and carry out a watertight repair — either fitting replacement for joint failures or section replacement for pipe body failures." },
                      { icon: "fas fa-fire", title: "Boiler Connection Leak", description: "Leaks at the boiler flow and return connections, fill valve, pressure gauge connections, and heat exchanger interfaces. Boiler connection leaks require careful isolation before repair. We carry out all boiler connection repairs in accordance with VBA licensing requirements and manufacturer specifications." },
                      { icon: "fas fa-layer-group", title: "Concealed Slab Leak Detection", description: "Underfloor hydronic leaks beneath concrete slabs require non-invasive detection methods before access can be planned. We use pressure drop testing to confirm and quantify the leak, combined with thermal imaging to map the pipe route and identify the probable leak zone. Slab access is planned to be as minimal as possible." },
                      { icon: "fas fa-tachometer-alt", title: "Expansion Vessel and PRV Leak", description: "A failed expansion vessel causes recurring pressure relief valve discharge, which can erode the PRV valve seat leading to continuous dripping. We replace the expansion vessel, test PRV function, and replace the PRV if it has been compromised by repeated discharge before it can reseal correctly." },
                      { icon: "fas fa-check-double", title: "Post-Repair Pressure Test and System Check", description: "After all leak repairs are completed, we refill the system, bleed all radiators, verify correct operating pressure across the full system, test all zone valves and thermostat operation, and confirm the boiler is running on all zones without fault codes before signing off the repair." },
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
                      <div className="section-title__shape-1"><i className="fas fa-thermometer-half"></i></div>
                      <h6 className="section-title__tagline">Leak Detection Methods</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-thermometer-half"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Precise Leak Location — <span>Before Any Repair Begins</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="row gy-3 mb-4">
                    {[
                      { icon: "fas fa-compress-arrows-alt", title: "Pressure Drop Testing", description: "The system is isolated in sections and pressure-tested with nitrogen to measure and locate pressure loss to a specific circuit section." },
                      { icon: "fas fa-thermometer-half", title: "Thermal Imaging", description: "Infrared camera scanning identifies temperature anomalies on floor and wall surfaces indicating the location of warm water escaping from a concealed pipe." },
                      { icon: "fas fa-water", title: "Moisture Detection", description: "Electronic moisture probes confirm the presence and extent of water migration through flooring and wall materials near suspect pipe routes." },
                      { icon: "fas fa-eye", title: "Visual Inspection", description: "Systematic inspection of all accessible pipe joints, fittings, radiator connections, boiler connections, and valves for signs of corrosion, mineral deposits, and active seepage." },
                      { icon: "fas fa-tools", title: "Circuit Isolation Testing", description: "Individual heating circuits are isolated and pressure tested independently to narrow a hidden leak to a specific zone before slab investigation is conducted." },
                      { icon: "fas fa-clipboard-check", title: "Post-Location Report", description: "After locating all leaks, we provide a written diagnosis and repair recommendation before any works commence, so you have full visibility of the scope and cost." },
                    ].map((item, i) => (
                      <div key={i} className="col-md-4">
                        <div className="d-flex align-items-start gap-3 p-3 rounded-3 h-100" style={{ backgroundColor: "#fff5f5", border: "1px solid #fecaca" }}>
                          <i className={item.icon} style={{ color: "#d32f2f", marginTop: "2px", fontSize: "1.2rem", flexShrink: 0 }}></i>
                          <div><strong style={{ color: "#7f1d1d", fontSize: "0.95rem" }}>{item.title}</strong><br />
                            <span className="text-secondary" style={{ fontSize: "0.85rem" }}>{item.description}</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-3" style={{ backgroundColor: "#fff5f5", borderLeft: "4px solid #d32f2f" }}>
                    <strong style={{ color: "#d32f2f", fontSize: "1rem" }}>
                      <i className="fas fa-ban me-2"></i>Do Not Use Chemical Leak Sealants — They Cause Additional Damage
                    </strong>
                    <p className="mb-0 mt-2 text-secondary" style={{ lineHeight: "1.7" }}>
                      Chemical sealants and stop-leak additives can block zone valves, pump impellers, heat exchanger passages, and expansion vessel connections — often causing significantly more damage than the original leak. All hydronic leaks should be repaired physically by a licensed technician.
                    </p>
                  </div>
                </motion.div>

                <div className="my-5"><WhyProfessionalMatters /></div>

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
                      <TextAnimation animationStyle="style1">Hydronic Leak Repair Questions <span>Answered</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#7f1d1d", fontSize: "1.3rem", borderBottom: "2px solid #d32f2f" }}>
                            <i className="fas fa-tint me-2" style={{ color: "#d32f2f" }}></i>Detection and Diagnosis
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
                          <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#7f1d1d", fontSize: "1.3rem", borderBottom: "2px solid #d32f2f" }}>
                            <i className="fas fa-wrench me-2" style={{ color: "#d32f2f" }}></i>Repair and Recovery
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
                  className="my-5 p-5 rounded-4 text-center" style={{ backgroundColor: "#d32f2f", boxShadow: "0 8px 32px rgba(185,28,28,0.25)" }}>
                  <h3 className="fw-bolder mb-4" style={{ fontSize: "2rem", color: "white", lineHeight: "1.3" }}>
                    Hydronic Leak? Get It Located and Fixed Today.
                  </h3>
                  <p className="mb-5" style={{ fontSize: "1.1rem", color: "#fecaca", lineHeight: "1.7" }}>
                    Expert hydronic leak detection and repair across all Melbourne suburbs. Slab leak specialists. VBA licensed. Pressure testing and full system certification included.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <a href="tel:0405133761" className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                        style={{ backgroundColor: "white", color: "#b91c1c", fontSize: "1.1rem", display: "inline-block" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fef2f2"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                      ><i className="fas fa-phone me-2"></i> 0405 133 761 — Hydronic Leak Repair</a>
                    </motion.div>
                  </div>
                  <p className="mt-5 mb-0" style={{ fontSize: "0.9rem", color: "#fecaca", letterSpacing: "0.5px" }}>
                    &#10003; SLAB LEAK DETECTION &bull; &#10003; THERMAL IMAGING &bull; &#10003; VBA LICENSED &bull; &#10003; ALL BOILER BRANDS &bull; &#10003; ALL MELBOURNE
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
