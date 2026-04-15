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
  { id: 1, question: "What systems do you rescue in an emergency breakdown?", answer: "We attend breakdown emergencies for all heating and cooling system types: split system air conditioning (all brands), gas ducted heating, hydronic heating (all boiler types), evaporative cooling, and cassette and ducted reverse cycle systems. We arrive with diagnostic tools and parts for every system type." },
  { id: 2, question: "How quickly will you arrive for a breakdown rescue?", answer: "We target a 4-hour response window for all system breakdown calls across Melbourne. For gas-related emergencies, we target 1 to 2 hours. In most cases our technicians reach the property within this window. We dispatch from multiple Melbourne locations to minimise travel time." },
  { id: 3, question: "Do you fix it in a single visit?", answer: "In the majority of breakdown call-outs, yes. Our vehicles carry a comprehensive parts inventory covering the most common failure-mode components for all major heating and cooling brands — capacitors, control boards, igniters, gas valves, sensors, fan motors and more. Parts that need to be ordered are typically sourced and fitted on the next business day." },
  { id: 4, question: "What time of year are breakdown rescues most needed?", answer: "The highest demand periods are mid-summer (December–February) when split systems and evaporative coolers fail under peak load, and mid-winter (June–August) when gas ducted and hydronic heating systems break down on the coldest nights. We maintain full staffing for emergency response throughout all peak seasons." },
  { id: 5, question: "Is there an after-hours call-out fee?", answer: "An after-hours fee applies for emergency call-outs outside standard business hours. We are transparent about this fee before dispatching — you will be advised of the charge when you call. All additional work is quoted clearly before we begin." },
  { id: 6, question: "Do you handle gas and refrigerant emergencies?", answer: "Yes. Gas emergencies are attended by VBA registered gas fitters who carry gas detection equipment and the tools required to locate and make safe any gas leak before repairing the fault. Refrigerant-related emergencies on split or ducted systems are handled by ARCtick licensed technicians in compliance with Australian regulations." },
  { id: 7, question: "What should I do before the technician arrives?", answer: "For gas-related faults: evacuate, don't operate switches, call the gas emergency line first. For water leaks from a hydronic system: isolate water supply to the boiler if safe. For cooling failures in summer: close blinds, use fans, move to the coolest room. For heating failures in winter: use safe portable heaters, extra blankets. Never attempt to repair any gas appliance yourself." },
  { id: 8, question: "Which Melbourne suburbs do you cover for 24/7 breakdown rescue?", answer: "We provide 24/7 breakdown rescue coverage across all Melbourne suburbs. This includes inner city, northern suburbs, eastern suburbs, southern suburbs, and western suburbs extending to the outer fringe. Call us any time to confirm availability for your area." },
  { id: 9, question: "Do you service commercial and rental properties?", answer: "Yes. We respond to emergency breakdown calls for residential homes, apartments, rental properties, commercial offices, retail premises, and light industrial sites. For property managers and real estate agencies, we offer priority service accounts with guaranteed response times." },
  { id: 10, question: "Is there a warranty on breakdown rescue repairs?", answer: "Yes. All repair work carried out during a breakdown rescue is backed by our standard parts and labour warranty. We will advise specific warranty terms before starting work and provide a written service report on completion." },
];

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const handleFaqItem = (id: number): void => { setActiveFaq(id); };

  return (
    <>
      <DefaultBanner
        title="24/7 AC and Heating Breakdown Rescue Melbourne – Emergency Response for All System Types"
        subTitle="24/7 Breakdown Rescue"
        titleLink="/emergency-services"
      />

      <section className="hero-installation py-5" style={{ backgroundColor: "#fff5f5" }}>
        <div className="container">
          <motion.div ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="row align-items-center gy-5">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <div className="mb-4 px-3 py-2 d-inline-block rounded-3" style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}>
                  <span style={{ color: "#b91c1c", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                    <i className="fas fa-exclamation-triangle me-2"></i>24/7 BREAKDOWN RESCUE — AVAILABLE NOW
                  </span>
                </div>
                <h1 className="fw-bolder mb-4" style={{ fontSize: "3rem", color: "#7f1d1d", lineHeight: "1.2" }}>
                  24/7 Heating &amp; Cooling Breakdown Rescue Melbourne
                </h1>
                <p className="text-secondary mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  Round-the-clock emergency breakdown rescue for all heating and cooling systems across Melbourne. Gas ducted, hydronic, split system, ducted reverse cycle, and evaporative cooling — if it breaks down, we get it running again fast.
                </p>
                <p className="text-secondary mb-5" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                  VBA licensed for gas. ARCtick licensed for refrigerants. All brands. Parts on board.
                </p>
                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a href="tel:0405133761" className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#d32f2f", fontSize: "1.05rem", display: "inline-block" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#b91c1c"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#d32f2f"; }}
                    ><i className="fas fa-phone me-2"></i> Call Breakdown Rescue Now</a>
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
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; 24/7 SERVICE</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; 4-HOUR RESPONSE</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; ALL SYSTEM TYPES</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="position-relative">
                <Image src={ServiceDetailsImg1}
                  alt="24/7 heating and cooling breakdown rescue Melbourne – emergency technician attending all-system breakdown"
                  className="img-fluid rounded-4" priority
                  style={{ width: "100%", height: "auto", boxShadow: "0 10px 40px rgba(185,28,28,0.15)" }} />
                <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{ maxWidth: "220px", backgroundColor: "#b91c1c", color: "white", boxShadow: "0 8px 24px rgba(185,28,28,0.2)" }}>
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>24/7 Breakdown Rescue</strong><br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>8000+ emergencies resolved</span>
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
            <StatCard icon="fas fa-bolt" value={4} suffix=" hrs" label="Target Response Time" />
            <StatCard icon="fas fa-star" value={4} suffix=".9" label="Star Rating" />
            <StatCard icon="fas fa-tools" value={8000} suffix="+" label="Breakdowns Resolved" />
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
                      <div className="section-title__shape-1"><i className="fas fa-exclamation-circle"></i></div>
                      <h6 className="section-title__tagline">Breakdown Types We Rescue</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-exclamation-circle"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Every Breakdown Type <span>Covered 24/7</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    A heating or cooling breakdown at the wrong time — peak summer, mid-winter, a heatwave, a cold snap — can be more than just an inconvenience. Our 24/7 breakdown rescue service covers every system type and every common failure scenario, with licensed technicians dispatched as quickly as possible.
                  </p>
                </motion.div>

                <div className="my-5 py-5">
                  <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: "-100px" }} className="row gy-4">
                    {[
                      { icon: "fas fa-power-off", title: "Complete System Failure", description: "When your heating or cooling system will not start at all, we diagnose and resolve the root cause — from failed control boards and tripped safety switches to seized compressors and failed igniters. We carry parts for all major brands and system types." },
                      { icon: "fas fa-thermometer-empty", title: "No Heating in Winter", description: "A gas ducted or hydronic heating system that stops producing heat on a cold Melbourne night is a genuine emergency. We prioritise heating failures in winter, especially for households with young children, elderly occupants, or medically vulnerable residents." },
                      { icon: "fas fa-sun", title: "No Cooling in Summer", description: "Split system and evaporative cooling failures during a Melbourne heatwave can be dangerous. We prioritise cooling emergency call-outs throughout summer and carry common fault parts for all major AC brands to restore operation as quickly as possible." },
                      { icon: "fas fa-tint", title: "Water Leak — Indoor Flooding", description: "Hydronic heating leaks and AC condensate overflows can cause significant water damage. We respond to both as emergencies — stopping the water, diagnosing the failure, and completing the repair to prevent ongoing damage to your property." },
                      { icon: "fas fa-bolt", title: "Electrical Fault / Circuit Breaker Tripping", description: "Any heating or cooling system that repeatedly trips its circuit breaker has an electrical fault that must be resolved before further use. We diagnose and repair electrical faults safely across all system types — ducted, hydronic, and split system." },
                      { icon: "fas fa-cloud-bolt", title: "Post-Storm and Power Surge Damage", description: "Lightning events and power surges frequently damage heating and cooling control systems and circuit boards. We carry out post-storm assessments, identify surge-damaged components, and restore system operation following weather events." },
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
                      <h6 className="section-title__tagline">Our Approach</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-shield-alt"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Why Our Breakdown Rescue <span>Gets Results</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    Our emergency vehicles are stocked as mobile workshops — carrying diagnostic tools, parts, and equipment for every system type we service. When we arrive at a breakdown, we diagnose accurately, access the right part from our van, and carry out the repair in the same visit wherever possible.
                  </p>
                  <div className="p-4 rounded-3" style={{ backgroundColor: "#fff5f5", borderLeft: "4px solid #d32f2f" }}>
                    <strong style={{ color: "#d32f2f", fontSize: "1rem" }}>
                      <i className="fas fa-certificate me-2"></i>VBA Licensed Gas • ARCtick Licensed Refrigerants
                    </strong>
                    <p className="mb-0 mt-2 text-secondary" style={{ lineHeight: "1.7" }}>
                      Gas appliance emergencies require VBA registered gas fitters — we hold current registration. AC and refrigerant emergencies require ARCtick licensing — all our AC technicians hold current licences. Every emergency repair is fully compliant with Australian safety and licensing requirements.
                    </p>
                  </div>
                </motion.div>

                <div className="my-5"><WhyProfessionalMatters /></div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }} className="my-5 p-5 rounded-4" style={{ backgroundColor: "#fff5f5", border: "1px solid #fecaca" }}>
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-map-marker-alt"></i></div>
                      <h6 className="section-title__tagline">Rescue Coverage Area</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-map-marker-alt"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">24/7 Breakdown Rescue Across <span>All Melbourne</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="row gy-3">
                    {[
                      { title: "Inner Melbourne and CBD", sub: "24/7 coverage, fast response across inner suburbs" },
                      { title: "Northern Suburbs", sub: "Preston, Reservoir, Epping, Craigieburn and beyond" },
                      { title: "Eastern Suburbs", sub: "Box Hill, Ringwood, Croydon, Knox and beyond" },
                      { title: "Southern Suburbs", sub: "St Kilda, Brighton, Frankston, Mornington and beyond" },
                      { title: "Western Suburbs", sub: "Footscray, Sunshine, Werribee, Melton and beyond" },
                      { title: "All Systems All Brands", sub: "Gas ducted, hydronic, split systems, evaporative" },
                    ].map((item, i) => (
                      <div key={i} className="col-md-6">
                        <div className="d-flex align-items-start" style={{ gap: "12px" }}>
                          <i className="fas fa-check-circle" style={{ color: "#d32f2f", fontSize: "1.25rem", flexShrink: 0, marginTop: "2px" }}></i>
                          <div>
                            <strong style={{ color: "#7f1d1d" }}>{item.title}</strong>
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
                      <TextAnimation animationStyle="style1">Breakdown Rescue Questions <span>Answered</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#7f1d1d", fontSize: "1.3rem", borderBottom: "2px solid #d32f2f" }}>
                            <i className="fas fa-exclamation-triangle me-2" style={{ color: "#d32f2f" }}></i>The Rescue Service
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
                            <i className="fas fa-tools me-2" style={{ color: "#d32f2f" }}></i>Coverage and Repairs
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
                    System Down? Call Our Breakdown Rescue Line.
                  </h3>
                  <p className="mb-5" style={{ fontSize: "1.1rem", color: "#fecaca", lineHeight: "1.7" }}>
                    24/7 all-system breakdown rescue across all Melbourne suburbs. Target 4-hour response. All brands, all system types.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <a href="tel:0405133761" className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                        style={{ backgroundColor: "white", color: "#b91c1c", fontSize: "1.1rem", display: "inline-block" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fef2f2"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                      ><i className="fas fa-phone me-2"></i> 0405 133 761 — 24/7 Rescue Line</a>
                    </motion.div>
                  </div>
                  <p className="mt-5 mb-0" style={{ fontSize: "0.9rem", color: "#fecaca", letterSpacing: "0.5px" }}>
                    &#10003; GAS DUCTED &bull; &#10003; HYDRONIC &bull; &#10003; SPLIT SYSTEM &bull; &#10003; EVAPORATIVE &bull; &#10003; ALL BRANDS &bull; &#10003; ALL MELBOURNE
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
