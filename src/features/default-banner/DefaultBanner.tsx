import React from "react";
import headerImg from "@/assets/images/resources/page-header-img-1.png";
import headerShape from "@/assets/images/shapes/page-header-shape-1.png";
import Image from "next/image";
import Link from "next/link";
interface ThisBanner {
  title: string;
  titleLink?: string;
  subTitle?: string;
}
const DefaultBanner: React.FC<ThisBanner> = ({
  title,
  titleLink = "",
  subTitle = "",
}) => {
  return (
    <section className="page-header">
      <div className="page-header__bg"></div>
      <div className="container">
        <div className="page-header__inner">
          <div className="page-header__img-1">
            <Image
              src={headerImg}
              width={440}
              height={430}
              alt={`${title} page banner - Professional heating services Melbourne`}
            />
          </div>
          <div className="page-header__shape-1 float-bob-y">
            <Image
              src={headerShape}
              width={267}
              height={269}
              alt={`${title} section design element`}
            />
          </div>
          <h3>{title}</h3>
          <div className="thm-breadcrumb__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span className="fas fa-angle-right"></span>
              </li>
              <li>
                <Link href={titleLink ? titleLink : "#"}>{title}</Link>
              </li>
              {subTitle && (
                <>
                  <li>
                    <span className="fas fa-angle-right"></span>
                  </li>
                  <li>{subTitle}</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultBanner;
