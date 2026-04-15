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
  { id: 1, question: "How long does a split system installation take?", answer: "A standard single-head split system installation typically takes 3 to 5 hours. Multi-head systems or installations requiring longer refrigerant pipe runs may take a full day. We complete all work in a single visit and leave your home clean and tidy." },
  { id: 2, question: "What size split system do I need for my room?", answer: "System capacity is determined by room size, ceiling height, insulation, sun exposure, and number of occupants. Our technicians carry out a full load calculation before recommending a unit size. Getting this right is essential — oversized or undersized units waste energy and wear out faster." },
  { id: 3, question: "Which brands do you install?", answer: "We install all major brands including Daikin, Mitsubishi Electric, Fujitsu, Panasonic, Samsung, LG, and Hitachi. We can advise on the best brand and model for your space and budget based on efficiency ratings, noise levels, and warranty coverage." },
  { id: 4, question: "Can you install a split system in a brick or double-brick home?", answer: "Yes. We regularly install split systems in brick, double-brick, and rendered homes. Core drilling and correct sealing are handled by our team. We take care to minimise disruption and ensure the penetration is properly weatherproofed." },
  { id: 5, question: "Is ARCtick licensing required for split system installation in Melbourne?", answer: "Yes. Australian law requires that anyone handling refrigerants must hold an ARCtick licence. All our technicians are fully ARCtick certified and licensed. This is a legal requirement — never use an unlicensed installer." },
  { id: 6, question: "What is included in the installation price?", answer: "Our installation includes the indoor and outdoor unit mounting, refrigerant pipe installation, electrical connection, drain line installation, system commissioning and testing, and job site cleanup. We provide an itemised quote before work begins." },
  { id: 7, question: "Where should the outdoor unit be positioned?", answer: "The outdoor unit should be positioned in a well-ventilated area away from direct sun if possible, clear of garden beds, and with adequate clearance for airflow and service access. Our technicians will identify the optimal location at your property." },
  { id: 8, question: "Do you handle the electrical connection?", answer: "Yes. Our team includes qualified electricians who perform the dedicated circuit installation as part of the installation package. All electrical work meets Australian standards and is covered by a Certificate of Compliance." },
  { id: 9, question: "What warranty comes with a new split system?", answer: "Manufacturer warranties on split systems typically range from 5 to 7 years on parts, with some brands offering extended warranties on compressors. Our installation labour is also guaranteed. We register the warranty on your behalf." },
  { id: 10, question: "Do you install split systems across all Melbourne suburbs?", answer: "Yes. We install split systems across all of Greater Melbourne including inner city, northern, southern, eastern, and western suburbs. Contact us to confirm availability in your suburb and to book a free on-site assessment." },
];

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const handleFaqItem = (id: number): void => { setActiveFaq(id); };

  return (
    <>
      <DefaultBanner
        title="Split System Installation Melbourne – Supply & Install by ARCtick Licensed Technicians"
        subTitle="Split System Air Conditioning Installation"
        titleLink="/split-system-air-conditioning"
      />

      {/* HERO SECTION */}
      <section className="hero-installation py-5" style={{ backgroundColor: "#f4f5f9" }}>
        <div className="container">
          <motion.div ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="row align-items-center gy-5">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <h1 className="fw-bolder mb-4" style={{ fontSize: "3rem", color: "#062f3a", lineHeight: "1.2" }}>
                  Split System Installation Melbourne
                </h1>
                <p className="text-secondary mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  Professional split system air conditioning installation across all Melbourne suburbs. We supply and install all major brands with ARCtick licensed technicians, providing year-round heating and cooling comfort tailored to your home or office.
                </p>
                <p className="text-secondary mb-5" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                  Free on-site assessment. Fully itemised upfront quote. Complete installation in a single visit.
                </p>
                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/contact" className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#fd5523", fontSize: "1rem" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#e54a1f"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fd5523"; }}
                    >
                      Book Free Assessment
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
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#f0fdf4", color: "#166534", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; ARCTICK LICENSED</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#eff6ff", color: "#1e40af", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; ALL BRANDS</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#f0f9ff", color: "#0369a1", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; FREE ASSESSMENT</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="position-relative">
                <Image src={ServiceDetailsImg1}
                  alt="Split system installation Melbourne – ARCtick licensed technician installing a split system air conditioner"
                  className="img-fluid rounded-4" priority
                  style={{ width: "100%", height: "auto", boxShadow: "0 10px 40px rgba(26,26,26,0.1)" }} />
                <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{ maxWidth: "220px", backgroundColor: "#1a3a52", color: "white", boxShadow: "0 8px 24px rgba(26,26,26,0.12)" }}>
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>Installation Specialists</strong><br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>Trusted by 4000+ Melbourne homes</span>
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
            <StatCard icon="fas fa-snowflake" value={4000} suffix="+" label="Units Installed" />
            <StatCard icon="fas fa-star" value={4} suffix=".9" label="Star Rating" />
            <StatCard icon="fas fa-user-tie" value={12} suffix="+" label="Licensed Technicians" />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__left">

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-snowflake"></i></div>
                      <h6 className="section-title__tagline">Why Choose Us</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-snowflake"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Why Choose Us for Split System <span>Installation</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    A correctly sized and properly installed split system delivers years of efficient, reliable heating and cooling. Poor installation — incorrect pipe sizing, inadequate drainage, or wrong unit placement — leads to reduced efficiency, premature failures, and voided warranties. Our ARCtick licensed technicians do it right the first time.
                  </p>
                  <p className="text-secondary" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    <strong style={{ color: "#1a1a1a" }}>What makes us different:</strong> We carry out a full site assessment and thermal load calculation before recommending any unit. You get the right system for your space — not just the most expensive one in our catalogue.
                  </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="my-5 py-5">
                  <div className="section-title text-left sec-title-animation animation-style1 mb-5 py-5">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-1"><i className="fas fa-star"></i></div>
                      <h6 className="section-title__tagline">Installation Benefits</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-star"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Split System Benefits for <span>Melbourne Homes</span></TextAnimation>
                    </h2>
                  </div>
                  <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: "-100px" }} className="row gy-4">
                    {[
                      { icon: "fas fa-thermometer-half", title: "Year-Round Comfort", description: "A modern reverse-cycle split system provides both heating in winter and cooling in summer from a single unit. With inverter technology, it maintains your set temperature efficiently without constant cycling." },
                      { icon: "fas fa-bolt", title: "High Energy Efficiency", description: "Today's 6-star inverter split systems are among the most energy-efficient climate control options available. They can deliver up to 4 units of heating or cooling energy per unit of electricity consumed." },
                      { icon: "fas fa-sliders-h", title: "Zone Control", description: "Install units in individual rooms and control each independently. Only heat or cool the rooms you are using, reducing energy consumption and giving every occupant control over their own comfort." },
                      { icon: "fas fa-volume-mute", title: "Whisper-Quiet Operation", description: "Modern split systems operate at indoor noise levels as low as 19 dB — quieter than a library whisper. Ideal for bedrooms, living rooms, and offices where noise is a concern." },
                      { icon: "fas fa-wind", title: "Built-In Air Filtration", description: "Quality split systems include multi-stage filtration that captures dust, pollen, bacteria, and fine particles, improving indoor air quality. Particularly beneficial for households with allergy or asthma sufferers." },
                      { icon: "fas fa-home", title: "Adds Home Value", description: "Reverse-cycle air conditioning is one of the most valued features for Melbourne home buyers and renters. A quality installation by a licensed technician with documented warranty adds measurable property value." },
                    ].map((feature, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <FadeInAdvanced variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"} delay={(index + 1) * 50} duration={600}>
                          <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                        </FadeInAdvanced>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* How It Works */}
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
                      <TextAnimation animationStyle="style1">How Our Installation <span>Process Works</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    We start with a free on-site assessment where our technician measures your space, checks insulation, assesses sun exposure, and identifies the best positions for both indoor and outdoor units. We then provide an itemised quote. On installation day, we mount both units, run the refrigerant lines, connect the drainage, wire the dedicated circuit, pressure-test and vacuum the system, charge with refrigerant, and commission the unit — leaving you with a fully operational system.
                  </p>
                  <div className="p-4 rounded-3" style={{ backgroundColor: "#f4f5f9", borderLeft: "4px solid #fd5523" }}>
                    <strong style={{ color: "#fd5523", fontSize: "1rem" }}>
                      <i className="fas fa-lightbulb me-2" style={{ color: "#fd5523" }}></i>Single-Visit Completion
                    </strong>
                    <p className="mb-0 mt-2 text-secondary" style={{ lineHeight: "1.7" }}>
                      Most standard installations are completed in one visit. You receive a Certificate of Compliance for the electrical work, and we register the manufacturer warranty on your behalf.
                    </p>
                  </div>
                </motion.div>

                <div className="my-5"><WhyProfessionalMatters /></div>

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
                      <TextAnimation animationStyle="style1">Split System Installation Across All <span>Melbourne Suburbs</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-0" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    <strong style={{ color: "#1a1a1a" }}>We install split systems across all of Greater Melbourne</strong>, from inner-city apartments and terraces to outer suburban homes and commercial properties. All properties and all constructions covered.
                  </p>
                  <div className="row gy-3 mt-4">
                    {[
                      { title: "All Melbourne Suburbs", sub: "Inner city, north, south, east, western suburbs" },
                      { title: "All Property Types", sub: "Houses, apartments, terraces, commercial spaces" },
                      { title: "All Brands Available", sub: "Daikin, Mitsubishi, Fujitsu, Panasonic, Samsung" },
                      { title: "Manufacturer Warranty Registered", sub: "We handle registration on your behalf" },
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
                      <TextAnimation animationStyle="style1">Your Installation Questions <span>Answered</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#062f3a", fontSize: "1.3rem", borderBottom: "2px solid #fd5523" }}>
                            <i className="fas fa-snowflake me-2" style={{ color: "#fd5523" }}></i>Installation Process
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
                            <i className="fas fa-lightbulb me-2" style={{ color: "#fd5523" }}></i>Brands and Coverage
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

                {/* Final CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}
                  className="my-5 p-5 rounded-4 text-center" style={{ backgroundColor: "#062f3a", boxShadow: "0 8px 32px rgba(6,47,58,0.15)" }}>
                  <h3 className="fw-bolder mb-4" style={{ fontSize: "2rem", color: "white", lineHeight: "1.3" }}>
                    Ready to Install Your Split System?
                  </h3>
                  <p className="mb-5" style={{ fontSize: "1.1rem", color: "#d9e0eb", lineHeight: "1.7" }}>
                    Book a free on-site assessment and get a fully itemised quote. ARCtick licensed technicians. All Melbourne suburbs covered.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <Link href="/contact" className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                        style={{ backgroundColor: "white", color: "#062f3a", fontSize: "1rem", display: "inline-block" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f4f5f9"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                      >
                        Book Free Assessment
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
                    &#10003; ALL MELBOURNE SUBURBS &bull; &#10003; ARCTICK LICENSED &bull; &#10003; ALL BRANDS &bull; &#10003; FREE ASSESSMENT
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
