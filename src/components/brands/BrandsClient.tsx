"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Import all brand images
import mitsubishi from "@/assets/images/brands/mitsubishi.png";
import panasonic from "@/assets/images/brands/Panasonic.png";
import lg from "@/assets/images/brands/Lg.png";
import samsung from "@/assets/images/brands/Samsung.png";
import fujitsu from "@/assets/images/brands/Fujitsu.png";
import toshiba from "@/assets/images/brands/Toshiba.png";
import carrier from "@/assets/images/brands/Carrier.png";
import hitachi from "@/assets/images/brands/Hitachi.png";
import haier from "@/assets/images/brands/Haier.png";
import kaden from "@/assets/images/brands/Kaden.png";
import sharp from "@/assets/images/brands/Sharp.png";
import breezair from "@/assets/images/brands/breezeair.png";
import bonaire from "@/assets/images/brands/Bonaire.png";
import braemar from "@/assets/images/brands/Braemar.png";
import brivis from "@/assets/images/brands/Brivis.png";
import actronair from "@/assets/images/brands/ActronAir.png";
import rinnai from "@/assets/images/brands/Rinnai.png";
import vulcan from "@/assets/images/brands/Vulcan.png";
import york from "@/assets/images/brands/York.png";
import celair from "@/assets/images/brands/Celair.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

type Brand = {
  name: string;
  tagline?: string;
  description?: string;
  image?: StaticImageData;
  bullets?: string[];
  slug: string;
  brandUrl?: string;
};

// Map of brand images
const brandImages: { [key: string]: StaticImageData } = {
  mitsubishi,
  panasonic,
  lg,
  samsung,
  fujitsu,
  toshiba,
  carrier,
  hitachi,
  haier,
  kaden,
  sharp,
  breezair,
  bonaire,
  braemar,
  brivis,
  actronair,
  rinnai,
  vulcan,
  york,
  celair,
};

