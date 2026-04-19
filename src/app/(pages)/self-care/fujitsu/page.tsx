import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Fujitsu",
  "slug": "fujitsu",
  "systemType": "",
  "commonErrors": [
    {
      "code": "L1",
      "title": "Commercial PCB Error",
      "severity": "HIGH",
      "description": "Control board malfunction in commercial unit",
      "action": "Power cycle both units immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "L2",
      "title": "Sensor Communication Error",
      "severity": "HIGH",
      "description": "Sensor not responding to board",
      "action": "Check sensor connections. Clean contacts.",
      "serviceType": "split-system"
    },
    {
      "code": "L3",
      "title": "Compressor Fault",
      "severity": "HIGH",
      "description": "Compressor not running",
      "action": "Check electrical supply. Verify contactor.",
      "serviceType": "split-system"
    },
    {
      "code": "L4",
      "title": "Fan Motor Error",
      "severity": "HIGH",
      "description": "Indoor or outdoor fan issue",
      "action": "Check motor power. Inspect bearings.",
      "serviceType": "split-system"
    },
    {
      "code": "L5",
      "title": "Refrigerant Critical",
      "severity": "URGENT",
      "description": "Refrigerant loss detected",
      "action": "Professional service for leak detection.",
      "serviceType": "split-system"
    },
    {
      "code": "L6",
      "title": "Pressure Abnormal",
      "severity": "URGENT",
      "description": "System pressure out of range",
      "action": "Shut down. Check system components.",
      "serviceType": "split-system"
    },
    {
      "code": "L7",
      "title": "Temperature Error",
      "severity": "HIGH",
      "description": "Temperature sensor malfunction",
      "action": "Clean sensor. Check wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "L8",
      "title": "Outdoor Unit Fault",
      "severity": "HIGH",
      "description": "Outdoor board error",
      "action": "Check power supply connections.",
      "serviceType": "split-system"
    },
    {
      "code": "L9",
      "title": "Refrigerant Type Wrong",
      "severity": "URGENT",
      "description": "Wrong gas in system",
      "action": "Professional evacuation required immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "L10",
      "title": "System Overload",
      "severity": "HIGH",
      "description": "Compressor overload protection",
      "action": "Allow cooling time. Check conditions.",
      "serviceType": "split-system"
    },
    {
      "code": "L11",
      "title": "Communication Failure",
      "severity": "URGENT",
      "description": "Units not communicating",
      "action": "Check control cable connections.",
      "serviceType": "split-system"
    },
    {
      "code": "L12",
      "title": "Filter Clogged",
      "severity": "MEDIUM",
      "description": "Air filter severely dirty",
      "action": "Replace filter with correct size.",
      "serviceType": "split-system"
    },
    {
      "code": "L13",
      "title": "Drainage Issue",
      "severity": "HIGH",
      "description": "Condensate drain blocked",
      "action": "Clear drain line immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "L14",
      "title": "Defrost Malfunction",
      "severity": "MEDIUM",
      "description": "Heating mode defrost error",
      "action": "Check outdoor ice situation.",
      "serviceType": "split-system"
    },
    {
      "code": "L15",
      "title": "Mode Selection Error",
      "severity": "LOW",
      "description": "Wrong mode active",
      "action": "Set correct operating mode.",
      "serviceType": "split-system"
    },
    {
      "code": "L16",
      "title": "Valve Malfunction",
      "severity": "HIGH",
      "description": "Expansion valve issue",
      "action": "Refrigeration technician needed.",
      "serviceType": "split-system"
    },
    {
      "code": "L17",
      "title": "Power Supply Error",
      "severity": "HIGH",
      "description": "Electrical supply problem",
      "action": "Check circuit breaker and wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "L18",
      "title": "Coil Icing",
      "severity": "MEDIUM",
      "description": "Outdoor coil frozen",
      "action": "Manual defrost or COOL mode.",
      "serviceType": "split-system"
    },
    {
      "code": "L19",
      "title": "Remote Error",
      "severity": "MEDIUM",
      "description": "Remote control malfunction",
      "action": "Replace batteries and check signal.",
      "serviceType": "split-system"
    },
    {
      "code": "L20",
      "title": "Abnormal Noise",
      "severity": "MEDIUM",
      "description": "Strange sounds detected",
      "action": "Professional inspection recommended.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Fujitsu Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Fujitsu error code database with 20+ brand-specific error codes. Find exact solutions for  systems.",
  keywords: "Fujitsu error codes, , heating troubleshooting, Melbourne",
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}