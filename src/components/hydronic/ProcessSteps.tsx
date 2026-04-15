"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  CheckCircle,
  PencilRuler,
  Wrench,
  TestTube,
  Check,
  Cog,
} from "lucide-react";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const ProcessSteps: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const steps: Step[] = [
    {
      number: "01",
      icon: <CheckCircle size={28} />,
      title: "Initial Assessment",
      description: "Home survey & heating needs analysis",
    },
    {
      number: "02",
      icon: <PencilRuler size={28} />,
      title: "Design",
      description: "Custom system layout & component selection",
    },
    {
      number: "03",
      icon: <Wrench size={28} />,
      title: "Installation",
      description: "Professional pipe layout & installation",
    },
    {
      number: "04",
      icon: <TestTube size={28} />,
      title: "Testing",
      description: "Pressure tests & system verification",
    },
    {
      number: "05",
      icon: <Check size={28} />,
      title: "Commissioning",
      description: "Startup, calibration & user training",
    },
    {
      number: "06",
      icon: <Cog size={28} />,
      title: "Ongoing Support",
      description: "Maintenance guidance & dedicated technical support",
    },
  ];

  return (
    <div ref={ref} className="process-steps-container py-5">
      <h3
        className="fw-bolder mb-5 text-center"
        style={{ color: "#062f3a", fontSize: "1.8rem" }}
      >
        Our Installation Process
      </h3>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="row position-relative"
      >
        {/* Timeline Line (desktop only) */}
        <div
          className="d-none d-lg-block position-absolute start-50 translate-middle-x"
          style={{
            width: "3px",
            height: "100%",
            backgroundColor: "#e0e8f0",
            top: 0,
            left: "50%",
            zIndex: 0,
          }}
        />

        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={stepVariants}
            className="col-lg-6 col-md-12 mb-5 position-relative"
            style={{ zIndex: 1 }}
          >
            <div
              className="d-flex"
              style={{
                flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
                gap: "2rem",
                alignItems: "flex-start",
              }}
            >
              {/* Step Number Badge */}
              <div
                className="d-flex align-items-center justify-content-center shrink-0"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border: "3px solid #fd5523",
                  boxShadow: "0 4px 20px rgba(253, 85, 35, 0.1)",
                }}
              >
                <p
                  className="mb-0"
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "#fd5523",
                    letterSpacing: "0.05em",
                  }}
                >
                  {step.number}
                </p>
              </div>

              {/* Step Content Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="grow p-4 rounded-4"
                style={{
                  backgroundColor: "#f4f5f9",
                  border: "1px solid #e6e6e6",
                  boxShadow: "0 4px 20px rgba(6, 47, 58, 0.04)",
                  transition: "all 0.3s ease",
                  marginTop: "1rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 12px 40px rgba(6, 47, 58, 0.1)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 20px rgba(6, 47, 58, 0.04)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#f4f5f9";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      color: "#fd5523",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {step.icon}
                  </div>
                  <h5
                    className="fw-bolder mb-0"
                    style={{ color: "#062f3a", fontSize: "1.1rem" }}
                  >
                    {step.title}
                  </h5>
                </div>
                <p
                  className="text-secondary mb-0"
                  style={{ fontSize: "0.95rem", lineHeight: "1.6" }}
                >
                  {step.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProcessSteps;
