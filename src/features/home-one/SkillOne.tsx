"use client";

import Progresbar from "@/components/elements/Progressbar";
import TextAnimation from "@/components/elements/TextAnimation";
import Link from "next/link";

interface BarItem {
  id: number;
  title: string;
  value: number;
}
const barItem: BarItem[] = [
  { id: 1, title: "Logistics", value: 70 },
  { id: 2, title: "Management", value: 80 },
  { id: 3, title: "Warehousing", value: 95 },
  { id: 4, title: "Delivery Service", value: 98 },
];
export default function SkillOne() {
  return (
    <>
      {/*Skill One Start */}
      <section className="skill-one">
        <div className="skill-one__bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="skill-one__left">
                <div className="section-title text-left sec-title-animation animation-style1">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline-border"></span>
                    <div className="section-title__shape-1">
                      <i className="fas fa-cogs"></i>
                    </div>
                    <h6 className="section-title__tagline">Our Skills</h6>
                    <span className="section-title__tagline-border"></span>
                    <div className="section-title__shape-2">
                      <i className="fas fa-cogs"></i>
                    </div>
                  </div>
                  <h3 className="section-title__title">
                    <TextAnimation animationStyle="style1">
                      Transportation Services We Are{" "}
                      <span>Often Considered</span>
                    </TextAnimation>
                  </h3>
                </div>
                <p className="skill-one__text">
                  A logistic service provider company plays a pivotal role in
                  the global supply chain ecosystem by efficiently managing the
                  movement of goods from point of origin to final destination.
                  These companies offer a diverse range.
                </p>
                <div className="skill-one__progress-box">
                  {barItem.map((bar: BarItem) => (
                    <Progresbar
                      key={bar.id}
                      title={bar.title}
                      value={bar.value}
                    />
                  ))}
                </div>
                <div className="skill-one__btn-box">
                  <Link href="/contact" className="thm-btn">
                    Book Your Parcel
                    <span>
                      <i className="icon-right-arrow"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6"></div>
          </div>
        </div>
      </section>
      {/*Skill One End */}
    </>
  );
}
