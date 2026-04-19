import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Haier",
  "slug": "haier",
  "systemType": "",
  "commonErrors": [
    {
      "code": "I1",
      "title": "IoT Module Error",
      "severity": "HIGH",
      "description": "Smart connectivity malfunction",
      "action": "Restart system. Check WiFi connection.",
      "serviceType": "split-system"
    },
    {
      "code": "I2",
      "title": "Sensor Communication Error",
      "severity": "HIGH",
      "description": "Sensor not responding",
      "action": "Check connections. Clean sensor.",
      "serviceType": "split-system"
    },
    {
      "code": "I3",
      "title": "Compressor Error",
      "severity": "HIGH",
      "description": "Compressor not running",
      "action": "Check power supply. Verify contactor.",
      "serviceType": "split-system"
    },
    {
      "code": "I4",
      "title": "Fan Error",
      "severity": "HIGH",
      "description": "Fan motor malfunction",
      "action": "Check motor power and operation.",
      "serviceType": "split-system"
    },
    {
      "code": "I5",
      "title": "Low Refrigerant",
      "severity": "URGENT",
      "description": "Refrigerant loss critical",
      "action": "Professional leak detection needed.",
      "serviceType": "split-system"
    },
    {
      "code": "I6",
      "title": "High Pressure",
      "severity": "URGENT",
      "description": "Pressure exceeds limit",
      "action": "Shut down. Check condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "I7",
      "title": "Temperature Error",
      "severity": "HIGH",
      "description": "Sensor malfunction",
      "action": "Clean sensor. Check wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "I8",
      "title": "Outdoor Unit Fault",
      "severity": "HIGH",
      "description": "Board malfunction",
      "action": "Check power supply connections.",
      "serviceType": "split-system"
    },
    {
      "code": "I9",
      "title": "Wrong Gas Type",
      "severity": "URGENT",
      "description": "Incorrect refrigerant",
      "action": "Professional evacuation immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "I10",
      "title": "Overload Protection",
      "severity": "HIGH",
      "description": "Compressor overload",
      "action": "Cool for 30 mins. Check...",
      "serviceType": "split-system"
    },
    {
      "code": "I11",
      "title": "Network Error",
      "severity": "URGENT",
      "description": "IoT communication failed",
      "action": "Check control cable connections.",
      "serviceType": "split-system"
    },
    {
      "code": "I12",
      "title": "Filter Alert",
      "severity": "MEDIUM",
      "description": "Air filter dirty",
      "action": "Replace filter immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "I13",
      "title": "Drain Blocked",
      "severity": "HIGH",
      "description": "Condensate drain obstruction",
      "action": "Clear drain line immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "I14",
      "title": "Defrost Error",
      "severity": "MEDIUM",
      "description": "Heating defrost malfunction",
      "action": "Check outdoor ice.",
      "serviceType": "split-system"
    },
    {
      "code": "I15",
      "title": "Mode Error",
      "severity": "LOW",
      "description": "Wrong mode selected",
      "action": "Set correct operating mode.",
      "serviceType": "split-system"
    },
    {
      "code": "I16",
      "title": "Valve Error",
      "severity": "HIGH",
      "description": "Expansion valve fault",
      "action": "Refrigeration service required.",
      "serviceType": "split-system"
    },
    {
      "code": "I17",
      "title": "Power Error",
      "severity": "HIGH",
      "description": "Electrical problem",
      "action": "Check breaker and wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "I18",
      "title": "Coil Freeze",
      "severity": "MEDIUM",
      "description": "Outdoor coil frozen",
      "action": "Defrost or COOL mode.",
      "serviceType": "split-system"
    },
    {
      "code": "I19",
      "title": "Remote Error",
      "severity": "MEDIUM",
      "description": "Remote malfunction",
      "action": "Replace batteries. Check signal.",
      "serviceType": "split-system"
    },
    {
      "code": "I20",
      "title": "Noise",
      "severity": "MEDIUM",
      "description": "Abnormal unit sounds",
      "action": "Professional inspection recommended.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Haier Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Haier error code database with 20+ brand-specific error codes. Find exact solutions for  systems.",
  keywords: "Haier error codes, , heating troubleshooting, Melbourne",
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}