import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Carrier",
  "slug": "carrier",
  "systemType": "",
  "commonErrors": [
    {
      "code": "C1",
      "title": "Legacy 1902 PCB Error",
      "severity": "HIGH",
      "description": "Control board malfunction (Carrier heritage tech)",
      "action": "Power cycle system completely.",
      "serviceType": "split-system"
    },
    {
      "code": "C2",
      "title": "Sensor Fault",
      "severity": "HIGH",
      "description": "Temperature/pressure sensor error",
      "action": "Check connections. Clean sensor.",
      "serviceType": "split-system"
    },
    {
      "code": "C3",
      "title": "Compressor Error",
      "severity": "HIGH",
      "description": "Compressor not responding",
      "action": "Check electrical supply. Verify power.",
      "serviceType": "split-system"
    },
    {
      "code": "C4",
      "title": "Fan Motor Issue",
      "severity": "HIGH",
      "description": "Indoor/outdoor fan malfunction",
      "action": "Check motor power and bearings.",
      "serviceType": "split-system"
    },
    {
      "code": "C5",
      "title": "Refrigerant Critical",
      "severity": "URGENT",
      "description": "Refrigerant loss detected",
      "action": "Professional leak detection service.",
      "serviceType": "split-system"
    },
    {
      "code": "C6",
      "title": "Pressure Out of Range",
      "severity": "URGENT",
      "description": "Abnormal system pressure",
      "action": "Shut down. Check all components.",
      "serviceType": "split-system"
    },
    {
      "code": "C7",
      "title": "Temperature Error",
      "severity": "HIGH",
      "description": "Temperature sensor malfunction",
      "action": "Clean and check wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "C8",
      "title": "Outdoor Unit Fault",
      "severity": "HIGH",
      "description": "Outdoor board error",
      "action": "Verify power supply connections.",
      "serviceType": "split-system"
    },
    {
      "code": "C9",
      "title": "Wrong Gas Type",
      "severity": "URGENT",
      "description": "Incorrect refrigerant detected",
      "action": "Professional evacuation immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "C10",
      "title": "Overload Protection",
      "severity": "HIGH",
      "description": "Compressor overload triggered",
      "action": "Allow cooling. Check conditions.",
      "serviceType": "split-system"
    },
    {
      "code": "C11",
      "title": "Unit Communication Bad",
      "severity": "URGENT",
      "description": "Control signal transmission failed",
      "action": "Check cable connections.",
      "serviceType": "split-system"
    },
    {
      "code": "C12",
      "title": "Filter Clogged",
      "severity": "MEDIUM",
      "description": "Air filter severely dirty",
      "action": "Replace with correct filter size.",
      "serviceType": "split-system"
    },
    {
      "code": "C13",
      "title": "Condensate Blocked",
      "severity": "HIGH",
      "description": "Drain line obstruction",
      "action": "Clear drain immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "C14",
      "title": "Defrost Cycle Error",
      "severity": "MEDIUM",
      "description": "Winter defrost malfunction",
      "action": "Check outdoor ice buildup.",
      "serviceType": "split-system"
    },
    {
      "code": "C15",
      "title": "Mode Setting Error",
      "severity": "LOW",
      "description": "Wrong operation mode",
      "action": "Set correct mode for season.",
      "serviceType": "split-system"
    },
    {
      "code": "C16",
      "title": "Expansion Valve Fault",
      "severity": "HIGH",
      "description": "TXV malfunction",
      "action": "Refrigeration technician required.",
      "serviceType": "split-system"
    },
    {
      "code": "C17",
      "title": "Power Supply Fault",
      "severity": "HIGH",
      "description": "Electrical problem detected",
      "action": "Check breaker and wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "C18",
      "title": "Coil Frozen",
      "severity": "MEDIUM",
      "description": "Outdoor heat exchanger iced",
      "action": "Manual defrost or COOL mode.",
      "serviceType": "split-system"
    },
    {
      "code": "C19",
      "title": "Remote Control Error",
      "severity": "MEDIUM",
      "description": "Remote not communicating",
      "action": "Replace batteries. Check signal.",
      "serviceType": "split-system"
    },
    {
      "code": "C20",
      "title": "Unusual Sound",
      "severity": "MEDIUM",
      "description": "Strange noises from system",
      "action": "Professional inspection needed.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Carrier Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Carrier error code database with 20+ brand-specific error codes. Find exact solutions for  systems.",
  keywords: "Carrier error codes, , heating troubleshooting, Melbourne",
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}