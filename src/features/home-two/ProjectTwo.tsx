"use client";
import { useState } from "react";
import Project11 from "@/assets/images/project/project-1-1.jpg";
import Project12 from "@/assets/images/project/project-1-2.jpg";
import Project13 from "@/assets/images/project/project-1-3.jpg";
import Project14 from "@/assets/images/project/project-1-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TextAnimation from "@/components/elements/TextAnimation";
import Link from "next/link";
import Image from "next/image";

export interface ProjectItem {
  id: number;
  title: string;
  subTitle: string;
  image: string; // The imported variable like Project11
  link: string;
}
const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Quality Equipment",
    subTitle: "Logistics",
    image: Project11.src,
    link: "/project-details",
  },
  {
    id: 2,
    title: "International Shipping",
    subTitle: "Logistics",
    image: Project12.src,
    link: "/project-details",
  },
  {
    id: 3,
    title: "Safety Guaranteed",
    subTitle: "Logistics",
    image: Project13.src,
    link: "/project-details",
  },
  {
    id: 4,
    title: "Product Distribution",
    subTitle: "Logistics",
    image: Project14.src,
    link: "/project-details",
  },
  {
    id: 5,
    title: "Quality Equipment",
    subTitle: "Logistics",
    image: Project11.src,
    link: "/project-details",
  },
  {
    id: 6,
    title: "International Shipping",
    subTitle: "Logistics",
    image: Project12.src,
    link: "/project-details",
  },
  {
    id: 7,
    title: "Safety Guaranteed",
    subTitle: "Logistics",
    image: Project13.src,
    link: "/project-details",
  },
  {
    id: 8,
    title: "Product Distribution",
    subTitle: "Logistics",
    image: Project14.src,
    link: "/project-details",
  },
];
export default function ProjectTwo() {
  const [openLightBox, setOpenLightBox] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const images: string[] = projects.map((project) => project.image);
  return (
    <section className="project-one project-two" id="projects">
      <div className="project-one__bg-color">
        <FadeInAdvanced variant={"slideInRight"} delay={100} duration={2500}>
          {" "}
        </FadeInAdvanced>
      </div>
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
          {/* <div className="project-two__carousel owl-carousel owl-theme"> */}

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            modules={[Navigation, Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide className="item" key={project.id}>
                <div className="project-one__single">
                  <div className="project-one__img-box">
                    <div className="project-one__img">
                      <Image
                        src={project.image}
                        width={403}
                        height={530}
                        alt={project.title}
                      />
                    </div>
                    <div className="project-one__content">
                      <div className="project-one__title-box">
                        <p className="project-one__sub-title">
                          {project.subTitle}
                        </p>
                        <h3 className="project-one__title">
                          <Link href={project.link}>{project.title}</Link>
                        </h3>
                      </div>
                      <div className="project-one__arrow">
                        <Link
                          href="#"
                          className="img-popup"
                          onClick={() => {
                            setIndex(idx);
                            setOpenLightBox(true);
                          }}
                        >
                          <span className="icon-right-arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */}
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
