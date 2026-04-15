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
  { id: 1, question: "What are the most common signs of a hydronic heating emergency?", answer: "Key signs include boiler shutdown with no heat output, water pooling or visible leak from pipes or radiators, loud banging or gurgling sounds from the boiler or radiators, pressure gauge readings below 1 bar or above 3 bar, zone valve failure causing entire areas of the house to receive no heat, and the boiler fault light staying on with no heat being produced. Any of these warrant an urgent service call." },
  { id: 2, question: "How quickly will you respond to a hydronic heating emergency in Melbourne?", answer: "We target a 4-hour response window across the Melbourne metro area for hydronic heating emergencies, with many calls attended same day. Inner city and near-suburb calls are often attended within 2 to 3 hours. Our technicians carry common hydronic system parts including pumps, zone valves, pressure relief valves, and expansion vessels, so most faults can be resolved in one visit." },
  { id: 3, question: "Why does my hydronic boiler keep losing pressure?", answer: "Pressure loss in a hydronic system is most commonly caused by a water leak in the system (from a radiator connection, pipe joint, boiler fitting, or underfloor pipe), a failed expansion vessel (unable to accommodate system pressure changes), a leaking or frequently discharging pressure relief valve, or a faulty automatic air vent leaking when the system heats up. We diagnose the specific cause before recommending any repair." },
  { id: 4, question: "Can you repair a hydronic system leak under a concrete slab?", answer: "Yes. Concealed slab leaks require specialist leak detection techniques to locate before any concrete needs to be disturbed. We use pressure testing and thermal imaging methods to map the exact leak location. We then discuss repair options with you — which may include direct access repair at the leak point or a section reroute above the slab — to minimise disruption to your property." },
  { id: 5, question: "My hydronic zone valve is stuck — can this be repaired without draining the system?", answer: "In most cases, yes. We carry zone valve actuators and replacement valves for common hydronic system configurations and can replace failed actuators without draining the entire system. Our technicians assess whether the valve body itself is faulty or only the actuator motor, as this affects the repair scope. Where a full valve replacement is needed, we carry the tools to isolate and repair without full-system drain down in most cases." },
  { id: 6, question: "The boiler is running but some radiators are cold — is this a zone valve or pump fault?", answer: "This is typically either a stuck zone valve (preventing flow to specific zones), a circulation pump fault (if all zones are affected), air in the system causing localised flow blockage, or a failed thermostat signal not opening a zone valve. We test all these systematically to isolate the exact fault. In many cases a radiator that does not heat is caused by an airlock rather than a component failure and can be resolved quickly." },
  { id: 7, question: "Which hydronic boiler brands do you service in emergencies?", answer: "We service all major hydronic boiler brands available in Melbourne including Bosch, Rinnai, Viessmann, Vaillant, Immergas, Worcester, Chromagen, Sime, and Navien. Our technicians carry parts for common fault scenarios across these brands and have access to next-day parts sourcing for less common components." },
  { id: 8, question: "Is hydronic heating repair covered by home insurance?", answer: "This depends on your specific policy and the cause of the failure. Sudden accidental damage events — such as a pipe burst causing flooding — are often covered. Gradual wear or maintenance faults are less commonly covered. We can provide a detailed service report and compliance documentation to support an insurance claim if required." },
  { id: 9, question: "Do I need to turn off the gas supply before calling for emergency hydronic repair?", answer: "If you smell gas alongside the heating fault, yes — turn off the gas at the meter and call the gas emergency line (1800 427 364) before calling us. If the fault is water leak or boiler shutdown only (no gas smell), you do not need to isolate the gas — but you should turn off the water supply to the hydronic system (at the boiler fill valve) if it is actively leaking water onto floors. If unsure, we can guide you through the correct isolation steps when you call." },
  { id: 10, question: "Which Melbourne suburbs do you cover for emergency hydronic heating repairs?", answer: "We cover all Melbourne suburbs for emergency hydronic heating repair — inner city, northern, eastern, southeastern, southern, and western suburbs. Most areas are covered within a 4-hour response window. Our service area includes all Melbourne metro suburbs from Cranbourne and Frankston in the south to Sunbury and Whittlesea in the north." },
];

