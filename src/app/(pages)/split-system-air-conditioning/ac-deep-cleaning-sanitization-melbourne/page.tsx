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
  { id: 1, question: "How often should I have my split system deep cleaned?", answer: "We recommend a professional deep clean every 12 months for residential units and every 6 months for units in high-use commercial environments, households with pets, or environments with high dust or pollen. Regular cleaning prevents performance degradation and maintains healthy air quality." },
  { id: 2, question: "What is included in a split system deep clean?", answer: "Our service includes full disassembly of the indoor unit, high-pressure cleaning of the evaporator coil, blower wheel, and casing, cleaning of the filter and drain tray, antibacterial and antifungal sanitization treatment of all internal surfaces, reassembly, and a post-clean performance test." },
  { id: 3, question: "Can mould grow inside my split system?", answer: "Yes. The evaporator coil and drain tray operate in a consistently moist environment, creating ideal conditions for mould and mildew growth. Mould spores are then circulated throughout your home every time the system runs. Sanitization during a deep clean eliminates existing mould and applies a treatment that inhibits regrowth." },
  { id: 4, question: "Will a deep clean improve airflow and cooling performance?", answer: "Significantly. A coil coated in dust, mould, and biological matter can lose 20 to 40% of its heat transfer efficiency. After a thorough deep clean, most units show a measurable improvement in cooling and heating capacity, reduced run times, and lower electricity consumption." },
  { id: 5, question: "Is a deep clean safe for my unit?", answer: "Yes. We use purpose-built AC cleaning equipment, pH-neutral cleaning solutions, and proper techniques to safely clean all components without damaging coil fins, plastics, or electronics. We cover all electrical components before applying any liquid." },
  { id: 6, question: "Do you clean both the indoor and outdoor units?", answer: "Our standard deep clean focuses on the indoor unit where microbial growth and dust accumulation are most significant. Outdoor unit coil cleaning is available as an add-on service and is recommended every 2 to 3 years or if the outdoor unit shows visible dirt blockage." },
  { id: 7, question: "How long does the deep clean take?", answer: "A single indoor unit deep clean takes approximately 60 to 90 minutes. Each additional unit takes 45 to 60 minutes. We arrive with all equipment required and leave the area clean and dry." },
  { id: 8, question: "What sanitization products do you use?", answer: "We use hospital-grade antibacterial and antifungal sanitizers that are safe for household use, non-toxic when dry, and certified for use in air conditioning systems. They are safe for households with children, pets, and people with respiratory sensitivities." },
  { id: 9, question: "Do you clean all split system brands?", answer: "Yes. We clean all major brands including Daikin, Mitsubishi Electric, Fujitsu, Panasonic, Samsung, LG, Hitachi, and Carrier. Our technicians are experienced with the disassembly procedures for all common indoor unit types." },
  { id: 10, question: "Which Melbourne suburbs do you cover for AC cleaning?", answer: "We cover all Melbourne suburbs for split system deep cleaning and sanitization, including inner city, northern, southern, eastern, and western areas. Contact us to check availability and book your service." },
];

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const handleFaqItem = (id: number): void => { setActiveFaq(id); };

  return (
    <>
      <DefaultBanner
        title="AC Deep Cleaning & Sanitization Melbourne – Professional Split System Cleaning Service"
        subTitle="Split System Deep Cleaning"
        titleLink="/split-system-air-conditioning"
      />

      <section className="hero-installation py-5" style={{ backgroundColor: "#f4f5f9" }}>
        <div className="container">
          <motion.div ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="row align-items-center gy-5">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <h1 className="fw-bolder mb-4" style={{ fontSize: "3rem", color: "#062f3a", lineHeight: "1.2" }}>
                  AC Deep Cleaning Melbourne
                </h1>
                <p className="text-secondary mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  Professional split system deep cleaning and sanitization across all Melbourne suburbs. We disassemble, pressure-wash, and sanitize your indoor unit to restore performance, eliminate mould and bacteria, and improve the air quality throughout your home or office.
                </p>
                <p className="text-secondary mb-5" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                  Hospital-grade sanitization. All brands serviced. Fully itemised flat-rate pricing.
                </p>
                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/contact" className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#fd5523", fontSize: "1rem" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#e54a1f"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fd5523"; }}
                    >Book a Clean</Link>
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
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#f0fdf4", color: "#166534", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; HOSPITAL-GRADE SANITIZER</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#eff6ff", color: "#1e40af", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; MOULD ELIMINATION</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#f0f9ff", color: "#0369a1", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; ALL BRANDS</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="position-relative">
                <Image src={ServiceDetailsImg1}
                  alt="AC deep cleaning Melbourne – technician performing professional split system deep clean and sanitization"
                  className="img-fluid rounded-4" priority
                  style={{ width: "100%", height: "auto", boxShadow: "0 10px 40px rgba(26,26,26,0.1)" }} />
                <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{ maxWidth: "220px", backgroundColor: "#1a3a52", color: "white", boxShadow: "0 8px 24px rgba(26,26,26,0.12)" }}>
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>Cleaning Specialists</strong><br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>5000+ units cleaned</span>
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
            <StatCard icon="fas fa-broom" value={5000} suffix="+" label="Units Deep Cleaned" />
            <StatCard icon="fas fa-star" value={4} suffix=".9" label="Star Rating" />
            <StatCard icon="fas fa-shield-virus" value={99} suffix="%" label="Mould Kill Rate" />
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
                      <div className="section-title__shape-1"><i className="fas fa-spray-can"></i></div>
                      <h6 className="section-title__tagline">Why Clean Matters</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-spray-can"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Why Deep Cleaning Your Split System <span>Is Essential</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    Every time your split system runs, it draws air across a cold, moist evaporator coil — ideal conditions for mould, mildew, and bacteria to colonise. Over weeks and months, these build up on the coil, blower wheel, and drain tray. The system then blows contaminated air directly into your living space with every cycle.
                  </p>
                  <p className="text-secondary" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    <strong style={{ color: "#1a1a1a" }}>What makes our service different:</strong> We fully disassemble the indoor unit, not just vacuum the filters. Our high-pressure coil wash and hospital-grade sanitization eliminates biological contamination that a basic filter clean cannot touch.
                  </p>
                </motion.div>

                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-star"></i></div>
                      <h6 className="section-title__tagline">Service Checklist</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-star"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">What Our Deep Clean <span>Service Covers</span></TextAnimation>
                    </h2>
                  </div>
                  <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: "-100px" }} className="row gy-4">
                    {[
                      { icon: "fas fa-wind", title: "Evaporator Coil High-Pressure Wash", description: "We apply a specialist coil cleaning solution and flush with high-pressure water to remove accumulated dust, mould, and biofilm from the coil fins. This is the single most effective step for restoring efficiency and air quality." },
                      { icon: "fas fa-fan", title: "Blower Wheel Deep Clean", description: "The blower wheel accumulates layers of dust that cannot be removed by surface cleaning. We remove and thoroughly clean the blower wheel, restoring full airflow and eliminating the musty smell common in long-serviced units." },
                      { icon: "fas fa-filter", title: "Filter and Return Air Clean", description: "We remove, clean, and reinstall the air filters using appropriate methods for the filter type. A clean filter reduces the rate of coil contamination and should be the first line of defence between cleans." },
                      { icon: "fas fa-tint-slash", title: "Drain Tray Cleaning and Flush", description: "The condensate drain tray is a primary breeding ground for mould and harmful bacteria. We clean the tray, flush the drain line to ensure free drainage, and apply sanitizer to prevent biological regrowth." },
                      { icon: "fas fa-shield-virus", title: "Hospital-Grade Sanitization", description: "The entire internal surface of the indoor unit — coil, blower, tray, and casing — is treated with a hospital-grade antibacterial and antifungal spray. The treatment is non-toxic when dry and provides ongoing protection against recontamination." },
                      { icon: "fas fa-thermometer-half", title: "Post-Clean Performance Test", description: "After reassembly we run the system in both cooling and heating modes and measure inlet and outlet temperatures to confirm the clean has restored proper heat exchange. We also check drain flow and confirm no error codes." },
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
                      <h6 className="section-title__tagline">Our Approach</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-cogs"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">How Our Deep Clean <span>Service Works</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    Our technician arrives with all cleaning equipment, purpose-built AC cleaning bags to contain water during the wash, and hospital-grade sanitization products. We lay protective floor covering, fully disassemble the indoor unit, carry out the complete clean and sanitization, reassemble, and conduct a performance test before leaving.
                  </p>
                  <div className="p-4 rounded-3" style={{ backgroundColor: "#f4f5f9", borderLeft: "4px solid #fd5523" }}>
                    <strong style={{ color: "#fd5523", fontSize: "1rem" }}>
                      <i className="fas fa-lightbulb me-2" style={{ color: "#fd5523" }}></i>Zero Mess Guaranteed
                    </strong>
                    <p className="mb-0 mt-2 text-secondary" style={{ lineHeight: "1.7" }}>
                      We use specialist AC cleaning cover bags to capture all wastewater during the high-pressure wash. Your walls, floors, and furnishings are fully protected throughout the service.
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
                      <TextAnimation animationStyle="style1">AC Deep Cleaning Across All <span>Melbourne Suburbs</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-0" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    <strong style={{ color: "#1a1a1a" }}>We deep clean split systems across all of Greater Melbourne</strong>, for residential homes, apartments, offices, and commercial premises. All brands, all models, all property types.
                  </p>
                  <div className="row gy-3 mt-4">
                    {[
                      { title: "All Melbourne Suburbs", sub: "Inner city, north, south, east, western suburbs" },
                      { title: "Residential and Commercial", sub: "Homes, apartments, offices, retail premises" },
                      { title: "All Brands Covered", sub: "Daikin, Mitsubishi, Fujitsu, Panasonic and more" },
                      { title: "Multi-Unit Discounts", sub: "Reduced rates when booking multiple units" },
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
                      <TextAnimation animationStyle="style1">Deep Cleaning Questions <span>Answered</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#062f3a", fontSize: "1.3rem", borderBottom: "2px solid #fd5523" }}>
                            <i className="fas fa-broom me-2" style={{ color: "#fd5523" }}></i>Service Details
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
                            <i className="fas fa-lightbulb me-2" style={{ color: "#fd5523" }}></i>Products and Coverage
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
                    Book Your Split System Deep Clean Today
                  </h3>
                  <p className="mb-5" style={{ fontSize: "1.1rem", color: "#d9e0eb", lineHeight: "1.7" }}>
                    Restore performance, improve air quality, and eliminate mould. All Melbourne suburbs covered. Flat-rate pricing, no surprises.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Link href="/contact" className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                        style={{ backgroundColor: "white", color: "#062f3a", fontSize: "1rem", display: "inline-block" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f4f5f9"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                      >Book a Clean</Link>
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
                    &#10003; ALL MELBOURNE SUBURBS &bull; &#10003; HOSPITAL-GRADE SANITIZER &bull; &#10003; ALL BRANDS &bull; &#10003; FLAT RATE PRICING
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
