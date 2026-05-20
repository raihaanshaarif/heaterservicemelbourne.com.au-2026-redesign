"use client";
import React from "react";
import FadeInAdvanced from "../elements/FadeInAdvanced";
import SiteFooterThreeShape1 from "@/assets/images/shapes/site-footer-three-shape-1.png";
import SiteFooterThreeShape2 from "@/assets/images/shapes/site-footer-three-shape-2.png";
import FooterLogo from "@/assets/images/resources/footer-logo.png";
import Image from "next/image";
import Link from "next/link";

const FooterThree: React.FC = () => {
  return (
    <footer className="site-footer-three">
      <div className="site-footer-three__shape-1 float-bob-x">
        <Image
          src={SiteFooterThreeShape1}
          width={395}
          height={371}
          alt="Shape"
        />
      </div>
      <div className="site-footer-three__shape-2 float-bob-y">
        <Image
          src={SiteFooterThreeShape2}
          width={461}
          height={375}
          alt="Shape"
        />
      </div>
      <div className="container">
        <div className="site-footer-three__top">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={100}>
                <div className="footer-widget-three__column footer-widget-three__about">
                  <div className="footer-widget-three__logo">
                    <Link href="/">
                      <Image
                        src={FooterLogo}
                        width={170}
                        height={40}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <p className="footer-widget-three__about-text">
                    Eros vivamus platea nullam id consequat eu sociis lectus
                    aliquam nibh auctor elitsed libero pharetra consequat and
                    fad sociis conubia favorite to risus.
                  </p>

                </div>
              </FadeInAdvanced>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={200}>
                <div className="footer-widget-three__column footer-widget-three__usefull-link">
                  <div className="footer-widget-three__title-box">
                    <h3 className="footer-widget-three__title">Navigation</h3>
                  </div>
                  <div className="footer-widget-three__link-box">
                    <ul className="footer-widget-three__link list-unstyled">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/service-areas">Service Areas</Link>
                      </li>
                      <li>
                        <Link href="/brands">Brands</Link>
                      </li>
                      <li>
                        <Link href="/self-care">Self Care</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInAdvanced>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={300}>
                <div className="footer-widget-three__column footer-widget-three__services">
                  <div className="footer-widget-three__title-box">
                    <h3 className="footer-widget-three__title">Our Services</h3>
                  </div>
                  <ul className="footer-widget-three__link list-unstyled">
                    <li>
                      <Link href="/hydronic-heating">Hydronic Heating</Link>
                    </li>
                    <li>
                      <Link href="/gas-ducted-heating">Gas Ducted Heating</Link>
                    </li>
                    <li>
                      <Link href="/split-system-air-conditioning">
                        Split Systems
                      </Link>
                    </li>
                    <li>
                      <Link href="/emergency-services">Emergency Services</Link>
                    </li>
                  </ul>
                </div>
              </FadeInAdvanced>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={"fadeInUp"} delay={400}>
                <div className="footer-widget-three__column footer-widget-three__services">
                  <div className="footer-widget-three__title-box">
                    <h3 className="footer-widget-three__title">Service Areas</h3>
                  </div>
                  <ul className="footer-widget-three__link list-unstyled" style={{ columns: 2, columnGap: "12px" }}>
                    <li><Link href="/service-areas/berwick">Berwick</Link></li>
                    <li><Link href="/service-areas/box-hill">Box Hill</Link></li>
                    <li><Link href="/service-areas/brighton">Brighton</Link></li>
                    <li><Link href="/service-areas/bundoora">Bundoora</Link></li>
                    <li><Link href="/service-areas/caulfield">Caulfield</Link></li>
                    <li><Link href="/service-areas/chadstone">Chadstone</Link></li>
                    <li><Link href="/service-areas/clayton">Clayton</Link></li>
                    <li><Link href="/service-areas/dandenong">Dandenong</Link></li>
                    <li><Link href="/service-areas/doncaster">Doncaster</Link></li>
                    <li><Link href="/service-areas/epping">Epping</Link></li>
                    <li><Link href="/service-areas/essendon">Essendon</Link></li>
                    <li><Link href="/service-areas/ferntree-gully">Ferntree Gully</Link></li>
                    <li><Link href="/service-areas/frankston">Frankston</Link></li>
                    <li><Link href="/service-areas/glen-waverley">Glen Waverley</Link></li>
                    <li><Link href="/service-areas/hallam">Hallam</Link></li>
                    <li><Link href="/service-areas/lilydale">Lilydale</Link></li>
                    <li><Link href="/service-areas/melbourne-cbd">Melbourne CBD</Link></li>
                    <li><Link href="/service-areas/mornington">Mornington</Link></li>
                    <li><Link href="/service-areas/mount-waverley">Mt Waverley</Link></li>
                    <li><Link href="/service-areas/narre-warren">Narre Warren</Link></li>
                    <li><Link href="/service-areas/oakleigh">Oakleigh</Link></li>
                    <li><Link href="/service-areas/pakenham">Pakenham</Link></li>
                    <li><Link href="/service-areas/ringwood">Ringwood</Link></li>
                    <li><Link href="/service-areas/rowville">Rowville</Link></li>
                    <li><Link href="/service-areas/sandringham">Sandringham</Link></li>
                    <li><Link href="/service-areas/springvale">Springvale</Link></li>
                    <li><Link href="/service-areas/st-kilda">St Kilda</Link></li>
                    <li><Link href="/service-areas/toorak">Toorak</Link></li>
                    <li><Link href="/service-areas/werribee">Werribee</Link></li>
                    <li><Link href="/service-areas/wheelers-hill">Wheelers Hill</Link></li>
                  </ul>
                </div>
              </FadeInAdvanced>
            </div>
          </div>
          <div className="row" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", marginTop: "24px" }}>
            <div className="col-12">
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Brand Self-Care Guides
              </p>
              <ul className="list-unstyled" style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", margin: 0 }}>
                {[["actronair","Actronair"],["braemar","Braemar"],["breezair","Breezair"],["brivis","Brivis"],["carrier","Carrier"],["celair","Celair"],["fujitsu","Fujitsu"],["haier","Haier"],["hitachi","Hitachi"],["kaden","Kaden"],["lg","LG"],["mitsubishi-electric","Mitsubishi"],["panasonic","Panasonic"],["rinnai","Rinnai"],["samsung","Samsung"],["sharp","Sharp"],["toshiba","Toshiba"],["vulcan","Vulcan"],["york","York"]].map(([slug, label]) => (
                  <li key={slug} style={{ margin: 0 }}>
                    <Link href={`/self-care/${slug}`} style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                      {label} Self-Care
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer-two__bottom">
        <div className="container">
          <div className="site-footer-two__bottom-inner">
            <p className="site-footer-two__bottom-text">
              © Copywright 2026 by <Link href="#">tanspot</Link> All Rights
              Reserved.
            </p>
            <ul className="list-unstyled site-footer-two__bottom-menu">
              <li>
                <Link href="/contact">Support</Link>
              </li>
              <li>
                <Link href="/about">Terms and Condition</Link>
              </li>
              <li>
                <Link href="/about">Privacy and Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
