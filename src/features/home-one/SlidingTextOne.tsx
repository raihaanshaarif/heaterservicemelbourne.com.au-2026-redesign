"use client";

import SlidingTextIcon1 from "@/assets/images/icon/sliding-text-icon-1.png";
import MarqueeSlider from "@/components/elements/MarqueeSlider";
import Image from "next/image";

const slidingTexts: string[] = [
  "HYDRONIC HEATING",
  "GAS DUCTED HEATING",
  "SPLIT SYSTEMS",
  "EMERGENCY REPAIRS",
  "MELBOURNE WIDE",
];

export default function SlidingTextOne() {
  return (
    <section className="sliding-text-one">
      <div className="sliding-text-one__wrap">
        <MarqueeSlider className="sliding-text__list list-unstyled marquee_mode">
          {slidingTexts.map((text, index) => (
            <li key={index} className="sliding-text-one__item">
              <h2 className="sliding-text__title">
                {text}{" "}
                <Image
                  src={SlidingTextIcon1}
                  width={75}
                  height={65}
                  alt="Image"
                />
              </h2>
            </li>
          ))}
        </MarqueeSlider>
      </div>
    </section>
  );
}
