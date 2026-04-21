import ServicesOne11 from "@/assets/images/services/services-one-1-1.jpg";
import ServicesOne12 from "@/assets/images/services/services-one-1-2.jpg";
import ServicesOne13 from "@/assets/images/services/services-one-1-3.jpg";
import ServicesOne14 from "@/assets/images/services/services-one-1-4.jpg";
import ServicesOne15 from "@/assets/images/services/services-one-1-5.jpg";
import GasDuctedIns from "@/assets/images/services/gasductedins.jpg";
import GasDuctedRep from "@/assets/images/services/gasductedrep.jpg";
import GasDuctedSer from "@/assets/images/services/gasductedser.jpg";
import GasDuctedReplace from "@/assets/images/services/gasductedreplace.jpg";
import SplitIns from "@/assets/images/services/splitins.jpg";
import SplitRep from "@/assets/images/services/splitrep.jpg";
import SplitDeep from "@/assets/images/services/splitdeep.jpg";
import SplitMulti from "@/assets/images/services/multi.jpg";
import HydroIns from "@/assets/images/services/hydins.jpg";
import HydroRep from "@/assets/images/services/hydrep.jpg";
import HydroSer from "@/assets/images/services/hydser.jpg";
import HydroUnder from "@/assets/images/services/hydunder.jpg";

import { StaticImageData } from "next/image";

export interface ServiceItem {
  id: number;
  count: string;
  title: string;
  link: string;
  image: string | StaticImageData;
  iconClass: string;
  text: string;
}
export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Hydronic Heating",
    link: "/hydronic-heating",
    image: HydroIns,
    iconClass: "icon-professional-services",
    count: "01",
    text: "Professional repairs, service, and installation of premium hydronic heating systems.",
  },
  {
    id: 2,
    title: "Gas Ducted Heating",
    link: "/gas-ducted-heating",
    image: GasDuctedSer,
    iconClass: "icon-professional-services",
    count: "02",
    text: "Expert maintenance and installation for efficient gas ducted heating in Melbourne.",
  },
  {
    id: 3,
    title: "Split Systems",
    link: "/split-system-air-conditioning",
    image: SplitRep,
    iconClass: "icon-professional-services",
    count: "03",
    text: "Installation and repair of high-performance split system heating and cooling.",
  },
  {
    id: 4,
    title: "Emergency Services",
    link: "/emergency-services",
    image: ServicesOne14,
    iconClass: "icon-truck",
    count: "04",
    text: "24/7 emergency heating repairs to keep your home warm when you need it most.",
  },
];

export interface ServiceThreeItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
  animationVariant: "fadeInLeft" | "fadeInUp" | "fadeInRight";
  delay: number;
}

export const hydronicHeatingData: ServiceItem[] = [
  {
    id: 1,
    title: "Hydronic Heater Installation",
    link: "/hydronic-heating/hydronic-heater-installation-melbourne",
    image: HydroIns,
    iconClass: "icon-professional-services",
    count: "01",
    text: "Professional installation of premium hydronic heating systems for optimal warmth and efficiency.",
  },
  {
    id: 2,
    title: "Hydronic Heater Repair",
    link: "/hydronic-heating/hydronic-heater-repair-melbourne",
    image: HydroRep,
    iconClass: "icon-professional-services",
    count: "02",
    text: "Fast and reliable repair services for all hydronic heating system issues and breakdowns.",
  },
  {
    id: 3,
    title: "Hydronic Heater Service & Maintenance",
    link: "/hydronic-heating/hydronic-heater-service-maintainance-melbourne",
    image: HydroSer,
    iconClass: "icon-professional-services",
    count: "03",
    text: "Regular maintenance and tune-ups to keep your hydronic system running smoothly.",
  },
  {
    id: 4,
    title: "Underfloor Heating Repair",
    link: "/hydronic-heating/underfloor-slab-heating-repair-melbourne",
    image: HydroUnder,
    iconClass: "icon-professional-services",
    count: "04",
    text: "Expert repair and maintenance for underfloor slab heating systems.",
  },
  {
    id: 5,
    title: "Emergency Hydronic Repair",
    link: "/hydronic-heating/emergency-hydronic-repair-melbourne",
    image: ServicesOne14,
    iconClass: "icon-truck",
    count: "05",
    text: "24/7 emergency repairs to restore your hydronic heating system quickly.",
  },
];

