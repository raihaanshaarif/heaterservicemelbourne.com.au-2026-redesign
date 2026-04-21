"use client";

import Link from "next/link";
import { FC, useMemo } from "react";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

interface ServiceAreaProps {
  /** Current suburb or service type */
  currentArea?: string;
  /** Limit number of suburbs to display (default: 12) */
  limit?: number;
  /** Title of the section */
  title?: string;
  /** Subtitle or description */
  subtitle?: string;
}

// Comprehensive Melbourne suburbs list
const MELBOURNE_SUBURBS = [
  "Armadale",
  "Ashwood",
  "Attwood",
  "Avonsleigh",
  "Badger Creek",
  "Baxter",
  "Bayswater",
  "Beaconsfield",
  "Beaumaris",
  "Belgrave",
  "Bentleigh",
  "Bentleigh East",
  "Berwick",
  "Bittern",
  "Black Rock",
  "Blackburn North",
  "Blairgowrie",
  "Boneo",
  "Boronia",
  "Botanic Ridge",
  "Box Hill",
  "Briar Hill",
  "Brighton",
  "Brighton East",
  "Broadmeadows",
  "Bundoora",
  "Burwood",
  "Burwood East",
  "Caulfield",
  "Chadstone",
  "Chelsea",
  "Chelsea Heights",
  "Chirnside Park",
  "Clayton",
  "Clayton South",
  "Clyde",
  "Clyde North",
  "Dandenong",
  "Dandenong North",
  "Dandenong South",
  "Doncaster",
  "Doncaster East",
  "Donvale",
  "Doveton",
  "Eaglehawk",
  "Epping",
  "Essendon",
  "Essendon Fields",
  "Fawkner",
  "Ferntree Gully",
  "Frankston",
  "Frankston North",
  "Frankston South",
  "Gembrook",
  "Glen Waverley",
  "Greensborough",
  "Hallam",
];

/**
 * Service Areas Near You Component
 * Displays local suburbs for internal linking
 * Avoids creating a "link farm" by:
 * 1. Limiting number of links displayed
 * 2. Using context-appropriate links
 * 3. Natural integration into page flow
 * 4. Semantic HTML structure
 */
export const ServiceAreasNearYou: FC<ServiceAreaProps> = ({
  currentArea,
  limit = 12,
  title = "Service Areas Near You",
  subtitle = "Professional heating services available in:",
}) => {
  // Filter and randomize suburbs for diversity across pages
  const displaySuburbs = useMemo(() => {
    let suburbs = MELBOURNE_SUBURBS.filter(
      (suburb) =>
        !currentArea || suburb.toLowerCase() !== currentArea.toLowerCase(),
    );

    // Shuffle for variety while keeping primary suburbs first
    const prioritySuburbs = [
      "Clayton South",
      "Clayton",
      "Dandenong",
      "Frankston",
      "Doncaster",
      "Box Hill",
    ];

    const sorted = [
      ...prioritySuburbs.filter((s) => suburbs.includes(s)),
      ...suburbs.filter((s) => !prioritySuburbs.includes(s)),
    ];

    return sorted.slice(0, limit);
  }, [currentArea, limit]);

  return (
    <section className="service-areas-section" style={{ margin: "60px 0" }}>
      <div className="container">
        <FadeInAdvanced variant="fadeInUp" delay={100}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>{title}</h2>
            <p
              style={{ fontSize: "16px", color: "#666", marginBottom: "30px" }}
            >
              {subtitle}
            </p>
          </div>
        </FadeInAdvanced>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginBottom: "40px",
          }}
        >
          {displaySuburbs.map((suburb, index) => (
            <FadeInAdvanced
              key={suburb}
              variant="fadeInUp"
              delay={50 + index * 20}
            >
              <Link
                href={`/service-areas/${suburb.toLowerCase().replace(/\s+/g, "-")}`}
                style={{
                  display: "block",
                  padding: "15px 20px",
                  border: "1px solid #dfe3e7",
                  borderRadius: "8px",
                  textDecoration: "none",
                  color: "#0066cc",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  backgroundColor: "#fff",
                }}
                className="service-area-link"
              >
                {suburb}
              </Link>
            </FadeInAdvanced>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/service-areas"
            style={{
              display: "inline-block",
              padding: "12px 30px",
              backgroundColor: "#ff6b35",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            className="thm-btn"
          >
            View All Service Areas
          </Link>
        </div>
      </div>

      <style>{`
        .service-area-link:hover {
          border-color: #ff6b35;
          background-color: #fff8f3;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

/**
 * Service-Specific Service Areas Component
 * Shows suburbs where a specific service is available
 * Used on service pages for contextual internal linking
 */
export const ServiceSpecificAreas: FC<
  ServiceAreaProps & { service: string }
> = ({ service, currentArea, limit = 8, title, subtitle }) => {
  const defaultTitle = title || `${service} Available in These Melbourne Areas`;
  const defaultSubtitle =
    subtitle ||
    `We service ${service} across greater Melbourne and surrounding suburbs.`;

  return (
    <ServiceAreasNearYou
      currentArea={currentArea}
      limit={limit}
      title={defaultTitle}
      subtitle={defaultSubtitle}
    />
  );
};
