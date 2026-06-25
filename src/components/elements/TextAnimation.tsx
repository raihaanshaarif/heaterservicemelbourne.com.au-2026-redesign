"use client";

import React, { useRef } from "react";
import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type AnimationStyle = "style1" | "style2" | "style3" | "style4";

interface TextAnimationProps {
  children: ReactNode;
  animationStyle?: AnimationStyle;
}

const TextAnimation: React.FC<TextAnimationProps> = ({
  children,
  animationStyle = "style2",
}) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.3 
  });

  const getAnimationClass = (): string => {
    switch (animationStyle) {
      case "style1":
        return "text-anim-slide-up";
      case "style2":
        return "text-anim-slide-left";
      case "style3":
        return "text-anim-fade";
      case "style4":
        return "text-anim-fade";
      default:
        return "text-anim-fade";
    }
  };

  return (
    <div
      ref={ref}
      className={`text-animation ${getAnimationClass()} ${inView ? "in-view" : ""}`}
    >
      {children}
    </div>
  );
};

export default TextAnimation;