export const gasDuctedHeatingData: ServiceItem[] = [
  {
    id: 1,
    title: "Gas Heater Installation",
    link: "/gas-ducted-heating/gas-ducted-installation-melbourne",
    image: GasDuctedIns,
    iconClass: "icon-professional-services",
    count: "01",
    text: "Professional installation of high-efficiency gas ducted heating systems.",
  },
  {
    id: 2,
    title: "Gas Heater Repair",
    link: "/gas-ducted-heating/gas-heater-repair-melbourne",
    image: GasDuctedRep,
    iconClass: "icon-professional-services",
    count: "02",
    text: "Fast and reliable repair services for all gas heating system issues.",
  },
  {
    id: 3,
    title: "Gas Heater Service & Tuneup",
    link: "/gas-ducted-heating/gas-heater-service-and-maintenance-melbourne",
    image: GasDuctedSer,
    iconClass: "icon-professional-services",
    count: "03",
    text: "Regular maintenance and tuneup to keep your gas heating system efficient.",
  },
  {
    id: 4,
    title: "Gas Heater Replacement & Maintenance",
    link: "/gas-ducted-heating/gas-heater-replacement-maintenance-melbourne",
    image: GasDuctedReplace,
    iconClass: "icon-professional-services",
    count: "04",
    text: "Expert replacement and maintenance services for gas heating systems.",
  },
  {
    id: 5,
    title: "Emergency Gas Heater Repair",
    link: "/gas-ducted-heating/emergency-gas-ducted-repair-melbourne",
    image: ServicesOne14,
    iconClass: "icon-truck",
    count: "05",
    text: "24/7 emergency repairs for gas heating failures and breakdowns.",
  },
];

export const emergencyServicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Emergency Hydronic Repair",
    link: "/emergency-services/emergency-hydronic-repair-melbourne",
    image: HydroSer,
    iconClass: "icon-truck",
    count: "01",
    text: "24/7 emergency repairs for hydronic heating systems when you need it most.",
  },
  {
    id: 2,
    title: "Gas Ducted Emergency Repair",
    link: "/emergency-services/emergency-gas-ducted-repair-melbourne",
    image: GasDuctedRep,
    iconClass: "icon-truck",
    count: "02",
    text: "Rapid response for gas ducted heating emergencies and breakdowns.",
  },
  {
    id: 3,
    title: "Split System Emergency Repair",
    link: "/emergency-services/emergency-split-system-repair-melbourne",
    image: SplitRep,
    iconClass: "icon-truck",
    count: "03",
    text: "Fast emergency repairs for split system air conditioning failures.",
  },
  {
    id: 4,
    title: "24/7 Breakdown Rescue",
    link: "/emergency-services/ac-breakdown-rescue-melbourne",
    image: ServicesOne14,
    iconClass: "icon-truck",
    count: "04",
    text: "Round-the-clock breakdown rescue service for all heating and cooling systems.",
  },
  {
    id: 5,
    title: "Emergency Gas Leak Repair",
    link: "/emergency-services/emergency-gas-leak-repair-melbourne",
    image: GasDuctedSer,
    iconClass: "icon-truck",
    count: "05",
    text: "Immediate emergency response for gas leak detection and safe repair.",
  },
];

export const splitSystemServicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Split System Installation",
    link: "/split-system-air-conditioning/split-system-installation-melbourne",
    image: SplitIns,
    iconClass: "icon-professional-services",
    count: "01",
    text: "Professional installation of high-efficiency split system air conditioning units.",
  },
  {
    id: 2,
    title: "AC Repair & Fault Finding",
    link: "/split-system-air-conditioning/split-system-repair-melbourne",
    image: SplitRep,
    iconClass: "icon-professional-services",
    count: "02",
    text: "Expert split system repair and diagnostic services for all air conditioning issues.",
  },
  {
    id: 3,
    title: "Deep Cleaning & Sanitization",
    link: "/split-system-air-conditioning/ac-deep-cleaning-sanitization-melbourne",
    image: SplitDeep,
    iconClass: "icon-professional-services",
    count: "03",
    text: "Professional deep cleaning and sanitization for improved air quality.",
  },
  {
    id: 4,
    title: "Multi-Head System Service",
    link: "/split-system-air-conditioning/multi-head-system-service-melbourne",
    image: SplitMulti,
    iconClass: "icon-professional-services",
    count: "04",
    text: "Expert service and installation for multi-zone air conditioning systems.",
  },
  {
    id: 5,
    title: "Emergency Split System Repair",
    link: "/split-system-air-conditioning/emergency-split-system-repair-melbourne",
    image: ServicesOne14,
    iconClass: "icon-truck",
    count: "05",
    text: "24/7 emergency repairs for split system air conditioning failures.",
  },
];

export const servicesThreeData: ServiceThreeItem[] = [
  {
    id: 1,
    icon: "icon-worldwide-shipping",
    title: "International Shipping",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/international-transport",
    animationVariant: "fadeInLeft",
    delay: 100,
  },
  {
    id: 2,
    icon: "icon-shipment",
    title: "Ocean Freight",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/ocean-transport",
    animationVariant: "fadeInUp",
    delay: 200,
  },
  {
    id: 3,
    icon: "icon-delivery-man",
    title: "Rail Freight",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/emergency-transport",
    animationVariant: "fadeInRight",
    delay: 300,
  },
  {
    id: 4,
    icon: "icon-truck",
    title: "Road Freight",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/track-transport",
    animationVariant: "fadeInLeft",
    delay: 400,
  },
  {
    id: 5,
    icon: "icon-shipment",
    title: "Local Truck Transport",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/track-transport",
    animationVariant: "fadeInUp",
    delay: 500,
  },
  {
    id: 6,
    icon: "icon-delivery-man",
    title: "Fast Personal Delivery",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    link: "/personal-delivery",
    animationVariant: "fadeInRight",
    delay: 600,
  },
];
