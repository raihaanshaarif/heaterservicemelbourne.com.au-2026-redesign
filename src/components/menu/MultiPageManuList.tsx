"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItem } from "@/contents/navmenu/navType";
import {
  hydronicList,
  gasDuctedList,
  splitSystemList,
  emergencyList,
} from "@/contents/navmenu/navItem";

const MultiPageManuList: React.FC = () => {
  const currentPath = usePathname();
  const findLocation = (array: MenuItem[]): boolean => {
    return array.some((item) => item?.url === currentPath);
  };
  return (
    <ul className="main-menu__list">
      <li>
        <Link href="/">Home </Link>
      </li>
      <li className={currentPath === "/about" ? "current" : ""}>
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
        <Link href="/services">Services</Link>
        <ul className="shadow-box">
          <li
            className={`dropdown ${findLocation(hydronicList) ? "current" : ""}`}
          >
            <Link href="/hydronic-heating">Hydronic Heating</Link>
            <ul className="shadow-box">
              {hydronicList.map((item: MenuItem) => (
                <li
                  key={item?.id}
                  className={currentPath === item?.url ? "current" : ""}
                >
                  <Link href={item?.url}>{item?.text}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={`dropdown ${findLocation(gasDuctedList) ? "current" : ""}`}
          >
            <Link href="/gas-ducted-heating">Gas Ducted</Link>
            <ul className="shadow-box">
              {gasDuctedList.map((item: MenuItem) => (
                <li
                  key={item?.id}
                  className={currentPath === item?.url ? "current" : ""}
                >
                  <Link href={item?.url}>{item?.text}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={`dropdown ${findLocation(splitSystemList) ? "current" : ""}`}
          >
            <Link href="/split-system-air-conditioning">Split Systems</Link>
            <ul className="shadow-box">
              {splitSystemList.map((item: MenuItem) => (
                <li
                  key={item?.id}
                  className={currentPath === item?.url ? "current" : ""}
                >
                  <Link href={item?.url}>{item?.text}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={`dropdown ${findLocation(emergencyList) ? "current" : ""}`}
          >
            <Link href="/emergency-services">Emergency</Link>
            <ul className="shadow-box">
              {emergencyList.map((item: MenuItem) => (
                <li
                  key={item?.id}
                  className={currentPath === item?.url ? "current" : ""}
                >
                  <Link href={item?.url}>{item?.text}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </li>

      <li className={currentPath === "/service-areas" ? "current" : ""}>
        <Link href="/service-areas">Service Areas</Link>
      </li>

      <li className={currentPath === "/brands" ? "current" : ""}>
        <Link href="/brands">Brands</Link>
      </li>

      <li className={currentPath === "/self-care" ? "current" : ""}>
        <Link href="/self-care">Self Care</Link>
      </li>

      <li className={currentPath === "/contact" ? "current" : ""}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MultiPageManuList;
