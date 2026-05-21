"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const serviceAreas = [
  "Abbotsford",
  "Airport West",
  "Albert Park",
  "Albion",
  "Altona",
  "Altona Meadows",
  "Ardeer",
  "Armadale",
  "Ascot Vale",
  "Aspendale",
  "Aspendale Gardens",
  "Ashwood",
  "Attwood",
  "Avonsleigh",
  "Badger Creek",
  "Balaclava",
  "Balwyn",
  "Balwyn North",
  "Bangholme",
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
  "Brunswick",
  "Brunswick East",
  "Brunswick West",
  "Bulleen",
  "Bundoora",
  "Burnley",
  "Burwood 3125",
  "Burwood Chadstone",
  "Burwood East",
  "Camberwell",
  "Campbellfield",
  "Canterbury",
  "Carlton",
  "Carlton North",
  "Carnegie",
  "Caulfield",
  "Caulfield East",
  "Caulfield North",
  "Caulfield South",
  "Chadstone",
  "Chelsea",
  "Chelsea Heights",
  "Cheltenham",
  "Chirnside Park",
  "Clayton",
  "Clayton South",
  "Clifton Hill",
  "Clyde",
  "Clyde North",
  "Coburg",
  "Coburg North",
  "Collingwood",
  "Craigieburn",
  "Cremorne",
  "Croydon",
  "Croydon Hills",
  "Croydon North",
  "Croydon South",
  "Dallas",
  "Dandenong",
  "Dandenong North",
  "Dandenong South",
  "Deer Park",
  "Delahey",
  "Docklands",
  "Doncaster",
  "Doncaster East",
  "Donvale",
  "Doveton",
  "Eaglehawk",
  "East Melbourne",
  "Elsternwick",
  "Eltham",
  "Elwood",
  "Epping",
  "Essendon",
  "Essendon Fields",
  "Fawkner",
  "Ferntree Gully",
  "Fitzroy",
  "Fitzroy North",
  "Flemington",
  "Footscray",
  "Frankston",
  "Frankston North",
  "Frankston South",
  "Gembrook",
  "Glen Huntly",
  "Glen Waverley",
  "Greensborough",
  "Hadfield",
  "Hallam",
  "Hampton",
  "Hampton Park",
  "Hawthorn",
  "Hawthorn East",
  "Heatherton",
  "Heidelberg",
  "Heidelberg West",
  "Highett",
  "Hillside",
  "Hoppers Crossing",
  "Ivanhoe",
  "Keilor",
  "Keilor Downs",
  "Keilor Lodge",
  "Kensington",
  "Kew",
  "Kew East",
  "Keysborough",
  "Kings Park",
  "Knoxfield",
  "Lakes Entrance",
  "Lalor",
  "Langwarrin",
  "Lara",
  "Laverton",
  "Laverton North",
  "Lilydale",
  "Little River",
  "Macleod",
  "Maidstone",
  "Malvern",
  "Malvern East",
  "Maribyrnong",
  "Maroondah",
  "Melbourne",
  "Melbourne Airport",
  "Melbourne CBD",
  "Melbourne East",
  "Melbourne South",
  "Melton",
  "Melton South",
  "Mernda",
  "Middle Park",
  "Mill Park",
  "Mitcham",
  "Moonee Ponds",
  "Moorabbin",
  "Mordialloc",
  "Mornington",
  "Mount Eliza",
  "Mount Evelyn",
  "Mount Waverley",
  "Mulgrave",
  "Narre Warren",
  "Narre Warren North",
  "Narre Warren South",
  "Newport",
  "Niddrie",
  "North Melbourne",
  "Northcote",
  "Nunawading",
  "Oakleigh",
  "Oakleigh South",
  "Ormond",
  "Pakenham",
  "Pakenham South",
  "Pakenham Upper",
  "Parkdale",
  "Pascoe Vale",
  "Pascoe Vale South",
  "Point Cook",
  "Point Leo",
  "Port Melbourne",
  "Portsea",
  "Prahran",
  "Preston",
  "Reservoir",
  "Richmond",
  "Ringwood",
  "Ringwood East",
  "Ringwood North",
  "Rivervale",
  "Rosanna",
  "Rowville",
  "Sandringham",
  "Scoresby",
  "Seaford",
  "Skye",
  "Somerville",
  "South Melbourne",
  "South Morang",
  "South Yarra",
  "Southbank",
  "Spotswood",
  "Springvale",
  "Springvale South",
  "St Albans",
  "St Kilda",
  "St Kilda East",
  "Strathmore",
  "Sunshine",
  "Sunshine North",
  "Sunshine West",
  "Surrey Hills",
  "Sydenham",
  "Tarneit",
  "Templestowe",
  "Templestowe Lower",
  "Thomastown",
  "Thornbury",
  "Tooradin",
  "Toorak",
  "Truemans",
  "Truganina",
  "Tullamarine",
  "Tyabb",
  "Upper Ferntree Gully",
  "Vermont",
  "Vermont South",
  "Wantirna",
  "Wantirna South",
  "Werribee",
  "Werribee South",
  "West Footscray",
  "West Melbourne",
  "Wheelers Hill",
  "Williamstown",
  "Windsor",
  "Wollert",
  "Yallambie",
  "Yarra Glen",
  "Yarra Junction",
  "Yarrambat",
  "Yarraville",
  "Yellingbo",
  "Yering",
];