const Page: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [activeFaq, setActiveFaq] = useState<number>(1);
  const handleFaqItem = (id: number): void => { setActiveFaq(id); };

  return (
    <>
      <DefaultBanner
        title="Emergency Hydronic Heating Repair Melbourne – 24/7 Boiler Breakdown and Pipe Leak Response"
        subTitle="Emergency Hydronic Repair"
        titleLink="/emergency-services"
      />

      <section className="hero-installation py-5" style={{ backgroundColor: "#fff5f5" }}>
        <div className="container">
          <motion.div ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="row align-items-center gy-5">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <div>
                <div className="mb-3 px-3 py-2 d-inline-block rounded-3" style={{ backgroundColor: "#fef2f2", border: "2px solid #d32f2f" }}>
                  <span style={{ color: "#b91c1c", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.05em" }}>
                    <i className="fas fa-exclamation-triangle me-2"></i>24/7 EMERGENCY HYDRONIC REPAIR
                  </span>
                </div>
                <h1 className="fw-bolder mb-4" style={{ fontSize: "3rem", color: "#7f1d1d", lineHeight: "1.2" }}>
                  Emergency Hydronic Heating Repair Melbourne
                </h1>
                <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  Boiler shutdown, hydronic leak, cold zones, or pressure loss — our emergency hydronic heating technicians respond across Melbourne within 4 hours. VBA licensed for boiler and gas work. We carry parts for all major brands.
                </p>
                <div className="d-flex gap-3 mb-5 flex-wrap">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a href="tel:0405133761" className="px-5 py-3 text-white text-decoration-none rounded-3 fw-bold"
                      style={{ backgroundColor: "#d32f2f", fontSize: "1.05rem", display: "inline-block" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#b91c1c"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#d32f2f"; }}
                    ><i className="fas fa-phone me-2"></i> Call Emergency Hydronic Line</a>
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
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; 4-HOUR RESPONSE</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; VBA LICENSED</span>
                  <span className="px-3 py-2 rounded-2" style={{ backgroundColor: "#fef2f2", color: "#b91c1c", fontSize: "0.85rem", fontWeight: 600, border: "1px solid #fecaca" }}>&#10003; ALL BOILER BRANDS</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={heroInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="position-relative">
                <Image src={ServiceDetailsImg1}
                  alt="Emergency hydronic heating repair Melbourne – licensed technician repairing hydronic boiler system"
                  className="img-fluid rounded-4" priority
                  style={{ width: "100%", height: "auto", boxShadow: "0 10px 40px rgba(185,28,28,0.15)" }} />
                <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
                  className="position-absolute top-0 end-0 p-4 rounded-3"
                  style={{ maxWidth: "220px", backgroundColor: "#b91c1c", color: "white", boxShadow: "0 8px 24px rgba(185,28,28,0.2)" }}>
                  <p className="mb-0 small">
                    <strong style={{ fontSize: "0.95rem" }}>Hydronic Specialists</strong><br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>4000+ emergency fixes</span>
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
            <StatCard icon="fas fa-bolt" value={4} suffix=" hrs" label="Response Window" />
            <StatCard icon="fas fa-star" value={4} suffix=".9" label="Star Rating" />
            <StatCard icon="fas fa-tools" value={4000} suffix="+" label="Hydronic Emergencies Fixed" />
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
                      <div className="section-title__shape-1"><i className="fas fa-fire"></i></div>
                      <h6 className="section-title__tagline">Common Faults We Fix</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-fire"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Hydronic Heating Emergencies <span>We Respond To</span></TextAnimation>
                    </h2>
                  </div>
                  <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                    From complete boiler shutdown to active water leaks, hydronic heating failures require fast, accurate diagnosis and repair. Our technicians are trained on all major boiler brands and carry the parts to resolve most faults in a single visit.
                  </p>
                </motion.div>

                <div className="my-5 py-5">
                  <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: "-100px" }} className="row gy-4">
                    {[
                      { icon: "fas fa-fire-alt", title: "Boiler Complete Failure", description: "Boiler shuts down and will not restart, producing no heat to any zone. We diagnose ignition failure, gas valve fault, heat exchanger fault, flue blockage, or control board failure — whatever the root cause — and carry out same-visit repair where possible." },
                      { icon: "fas fa-tint", title: "Hydronic Leak and Indoor Flooding", description: "Active water leak from boiler fittings, radiator connections, pipe joints, or underfloor pipes. We locate the exact leak source, isolate the circuit, and carry out a watertight repair. Concealed slab leaks are located using pressure testing and thermal detection methods." },
                      { icon: "fas fa-sliders-h", title: "Zone Valve Failure", description: "Stuck or failed zone valve preventing heat from reaching specific areas of the property. We test zone valve actuators and valve bodies, replace failed units, and verify that all relevant zones are receiving correct flow before completing the job." },
                      { icon: "fas fa-fan", title: "Circulation Pump Failure", description: "Failed hydronic pump causing no flow to any zone — producing a running boiler with cold radiators. We test pump voltage, impeller, and capacitor, and replace failed pumps with correctly sized replacements for your system configuration." },
                      { icon: "fas fa-tachometer-alt", title: "Pressure Loss", description: "Recurring system pressure loss below 1 bar preventing the boiler from operating. We identify the pressure source — expansion vessel failure, leaking PRV, system leak, or failed filling loop — and resolve the root cause so the system maintains stable operating pressure." },
                      { icon: "fas fa-thermometer-empty", title: "Radiator Not Heating", description: "Individual or multiple radiators not reaching temperature. Common causes include air in the system requiring bleeding, blocked zone valve, thermostatic radiator valve failure, or sludge buildup in the radiator body. We diagnose accurately and restore correct operation." },
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
                      <div className="section-title__shape-1"><i className="fas fa-map-marker-alt"></i></div>
                      <h6 className="section-title__tagline">Service Coverage</h6>
                      <span className="section-title__tagline-border"></span>
                      <div className="section-title__shape-2"><i className="fas fa-map-marker-alt"></i></div>
                    </div>
                    <h2 className="section-title__title">
                      <TextAnimation animationStyle="style1">Emergency Hydronic Repair <span>Across All Melbourne</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="row gy-3 mb-4">
                    {[
                      { icon: "fas fa-city", area: "Inner Melbourne", suburbs: "CBD, Fitzroy, Collingwood, Richmond, South Yarra, St Kilda" },
                      { icon: "fas fa-compass", area: "Northern Suburbs", suburbs: "Brunswick, Northcote, Preston, Reservoir, Bundoora, Greensborough" },
                      { icon: "fas fa-compass", area: "Eastern Suburbs", suburbs: "Hawthorn, Glen Waverley, Box Hill, Knox, Ringwood, Doncaster" },
                      { icon: "fas fa-compass", area: "South-Eastern Suburbs", suburbs: "Oakleigh, Dandenong, Berwick, Cranbourne, Narre Warren, Frankston" },
                      { icon: "fas fa-compass", area: "Southern Suburbs", suburbs: "Brighton, Bayside, Chelsea, Mentone, Moorabbin, Cheltenham" },
                      { icon: "fas fa-compass", area: "Western Suburbs", suburbs: "Footscray, Sunshine, Werribee, Hoppers Crossing, Melton, Altona" },
                    ].map((item, i) => (
                      <div key={i} className="col-md-4">
                        <div className="d-flex align-items-start gap-3 p-3 rounded-3 h-100" style={{ backgroundColor: "#fff5f5", border: "1px solid #fecaca" }}>
                          <i className={item.icon} style={{ color: "#d32f2f", marginTop: "2px", fontSize: "1.2rem", flexShrink: 0 }}></i>
                          <div><strong style={{ color: "#7f1d1d", fontSize: "0.95rem" }}>{item.area}</strong><br />
                            <span className="text-secondary" style={{ fontSize: "0.85rem" }}>{item.suburbs}</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-3" style={{ backgroundColor: "#fff5f5", borderLeft: "4px solid #d32f2f" }}>
                    <strong style={{ color: "#d32f2f", fontSize: "1rem" }}>
                      <i className="fas fa-certificate me-2"></i>All Major Brands — Bosch, Rinnai, Viessmann, Vaillant, Immergas, Worcester
                    </strong>
                    <p className="mb-0 mt-2 text-secondary" style={{ lineHeight: "1.7" }}>
                      Our technicians are trained across all major hydronic boiler brands. We carry parts for common fault scenarios and have access to next-day parts sourcing for less common components to minimise return visits.
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
                      <TextAnimation animationStyle="style1">Hydronic Emergency Questions <span>Answered</span></TextAnimation>
                    </h2>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="faq-page__single">
                          <h4 className="fw-bolder mb-5 pb-4" style={{ color: "#7f1d1d", fontSize: "1.3rem", borderBottom: "2px solid #d32f2f" }}>
                            <i className="fas fa-fire me-2" style={{ color: "#d32f2f" }}></i>Diagnosis and Response
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
                            <i className="fas fa-wrench me-2" style={{ color: "#d32f2f" }}></i>Brands and Coverage
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
                    Hydronic System Broken Down? Call Our Emergency Line.
                  </h3>
                  <p className="mb-5" style={{ fontSize: "1.1rem", color: "#fecaca", lineHeight: "1.7" }}>
                    24/7 emergency hydronic repair across all Melbourne suburbs. VBA licensed technicians. 4-hour response window. All major boiler brands serviced.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                      <a href="tel:0405133761" className="px-5 py-3 text-decoration-none rounded-3 fw-bold"
                        style={{ backgroundColor: "white", color: "#b91c1c", fontSize: "1.1rem", display: "inline-block" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fef2f2"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                      ><i className="fas fa-phone me-2"></i> 0405 133 761 — Hydronic Emergency</a>
                    </motion.div>
                  </div>
                  <p className="mt-5 mb-0" style={{ fontSize: "0.9rem", color: "#fecaca", letterSpacing: "0.5px" }}>
                    &#10003; 24/7 AVAILABLE &bull; &#10003; 4-HR RESPONSE &bull; &#10003; VBA LICENSED &bull; &#10003; ALL BOILER BRANDS &bull; &#10003; ALL MELBOURNE
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
