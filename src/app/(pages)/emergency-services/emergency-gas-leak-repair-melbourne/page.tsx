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
  { id: 1, question: "What should I do immediately if I smell gas?", answer: "Leave the property immediately — do not operate any light switches, power outlets, or appliances on your way out. Do not use your mobile phone inside the property. Once outside and at a safe distance, call the gas emergency line (1800 GAS EMERGENCY / 1800 427 364) and then call us on 0405 133 761. Do not re-enter the property until a licensed gas fitter has confirmed the leak is sealed and the area is safe." },
  { id: 2, question: "How quickly will you respond to a gas leak call?", answer: "Gas leak emergencies receive our highest priority. We target a 1 to 2 hour response across the Melbourne metro area. Our gas fitters carry calibrated gas leak detection equipment and the tools required to locate, isolate, and repair the leak in a single visit in the majority of cases." },
  { id: 3, question: "Is a gas smell always a leak from the appliance?", answer: "Not necessarily. Gas odour can originate from the supply pipe, flexible connection hoses, appliance isolation valves, internal burner components, or external supply infrastructure. We carry professional gas detection instruments that pinpoint the exact source of any leak — not just identify that one exists." },
  { id: 4, question: "Can you detect a gas leak if I can no longer smell it?", answer: "Yes. Gas odour perception varies significantly between individuals and can become less detectable when a person has been continuously exposed to a low-level leak. Our electronic gas detection instruments measure gas concentration accurately and can identify leaks that are below the human detection threshold." },
  { id: 5, question: "What gas appliances do you repair after a leak is found?", answer: "We repair all gas appliances connected to residential and commercial premises — gas ducted heaters, hydronic heating boilers, gas hot water systems, gas cooktops and ovens, gas fireplaces and log fires, and external gas connections. All repair work is carried out to current Australian gas safety standards by VBA registered gas fitters." },
  { id: 6, question: "Do I need to notify my gas distributor about a leak?", answer: "If the leak is in the gas distribution network supply pipe or meter — rather than in your internal appliances or fittings — the distributor (not us) needs to make the supply side safe. We coordinate this process and can advise on the correct notification procedure. For leaks in your internal gas system, we carry out the repair directly." },
  { id: 7, question: "Will I receive a compliance certificate after the gas leak repair?", answer: "Yes. All gas repair work carried out by our VBA registered gas fitters is accompanied by a compliance certificate (Certificate of Compliance — Electrical Work form, or equivalent gas safety certificate) confirming the work meets Australian gas safety requirements. This is required for insurance and property records." },
  { id: 8, question: "What causes gas leaks in residential properties?", answer: "Common causes include aged or corroded gas fittings and flexible connection hoses (which typically need replacement every 10 years), failed appliance gas valves, damaged supply pipes from building work, stress cracks in underground gas lines, and poorly installed or maintained appliance connections. We assess all of these as part of our leak investigation." },
  { id: 9, question: "Which Melbourne suburbs do you cover for gas leak emergency response?", answer: "We cover all Melbourne suburbs for emergency gas leak response — inner city, all northern, eastern, southern, and western suburbs. Gas leak calls receive 1 to 2 hour priority response across the entire Melbourne metro area. Call our emergency line any time, day or night." },
  { id: 10, question: "Is it safe to re-enter my home after you repair the gas leak?", answer: "We will advise you explicitly when it is safe to re-enter. After completing the repair and pressure-testing the system, we ventilate the affected areas and perform a final sweep with our detection instrument to confirm gas concentration has returned to safe levels before clearing the property for re-entry." },
];

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const handleFaqItem = (id: number): void => { setActiveFaq(id); };

  return (
    <>
      <DefaultBanner
        title="Emergency Gas Leak Repair Melbourne – 24/7 Urgent Gas Leak Detection and Safe Repair"
        subTitle="Emergency Gas Leak Repair"
        titleLink="/emergency-services"
      />

      <section className="hero-installation py-5" style={{ backgroundColor: "#fff5f5" }}>
        <div className="container">
          <motion.div ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="row align-items-center gy-5">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <div className="mb-3 px-3 py-2 d-inline-block rounded-3" style={{ backgroundColor: "#fef2f2", border: "2px solid #d32f2f" }}>
                  <span style={{ color: "#b91c1c", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.05em" }}>
                    <i className="fas fa-exclamation-triangle me-2"></i>GAS EMERGENCY — EVACUATE AND CALL IMMEDIATELY
                  </span>
                </div>
                <h1 className="fw-bolder mb-4" style={{ fontSize: "3rem", color: "#7f1d1d", lineHeight: "1.2" }}>
                  Emergency Gas Leak Repair Melbourne
                </h1>
                <div className="p-4 mb-4 rounded-3" style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}>
                  <p className="mb-0 fw-bold" style={{ color: "#7f1d1d", fontSize: "1rem", lineHeight: "1.7" }}>
                    <i className="fas fa-exclamation-circle me-2"></i>
                    If you can smell gas: leave immediately, do not touch switches, call the gas emergency line (1800 427 364), then call us. We will attend within 1–2 hours.
                  </p>
                </div>
                <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  24/7 emergency gas leak detection and repair across Melbourne. From appliance connection leaks to pipe faults, our VBA licensed gas fitters locate every gas leak with professional detection instruments and repair it safely to compliance.
                </p>
                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a href="tel:0405133761" className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#d32f2f", fontSize: "1.05rem", display: "inline-block" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#b91c1c"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#d32f2f"; }}
                    ><i className="fas fa-phone me-2"></i> Call Gas Emergency Line Now</a>
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
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; 1–2 HR PRIORITY RESPONSE</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; VBA LICENSED</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; COMPLIANCE CERT</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="position-relative">
                <Image src={ServiceDetailsImg1}
                  alt="Emergency gas leak repair Melbourne – VBA licensed gas fitter using detection equipment to locate and fix gas leak"
                  className="img-fluid rounded-4" priority
                  style={{ width: "100%", height: "auto", boxShadow: "0 10px 40px rgba(185,28,28,0.15)" }} />
                <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{ maxWidth: "220px", backgroundColor: "#b91c1c", color: "white", boxShadow: "0 8px 24px rgba(185,28,28,0.2)" }}>
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>Gas Leak Specialists</strong><br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>3000+ gas leaks fixed safely</span>
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
            <StatCard icon="fas fa-clock" value={24} suffix="/7" label="Emergency Availability" />
            <StatCard icon="fas fa-bolt" value={1} suffix=" hr" label="Priority Response Target" />
            <StatCard icon="fas fa-star" value={4} suffix=".9" label="Star Rating" />
            <StatCard icon="fas fa-tools" value={3000} suffix="+" label="Gas Leaks Fixed Safely" />
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
                      <div className="section-title__shape-1"><i className="fas fa-fire-extinguisher"></i></div>
                      <h6 className="section-title__tagline">Leak Sources We Locate</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-fire-extinguisher"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Every Gas Leak Source <span>Detected and Fixed</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    Gas leaks in residential and commercial properties originate from a range of sources. Our calibrated electronic gas detection instruments locate the exact source — not just confirm that gas is present — allowing us to carry out a precise, targeted repair rather than a speculative one.
                  </p>
                </motion.div>

                <div className="my-5 py-5">
                  <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: "-100px" }} className="row gy-4">
                    {[
                      { icon: "fas fa-search", title: "Professional Gas Leak Detection", description: "We use calibrated electronic gas detection instruments to measure gas concentration at all potential leak points — pipe joints, valve seats, appliance connections, and flexible hoses. This allows us to pinpoint the exact source and extent of any leak quickly and accurately." },
                      { icon: "fas fa-pipe-section", title: "Gas Pipe and Fitting Leaks", description: "Internal gas pipework can develop leaks at joints, bends, and fittings — particularly in older Melbourne homes with aged copper or galvanised pipe systems. We pressure-test the entire internal pipe system, locate leaks, and carry out repairs to current compliance standards." },
                      { icon: "fas fa-link", title: "Flexible Connection Hose Leaks", description: "The flexible gas hoses connecting appliances to the gas supply have a service life of 10 years. Aged, kinked, or damaged hoses are among the most common sources of residential gas leaks. We replace all aged flexible hoses as part of our gas leak response." },
                      { icon: "fas fa-fire", title: "Appliance Gas Valve Leaks", description: "Gas valve seats in heaters, cooktops, ovens, and hot water systems can develop leaks through wear, corrosion, or debris contamination. We test all appliance valves during our leak investigation and replace any that do not seal correctly." },
                      { icon: "fas fa-stopwatch", title: "Appliance Isolation Valve Leaks", description: "The isolation valve behind an appliance can develop packing leaks over time, particularly in older properties. These leaks are often slow and difficult to detect by smell alone. We test all isolation valves with detection instruments and replace any that are leaking." },
                      { icon: "fas fa-check-circle", title: "Post-Repair Safety Testing and Certificate", description: "After completing all repairs, we pressure-test the entire internal gas system to confirm its integrity, perform a final detection sweep to confirm zero gas concentration, and issue a Certificate of Compliance for all repair work — required for insurance and property compliance records." },
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
                      <div className="section-title__shape-1"><i className="fas fa-shield-alt"></i></div>
                      <h6 className="section-title__tagline">What To Do</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-shield-alt"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">If You Smell Gas — <span>Act Immediately</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="row gy-3 mb-4">
                    {[
                      { step: "1", text: "Leave the building immediately. Do not stop to collect belongings." },
                      { step: "2", text: "Do not operate any light switches, power points, or appliances." },
                      { step: "3", text: "Do not use your mobile phone inside the building." },
                      { step: "4", text: "Once outside, call the gas emergency line: 1800 427 364." },
                      { step: "5", text: "Call our emergency line: 0405 133 761 — we target 1–2 hour response." },
                      { step: "6", text: "Do not re-enter until a licensed gas fitter confirms the area is safe." },
                    ].map((item, i) => (
                      <div key={i} className="col-md-6">
                        <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ backgroundColor: "#fff5f5", border: "1px solid #fecaca" }}>
                          <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                            style={{ width: "36px", height: "36px", backgroundColor: "#d32f2f", color: "white", fontWeight: 800, fontSize: "1rem" }}>{item.step}</div>
                          <p className="mb-0 text-secondary" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-3" style={{ backgroundColor: "#fff5f5", borderLeft: "4px solid #d32f2f" }}>
                    <strong style={{ color: "#d32f2f", fontSize: "1rem" }}>
                      <i className="fas fa-certificate me-2"></i>VBA Licensed Gas Fitters — Compliance Certificate Issued
                    </strong>
                    <p className="mb-0 mt-2 text-secondary" style={{ lineHeight: "1.7" }}>
                      All gas leak repair work is performed by VBA registered gas fitters and accompanied by a Certificate of Compliance. This is a legal requirement in Victoria and is required for insurance claims and property compliance records.
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
                      <TextAnimation animationStyle="style1">Gas Leak Emergency Questions <span>Answered</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#7f1d1d", fontSize: "1.3rem", borderBottom: "2px solid #d32f2f" }}>
                            <i className="fas fa-exclamation-triangle me-2" style={{ color: "#d32f2f" }}></i>What to Do and Detection
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
                            <i className="fas fa-wrench me-2" style={{ color: "#d32f2f" }}></i>Repair and Compliance
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
                    Smell Gas? Evacuate and Call Now.
                  </h3>
                  <p className="mb-5" style={{ fontSize: "1.1rem", color: "#fecaca", lineHeight: "1.7" }}>
                    24/7 gas leak emergency response across all Melbourne suburbs. VBA licensed gas fitters. 1 to 2 hour priority response. Compliance certificate issued.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <a href="tel:0405133761" className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                        style={{ backgroundColor: "white", color: "#b91c1c", fontSize: "1.1rem", display: "inline-block" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fef2f2"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                      ><i className="fas fa-phone me-2"></i> 0405 133 761 — Gas Leak Emergency</a>
                    </motion.div>
                  </div>
                  <p className="mt-5 mb-0" style={{ fontSize: "0.9rem", color: "#fecaca", letterSpacing: "0.5px" }}>
                    &#10003; 24/7 AVAILABLE &bull; &#10003; 1–2 HR RESPONSE &bull; &#10003; VBA LICENSED &bull; &#10003; COMPLIANCE CERT &bull; &#10003; ALL MELBOURNE
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
