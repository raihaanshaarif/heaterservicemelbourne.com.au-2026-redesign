import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "York",
  "slug": "york",
  "systemType": "",
  "commonErrors": [
    {
      "code": "Y1",
      "title": "Commercial Unit Error",
      "severity": "HIGH",
      "description": "Control board malfunction",
      "action": "Power cycle immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "Y2",
      "title": "Multip Sensor Fault",
      "severity": "HIGH",
      "description": "Sensor error",
      "action": "Check connections. Clean.",
      "serviceType": "split-system"
    },
    {
      "code": "Y3",
      "title": "Compressor Error",
      "severity": "HIGH",
      "description": "Compressor not running",
      "action": "Check supply. Verify contactor.",
      "serviceType": "split-system"
    },
    {
      "code": "Y4",
      "title": "3-Phase Fan Error",
      "severity": "HIGH",
      "description": "Three-phase fan malfunction",
      "action": "Check motor power supply.",
      "serviceType": "split-system"
    },
    {
      "code": "Y5",
      "title": "Refrigerant Critical",
      "severity": "URGENT",
      "description": "Refrigerant loss",
      "action": "Professional leak detection.",
      "serviceType": "split-system"
    },
    {
      "code": "Y6",
      "title": "High Pressure",
      "severity": "URGENT",
      "description": "Pressure over limit",
      "action": "Shut down. Check condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "Y7",
      "title": "Compressor Protection",
      "severity": "HIGH",
      "description": "Overload protection",
      "action": "Cool down 30 minutes.",
      "serviceType": "split-system"
    },
    {
      "code": "Y8",
      "title": "Wrong Gas",
      "severity": "URGENT",
      "description": "Incorrect refrigerant",
      "action": "Professional evacuation.",
      "serviceType": "split-system"
    },
    {
      "code": "Y9",
      "title": "Discharge Temp Error",
      "severity": "HIGH",
      "description": "Output temp abnormal",
      "action": "Clean condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "Y10",
      "title": "Outside Board Error",
      "severity": "HIGH",
      "description": "Outdoor board fault",
      "action": "Check power connections.",
      "serviceType": "split-system"
    },
    {
      "code": "Y11",
      "title": "Remote Error",
      "severity": "MEDIUM",
      "description": "Remote unit error",
      "action": "Replace batteries.",
      "serviceType": "split-system"
    },
    {
      "code": "Y12",
      "title": "Commercial Defrost",
      "severity": "MEDIUM",
      "description": "Defrost cycle error",
      "action": "Check outdoor ice.",
      "serviceType": "split-system"
    },
    {
      "code": "Y13",
      "title": "Mode Error",
      "severity": "LOW",
      "description": "Wrong mode",
      "action": "Set correct mode.",
      "serviceType": "split-system"
    },
    {
      "code": "Y14",
      "title": "Commercial Filter",
      "severity": "MEDIUM",
      "description": "Filter clogged",
      "action": "Replace filter.",
      "serviceType": "split-system"
    },
    {
      "code": "Y15",
      "title": "Outdoor Freeze",
      "severity": "MEDIUM",
      "description": "Coil iced",
      "action": "Defrost mode.",
      "serviceType": "split-system"
    },
    {
      "code": "Y16",
      "title": "3-Phase Power",
      "severity": "HIGH",
      "description": "Power phase issue",
      "action": "Check breaker configuration.",
      "serviceType": "split-system"
    },
    {
      "code": "Y17",
      "title": "Valve Error",
      "severity": "HIGH",
      "description": "Valve malfunction",
      "action": "Refrigeration service.",
      "serviceType": "split-system"
    },
    {
      "code": "Y18",
      "title": "Drain Error",
      "severity": "HIGH",
      "description": "Drain line blocked",
      "action": "Clear drain line.",
      "serviceType": "split-system"
    },
    {
      "code": "Y19",
      "title": "Noise",
      "severity": "MEDIUM",
      "description": "Abnormal noise",
      "action": "Professional inspection.",
      "serviceType": "split-system"
    },
    {
      "code": "Y20",
      "title": "Communication Error",
      "severity": "URGENT",
      "description": "Units not synced",
      "action": "Check cables. Power reset.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "York Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive York error code database with troubleshooting guides for split system and ducted air conditioning in Melbourne. Find solutions, maintenance tips and when to call a technician.",
  keywords: "York error codes, York troubleshooting, York split system and ducted Melbourne, York heater fault codes, York error code guide",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/self-care/york",
  },
  openGraph: {
    title: "York Error Codes & Troubleshooting Guide | Melbourne",
    description: "Fix your York split system and ducted system with our comprehensive error code database and troubleshooting guide. Expert solutions for Melbourne homeowners.",
    url: "https://heaterservicemelbourne.com.au/self-care/york",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}