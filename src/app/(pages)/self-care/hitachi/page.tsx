import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Hitachi",
  "slug": "hitachi",
  "systemType": "",
  "commonErrors": [
    {
      "code": "R1",
      "title": "Twin Rotary Compressor Error",
      "severity": "HIGH",
      "description": "Dual compressor synchronization fault",
      "action": "Power cycle system immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "R2",
      "title": "Sensor Malfunction",
      "severity": "HIGH",
      "description": "Temperature/pressure sensor error",
      "action": "Check connections. Clean sensor.",
      "serviceType": "split-system"
    },
    {
      "code": "R3",
      "title": "Compressor Fault",
      "severity": "HIGH",
      "description": "Compressor not operating",
      "action": "Check electrical supply. Verify power.",
      "serviceType": "split-system"
    },
    {
      "code": "R4",
      "title": "Fan Motor Error",
      "severity": "HIGH",
      "description": "Fan motor malfunction",
      "action": "Check motor power and operation.",
      "serviceType": "split-system"
    },
    {
      "code": "R5",
      "title": "Low Refrigerant",
      "severity": "URGENT",
      "description": "Critical refrigerant loss",
      "action": "Professional service for leak detection.",
      "serviceType": "split-system"
    },
    {
      "code": "R6",
      "title": "High Pressure Error",
      "severity": "URGENT",
      "description": "System pressure too high",
      "action": "Shut down. Check condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "R7",
      "title": "Temperature Sensor Fail",
      "severity": "HIGH",
      "description": "Sensor malfunction",
      "action": "Clean and check wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "R8",
      "title": "Outdoor Board Error",
      "severity": "HIGH",
      "description": "Outdoor PCB fault",
      "action": "Check power and connections.",
      "serviceType": "split-system"
    },
    {
      "code": "R9",
      "title": "Wrong Refrigerant",
      "severity": "URGENT",
      "description": "Incorrect gas type detected",
      "action": "Professional evacuation and recharge.",
      "serviceType": "split-system"
    },
    {
      "code": "R10",
      "title": "Compressor Overload",
      "severity": "HIGH",
      "description": "Overload protection triggered",
      "action": "Cool for 30 mins. Check airflow.",
      "serviceType": "split-system"
    },
    {
      "code": "R11",
      "title": "Link Communication Bad",
      "severity": "URGENT",
      "description": "Unit communication lost",
      "action": "Check cable. Power cycle.",
      "serviceType": "split-system"
    },
    {
      "code": "R12",
      "title": "Filter Alert",
      "severity": "MEDIUM",
      "description": "Air filter replacement needed",
      "action": "Replace filter immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "R13",
      "title": "Drain Blocked",
      "severity": "HIGH",
      "description": "Condensate drainage blocked",
      "action": "Clear drain line immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "R14",
      "title": "Defrost Malfunction",
      "severity": "MEDIUM",
      "description": "Heating defrost error",
      "action": "Check outdoor coil ice.",
      "serviceType": "split-system"
    },
    {
      "code": "R15",
      "title": "Mode Error",
      "severity": "LOW",
      "description": "Wrong operating mode",
      "action": "Select correct mode (COOL/HEAT).",
      "serviceType": "split-system"
    },
    {
      "code": "R16",
      "title": "Valve Error",
      "severity": "HIGH",
      "description": "Expansion valve fault",
      "action": "Refrigeration service required.",
      "serviceType": "split-system"
    },
    {
      "code": "R17",
      "title": "Power Error",
      "severity": "HIGH",
      "description": "Electrical supply problem",
      "action": "Check breaker and wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "R18",
      "title": "Outdoor Freeze",
      "severity": "MEDIUM",
      "description": "Outdoor coil frozen",
      "action": "Defrost mode or COOL mode.",
      "serviceType": "split-system"
    },
    {
      "code": "R19",
      "title": "Remote Error",
      "severity": "MEDIUM",
      "description": "Remote control malfunction",
      "action": "Replace batteries. Check signal.",
      "serviceType": "split-system"
    },
    {
      "code": "R20",
      "title": "Abnormal Noise",
      "severity": "MEDIUM",
      "description": "Strange system sounds",
      "action": "Professional inspection recommended.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Hitachi Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Hitachi error code database with troubleshooting guides for split system and ducted air conditioning in Melbourne. Find solutions, maintenance tips and when to call a technician.",
  keywords: "Hitachi error codes, Hitachi troubleshooting, Hitachi split system and ducted Melbourne, Hitachi heater fault codes, Hitachi error code guide",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/self-care/hitachi",
  },
  openGraph: {
    title: "Hitachi Error Codes & Troubleshooting Guide | Melbourne",
    description: "Fix your Hitachi split system and ducted system with our comprehensive error code database and troubleshooting guide. Expert solutions for Melbourne homeowners.",
    url: "https://heaterservicemelbourne.com.au/self-care/hitachi",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}