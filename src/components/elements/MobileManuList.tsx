import React, { useState } from "react";
import { motion } from "framer-motion";
import useTransportContext from "../context/useTransportContext";
import type { MenuItem } from "../../contents/navmenu/navType";
import {
  hydronicList,
  gasDuctedList,
  splitSystemList,
  emergencyList,
} from "../../contents/navmenu/navItem";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileManuList: React.FC = () => {
  const { setIsMobileManu } = useTransportContext();
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isHydronicOpen, setIsHydronicOpen] = useState<boolean>(false);
  const [isGasDuctedOpen, setIsGasDuctedOpen] = useState<boolean>(false);
  const [isSplitSystemOpen, setIsSplitSystemOpen] = useState<boolean>(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState<boolean>(false);
  const currentPath = usePathname();

  const findLocation = (array: MenuItem[]): boolean => {
    return array.some((item) => item?.url === currentPath);
  };

  const closeMobileManu = () => {
    setIsMobileManu(false);
    setIsServicesOpen(false);
    setIsHydronicOpen(false);
    setIsGasDuctedOpen(false);
    setIsSplitSystemOpen(false);
    setIsEmergencyOpen(false);
  };

  return (
    <ul className="main-menu__list mobileManulist">
      <li
        className={`${currentPath === "/" ? "current" : ""}`}
        onClick={closeMobileManu}
      >
        <Link href="/">Home</Link>
      </li>

      <li
        className={`${currentPath === "/about" ? "current" : ""}`}
        onClick={closeMobileManu}
      >
        <Link href="/about">About</Link>
      </li>

      <li
        className={`dropdown ${
          findLocation(hydronicList) ||
          findLocation(gasDuctedList) ||
          findLocation(splitSystemList) ||
          findLocation(emergencyList)
            ? "current"
            : ""
        }`}
      >
        <a
          href="#"
          className={`${isServicesOpen ? "expanded" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            setIsServicesOpen((prev) => !prev);
          }}
        >
          Services
          <button className={`${isServicesOpen ? "expanded" : ""}`}>
            <i className="fa fa-angle-down"></i>
          </button>
        </a>

        <ul
          className="shadow-box"
          style={{ display: isServicesOpen ? "block" : "none" }}
        >
          <li
            className={`dropdown ${findLocation(hydronicList) ? "current" : ""}`}
          >
            <a
              href="#"
              className={`${isHydronicOpen ? "expanded" : ""}`}
              onClick={(event) => {
                event.preventDefault();
                setIsHydronicOpen((prev) => !prev);
              }}
            >
              Hydronic Heating
              <button className={`${isHydronicOpen ? "expanded" : ""}`}>
                <i className="fa fa-angle-down"></i>
              </button>
            </a>
            <ul
              className="shadow-box"
              style={{ display: isHydronicOpen ? "block" : "none" }}
            >
              {hydronicList.map((item: MenuItem) => (
                <motion.li
                  onClick={closeMobileManu}
                  initial={{ x: -70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.1 * item?.id, ease: "easeOut" }}
                  viewport={{ amount: 0.01, once: true }}
                  key={item?.id}
                  className={`${currentPath === item?.url ? "current" : ""}`}
                >
                  <Link href={item?.url}>{item?.text}</Link>
                </motion.li>
              ))}
            </ul>
          </li>

          <li
            className={`dropdown ${findLocation(gasDuctedList) ? "current" : ""}`}
          >
            <a
              href="#"
              className={`${isGasDuctedOpen ? "expanded" : ""}`}
              onClick={(event) => {
                event.preventDefault();
                setIsGasDuctedOpen((prev) => !prev);
              }}
            >
              Gas Ducted
              <button className={`${isGasDuctedOpen ? "expanded" : ""}`}>
                <i className="fa fa-angle-down"></i>
              </button>
            </a>
            <ul
              className="shadow-box"
              style={{ display: isGasDuctedOpen ? "block" : "none" }}
            >
              {gasDuctedList.map((item: MenuItem) => (
                <motion.li
                  onClick={closeMobileManu}
                  initial={{ x: -70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.1 * item?.id, ease: "easeOut" }}
                  viewport={{ amount: 0.01, once: true }}
                  key={item?.id}
                  className={`${currentPath === item?.url ? "current" : ""}`}
                >
                  <Link href={item?.url}>{item?.text}</Link>
                </motion.li>
              ))}
            </ul>
          </li>

          <li
            className={`dropdown ${findLocation(splitSystemList) ? "current" : ""}`}
          >
            <a
              href="#"
              className={`${isSplitSystemOpen ? "expanded" : ""}`}
              onClick={(event) => {
                event.preventDefault();
                setIsSplitSystemOpen((prev) => !prev);
              }}
            >
              Split Systems
              <button className={`${isSplitSystemOpen ? "expanded" : ""}`}>
                <i className="fa fa-angle-down"></i>
              </button>
            </a>
            <ul
              className="shadow-box"
              style={{ display: isSplitSystemOpen ? "block" : "none" }}
            >
              {splitSystemList.map((item: MenuItem) => (
                <motion.li
                  onClick={closeMobileManu}
                  initial={{ x: -70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.1 * item?.id, ease: "easeOut" }}
                  viewport={{ amount: 0.01, once: true }}
                  key={item?.id}
                  className={`${currentPath === item?.url ? "current" : ""}`}
                >
                  <Link href={item?.url}>{item?.text}</Link>
                </motion.li>
              ))}
            </ul>
          </li>

          <li
            className={`dropdown ${findLocation(emergencyList) ? "current" : ""}`}
          >
            <a
              href="#"
              className={`${isEmergencyOpen ? "expanded" : ""}`}
              onClick={(event) => {
                event.preventDefault();
                setIsEmergencyOpen((prev) => !prev);
              }}
            >
              Emergency
              <button className={`${isEmergencyOpen ? "expanded" : ""}`}>
                <i className="fa fa-angle-down"></i>
              </button>
            </a>
            <ul
              className="shadow-box"
              style={{ display: isEmergencyOpen ? "block" : "none" }}
            >
              {emergencyList.map((item: MenuItem) => (
                <motion.li
                  onClick={closeMobileManu}
                  initial={{ x: -70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.1 * item?.id, ease: "easeOut" }}
                  viewport={{ amount: 0.01, once: true }}
                  key={item?.id}
                  className={`${currentPath === item?.url ? "current" : ""}`}
                >
                  <Link href={item?.url}>{item?.text}</Link>
                </motion.li>
              ))}
            </ul>
          </li>
        </ul>
      </li>

      <li
        className={`${currentPath === "/service-areas" ? "current" : ""}`}
        onClick={closeMobileManu}
      >
        <Link href="/service-areas">Service Areas</Link>
      </li>

      <li
        className={`${currentPath === "/brands" ? "current" : ""}`}
        onClick={closeMobileManu}
      >
        <Link href="/brands">Brands</Link>
      </li>

      <li
        className={`${currentPath === "/self-care" ? "current" : ""}`}
        onClick={closeMobileManu}
      >
        <Link href="/self-care">Self Care</Link>
      </li>

      <li
        className={`${currentPath === "/contact" ? "current" : ""}`}
        onClick={closeMobileManu}
      >
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MobileManuList;
