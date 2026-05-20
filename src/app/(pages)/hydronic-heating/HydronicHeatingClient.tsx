"use client";
import { Metadata } from "next";
import { generateServiceMetadata } from "@/utils/seo/metadata";
import { generateServiceSchema } from "@/utils/seo/jsonLd";
import { JSONLDScript } from "@/components/seo/JSONLDScript";
import { SEOBreadcrumbs } from "@/components/seo/SEOBreadcrumbs";
import { ServiceAreasNearYou } from "@/components/seo/ServiceAreasNearYou";
import {
  ServiceItem,
  hydronicHeatingData,
} from "@/contents/services/serviceData";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const page: React.FC = () => {
  return (
    <>
      <DefaultBanner title="Hydronic Heating Services" asH1 />

      {/* JSON-LD Schema for Local SEO */}
      <JSONLDScript
        schema={generateServiceSchema(
          "Hydronic Heating Installation & Repair",
          "Professional hydronic heating installation, repair, maintenance, and emergency services across Melbourne",
          "https://heaterservicemelbourne.com.au/hydronic-heating",
        )}
        id="hydronic-schema"
      />

      {/* Breadcrumb Navigation with Schema */}
      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Hydronic Heating", url: "/hydronic-heating" },
        ]}
        schema={true}
      />

      <section className="services-one services-page">
        <div className="container">
          <div className="row">
            {hydronicHeatingData.map((service: ServiceItem) => (
              <div className="col-xl-3 col-lg-6 col-md-6" key={service.id}>
                <div className="services-one__single">
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <Image
                        src={service.image}
                        width={300}
                        height={250}
                        alt={service.title}
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className={service.iconClass}></span>
                    </div>
                  </div>
                  <div className="services-one__content">
                    <div className="services-one__count">{service.count}</div>
                    <h4 className="services-one__title">
                      <Link href={service.link}>{service.title}</Link>
                    </h4>
                    <p className="services-one__text">{service.text}</p>
                    <div className="services-one__btn-box">
                      <Link href={service.link}>
                        Read More <span className="icon-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Near You - Internal Linking */}
      <ServiceAreasNearYou
        limit={12}
        title="Hydronic Heating Service Areas"
        subtitle="Professional hydronic heating services available across Melbourne"
      />

      {/* SEO keyword-rich content section */}
      <section style={{ padding: "60px 0", background: "#f9f9f9" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "16px", color: "#1a1a1a" }}>
                Hydronic Heating Service &amp; Repairs Melbourne
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", marginBottom: "16px" }}>
                Our licensed technicians provide expert <strong>hydronic heating service</strong> across Melbourne.
                Whether you need <strong>hydronic heating repairs Melbourne</strong>, routine{" "}
                <strong>hydronic heating servicing</strong>, or a new <strong>hydronic underfloor heating</strong>{" "}
                system installed, we have the skills and tools to do it right.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", marginBottom: "16px" }}>
                Wondering about <strong>hydronic heating cost</strong>? We provide upfront, transparent pricing with
                no hidden fees. Our team services all major hydronic boiler brands and panel radiator systems.
                Contact us today for a free quote on any <strong>hydronic heating service melbourne</strong> job.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
