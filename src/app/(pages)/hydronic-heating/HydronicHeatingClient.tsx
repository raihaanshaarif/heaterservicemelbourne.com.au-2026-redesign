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
      <DefaultBanner title="Hydronic Heating Services" />

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
    </>
  );
};

export default page;
