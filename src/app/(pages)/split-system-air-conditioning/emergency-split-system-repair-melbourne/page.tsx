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
  { id: 1, question: "What qualifies as an emergency split system repair?", answer: "An emergency repair is warranted when your system fails completely during extreme weather (heatwave or cold snap), when there is a visible refrigerant leak, when the unit is tripping the circuit breaker or causing electrical issues, when water is leaking uncontrolled inside the property, or when the system produces burning smells or unusual sounds that could indicate an imminent component failure." },
  { id: 2, question: "How quickly can you respond to an emergency call?", answer: "We target a 4-hour response window for all emergency split system calls across our Melbourne service area. In most cases we arrive within 2 to 4 hours of your call. Our technicians carry a comprehensive range of parts for all major brands, allowing same-visit repairs in the majority of emergency call-outs." },
  { id: 3, question: "Do you charge extra for after-hours emergency calls?", answer: "An after-hours call-out fee applies for emergency jobs outside standard business hours. We are transparent about these charges before any work begins. We will provide you with a clear indication of costs before dispatching a technician." },
  { id: 4, question: "What should I do if I smell a chemical odour from my split system?", answer: "Turn the system off immediately and ventilate the area by opening windows and doors. Do not smoke or use open flames near the unit. Refrigerant leaks can cause respiratory irritation and are harmful at high concentrations. Call us immediately for emergency assessment. Our technicians carry gas detection equipment to confirm the source and severity of any leak." },
  { id: 5, question: "My split system is tripping the circuit breaker – is this an emergency?", answer: "Yes. A unit that repeatedly trips its circuit breaker has a fault that must be diagnosed before the system is used again. Running a unit through a tripping circuit breaker can damage the compressor, contaminate the refrigerant circuit, and create a fire risk. Switch the system off at the breaker and call for emergency service." },
  { id: 6, question: "Can you repair my system on the same day?", answer: "In the majority of emergency call-outs, yes. Our technicians carry a comprehensive parts inventory for common failure components — capacitors, contactors, control boards, fan motors, and sensors — for all major brands. For less common parts or compressor replacements, we may need to source components, in which case we provide a same-day assessment and a firm schedule for the repair." },
  { id: 7, question: "My system stopped working during a heatwave – what should I do while I wait?", answer: "Close blinds and curtains to reduce heat gain. Use battery-powered fans for air circulation. Stay hydrated. Move to the coolest room in the house. If the property contains elderly or medically vulnerable occupants, consider a temporary move to an air-conditioned location while awaiting repair. We prioritise emergency calls involving vulnerable occupants." },
  { id: 8, question: "What brands do you cover for emergency repairs?", answer: "We provide emergency repair services for all major split system brands including Daikin, Mitsubishi Electric, Fujitsu, Panasonic, Samsung, LG, Hitachi, and Carrier. Our technicians hold brand-specific training and carry diagnostic equipment for all these manufacturers." },
  { id: 9, question: "Is there a warranty on emergency repairs?", answer: "Yes. All emergency repair work is backed by our standard repair warranty covering parts and labour. We use genuine manufacturer-approved parts wherever possible. We will detail the warranty terms for any repair before starting work." },
  { id: 10, question: "Which Melbourne suburbs do you cover for 24/7 emergency AC repairs?", answer: "We cover all Melbourne suburbs for emergency split system repair. This includes inner city, all northern suburbs, southern suburbs, eastern suburbs, and the western suburbs. Call us any time of day or night for a same-day response." },
];

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const handleFaqItem = (id: number): void => { setActiveFaq(id); };

  return (
    <>
      <DefaultBanner
        title="Emergency Split System Repair Melbourne – 24/7 AC Breakdown Response"
        subTitle="Emergency AC Repair"
        titleLink="/split-system-air-conditioning"
      />

      <section className="hero-installation py-5" style={{ backgroundColor: "#fff5f5" }}>
        <div className="container">
          <motion.div ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="row align-items-center gy-5">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <div className="mb-4 px-3 py-2 d-inline-block rounded-3" style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}>
                  <span style={{ color: "#b91c1c", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                    <i className="fas fa-exclamation-triangle me-2"></i>24/7 EMERGENCY SERVICE AVAILABLE NOW
                  </span>
                </div>
                <h1 className="fw-bolder mb-4" style={{ fontSize: "3rem", color: "#7f1d1d", lineHeight: "1.2" }}>
                  Emergency Split System Repair Melbourne
                </h1>
                <p className="text-secondary mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  24/7 emergency response for split system and air conditioning breakdowns across all Melbourne suburbs. Complete system failures, refrigerant leaks, electrical faults, compressor failures, and water leaks — we arrive fast and fix it right.
                </p>
                <p className="text-secondary mb-5" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                  ARCtick licensed. All brands. Target 4-hour response time.
                </p>
                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a href="tel:0405133761" className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#d32f2f", fontSize: "1.05rem", display: "inline-block" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#b91c1c"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#d32f2f"; }}
                    ><i className="fas fa-phone me-2"></i> Call Emergency Line Now</a>
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
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; 24/7 EMERGENCY</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; 4-HOUR RESPONSE</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; ALL BRANDS</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="position-relative">
                <Image src={ServiceDetailsImg1}
                  alt="Emergency split system repair Melbourne – 24/7 AC breakdown technician attending urgent air conditioning repair"
                  className="img-fluid rounded-4" priority
                  style={{ width: "100%", height: "auto", boxShadow: "0 10px 40px rgba(185,28,28,0.15)" }} />
                <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{ maxWidth: "220px", backgroundColor: "#b91c1c", color: "white", boxShadow: "0 8px 24px rgba(185,28,28,0.2)" }}>
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>24/7 Emergency Line</strong><br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>Target 4-hour response</span>
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
            <StatCard icon="fas fa-tools" value={5000} suffix="+" label="Emergency Fixes Completed" />
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
                      <h6 className="section-title__tagline">Emergency Faults</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-exclamation-circle"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Emergency Faults We <span>Fix Fast</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    When your split system fails during extreme heat or cold, the situation can become serious quickly — particularly for households with young children, elderly residents, or people with medical conditions. Our emergency technicians are available around the clock to diagnose and resolve every category of urgent split system failure.
                  </p>
                </motion.div>

                <div className="my-5 py-5">
                  <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: "-100px" }} className="row gy-4">
                    {[
                      { icon: "fas fa-power-off", title: "Complete System Failure", description: "When your split system will not start or cuts out immediately, we diagnose the root cause — from failed control boards and blown capacitors to seized compressors — and restore operation as quickly as possible. We carry the most common failure-mode parts for all major brands." },
                      { icon: "fas fa-tint", title: "Refrigerant Leak Emergency", description: "A refrigerant leak rapidly degrades system performance, can damage the compressor, and may pose a health risk in enclosed spaces. Our technicians carry gas detection equipment to confirm leaks, locate the breach, repair the circuit, and recharge the system to the correct specification." },
                      { icon: "fas fa-bolt", title: "Electrical Fault and Circuit Breaker Tripping", description: "A unit that repeatedly trips its circuit breaker has an electrical fault that must be resolved before further operation. Common causes include failed run capacitors, failing compressor windings, and control board faults. We diagnose and resolve electrical faults safely and efficiently." },
                      { icon: "fas fa-cogs", title: "Compressor Failure", description: "Compressor failure is one of the most serious faults a split system can experience. We carry out field testing to confirm compressor condition, advise on repair versus replacement options, and if replacement is required, work quickly to source the correct component and restore your system." },
                      { icon: "fas fa-water", title: "Water Leak — Indoor Unit Flooding", description: "When the indoor unit drains fail, condensate can overflow onto walls, ceilings, and floors, causing water damage. We clear blocked drain lines, repair faulty drain pans, and restore proper drainage to stop water leaks from causing further property damage." },
                      { icon: "fas fa-cloud-bolt", title: "Post-Storm and Post-Power Failure Faults", description: "Power surges and lightning events frequently trigger split system faults. We carry out a post-storm assessment to identify surge damage, blown protection components, and controller faults, and restore system operation following weather-related damage." },
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
                      <h6 className="section-title__tagline">Why Choose Us</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-shield-alt"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Why Melbourne Calls Us for <span>Emergency AC Repair</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    When a split system fails in the peak of summer or the depths of winter, you need a technician who arrives quickly, diagnoses accurately, and carries the parts needed to fix it in a single visit.
                  </p>
                  <div className="p-4 rounded-3" style={{ backgroundColor: "#fff5f5", borderLeft: "4px solid #d32f2f" }}>
                    <strong style={{ color: "#d32f2f", fontSize: "1rem" }}>
                      <i className="fas fa-clock me-2"></i>Target 4-Hour Response — All Melbourne Suburbs
                    </strong>
                    <p className="mb-0 mt-2 text-secondary" style={{ lineHeight: "1.7" }}>
                      We dispatch from multiple Melbourne locations to minimise response times. Our emergency technicians carry a comprehensive parts inventory covering common failure components for all major brands — capacitors, contactors, control boards, fan motors, thermistors, and sensors.
                    </p>
                  </div>
                </motion.div>

                <div className="my-5"><WhyProfessionalMatters /></div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }} className="my-5 p-5 rounded-4" style={{ backgroundColor: "#fff5f5", border: "1px solid #fecaca" }}>
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-map-marker-alt"></i></div>
                      <h6 className="section-title__tagline">Emergency Coverage Area</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-map-marker-alt"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">24/7 Emergency Coverage <span>Across Melbourne</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="row gy-3">
                    {[
                      { title: "Inner Melbourne and CBD", sub: "24/7 coverage, target 2-hour response" },
                      { title: "Northern Suburbs", sub: "Brunswick, Thornbury, Preston, Epping and beyond" },
                      { title: "Eastern Suburbs", sub: "Box Hill, Doncaster, Ringwood, Knox and beyond" },
                      { title: "Southern Suburbs", sub: "St Kilda, Elsternwick, Brighton, Frankston and beyond" },
                      { title: "Western Suburbs", sub: "Footscray, Sunshine, Werribee, Melton and beyond" },
                      { title: "All Brands and Models", sub: "Daikin, Mitsubishi, Fujitsu, Panasonic, Samsung, LG" },
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
                      <TextAnimation animationStyle="style1">Emergency Repair Questions <span>Answered</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#7f1d1d", fontSize: "1.3rem", borderBottom: "2px solid #d32f2f" }}>
                            <i className="fas fa-exclamation-triangle me-2" style={{ color: "#d32f2f" }}></i>Emergency Situations
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
                            <i className="fas fa-tools me-2" style={{ color: "#d32f2f" }}></i>Repairs and Coverage
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
                    Split System Not Working? Call Now.
                  </h3>
                  <p className="mb-5" style={{ fontSize: "1.1rem", color: "#fecaca", lineHeight: "1.7" }}>
                    24/7 emergency split system repair across all Melbourne suburbs. ARCtick licensed technicians. Target 4-hour response.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <a href="tel:0405133761" className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                        style={{ backgroundColor: "white", color: "#b91c1c", fontSize: "1.1rem", display: "inline-block" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fef2f2"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                      ><i className="fas fa-phone me-2"></i> 0405 133 761 — Emergency Line</a>
                    </motion.div>
                  </div>
                  <p className="mt-5 mb-0" style={{ fontSize: "0.9rem", color: "#fecaca", letterSpacing: "0.5px" }}>
                    &#10003; 24/7 EMERGENCY &bull; &#10003; TARGET 4-HOUR RESPONSE &bull; &#10003; ARCTICK LICENSED &bull; &#10003; ALL BRANDS &bull; &#10003; ALL MELBOURNE SUBURBS
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
