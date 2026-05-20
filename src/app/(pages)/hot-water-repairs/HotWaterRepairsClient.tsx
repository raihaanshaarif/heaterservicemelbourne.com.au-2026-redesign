"use client";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import Link from "next/link";
import React from "react";
import { ServiceAreasNearYou } from "@/components/seo/ServiceAreasNearYou";
import { SEOBreadcrumbs } from "@/components/seo/SEOBreadcrumbs";
import { JSONLDScript } from "@/components/seo/JSONLDScript";
import { generateServiceSchema } from "@/utils/seo/jsonLd";

const services = [
  {
    icon: "fas fa-fire",
    title: "Hot Water System Repair",
    description:
      "Fast diagnosis and repair of all hot water system faults. Gas, electric and heat pump systems serviced.",
  },
  {
    icon: "fas fa-tools",
    title: "Same Day Hot Water Service",
    description:
      "No hot water? We offer same day hot water service across Melbourne — morning call, afternoon fix.",
  },
  {
    icon: "fas fa-exchange-alt",
    title: "Hot Water Replacement Melbourne",
    description:
      "Old or irreparable unit? We handle full hot water replacement Melbourne with leading brands and warranty.",
  },
  {
    icon: "fas fa-tint",
    title: "Hot Water Tank Repair Near Me",
    description:
      "Leaking or faulty tank? Our technicians are local and ready for hot water tank repair near you across all suburbs.",
  },
];

const HotWaterRepairsClient: React.FC = () => {
  return (
    <>
      <DefaultBanner title="Hot Water Repairs Melbourne" asH1 />

      <JSONLDScript
        schema={generateServiceSchema(
          "Hot Water Repairs Melbourne",
          "Fast hot water repairs, hot water system repair, same day hot water service and hot water replacement across Melbourne.",
          "https://heaterservicemelbourne.com.au/hot-water-repairs",
        )}
        id="hot-water-schema"
      />

      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Hot Water Repairs", url: "/hot-water-repairs" },
        ]}
        schema={true}
      />

      {/* Intro / CTA */}
      <section style={{ padding: "60px 0", background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#1a1a1a", marginBottom: "16px" }}>
                Melbourne&apos;s Trusted Hot Water Repair Specialists
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", marginBottom: "14px" }}>
                No hot water is one of the most disruptive household emergencies. Our licensed technicians
                specialise in <strong>hot water repairs</strong> across Melbourne, providing fast diagnosis
                and reliable <strong>hot water system repair</strong> for gas, electric and heat pump systems.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", marginBottom: "14px" }}>
                We offer <strong>same day hot water service</strong> so you&apos;re never without hot water for
                long. Whether it&apos;s a minor fault or a full <strong>hot water replacement Melbourne</strong>,
                our team arrives prepared with parts for common models to fix your system on the first visit.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", marginBottom: "24px" }}>
                Looking for <strong>hot water repairs Melbourne</strong> near you? We service all Melbourne
                suburbs — eastern suburbs, south-east, north and west. Our local technicians provide fast{" "}
                <strong>hot water tank repair near me</strong> with upfront pricing.
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#b91c1c",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Book Hot Water Repair
              </Link>
            </div>
            <div className="col-lg-5">
              <div
                style={{
                  background: "#f9f9f9",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "32px",
                }}
              >
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a", marginBottom: "20px" }}>
                  Why Choose Us for Hot Water Repairs?
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Same day hot water service available",
                    "All brands — Rinnai, Rheem, Bosch, Dux, Vulcan",
                    "Gas, electric and heat pump systems",
                    "Upfront pricing, no hidden costs",
                    "Licensed and insured technicians",
                    "Hot water replacement Melbourne wide",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        padding: "8px 0",
                        borderBottom: "1px solid #e5e7eb",
                        fontSize: "14px",
                        color: "#444",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <i className="fas fa-check-circle" style={{ color: "#b91c1c" }}></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "60px 0", background: "#f9f9f9" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 700, color: "#1a1a1a" }}>
              Our Hot Water Repair Services
            </h2>
            <p style={{ fontSize: "15px", color: "#666", marginTop: "8px" }}>
              Comprehensive <strong>hot water service Melbourne</strong> — from repairs to replacements
            </p>
          </div>
          <div className="row">
            {services.map((service) => (
              <div className="col-lg-3 col-md-6" key={service.title} style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "28px",
                    height: "100%",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <i
                    className={service.icon}
                    style={{ fontSize: "32px", color: "#b91c1c", marginBottom: "16px", display: "block" }}
                  ></i>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#666", margin: 0 }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasNearYou
        limit={12}
        title="Hot Water Repair Service Areas"
        subtitle="Same day hot water service available across Melbourne"
      />
    </>
  );
};

export default HotWaterRepairsClient;
