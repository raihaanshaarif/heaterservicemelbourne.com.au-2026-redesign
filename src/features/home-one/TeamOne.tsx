"use client";

import Team11 from "@/assets/images/team/team-1-1.jpg";
import Team12 from "@/assets/images/team/team-1-2.jpg";
import Team13 from "@/assets/images/team/team-1-3.jpg";
import Team14 from "@/assets/images/team/team-1-4.jpg";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TextAnimation from "@/components/elements/TextAnimation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type SocialLink = {
  id: number;
  icon: string;
  url: string;
};
type AnimationVariant =
  | "fadeIn"
  | "fadeInLeft"
  | "fadeInRight"
  | "fadeInUp"
  | "fadeInDown"
  | "slideInLeft"
  | "slideInRight"
  | "slideInUp"
  | "slideInDown"
  | "zoomIn"
  | "zoomOut"
  | "bounceIn"
  | "flipInX"
  | "flipInY";
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string | StaticImageData;
  animation: AnimationVariant;
  delay?: number;
  socials: SocialLink[];
};

const teamMembersData: TeamMember[] = [
  {
    id: 1,
    name: "Alisa Smith",
    role: "Founder",
    delay: 100,
    image: Team11,
    animation: "fadeInLeft",
    socials: [
      { id: 1, icon: "fab fa-facebook-f", url: "#" },
      { id: 2, icon: "fab fa-twitter", url: "#" },
      { id: 3, icon: "fab fa-pinterest-p", url: "#" },
      { id: 4, icon: "fab fa-instagram", url: "#" },
    ],
  },
  {
    id: 2,
    name: "Andre Molas",
    role: "Manager",
    image: Team12,
    animation: "fadeInLeft",
    delay: 300,
    socials: [
      { id: 1, icon: "fab fa-facebook-f", url: "#" },
      { id: 2, icon: "fab fa-twitter", url: "#" },
      { id: 3, icon: "fab fa-pinterest-p", url: "#" },
      { id: 4, icon: "fab fa-instagram", url: "#" },
    ],
  },
  {
    id: 3,
    name: "Carly Beitzel",
    role: "Founder",
    image: Team13,
    animation: "fadeInRight",
    delay: 600,
    socials: [
      { id: 1, icon: "fab fa-facebook-f", url: "#" },
      { id: 2, icon: "fab fa-twitter", url: "#" },
      { id: 3, icon: "fab fa-pinterest-p", url: "#" },
      { id: 4, icon: "fab fa-instagram", url: "#" },
    ],
  },
  {
    id: 4,
    name: "Trent Felter",
    role: "Worker",
    image: Team14,
    animation: "fadeInRight",
    delay: 800,
    socials: [
      { id: 1, icon: "fab fa-facebook-f", url: "#" },
      { id: 2, icon: "fab fa-twitter", url: "#" },
      { id: 3, icon: "fab fa-pinterest-p", url: "#" },
      { id: 4, icon: "fab fa-instagram", url: "#" },
    ],
  },
];

export default function TeamOne() {
  return (
    <>
      {/*Team One Start */}
      <section className="team-one" id="team">
        <div className="team-one__shape-1"></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-1">
                <i className="fas fa-cogs"></i>
              </div>
              <h6 className="section-title__tagline">Our Team Members</h6>
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-2">
                <i className="fas fa-cogs"></i>
              </div>
            </div>
            <h3 className="section-title__title">
              <TextAnimation animationStyle="style1">
                Introduce Our Expert <br />
                <span>Logistic Teams</span>
              </TextAnimation>
            </h3>
          </div>
          <ul className="row list-unstyled">
            {teamMembersData.map((member) => (
              <FadeInAdvanced
                variant={member.animation}
                key={member.id}
                delay={member.delay}
                className="col-xl-3 col-lg-6 col-md-6"
              >
                <li>
                  <div className="team-one__single">
                    <div className="team-one__img-box">
                      <div className="team-one__img">
                        <Image
                          src={member.image}
                          width={300}
                          height={280}
                          alt={member.name}
                        />
                      </div>
                    </div>

                    <div className="team-one__content">
                      <div className="team-one__title-box">
                        <h3 className="team-one__title">
                          <Link href="/team-details">{member.name}</Link>
                        </h3>
                        <p className="team-one__sub-title">{member.role}</p>
                      </div>

                      <div className="team-one__arrow-and-social">
                        <div className="team-one__arrow">
                          <span className="fas fa-share-alt"></span>
                        </div>

                        <ul className="team-one__social list-unstyled">
                          {member.socials.map((social) => (
                            <li key={social.id}>
                              <Link href={social.url}>
                                <span className={social.icon}></span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </FadeInAdvanced>
            ))}
          </ul>
        </div>
      </section>
      {/*Team One End */}
    </>
  );
}
