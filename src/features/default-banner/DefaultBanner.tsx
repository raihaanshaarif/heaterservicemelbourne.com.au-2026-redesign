import React from "react";
// Header img served from /public for predictable URL
import headerShape from "@/assets/images/shapes/page-header-shape-1.png";
import Image from "next/image";
import Link from "next/link";
interface ThisBanner {
  title: string;
  titleLink?: string;
  subTitle?: string;
  asH1?: boolean;
}
const DefaultBanner: React.FC<ThisBanner> = ({
  title,
  titleLink = "",
  subTitle = "",
  asH1 = false,
}) => {
  return (
    <section className="page-header">
      <div className="page-header__bg"></div>
      <div className="container">
        <div className="page-header__inner">
          <div className="page-header__img-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/page-header-img-1.webp"
              width={440}
              height={430}
              alt={`${title} page banner - Professional heating services Melbourne`}
              fetchPriority="high"
              decoding="async"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="page-header__shape-1 float-bob-y">
            <Image
              src={headerShape}
              width={267}
              height={269}
              alt=""
              loading="lazy"
            />
          </div>
          {asH1 ? <h1 style={{ color: "#fff" }}>{title}</h1> : <h3 style={{ color: "#fff" }}>{title}</h3>}
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
