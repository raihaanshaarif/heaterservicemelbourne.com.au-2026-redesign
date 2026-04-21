import type { Metadata } from "next";
import { ServiceItem, servicesData } from "@/contents/services/serviceData";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Heating Services Melbourne | Gas Ducted, Hydronic & Split Systems",
  description:
    "Complete heating services in Melbourne: Gas ducted heating, hydronic heating, split system installation, repair, maintenance and 24/7 emergency service. Licensed technicians.",
  keywords:
    "heating services melbourne, gas ducted heating melbourne, hydronic heating melbourne, split system melbourne, emergency heating repair, heating installation melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/services",
  },
  openGraph: {
    title:
      "All Heating Services Melbourne | Gas Ducted, Hydronic & Split Systems",
    description:
      "Professional heating installation, repair and maintenance in Melbourne. Gas ducted, hydronic, split systems and 24/7 emergency service.",
    url: "https://heaterservicemelbourne.com.au/services",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

const page: React.FC = () => {
  return (
    <>
      <DefaultBanner title="Services" />
      <section className="services-one services-page">
        <div className="container">
          <div className="row">
            {servicesData.map((service: ServiceItem) => (
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
    </>
  );
};

export default page;