const brands: Brand[] = [
  {
    name: "Bonaire",
    tagline: "Ducted system specialists",
    description:
      "Leading Australian manufacturer of ducted heating and cooling systems, designed specifically for Australian homes.",
    image: brandImages.bonaire,
    bullets: [
      "Ducted System Experts",
      "Zone Control Technology",
      "Australian Designed",
      "Whole Home Solutions",
    ],
    slug: "bonaire",
    brandUrl: "/brands/bonaire",
  },
  {
    name: "Braemar",
    tagline: "Premium Australian brand",
    description:
      "Australian manufacturer specialising in ducted gas heating and evaporative cooling systems for complete home comfort.",
    image: brandImages.braemar,
    bullets: [
      "Ducted Gas Heating",
      "Evaporative Cooling",
      "Australian Conditions",
      "Reliable Performance",
    ],
    slug: "braemar",
    brandUrl: "/brands/braemar",
  },
  {
    name: "Brivis",
    tagline: "Ducted heating & cooling",
    description:
      "Australian leader in ducted heating and cooling systems with decades of innovation in climate control.",
    image: brandImages.brivis,
    bullets: [
      "Ducted Systems Specialist",
      "Multi‑Zone Control",
      "Energy Efficient",
      "Australian Made",
    ],
    slug: "brivis",
    brandUrl: "/brands/brivis",
  },
  {
    name: "Mitsubishi Electric",
    tagline: "Premium Japanese engineering",
    description:
      "Our factory-trained technicians specialise in Mitsubishi Electric systems, providing expert installation, diagnostic repairs, and preventative maintenance to ensure your premium system operates at peak performance throughout Melbourne's changing seasons.",
    image: brandImages.mitsubishi,
    bullets: [
      "Certified Installation",
      "Precision Diagnostics",
      "System Optimization",
      "Extended Warranty",
    ],
    slug: "mitsubishi-electric",
    brandUrl: "/brands/mitsubishi-electric",
  },
  {
    name: "Panasonic",
    tagline: "Innovative comfort solutions",
    description:
      "Advanced nanoe-X air purification technology combined with energy-efficient performance, delivering clean, comfortable air for Melbourne families.",
    image: brandImages.panasonic,
    bullets: [
      "nanoe-X Air Purification",
      "Econavi Sensor",
      "Smart App Control",
      "5 Year Warranty",
    ],
    slug: "panasonic",
    brandUrl: "/brands/panasonic",
  },
  {
    name: "LG",
    tagline: "Smart, energy-efficient systems",
    description:
      "Smart technology meets sleek design in LG's air conditioning range, featuring Wi‑Fi connectivity and energy-efficient operation for modern Melbourne homes.",
    image: brandImages.lg,
    bullets: [
      "Dual Inverter Compressor",
      "ThinQ Wi‑Fi Control",
      "Active Energy Control",
      "5 Year Warranty",
    ],
    slug: "lg",
    brandUrl: "/brands/lg",
  },
  {
    name: "Samsung",
    tagline: "Professional service available",
    description:
      "Expert installation, repair, and maintenance services for all Samsung air conditioning models with genuine parts and manufacturer-backed warranties.",
    image: brandImages.samsung,
    bullets: ["Smart Wi‑Fi setup", "Fast repairs", "Warranty-backed service"],
    slug: "samsung",
    brandUrl: "/brands/samsung",
  },
  {
    name: "Fujitsu",
    tagline: "Professional service available",
    description:
      "Specialised service for Fujitsu systems with Japanese engineering expertise, focusing on reliable performance and energy-efficient maintenance solutions.",
    image: brandImages.fujitsu,
    bullets: [
      "DC Inverter system servicing",
      "Human sensor calibration",
      "Anti-bacterial filter replacement",
      "Warranty-backed repairs",
    ],
    slug: "fujitsu",
    brandUrl: "/brands/fujitsu",
  },
  {
    name: "Toshiba",
    tagline: "Professional service available",
    description:
      "Expert Toshiba air conditioning services with advanced inverter technology expertise and intelligent climate control system maintenance.",
    image: brandImages.toshiba,
    bullets: [
      "Hi‑Wall & Daiseikai installations",
      "Intelligent Eye sensor calibration",
      "Self-cleaning system maintenance",
      "Warranty-compliant repairs",
    ],
    slug: "toshiba",
    brandUrl: "/brands/toshiba",
  },
  {
    name: "Carrier",
    tagline: "Global innovation leader",
    description:
      "World leader in air conditioning innovation with decades of experience; we service Carrier ducted and commercial systems with a focus on reliability and efficiency.",
    image: brandImages.carrier,
    bullets: [
      "Ducted System Specialists",
      "Commercial Grade Quality",
      "Smart Home Integration",
      "Extended Warranty Options",
    ],
    slug: "carrier",
    brandUrl: "/brands/carrier",
  },
  {
    name: "Hitachi",
    tagline: "Japanese quality & reliability",
    description:
      "Premium Japanese engineering with advanced inverter technology and energy-efficient cooling solutions for Melbourne homes and businesses.",
    image: brandImages.hitachi,
    bullets: [
      "Premium Inverter Systems",
      "Stainless Steel Components",
      "Energy Efficient Operation",
      "Long-lasting Durability",
    ],
    slug: "hitachi",
    brandUrl: "/brands/hitachi",
  },
  {
    name: "Haier",
    tagline: "Smart & affordable solutions",
    description:
      "Global leader in home appliances offering smart, energy-efficient air conditioning systems with excellent value for money.",
    image: brandImages.haier,
    bullets: [
      "Self‑Cleaning Technology",
      "Smart Wi‑Fi Control",
      "Energy Star Rated",
      "Budget-Friendly Options",
    ],
    slug: "haier",
    brandUrl: "/brands/haier",
  },
  {
    name: "Kaden",
    tagline: "Australian value brand",
    description:
      "Reliable Australian brand offering quality cooling solutions with excellent after-sales support and competitive pricing.",
    image: brandImages.kaden,
    bullets: [
      "Split System Specialists",
      "Australian Support Network",
      "Value for Money",
      "Quick Service Response",
    ],
    slug: "kaden",
    brandUrl: "/brands/kaden",
  },
  {
    name: "Sharp",
    tagline: "Plasmacluster air purification",
    description:
      "Innovative Japanese brand featuring Plasmacluster air purification technology for cleaner, healthier indoor air.",
    image: brandImages.sharp,
    bullets: [
      "Plasmacluster Air Purification",
      "Energy Efficient Models",
      "Quiet Operation",
      "Advanced Filtration",
    ],
    slug: "sharp",
    brandUrl: "/brands/sharp",
  },
  {
    name: "Breezair",
    tagline: "Evaporative cooling specialists",
    description:
      "Australian specialists in evaporative cooling systems, perfect for Melbourne's dry climate conditions with energy-efficient operation.",
    image: brandImages.breezair,
    bullets: [
      "Evaporative Cooling Experts",
      "Energy Efficient Operation",
      "Melbourne Climate Optimized",
      "Australian Made & Owned",
    ],
    slug: "breezair",
    brandUrl: "/brands/breezair",
  },

  {
    name: "ActronAir",
    tagline: "100% AUSTRALIAN OWNED",
    description:
      "Proudly Australian-owned and manufactured, ActronAir delivers premium ducted and split system solutions designed for Australian conditions.",
    image: brandImages.actronair,
    bullets: [
      "Australian Manufactured",
      "Premium Quality Systems",
      "Advanced Zone Control",
      "Local Support Network",
    ],
    slug: "actronair",
    brandUrl: "/brands/actronair",
  },
  {
    name: "Rinnai",
    tagline: "Heating & cooling solutions",
    description:
      "Trusted brand offering comprehensive heating and cooling solutions with a focus on energy efficiency and reliability.",
    image: brandImages.rinnai,
    bullets: [
      "Gas Heating Specialists",
      "Split System Range",
      "Energy Efficient",
      "Proven Reliability",
    ],
    slug: "rinnai",
    brandUrl: "/brands/rinnai",
  },
  {
    name: "Vulcan",
    tagline: "Australian heritage brand",
    description:
      "Historic Australian brand with decades of experience in gas heating and climate control solutions.",
    image: brandImages.vulcan,
    bullets: [
      "Gas Heating Experts",
      "Australian Heritage",
      "Ducted Systems",
      "Reliable Service",
    ],
    slug: "vulcan",
    brandUrl: "/brands/vulcan",
  },
  {
    name: "York",
    tagline: "Commercial grade quality",
    description:
      "Global leader in commercial HVAC systems, offering robust and reliable air conditioning solutions for all applications.",
    image: brandImages.york,
    bullets: [
      "Commercial Systems",
      "Industrial Grade",
      "High Capacity Units",
      "Proven Performance",
    ],
    slug: "york",
    brandUrl: "/brands/york",
  },
  {
    name: "Celair",
    tagline: "Italian design & innovation",
    description:
      "Italian brand known for stylish design and innovative portable and fixed air conditioning solutions.",
    image: brandImages.celair,
    bullets: [
      "Stylish Design",
      "Portable Units",
      "Split Systems",
      "European Quality",
    ],
    slug: "celair",
    brandUrl: "/brands/celair",
  },
];

