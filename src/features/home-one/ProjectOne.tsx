"use client";

import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import Link from "next/link";
// import { ProjectOneItem, projectsData } from "@/contents/project/projectData";

// Dummy data for ProjectOne component (projectsData file was removed during cleanup)
const projectsData: any[] = [];

export default function ProjectOne() {
  const [openLightBox, setOpenLightBox] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const images = projectsData.map((project) => project.img);

  const handleImage = (index: number): void => {
    setIndex(index);
    setOpenLightBox(true);
  };
  return (
    <section className="project-one" id="projects">
      <div className="project-one__bg-color"></div>
      <div className="container">
        <div className="project-one__top">
          <div className="section-title text-left sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-1">
                <i className="fas fa-cogs"></i>
              </div>
              <h6 className="section-title__tagline">SEE OUR PORTFOLIO</h6>
              <span className="section-title__tagline-border"></span>
              <div className="section-title__shape-2">
                <i className="fas fa-cogs"></i>
              </div>
            </div>
            <h3 className="section-title__title">
              <TextAnimation animationStyle="style1">
                Explore Our <span>Recent Work</span>
              </TextAnimation>
            </h3>
          </div>
          <div className="project-one__btn-box">
            <Link href="/projects" className="thm-btn">
              view all projects
              <span>
                <i className="icon-right-arrow"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="project-one__bottom">
        <div className="container">
          <div className="row">
            {/*Project One Single Start*/}
            {projectsData.map((project: any, idx) => (
              <div className="col-xl-3 col-lg-6 col-md-6" key={project?.id}>
                <FadeInAdvanced
                  variant={project?.variant}
                  delay={project?.delay}
                >
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <Image
                          src={project?.img}
                          width={403}
                          height={530}
                          alt={project?.subTitle}
                        />
                      </div>
                      <div className="project-one__content">
                        <div className="project-one__title-box">
                          <p className="project-one__sub-title">
                            {project?.subTitle}
                          </p>
                          <h3 className="project-one__title">
                            <Link href={project?.linkUrl}>
                              {project?.title}
                            </Link>
                          </h3>
                        </div>
                        <div className="project-one__arrow">
                          <Link
                            href="#"
                            className="img-popup"
                            onClick={() => handleImage(idx)}
                          >
                            <span className="icon-right-arrow"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInAdvanced>
              </div>
            ))}
            {/*Project One Single End*/}
          </div>
        </div>
      </div>
      <Lightbox
        open={openLightBox}
        close={() => setOpenLightBox(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </section>
  );
}
