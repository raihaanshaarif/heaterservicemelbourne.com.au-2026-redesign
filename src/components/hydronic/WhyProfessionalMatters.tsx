"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Lightbulb,
  Hammer,
  Handshake,
  BarChart3,
} from "lucide-react";

interface ProfessionalPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const WhyProfessionalMatters: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const points: ProfessionalPoint[] = [
    {
      icon: <Shield size={32} />,
      title: "Proper Sizing",
      description: "Prevents inefficiency and ensures optimal performance",
    },
    {
      icon: <Award size={32} />,
      title: "Licensed Technicians",
      description: "Certified professionals ensure safety and compliance",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Expert Design",
      description: "Maximizes efficiency and system longevity",
    },
    {
      icon: <Hammer size={32} />,
      title: "Quality Installation",
      description: "Protects your investment with meticulous craftsmanship",
    },
    {
      icon: <Handshake size={32} />,
      title: "Warranty Coverage",
      description: "Professional installation required for warranty protection",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Performance Monitoring",
      description: "System optimization and ongoing performance tracking",
    },
  ];

  return (
    <section
      ref={ref}
      className="why-professional-matters py-5"
      style={{
        backgroundColor: "#f4f5f9",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h3
            className="fw-bolder mb-3"
            style={{
              color: "#062f3a",
              fontSize: "1.8rem",
              lineHeight: "1.3",
            }}
          >
            Why Professional Matters
          </h3>
          <p
            style={{
              color: "#585b6b",
              fontSize: "1.05rem",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Professional installation isn&apos;t just about
            expertise&mdash;it&apos;s about protecting your investment and
            ensuring peak performance.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="row gy-4"
        >
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="col-lg-4 col-md-6"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="p-4 rounded-4 h-100"
                style={{
                  backgroundColor: "#ffffff",
                  backdropFilter: "blur(10px)",
                  border: "1px solid #e6e6e6",
                  boxShadow: "0 4px 20px rgba(6, 47, 58, 0.04)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const element = e.currentTarget as HTMLElement;
                  element.style.backgroundColor = "#ffffff";
                  element.style.boxShadow = "0 12px 40px rgba(6, 47, 58, 0.08)";
                  element.style.borderColor = "#fd5523";
                }}
                onMouseLeave={(e) => {
                  const element = e.currentTarget as HTMLElement;
                  element.style.backgroundColor = "#ffffff";
                  element.style.boxShadow = "0 4px 20px rgba(6, 47, 58, 0.04)";
                  element.style.borderColor = "#e6e6e6";
                }}
              >
                {/* Icon Container */}
                <div
                  className="mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "rgba(253, 85, 35, 0.15)",
                    borderRadius: "0.75rem",
                    color: "#fd5523",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const element = e.currentTarget as HTMLElement;
                    element.style.backgroundColor = "rgba(253, 85, 35, 0.25)";
                    element.style.transform = "scale(1.1) rotate(-5deg)";
                  }}
                  onMouseLeave={(e) => {
                    const element = e.currentTarget as HTMLElement;
                    element.style.backgroundColor = "rgba(253, 85, 35, 0.15)";
                    element.style.transform = "scale(1) rotate(0deg)";
                  }}
                >
                  {point.icon}
                </div>

                {/* Content */}
                <h5
                  className="fw-bolder mb-2"
                  style={{
                    color: "#062f3a",
                    fontSize: "1.1rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  {point.title}
                </h5>
                <p
                  className="mb-0"
                  style={{
                    color: "#585b6b",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                  }}
                >
                  {point.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyProfessionalMatters;