const BrandCard: React.FC<{ b: Brand }> = ({ b }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const shortDesc = b.description
    ? b.description.length > 140
      ? b.description.slice(0, 137) + "..."
      : b.description
    : "";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className="col-md-6 col-lg-4"
    >
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-100 d-flex flex-column position-relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.6)",
          borderRadius: "24px",
          padding: "32px 28px",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.08), 0 20px 60px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.8)",
          overflow: "hidden",
        }}
      >
        {/* Gradient accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background:
              "linear-gradient(90deg, #b91c1c 0%, #ef4444 50%, #dc2626 100%)",
          }}
        />

        {/* Logo container */}
        {b.image && (
          <motion.div
            className="mb-5 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.1 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 16px",
                background:
                  "linear-gradient(135deg, rgba(185,28,28,0.1) 0%, rgba(239,68,68,0.08) 100%)",
                borderRadius: "16px",
                border: "1px solid rgba(185,28,28,0.15)",
              }}
            >
              <Image
                src={b.image}
                alt={b.name + " logo"}
                width={48}
                height={48}
                style={{
                  maxHeight: 48,
                  maxWidth: 48,
                  objectFit: "contain",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))",
                }}
              />
            </div>
          </motion.div>
        )}

        {/* Brand name */}
        <motion.h5
          className="fw-bold mb-1"
          style={{
            color: "#1a1a1a",
            fontSize: "18px",
            letterSpacing: "-0.3px",
            lineHeight: "1.3",
          }}
        >
          {b.name}
        </motion.h5>

        {/* Tagline */}
        <motion.div
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "#b91c1c",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginBottom: "12px",
            opacity: 0.9,
          }}
        >
          {b.tagline}
        </motion.div>

        {/* Description */}
        {shortDesc && (
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.6",
              color: "#555",
              marginBottom: "16px",
              fontWeight: 400,
              opacity: 0.85,
            }}
          >
            {shortDesc}
          </p>
        )}

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(185,28,28,0.2) 50%, transparent 100%)",
            marginBottom: "16px",
          }}
        />

        {/* Features list */}
        <ul
          style={{
            paddingLeft: 0,
            listStyle: "none",
            marginBottom: "24px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "10px",
          }}
        >
          {b.bullets?.map((it, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#333",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "16px",
                }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{
                    color: "#b91c1c",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                ></i>
              </span>
              {it}
            </motion.li>
          ))}
        </ul>

        {/* CTA button */}
        <div className="mt-auto d-flex gap-3">
          <motion.div
            style={{ flex: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={b.brandUrl || `/brands/${b.slug}`}
              className="btn w-100"
              style={{
                background: "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.3px",
                padding: "10px 16px",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(185,28,28,0.3)",
                transition: "all 0.3s ease",
                textDecoration: "none",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Learn More
            </Link>
          </motion.div>
          <motion.a
            href="tel:0405133761"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "rgba(185,28,28,0.08)",
              color: "#b91c1c",
              fontWeight: 600,
              fontSize: "13px",
              padding: "10px 16px",
              border: "1.5px solid rgba(185,28,28,0.25)",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <i className="icon-phone-call" style={{ fontSize: "11px" }}></i>
            Call
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BrandsClient: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="container">
        {/* Header section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-5"
          style={{ marginBottom: "60px" }}
        >
          <motion.div variants={itemVariants} style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#b91c1c",
                paddingBottom: "4px",
                borderBottom: "2px solid #b91c1c",
              }}
            >
              Premium Brands We Service
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="fw-bold"
            style={{
              color: "#1a1a1a",
              fontSize: "42px",
              lineHeight: "1.2",
              marginBottom: "16px",
              letterSpacing: "-0.5px",
              fontWeight: 700,
            }}
          >
            Experience Industry-Leading Service for Every Brand
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-secondary"
            style={{
              maxWidth: 600,
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#666",
              fontWeight: 400,
            }}
          >
            Our factory-trained technicians service all major brands with
            authorised dealer expertise and manufacturer-compliant care.
          </motion.p>
        </motion.div>

        {/* Brand grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="row gy-5"
          style={{ marginBottom: "80px" }}
        >
          {brands.map((b) => (
            <BrandCard key={b.slug} b={b} />
          ))}
        </motion.div>

        {/* Services section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="row gy-4"
        >
          {/* Installation Service */}
          <div className="col-md-6 col-lg-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(185,28,28,0.1) 0%, rgba(239,68,68,0.06) 100%)",
                border: "1px solid rgba(185,28,28,0.2)",
                borderRadius: "20px",
                padding: "32px 24px",
                textAlign: "center",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "16px",
                  color: "#b91c1c",
                }}
              >
                <i className="fas fa-tools"></i>
              </div>
              <h5
                style={{
                  color: "#1a1a1a",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                Installation
              </h5>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "16px",
                }}
              >
                Expert installation of heating systems with precision and care.
              </p>
              <a
                href="tel:0405133761"
                style={{
                  color: "#b91c1c",
                  fontWeight: 600,
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                Call Now →
              </a>
            </motion.div>
          </div>

          {/* Repair Service */}
          <div className="col-md-6 col-lg-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(185,28,28,0.1) 0%, rgba(239,68,68,0.06) 100%)",
                border: "1px solid rgba(185,28,28,0.2)",
                borderRadius: "20px",
                padding: "32px 24px",
                textAlign: "center",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "16px",
                  color: "#b91c1c",
                }}
              >
                <i className="fas fa-wrench"></i>
              </div>
              <h5
                style={{
                  color: "#1a1a1a",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                Repair & Emergency
              </h5>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "16px",
                }}
              >
                Fast emergency repairs available 24/7 for your heating needs.
              </p>
              <a
                href="tel:0405133761"
                style={{
                  color: "#b91c1c",
                  fontWeight: 600,
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                Call Now →
              </a>
            </motion.div>
          </div>

          {/* Maintenance Service */}
          <div className="col-md-6 col-lg-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(185,28,28,0.1) 0%, rgba(239,68,68,0.06) 100%)",
                border: "1px solid rgba(185,28,28,0.2)",
                borderRadius: "20px",
                padding: "32px 24px",
                textAlign: "center",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "16px",
                  color: "#b91c1c",
                }}
              >
                <i className="fas fa-check-circle"></i>
              </div>
              <h5
                style={{
                  color: "#1a1a1a",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                Maintenance
              </h5>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "16px",
                }}
              >
                Regular servicing to keep your system running efficiently.
              </p>
              <a
                href="tel:0405133761"
                style={{
                  color: "#b91c1c",
                  fontWeight: 600,
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                Call Now →
              </a>
            </motion.div>
          </div>

          {/* Consultation Service */}
          <div className="col-md-6 col-lg-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(185,28,28,0.1) 0%, rgba(239,68,68,0.06) 100%)",
                border: "1px solid rgba(185,28,28,0.2)",
                borderRadius: "20px",
                padding: "32px 24px",
                textAlign: "center",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "16px",
                  color: "#b91c1c",
                }}
              >
                <i className="fas fa-comments"></i>
              </div>
              <h5
                style={{
                  color: "#1a1a1a",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                Free Consultation
              </h5>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "16px",
                }}
              >
                Expert advice on choosing the right heating solution.
              </p>
              <a
                href="tel:0405133761"
                style={{
                  color: "#b91c1c",
                  fontWeight: 600,
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                Call Now →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsClient;
