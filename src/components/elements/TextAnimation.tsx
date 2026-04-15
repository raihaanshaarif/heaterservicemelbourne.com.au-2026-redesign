"use client";

import React, { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

type AnimationStyle = "style1" | "style2" | "style3" | "style4";

interface TextAnimationProps {
  children: ReactNode;
  animationStyle?: AnimationStyle;
}

const TextAnimation: React.FC<TextAnimationProps> = ({
  children,
  animationStyle = "style2",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Function to recursively process children and split text
  const processChildren = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      // Split string into characters
      return node.split("").map((char, index) => (
        <motion.div
          key={`char-${index}`}
          variants={getCharVariants()}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.div>
      ));
    }

    if (React.isValidElement(node)) {
      // If it's a React element (like <span>), process its children recursively
      const element = node as React.ReactElement<{ children?: ReactNode }>;
      return React.cloneElement(element, {
        children: React.Children.map(element.props.children, (child) =>
          processChildren(child)
        ),
      });
    }

    if (Array.isArray(node)) {
      return node.map((child, index) => (
        <React.Fragment key={index}>{processChildren(child)}</React.Fragment>
      ));
    }

    return node;
  };

  const getCharVariants = (): Variants => {
    switch (animationStyle) {
      case "style1":
        return {
          hidden: {
            opacity: 0,
            y: "90%",
            rotateX: -40,
          },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
              duration: 1,
              ease: [0.175, 0.885, 0.32, 1.275],
            },
          },
        };

      case "style2":
        return {
          hidden: {
            opacity: 0,
            x: 50,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: [0.175, 0.885, 0.32, 1.275],
            },
          },
        };

      case "style3":
        return {
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 1,
              ease: [0.175, 0.885, 0.32, 1.275],
            },
          },
        };

      case "style4":
        return {
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 1,
              ease: [0.175, 0.885, 0.32, 1.275],
            },
          },
        };

      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {processChildren(children)}
    </motion.div>
  );
};

export default TextAnimation;
