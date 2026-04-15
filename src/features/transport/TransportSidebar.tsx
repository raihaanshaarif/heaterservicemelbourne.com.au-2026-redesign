"use client";

import React from "react";
import ServiceDetailsSidebarImg from "@/assets/images/services/service-details-sidebar-img.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  hydronicList,
  gasDuctedList,
  splitSystemList,
  emergencyList,
} from "@/contents/navmenu/navItem";

type ServiceList = {
  id: number;
  url: string;
  text: string;
};

const TransportSidebar: React.FC = () => {
  const currentPath: string = usePathname();

  const getServiceList = () => {
    if (currentPath.includes("hydronic-heating")) return hydronicList;
    if (currentPath.includes("gas-ducted-heating")) return gasDuctedList;
    if (currentPath.includes("split-system-air-conditioning"))
      return splitSystemList;
    if (currentPath.includes("emergency-services")) return emergencyList;
    return [
      ...hydronicList.slice(0, 1),
      ...gasDuctedList.slice(0, 1),
      ...splitSystemList.slice(0, 1),
      ...emergencyList.slice(0, 1),
    ];
  };

  const activeList = getServiceList();

  return (
    <div className="col-xl-4 col-lg-5">
      <div className="service-details__sidebar">
        <div className="service-details__services-box">
          <h3 className="service-details__services-title">
            Services in this Category
          </h3>
          <ul className="service-details__services-list list-unstyled">
            {activeList.map((item) => (
              <li
                key={item?.id}
                className={currentPath === item?.url ? "active" : ""}
              >
                <Link href={item?.url}>
                  {item?.text}
                  <span className="icon-next"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="service-details__sidebar-contact">
          <div className="service-details__sidebar-contact-img">
            <div className="inner">
              <Image
                src={ServiceDetailsSidebarImg}
                width={284}
                height={285}
                alt="Team"
              />
            </div>
          </div>

          <div className="service-details__sidebar-contact-content">
            <div className="icon">
              <span className="icon-phone-call"></span>
            </div>
            <h2>
              <a href="tel:0405133761">0405 133 761</a>
            </h2>
            <p>
              If You Need Any Help <br />
              Contact With Us
            </p>
          </div>
        </div>
        <div className="service-details__sidebar-download-box">
          <h3 className="service-details__services-title">Download</h3>
          <div className="service-details__sidebar-single-download">
            <ul className="clearfix list-unstyled">
              <li>
                <div className="content-box">
                  <div className="icon">
                    <span className="far fa-file-pdf"></span>
                  </div>
                  <div className="text-box">
                    <h2>
                      <Link href="#">Pdf Download</Link>
                    </h2>
                    <p>
                      <Link href="#">Download</Link>
                    </p>
                  </div>
                </div>

                <div className="btn-box">
                  <Link href="#">
                    <span className="far fa-cloud-download"></span>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content-box">
                  <div className="icon">
                    <span className="far fa-file-pdf"></span>
                  </div>
                  <div className="text-box">
                    <h2>
                      <Link href="#">Pdf Download</Link>
                    </h2>
                    <p>
                      <Link href="#">Download</Link>
                    </p>
                  </div>
                </div>

                <div className="btn-box">
                  <Link href="#">
                    <span className="far fa-cloud-download"></span>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content-box">
                  <div className="icon">
                    <span className="far fa-file-pdf"></span>
                  </div>
                  <div className="text-box">
                    <h2>
                      <Link href="#">Pdf Download</Link>
                    </h2>
                    <p>
                      <Link href="#">Download</Link>
                    </p>
                  </div>
                </div>

                <div className="btn-box">
                  <Link href="#">
                    <span className="far fa-cloud-download"></span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportSidebar;
