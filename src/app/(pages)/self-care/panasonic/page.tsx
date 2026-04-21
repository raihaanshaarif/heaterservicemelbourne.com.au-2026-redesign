import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Panasonic",
  "slug": "panasonic",
  "systemType": "",
  "commonErrors": [
    {
      "code": "H1",
      "title": "Indoor PCB Malfunction",
      "severity": "HIGH",
      "description": "Indoor board error",
      "action": "Power cycle both units. Check connections.",
      "serviceType": "split-system"
    },
    {
      "code": "H2",
      "title": "Outdoor PCB Failure",
      "severity": "HIGH",
      "description": "Outdoor board not responding",
      "action": "Verify power. Check wiring to outdoor.",
      "serviceType": "split-system"
    },
    {
      "code": "H3",
      "title": "Temperature Sensor Defect",
      "severity": "HIGH",
      "description": "Sensor malfunction",
      "action": "Clean sensor. Reset system. Check connections.",
      "serviceType": "split-system"
    },
    {
      "code": "H4",
      "title": "Indoor Blower Error",
      "severity": "HIGH",
      "description": "Indoor fan not operating",
      "action": "Clean filter. Verify power supply.",
      "serviceType": "split-system"
    },
    {
      "code": "H5",
      "title": "Outdoor Fan Failure",
      "severity": "HIGH",
      "description": "Condenser fan not running",
      "action": "Remove ice/debris. Clean unit.",
      "serviceType": "split-system"
    },
    {
      "code": "H6",
      "title": "Low Refrigerant Pressure",
      "severity": "URGENT",
      "description": "Critical refrigerant loss",
      "action": "Stop operation. Professional service needed.",
      "serviceType": "split-system"
    },
    {
      "code": "H7",
      "title": "High Pressure Fault",
      "severity": "URGENT",
      "description": "Pressure exceeds safe limits",
      "action": "Shut down immediately. Check condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "H8",
      "title": "Compressor Overload",
      "severity": "HIGH",
      "description": "Compressor protection triggered",
      "action": "Allow cooling 30 mins. Check airflow.",
      "serviceType": "split-system"
    },
    {
      "code": "H9",
      "title": "Nanoe-X Generator Error",
      "severity": "MEDIUM",
      "description": "Ion generator malfunction",
      "action": "Clean generator electrode. Check power.",
      "serviceType": "split-system"
    },
    {
      "code": "H10",
      "title": "Gas Charge Incorrect",
      "severity": "URGENT",
      "description": "Wrong refrigerant type",
      "action": "Professional evacuation and recharge required.",
      "serviceType": "split-system"
    },
    {
      "code": "H11",
      "title": "Remote Battery Low",
      "severity": "LOW",
      "description": "Remote control battery depleted",
      "action": "Replace batteries immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "H12",
      "title": "Remote Signal Loss",
      "severity": "MEDIUM",
      "description": "Remote not communicating",
      "action": "Replace batteries. Clean sensor.",
      "serviceType": "split-system"
    },
    {
      "code": "H13",
      "title": "Defrost System Error",
      "severity": "MEDIUM",
      "description": "Heating defrost malfunction",
      "action": "Check outdoor coil. Manual defrost mode.",
      "serviceType": "split-system"
    },
    {
      "code": "H14",
      "title": "Mode Error",
      "severity": "LOW",
      "description": "Incorrect mode selected",
      "action": "Verify thermostat mode setting.",
      "serviceType": "split-system"
    },
    {
      "code": "H15",
      "title": "Indoor Filter Clogged",
      "severity": "MEDIUM",
      "description": "Air filter requires replacement",
      "action": "Clean or replace filter.",
      "serviceType": "split-system"
    },
    {
      "code": "H16",
      "title": "Outdoor Coil Frozen",
      "severity": "MEDIUM",
      "description": "Ice on outdoor unit",
      "action": "Manual defrost or COOL mode.",
      "serviceType": "split-system"
    },
    {
      "code": "H17",
      "title": "Electrical Fault",
      "severity": "HIGH",
      "description": "Circuit issue detected",
      "action": "Check breaker and wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "H18",
      "title": "Refrigerant Valve Issue",
      "severity": "HIGH",
      "description": "Expansion valve malfunction",
      "action": "Professional refrigeration service needed.",
      "serviceType": "split-system"
    },
    {
      "code": "H19",
      "title": "Drain Problem",
      "severity": "HIGH",
      "description": "Condensate drainage failure",
      "action": "Clear drain line. Check placement.",
      "serviceType": "split-system"
    },
    {
      "code": "H20",
      "title": "Unit Communication Error",
      "severity": "URGENT",
      "description": "Indoor/outdoor units not synced",
      "action": "Power cycle both. Check cables.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Panasonic Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Panasonic error code database with troubleshooting guides for split system and ducted air conditioning in Melbourne. Find solutions, maintenance tips and when to call a technician.",
  keywords: "Panasonic error codes, Panasonic troubleshooting, Panasonic split system and ducted Melbourne, Panasonic heater fault codes, Panasonic error code guide",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/self-care/panasonic",
  },
  openGraph: {
    title: "Panasonic Error Codes & Troubleshooting Guide | Melbourne",
    description: "Fix your Panasonic split system and ducted system with our comprehensive error code database and troubleshooting guide. Expert solutions for Melbourne homeowners.",
    url: "https://heaterservicemelbourne.com.au/self-care/panasonic",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}