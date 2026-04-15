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
  { id: 1, question: "Why is my gas ducted heater not producing heat?", answer: "The most common causes are a pilot light or ignition failure, a tripped limit switch due to overheating from a dirty filter, a faulty thermostat, or a gas supply issue. Our technicians carry diagnostic equipment to identify the fault on the first visit and carry out most repairs the same day." },
  { id: 2, question: "How much does a gas heater repair cost in Melbourne?", answer: "Repair costs depend on the fault and the part required. We provide fully fixed-price, itemised quotes before any work begins. Common repairs such as igniter replacement, thermocouple replacement, and circuit board faults are typically completed for a transparent flat rate." },
  { id: 3, question: "Do you repair all brands of gas ducted heaters?", answer: "Yes. We repair all major brands including Brivis, Rinnai, Braemar, Vulcan, Bonaire, Carrier, and Daikin. Our vans are stocked with parts for the most common units and models, allowing us to complete most repairs on the first visit." },
  { id: 4, question: "How quickly can you repair my gas heater?", answer: "We offer same-day repair service across Melbourne for most faults. If your heater fails in winter, we prioritise urgent callouts. For emergency heating failures outside business hours, our 24/7 emergency team is available." },
  { id: 5, question: "Should I repair or replace my gas ducted heater?", answer: "If your system is under 10 years old and the repair cost is less than half the replacement cost, repair is usually the better option. For systems over 15 years old with a major component failure such as a heat exchanger, replacement often offers better value long-term. We provide honest, no-pressure advice." },
  { id: 6, question: "Why is my gas heater producing uneven heat across zones?", answer: "Uneven heating is usually caused by blocked ducts, failed zone dampers, incorrect balancing, or a system sized incorrectly for the home. We inspect the full duct network and zone controls to diagnose and fix the root cause." },
  { id: 7, question: "What does it mean if my gas heater is making banging or rattling noises?", answer: "Banging at startup is usually thermal expansion of the heat exchanger and may indicate restricted airflow or a developing crack. Rattling can indicate loose panels or debris in the duct. Both should be investigated by a licensed technician promptly." },
  { id: 8, question: "Do you provide a warranty on repairs?", answer: "Yes. All parts we supply carry manufacturer warranty, and our labour is guaranteed. If a fault recurs related to the same repair, we will return and rectify it at no additional charge." },
  { id: 9, question: "Can you repair my gas heater the same day I call?", answer: "In most cases, yes. We carry a wide range of replacement parts on our service vans and aim to complete repairs on the same visit. Our booking team will advise you of availability when you call." },
  { id: 10, question: "Do you repair gas heaters in rental properties?", answer: "Yes. We provide gas heater repair services for rental properties across Melbourne on behalf of landlords and property managers. We can provide written reports and gas compliance documentation as required for rental safety obligations." },
];

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const handleFaqItem = (id: number): void => { setActiveFaq(id); };

  return (
    <>
      <DefaultBanner
        title="Gas Heater Repair Melbourne – Same-Day Service by Licensed Gas Fitters"
        subTitle="Gas Ducted Heating Repair"
        titleLink="/gas-ducted-heating"
      />

      {/* HERO SECTION */}
      <section className="hero-installation py-5" style={{ backgroundColor: "#f4f5f9" }}>
        <div className="container">
          <motion.div ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="row align-items-center gy-5">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <h1 className="fw-bolder mb-4" style={{ fontSize: "3rem", color: "#062f3a", lineHeight: "1.2" }}>
                  Gas Heater Repair Melbourne
                </h1>
                <p className="text-secondary mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  Fast, reliable gas ducted heating repairs across all Melbourne suburbs. Our VBA licensed gas fitters diagnose and fix all faults — from ignition failures and no-heat faults to zone control issues and gas valve problems — with same-day availability.
                </p>
                <p className="text-secondary mb-5" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                  Fixed-price quotes before any work begins. Fully stocked vans. Most repairs completed on the first visit.
                </p>
                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/contact" className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#fd5523", fontSize: "1rem" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#e54a1f"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fd5523"; }}
                    >
                      Book a Repair
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a href="tel:0405133761" className="px-5 py-3 text-decoration-none rounded-3 fw-bold border"
                      style={{ backgroundColor: "white", color: "#fd5523", borderColor: "#fd5523", fontSize: "1rem" }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f4f5f9"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "white"; }}
                    >
                      <i className="icon-phone-call"></i> Call Now
                    </a>
                  </motion.div>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#f0fdf4", color: "#166534", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; SAME-DAY SERVICE</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#eff6ff", color: "#1e40af", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; FIXED-PRICE REPAIRS</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#f0f9ff", color: "#0369a1", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; ALL BRANDS</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="position-relative">
                <Image src={ServiceDetailsImg1}
                  alt="Gas heater repair Melbourne – licensed gas fitter diagnosing a gas ducted heating fault"
                  className="img-fluid rounded-4" priority
                  style={{ width: "100%", height: "auto", boxShadow: "0 10px 40px rgba(26,26,26,0.1)" }} />
                <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{ maxWidth: "220px", backgroundColor: "#1a3a52", color: "white", boxShadow: "0 8px 24px rgba(26,26,26,0.12)" }}>
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>Repair Specialists</strong><br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>2000+ repairs completed</span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="stats-banner py-5" style={{ backgroundColor: "#f4f5f9", borderTop: "1px solid #e6e6e6", borderBottom: "1px solid #e6e6e6" }}>
        <div className="container">
          <div className="row gy-4">
            <StatCard icon="fas fa-clock" value={15} suffix="+" label="Years Experience" />
            <StatCard icon="fas fa-wrench" value={2000} suffix="+" label="Repairs Completed" />
            <StatCard icon="fas fa-star" value={4} suffix=".9" label="Star Rating" />
            <StatCard icon="fas fa-calendar-day" value={1} suffix=" Day" label="Same-Day Service" />
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
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-flame"></i></div>
                      <h6 className="section-title__tagline">Expert Diagnosis</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-flame"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Common Gas Ducted Heating <span>Faults We Fix</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    Gas ducted heating faults range from simple ignition failures to complex zone control and heat exchanger issues. Our licensed gas fitters use calibrated diagnostic tools to identify the root cause quickly and carry the most common replacement parts on every van.
                  </p>
                  <p className="text-secondary" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    <strong style={{ color: "#1a1a1a" }}>Our commitment:</strong> We provide a fixed-price quote after diagnosis and before any repair work begins. No hidden charges, no estimates that change after the job.
                  </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-star"></i></div>
                      <h6 className="section-title__tagline">Repair Services</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-star"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Gas Heater Faults We <span>Diagnose and Repair</span></TextAnimation>
                    </h2>
                  </div>
                  <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: "-100px" }} className="row gy-4">
                    {[
                      { icon: "fas fa-thermometer-empty", title: "No Heat Output", description: "The most reported fault — your system runs but no warm air comes out. This is typically caused by a faulty igniter, failed thermocouple, tripped limit switch, or gas supply issue. We diagnose and fix on the spot." },
                      { icon: "fas fa-fire", title: "Ignition Failure", description: "If your heater fails to ignite or ignites only intermittently, the igniter, gas valve, or control board may be at fault. We carry replacement igniters and thermocouples for all major brands to restore ignition reliably." },
                      { icon: "fas fa-th-large", title: "Uneven Zone Heating", description: "Rooms on one side of the house staying cold while others overheat points to failed zone dampers, blocked ducts, or an unbalanced system. We inspect and restore full zone function across your home." },
                      { icon: "fas fa-volume-up", title: "Unusual Noises", description: "Banging at startup, rattling during operation, or rumbling from the unit are warning signs. Banging may indicate a cracking heat exchanger — a safety concern requiring immediate inspection by a licensed technician." },
                      { icon: "fas fa-dollar-sign", title: "High Gas Bills", description: "A sudden increase in gas consumption usually means your system is running inefficiently — often due to dirty burners, a faulty gas valve supplying excess fuel, or a failed economiser. We restore efficient combustion." },
                      { icon: "fas fa-sliders-h", title: "Thermostat Faults", description: "If your heater runs continuously, short-cycles, or fails to respond to the thermostat, the fault may be with the thermostat itself, the wiring, or the control board. We diagnose the whole control circuit." },
                    ].map((feature, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <FadeInAdvanced variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"} delay={(index + 1) * 50} duration={600}>
                          <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                        </FadeInAdvanced>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* How it works */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }} className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-cogs"></i></div>
                      <h6 className="section-title__tagline">Our Process</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-cogs"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">How Our Gas Heater <span>Repair Process Works</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    When we arrive, our technician carries out a thorough diagnostic inspection of your entire gas ducted heating system — not just the symptom you described. We check combustion, gas pressure, electrical controls, heat exchanger integrity, and zone function before quoting the repair.
                  </p>
                  <div className="p-4 rounded-3" style={{ backgroundColor: "#f4f5f9", borderLeft: "4px solid #fd5523" }}>
                    <strong style={{ color: "#fd5523", fontSize: "1rem" }}>
                      <i className="fas fa-lightbulb me-2" style={{ color: "#fd5523" }}></i>Fixed Price Before We Start
                    </strong>
                    <p className="mb-0 mt-2 text-secondary" style={{ lineHeight: "1.7" }}>
                      After diagnosis, we explain the fault clearly and provide a fixed-price repair quote. We only proceed once you approve. No surprises on the invoice.
                    </p>
                  </div>
                </motion.div>

                {/* Why Professional Matters */}
                <div className="my-5">
                  <WhyProfessionalMatters />
                </div>

                {/* Service Area */}
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
                      <TextAnimation animationStyle="style1">Gas Heater Repairs Across All <span>Melbourne Suburbs</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-0" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    <strong style={{ color: "#1a1a1a" }}>We repair gas ducted heaters across all of Greater Melbourne</strong>, from inner-city homes and apartments to outer suburban properties. Same-day availability in most areas during business hours.
                  </p>
                  <div className="row gy-3 mt-4">
                    {[
                      { title: "All Melbourne Suburbs", sub: "Inner city, north, south, east, western suburbs" },
                      { title: "Same-Day Availability", sub: "Most repairs booked and completed same day" },
                      { title: "Rental Property Repairs", sub: "Compliance documentation available on request" },
                      { title: "All Brands Covered", sub: "Brivis, Rinnai, Braemar, Vulcan, Bonaire and more" },
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

                {/* Process */}
                <div className="my-5">
                  <ProcessOne />
                </div>

                {/* FAQ */}
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
                      <TextAnimation animationStyle="style1">Gas Heater Repair Questions <span>Answered</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#062f3a", fontSize: "1.3rem", borderBottom: "2px solid #fd5523" }}>
                            <i className="fas fa-wrench me-2" style={{ color: "#fd5523" }}></i>Repair Process
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {faqData.slice(0, 5).map((item) => (
                              <FadeInAdvanced key={item.id} variant="fadeInLeft" delay={item.id * 50} duration={100}
                                className={`accrodion ${activeFaq === item.id ? "active" : ""}`}>
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
                            <i className="fas fa-lightbulb me-2" style={{ color: "#fd5523" }}></i>Brands and Coverage
                          </h4>
                          <div className="accrodion-grp faq-one-accrodion">
                            {faqData.slice(5, 10).map((item) => (
                              <FadeInAdvanced key={item.id} variant="fadeInRight" delay={(item.id * 50) / 2} duration={100}
                                className={`accrodion ${activeFaq === item.id ? "active" : ""}`}>
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

                {/* Final CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}
                  className="my-5 p-5 rounded-4 text-center" style={{ backgroundColor: "#062f3a", boxShadow: "0 8px 32px rgba(6,47,58,0.15)" }}>
                  <h3 className="fw-bolder mb-4" style={{ fontSize: "2rem", color: "white", lineHeight: "1.3" }}>
                    Gas Ducted Heater Not Working?
                  </h3>
                  <p className="mb-5" style={{ fontSize: "1.1rem", color: "#d9e0eb", lineHeight: "1.7" }}>
                    Book a same-day repair with our licensed gas fitters. Fixed-price quotes after diagnosis, no surprises on the invoice.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Link href="/contact" className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                        style={{ backgroundColor: "white", color: "#062f3a", fontSize: "1rem", display: "inline-block" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f4f5f9"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                      >
                        Book a Repair
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <a href="tel:0405133761" className="px-5 py-3 text-decoration-none rounded-3 fw-bold border"
                        style={{ backgroundColor: "transparent", color: "white", borderColor: "white", fontSize: "1rem", display: "inline-block" }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                      >
                        <i className="fas fa-phone me-2"></i> 0405 133 761
                      </a>
                    </motion.div>
                  </div>
                  <p className="mt-5 mb-0" style={{ fontSize: "0.9rem", color: "#a8b8cc", letterSpacing: "0.5px" }}>
                    &#10003; ALL MELBOURNE SUBURBS &bull; &#10003; VBA LICENSED &bull; &#10003; SAME-DAY SERVICE &bull; &#10003; FIXED PRICE
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
