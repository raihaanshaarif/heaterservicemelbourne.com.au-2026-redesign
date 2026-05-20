"use client";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import Link from "next/link";
import React from "react";
import { ServiceAreasNearYou } from "@/components/seo/ServiceAreasNearYou";
import { SEOBreadcrumbs } from "@/components/seo/SEOBreadcrumbs";
import { JSONLDScript } from "@/components/seo/JSONLDScript";
import { generateServiceSchema } from "@/utils/seo/jsonLd";

const warningSignItems = [
  "Headaches, dizziness or nausea when at home",
  "Flame on gas appliance burning orange or yellow (should be blue)",
  "Black soot marks around gas heater or flue",
  "Gas heater that frequently shuts off unexpectedly",
  "Condensation on windows in rooms with gas appliances",
  "Older gas ducted heating system with no CO detector installed",
];

const CarbonMonoxideTestingClient: React.FC = () => {
  return (
    <>
      <DefaultBanner title="Carbon Monoxide Testing Melbourne" asH1 />

      <JSONLDScript
        schema={generateServiceSchema(
          "Carbon Monoxide Testing Melbourne",
          "Professional carbon monoxide testing and CO safety inspections for gas heaters and ducted heating systems across Melbourne.",
          "https://heaterservicemelbourne.com.au/carbon-monoxide-testing",
        )}
        id="co-testing-schema"
      />

      <SEOBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Carbon Monoxide Testing", url: "/carbon-monoxide-testing" },
        ]}
        schema={true}
      />

      {/* Hero content */}
      <section style={{ padding: "60px 0", background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#1a1a1a", marginBottom: "16px" }}>
                Protect Your Family with Professional Carbon Monoxide Testing
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", marginBottom: "14px" }}>
                Carbon monoxide (CO) is an odourless, colourless gas produced by faulty gas appliances. It is
                potentially fatal. Our licensed technicians provide thorough{" "}
                <strong>carbon monoxide testing Melbourne</strong> to ensure your gas heater, ducted heating
                system and other gas appliances are safe to operate.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", marginBottom: "14px" }}>
                We use calibrated, professional-grade CO detectors to perform comprehensive{" "}
                <strong>carbon monoxide testing</strong> on all gas heating appliances. Every{" "}
                <strong>CO testing Melbourne</strong> inspection includes a detailed safety report and
                recommendations.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", marginBottom: "24px" }}>
                Annual <strong>carbon monoxide inspection</strong> is highly recommended for homes with gas
                ducted heating, gas wall heaters or open-flued gas appliances. Don&apos;t risk it — book a{" "}
                <strong>gas heater CO test</strong> today.
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
                Book CO Safety Test
              </Link>
            </div>

            <div className="col-lg-5">
              <div
                style={{
                  background: "#fff3f3",
                  border: "1px solid #fca5a5",
                  borderRadius: "12px",
                  padding: "32px",
                }}
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#b91c1c",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <i className="fas fa-exclamation-triangle"></i>
                  Warning Signs You Need CO Testing
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {warningSignItems.map((item) => (
                    <li
                      key={item}
                      style={{
                        padding: "8px 0",
                        borderBottom: "1px solid #fecaca",
                        fontSize: "14px",
                        color: "#444",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <i
                        className="fas fa-exclamation-circle"
                        style={{ color: "#b91c1c", marginTop: "2px", flexShrink: 0 }}
                      ></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we test */}
      <section style={{ padding: "60px 0", background: "#f9f9f9" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 700, color: "#1a1a1a" }}>
              What Our Carbon Monoxide Testing Covers
            </h2>
            <p style={{ fontSize: "15px", color: "#666", marginTop: "8px" }}>
              Comprehensive <strong>carbon monoxide safety Melbourne</strong> inspections
            </p>
          </div>
          <div className="row">
            {[
              {
                icon: "fas fa-wind",
                title: "Gas Ducted Heating CO Test",
                desc: "Full flue and combustion CO test on ducted gas heating systems — Brivis, Braemar, Rinnai, Vulcan and all brands.",
              },
              {
                icon: "fas fa-fire",
                title: "Gas Wall Heater Inspection",
                desc: "CO testing for gas wall heaters, open-flued heaters and decorative gas fireplaces.",
              },
              {
                icon: "fas fa-home",
                title: "Whole-Home Safety Check",
                desc: "Full property carbon monoxide safety audit covering all gas appliances including hot water systems.",
              },
              {
                icon: "fas fa-clipboard-check",
                title: "CO Safety Certificate",
                desc: "Receive a written CO safety inspection report. Ideal for landlords, property managers and home buyers.",
              },
            ].map((item) => (
              <div className="col-lg-3 col-md-6" key={item.title} style={{ marginBottom: "24px" }}>
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
                    className={item.icon}
                    style={{ fontSize: "32px", color: "#b91c1c", marginBottom: "16px", display: "block" }}
                  ></i>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#666", margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasNearYou
        limit={12}
        title="Carbon Monoxide Testing Service Areas"
        subtitle="CO safety inspections available across all Melbourne suburbs"
      />
    </>
  );
};

export default CarbonMonoxideTestingClient;
