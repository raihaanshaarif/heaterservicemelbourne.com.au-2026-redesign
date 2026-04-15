"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FaqOneImg1 from "@/assets/images/resources/faq-one-img-1.jpg";
import Image from "next/image";
import TextAnimation from "@/components/elements/TextAnimation";
import CounterUp from "@/components/elements/CounterUp";
import { faqDataOne, FaqItem } from "@/contents/faqs/Faqs";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

export default function FaqOne() {
  const [activeFaq, setActiveFaq] = useState<number>(2);

  const handleFaqItem = (id: number): void => {
    setActiveFaq(id);
  };
  return (
    <section className="faq-one">
      <div className="faq-one__shape-1"></div>
      <div className="faq-one__shape-2"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <div className="faq-one__left">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline-border"></span>
                  <div className="section-title__shape-1">
                    <i className="fas fa-plane"></i>
                  </div>
                  <h6 className="section-title__tagline">Our Faqs</h6>
                  <span className="section-title__tagline-border"></span>
                  <div className="section-title__shape-2">
                    <i className="fas fa-plane"></i>
                  </div>
                </div>
                <h3 className="section-title__title">
                  <TextAnimation animationStyle="style2">
                    Frequently Asked <span>Question</span>
                  </TextAnimation>
                </h3>
              </div>
              <div className="faq-one__img-box">
                <div className="faq-one__img">
                  <Image
                    src={FaqOneImg1}
                    width={378}
                    height={378}
                    alt="Image"
                  />
                </div>
                <div className="faq-one__experience-box">
                  <div className="faq-one__experience-year">
                    <h2>
                      <CounterUp ending={10} />
                    </h2>
                  </div>
                  <p className="faq-one__experience-text">
                    Year of <br /> experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="faq-one__right">
              <div className="accrodion-grp faq-one-accrodion">
                {faqDataOne.map((item: FaqItem) => (
                  <FadeInAdvanced
                    key={item.id}
                    variant={"fadeInRight"}
                    delay={item?.id * 50}
                    duration={100}
                    className={`accrodion ${activeFaq === item.id ? "active" : ""}`}
                  >
                    <div
                      className="accrodion-title"
                      onClick={() => handleFaqItem(item?.id)}
                    >
                      <h4>{item?.question}</h4>
                    </div>
                    <motion.div
                      initial={{ y: -40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      viewport={{ amount: 0.05 }}
                      className="accrodion-content"
                      style={{
                        display: `${activeFaq === item.id ? "block" : "none"}`,
                      }}
                    >
                      <div className="inner">
                        <p>{item?.answer}</p>
                      </div>
                      {/* /.inner */}
                    </motion.div>
                  </FadeInAdvanced>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
