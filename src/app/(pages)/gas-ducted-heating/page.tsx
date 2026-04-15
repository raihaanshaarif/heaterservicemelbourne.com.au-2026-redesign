"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ServiceItem, gasDuctedHeatingData } from "@/contents/services/serviceData";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import Image from "next/image";
import Link from "next/link";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TextAnimation from "@/components/elements/TextAnimation";
import ServiceDetailsImg1 from "@/assets/images/services/service-details-img-1.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;

const faqData = [
  { id: 1, question: "What is a gas ducted heating system?", answer: "A gas ducted heating system uses a central gas furnace to heat air, which is then distributed through a network of ducts to outlets in each room of your home. It provides whole-home heating from a single unit and can be zoned to control temperatures in different areas independently." },
  { id: 2, question: "How energy efficient is gas ducted heating?", answer: "Modern gas ducted heating systems are rated between 5 and 7 stars, making them highly efficient compared to older units. A 6-star system can use up to 50% less gas than a 2-star unit. Regular servicing ensures your system maintains its rated efficiency over time." },
  { id: 3, question: "How often should a gas ducted heater be serviced?", answer: "Annual servicing is strongly recommended. Before each winter is the ideal time. Servicing keeps your system operating safely, maintains efficiency, extends system life, and allows early detection of issues like heat exchanger cracks, which can cause carbon monoxide spillage." },
  { id: 4, question: "What brands of gas ducted heaters do you work with?", answer: "We install, repair, service, and replace all major brands including Brivis, Rinnai, Braemar, Vulcan, Bonaire, Carrier, and Daikin. Our technicians carry service parts for the most common units and complete most jobs in a single visit." },
  { id: 5, question: "How do I know if my gas ducted heater needs replacing?", answer: "Common signs include frequent breakdowns, uneven heating across rooms, high gas bills, the system being over 15 years old, or a failed heat exchanger. We provide honest assessments and will always advise repair if that is the better option for your situation." },
  { id: 6, question: "Do you offer 24/7 emergency gas heater repair?", answer: "Yes. Our emergency gas ducted repair service operates 24 hours a day, 7 days a week, including weekends and public holidays. We aim to respond within 4 hours to emergency calls across all Melbourne suburbs." },
  { id: 7, question: "Can gas ducted heating be zoned to heat different rooms independently?", answer: "Yes. Zone control systems allow you to divide your home into independently heated areas. Using motorised dampers and a zoning controller, you can set different temperatures in different zones and avoid heating rooms that are not in use, reducing your gas consumption." },
  { id: 8, question: "Are gas ducted heating systems safe?", answer: "When properly installed and regularly serviced by a licensed gas fitter, gas ducted heating systems are very safe. Risk arises when systems are not maintained — particularly from cracked heat exchangers which can produce carbon monoxide. Annual servicing by a licensed technician is the most important safety measure." },
  { id: 9, question: "How long does a gas ducted heating system last?", answer: "Well-maintained gas ducted heating systems typically last 15 to 20 years. Annual servicing significantly extends system life. When a major component such as the heat exchanger or control board fails on an older unit, replacement is generally more economical than repair." },
  { id: 10, question: "What areas of Melbourne do you service?", answer: "We service all Melbourne suburbs including inner city, northern, southern, eastern, and western corridors. All our gas fitters are VBA licensed and carry full public liability insurance. Contact us to confirm availability in your suburb." },
];

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const handleFaqItem = (id: number): void => { setActiveFaq(id); };

  return (
    <>
      <DefaultBanner
        title="Gas Ducted Heating Melbourne – Installation, Repair, Service & Replacement"
        subTitle="Gas Ducted Heating Services"
      />

      {/* HERO SECTION */}
      <section className="py-5" style={{ backgroundColor: "#f4f5f9" }}>
        <div className="container">
          <motion.div ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="row align-items-center gy-5">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <h1 className="fw-bolder mb-4" style={{ fontSize: "3rem", color: "#062f3a", lineHeight: "1.2" }}>
                Gas Ducted Heating Melbourne
              </h1>
              <p className="text-secondary mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Melbourne's trusted gas ducted heating specialists. We install, repair, service, and replace all makes and models of gas ducted heating systems across all Melbourne suburbs. VBA licensed gas fitters. Fixed-price quotes. Same-day availability.
              </p>
              <p className="text-secondary mb-5" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                From a full system installation or replacement to a 24/7 emergency callout, our team is ready to help. Book online or call us now.
              </p>
              <div className="d-flex gap-3 mb-5 flex-wrap">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact" className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                    style={{ backgroundColor: "#fd5523", fontSize: "1rem" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#e54a1f"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fd5523"; }}
                  >
                    Book a Service
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <a href="tel:0405133761" className="px-5 py-3 text-decoration-none rounded-3 fw-bold border"
                    style={{ backgroundColor: "white", color: "#fd5523", borderColor: "#fd5523", fontSize: "1rem" }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f4f5f9"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "white"; }}
                  >
                    <i className="icon-phone-call"></i> 0405 133 761
                  </a>
                </motion.div>
              </div>
              <div className="d-flex gap-3 flex-wrap">
                <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#f0fdf4", color: "#166534", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; VBA LICENSED</span>
                <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#eff6ff", color: "#1e40af", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; ALL BRANDS</span>
                <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fff7ed", color: "#c2410c", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; 24/7 EMERGENCY</span>
                <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#f0f9ff", color: "#0369a1", fontSize: "0.85rem", fontWeight: 600 }}>&#10003; FIXED PRICE</span>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="position-relative">
                <Image src={ServiceDetailsImg1}
                  alt="Gas ducted heating Melbourne – licensed gas heater technician servicing a ducted heating system"
                  className="img-fluid rounded-4" priority
                  style={{ width: "100%", height: "auto", boxShadow: "0 10px 40px rgba(26,26,26,0.1)" }} />
                <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{ maxWidth: "220px", backgroundColor: "#1a3a52", color: "white", boxShadow: "0 8px 24px rgba(26,26,26,0.12)" }}>
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>Trusted Across Melbourne</strong><br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>3000+ families served</span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-one services-page py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}
            className="section-title text-center sec-title-animation animation-style1 mb-5">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-1"><i className="fas fa-flame"></i></div>
              <h6 className="section-title__tagline">Our Services</h6>
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-2"><i className="fas fa-flame"></i></div>
            </div>
            <h2 className="section-title__title">
              <TextAnimation animationStyle="style1">Complete Gas Ducted Heating <span>Services</span></TextAnimation>
            </h2>
          </motion.div>
          <div className="row">
            {gasDuctedHeatingData.map((service: ServiceItem) => (
              <div className="col-xl-3 col-lg-6 col-md-6" key={service.id}>
                <div className="services-one__single">
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <Image src={service.image} width={300} height={250} alt={`${service.title} – Gas Ducted Heating Melbourne`} />
                    </div>
                    <div className="services-one__icon">
                      <span className={service.iconClass}></span>
                    </div>
                  </div>
                  <div className="services-one__content">
                    <div className="services-one__count">{service.count}</div>
                    <h4 className="services-one__title">
                      <Link href={service.link}>{service.title}</Link>
                    </h4>
                    <p className="services-one__text">{service.text}</p>
                    <div className="services-one__btn-box">
                      <Link href={service.link}>Read More <span className="icon-right-arrow"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5" style={{ backgroundColor: "#f4f5f9", borderTop: "1px solid #e6e6e6" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}
            className="section-title text-center sec-title-animation animation-style1 mb-5">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-1"><i className="fas fa-star"></i></div>
              <h6 className="section-title__tagline">Why Choose Us</h6>
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-2"><i className="fas fa-star"></i></div>
            </div>
            <h2 className="section-title__title">
              <TextAnimation animationStyle="style1">Why Melbourne Homes Trust <span>Our Team</span></TextAnimation>
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: "-100px" }} className="row gy-4">
            {[
              { icon: "fas fa-certificate", title: "VBA Licensed Gas Fitters", desc: "All our technicians hold current VBA gas fitting licences and carry full public liability insurance for every job." },
              { icon: "fas fa-dollar-sign", title: "Fixed-Price Quotes", desc: "Upfront pricing before any work begins. No hidden charges, no call-out surprises. We quote the job and that is what you pay." },
              { icon: "fas fa-tools", title: "All Brands Serviced", desc: "Brivis, Rinnai, Braemar, Vulcan, Bonaire, Carrier, and more. Our vans are stocked with parts for the most common systems." },
              { icon: "fas fa-phone", title: "24/7 Emergency Response", desc: "Gas heating failures do not keep business hours. Our emergency team operates around the clock, including weekends." },
            ].map((item, i) => (
              <div key={i} className="col-md-3 col-sm-6">
                <FadeInAdvanced variant={i % 2 === 0 ? "fadeInLeft" : "fadeInRight"} delay={(i + 1) * 50} duration={600}>
                  <motion.div whileHover={{ y: -6 }} className="p-4 bg-white rounded-4 h-100 text-center"
                    style={{ boxShadow: "0 4px 20px rgba(26,26,26,0.06)", transition: "box-shadow 0.3s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(26,26,26,0.12)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(26,26,26,0.06)"; }}
                  >
                    <div className="mb-3" style={{ fontSize: "2rem" }}><i className={item.icon} style={{ color: "#fd5523" }}></i></div>
                    <h5 className="fw-bold mb-2" style={{ color: "#1a1a1a", fontSize: "1rem" }}>{item.title}</h5>
                    <p className="text-secondary mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>{item.desc}</p>
                  </motion.div>
                </FadeInAdvanced>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}
            className="section-title text-center sec-title-animation animation-style1 mb-5">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-1"><i className="fas fa-question-circle"></i></div>
              <h6 className="section-title__tagline">Frequently Asked</h6>
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-2"><i className="fas fa-question-circle"></i></div>
            </div>
            <h2 className="section-title__title">
              <TextAnimation animationStyle="style1">Gas Ducted Heating <span>Questions Answered</span></TextAnimation>
            </h2>
          </motion.div>
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-page__single">
                <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#062f3a", fontSize: "1.3rem", borderBottom: "2px solid #fd5523" }}>
                  <i className="fas fa-fire me-2" style={{ color: "#fd5523" }}></i>System and Efficiency
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
                  <i className="fas fa-lightbulb me-2" style={{ color: "#fd5523" }}></i>Safety and Coverage
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
      </section>

      {/* FINAL CTA */}
      <section className="py-5">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}
            className="p-5 rounded-4 text-center" style={{ backgroundColor: "#062f3a", boxShadow: "0 8px 32px rgba(6,47,58,0.15)" }}>
            <h3 className="fw-bolder mb-4" style={{ fontSize: "2rem", color: "white", lineHeight: "1.3" }}>
              Need a Gas Ducted Heating Specialist in Melbourne?
            </h3>
            <p className="mb-5" style={{ fontSize: "1.1rem", color: "#d9e0eb", lineHeight: "1.7" }}>
              Call or book online now. All Melbourne suburbs covered. VBA licensed gas fitters. Fixed-price quotes.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                  style={{ backgroundColor: "white", color: "#062f3a", fontSize: "1rem", display: "inline-block" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f4f5f9"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                >
                  Book a Service
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
              &#10003; ALL MELBOURNE SUBURBS &bull; &#10003; VBA LICENSED &bull; &#10003; 24/7 EMERGENCY &bull; &#10003; FIXED PRICE
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Page;