interface AreaCardProps {
  name: string;
}

const AreaCard: React.FC<AreaCardProps> = ({ name }) => {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link
      href={`/service-areas/${slug}`}
      className="text-decoration-none area-card-link h-100 d-block"
    >
      <div className="area-card p-3 p-sm-4 rounded-4 h-100 text-center d-flex flex-column align-items-center justify-content-center">
        <span className="area-card__name">{name}</span>
        <span className="area-card__explore">
          <i className="fas fa-arrow-right me-1"></i>Explore
        </span>
      </div>
    </Link>
  );
};

const Page: React.FC = () => {
  const { ref: introRef, inView: introInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: areasRef, inView: areasInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <DefaultBanner
        title="Heating & Cooling Service Areas Melbourne"
        subTitle="Service Areas"
        titleLink="/service-areas"
        asH1
      />

      {/* Introduction Section */}
      <section className="py-5" style={{ backgroundColor: "#fff5f5" }}>
        <div className="container">
          <motion.div
            ref={introRef}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="row"
          >
            <motion.div className="col-lg-10 mx-auto" variants={itemVariants}>
              <div className="text-center mb-5">
                <h2
                  className="fw-bolder mb-4"
                  style={{
                    fontSize: "2.2rem",
                    color: "#7f1d1d",
                    lineHeight: "1.3",
                  }}
                >
                  Coverage Locations We Serve
                </h2>
                <p
                  className="text-secondary"
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.8",
                    color: "#4b5563",
                  }}
                >
                  Our multiple service locations make it easy to deliver prompt
                  Same-Day Service. Working with a trusted company for your
                  heating and cooling needs means you can feel confident in the
                  safety, reliability, and comfort of your home or business. Our
                  experienced team proudly provides expert heating and cooling
                  installation, repairs, servicing, and maintenance across
                  Melbourne and surrounding communities.
                </p>
                <p
                  className="text-secondary mt-4"
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.8",
                    color: "#4b5563",
                  }}
                >
                  Enjoy peace of mind knowing your property is in good
                  hands—wherever you are in Melbourne!
                </p>
              </div>

              <div className="row gy-3 mt-3">
                <div className="col-md-4">
                  <div
                    className="p-4 bg-white rounded-3 text-center h-100"
                    style={{ boxShadow: "0 4px 15px rgba(185,28,28,0.08)" }}
                  >
                    <div
                      style={{
                        fontSize: "2.5rem",
                        marginBottom: "1rem",
                        color: "#b91c1c",
                      }}
                    >
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h5 className="fw-bolder mb-2" style={{ color: "#1a1a1a" }}>
                      All Melbourne Suburbs
                    </h5>
                    <p
                      className="text-secondary mb-0"
                      style={{ fontSize: "0.95rem" }}
                    >
                      We cover all major Melbourne suburbs and surrounding areas
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="p-4 bg-white rounded-3 text-center h-100"
                    style={{ boxShadow: "0 4px 15px rgba(185,28,28,0.08)" }}
                  >
                    <div
                      style={{
                        fontSize: "2.5rem",
                        marginBottom: "1rem",
                        color: "#b91c1c",
                      }}
                    >
                      <i className="fas fa-truck"></i>
                    </div>
                    <h5 className="fw-bolder mb-2" style={{ color: "#1a1a1a" }}>
                      Same-Day Service
                    </h5>
                    <p
                      className="text-secondary mb-0"
                      style={{ fontSize: "0.95rem" }}
                    >
                      Fast response times with multiple dispatch locations
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="p-4 bg-white rounded-3 text-center h-100"
                    style={{ boxShadow: "0 4px 15px rgba(185,28,28,0.08)" }}
                  >
                    <div
                      style={{
                        fontSize: "2.5rem",
                        marginBottom: "1rem",
                        color: "#b91c1c",
                      }}
                    >
                      <i className="fas fa-phone"></i>
                    </div>
                    <h5 className="fw-bolder mb-2" style={{ color: "#1a1a1a" }}>
                      24/7 Emergency Service
                    </h5>
                    <p
                      className="text-secondary mb-0"
                      style={{ fontSize: "0.95rem" }}
                    >
                      Round-the-clock availability for heating and cooling
                      emergencies
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-5">
        <div className="container">
          <motion.div
            ref={areasRef}
            initial="hidden"
            animate={areasInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3
              className="fw-bolder mb-5 text-center"
              variants={itemVariants}
              style={{ fontSize: "2rem", color: "#7f1d1d" }}
            >
              Our Service Areas
            </motion.h3>

            <div className="row g-2 g-sm-3">
              {serviceAreas.map((area) => (
                <div key={area} className="col-6 col-sm-6 col-md-3 col-lg-2">
                  <AreaCard name={area} />
                </div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-5">
              <div className="p-5 bg-light rounded-4">
                <h4 className="fw-bolder mb-3" style={{ color: "#7f1d1d" }}>
                  <i
                    className="fas fa-question-circle me-2"
                    style={{ color: "#b91c1c" }}
                  ></i>
                  Don&apos;t See Your Area?
                </h4>
                <p
                  className="text-secondary mb-4"
                  style={{ fontSize: "1rem", lineHeight: "1.6" }}
                >
                  We service many more areas across Melbourne and surrounding
                  regions. If you can&apos;t find your suburb in our list, give
                  us a call to confirm we cover your location.
                </p>
                <motion.a
                  href="tel:0405133761"
                  className="btn btn-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 12px 35px rgba(185,28,28,0.35)",
                  }}
                  style={{
                    background:
                      "linear-gradient(135deg, #b91c1c 0%, #c21e1e 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    border: "none",
                    padding: "0.875rem 2rem",
                    letterSpacing: "0.5px",
                    boxShadow: "0 8px 20px rgba(185,28,28,0.25)",
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <i className="fas fa-phone me-2"></i>Call: 0405 133 761
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: "#7f1d1d" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="row align-items-center gy-4"
          >
            <motion.div className="col-lg-8">
              <h2
                className="fw-bolder mb-3"
                style={{ fontSize: "2rem", color: "#fff" }}
              >
                Need Heating or Cooling Service in Your Area?
              </h2>
              <p
                style={{
                  color: "#f3f4f6",
                  fontSize: "1.05rem",
                  lineHeight: "1.6",
                }}
              >
                Whether you need installation, repair, maintenance, or emergency
                service, our experienced team is ready to help. Contact us today
                for a free quote or to schedule your service appointment.
              </p>
            </motion.div>
            <motion.div className="col-lg-4 text-lg-end">
              <motion.a
                href="tel:0405133761"
                className="btn btn-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 35px rgba(255,255,255,0.35)",
                }}
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
                  color: "#b91c1c",
                  fontWeight: 700,
                  border: "2px solid rgba(255,255,255,0.3)",
                  padding: "1rem 2.5rem",
                  letterSpacing: "0.5px",
                  boxShadow:
                    "0 8px 25px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <i className="fas fa-phone me-2"></i>Call Now: 0405 133 761
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Page;
