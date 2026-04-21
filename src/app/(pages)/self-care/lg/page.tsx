import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "LG",
  "slug": "lg",
  "systemType": "",
  "commonErrors": [
    {
      "code": "P1",
      "title": "AI Prediction System Error",
      "severity": "HIGH",
      "description": "Machine learning module malfunction",
      "action": "Restart system. Update firmware if available.",
      "serviceType": "split-system"
    },
    {
      "code": "P2",
      "title": "Indoor Sensor Fault",
      "severity": "HIGH",
      "description": "Indoor temperature sensor error",
      "action": "Clean sensor. Power cycle unit.",
      "serviceType": "split-system"
    },
    {
      "code": "P3",
      "title": "Outdoor Sensor Fault",
      "severity": "HIGH",
      "description": "Outdoor sensor malfunction",
      "action": "Check sensor area for debris.",
      "serviceType": "split-system"
    },
    {
      "code": "P4",
      "title": "Indoor Fan Error",
      "severity": "HIGH",
      "description": "Indoor blower not working",
      "action": "Clean filter. Check power supply.",
      "serviceType": "split-system"
    },
    {
      "code": "P5",
      "title": "Outdoor Fan Error",
      "severity": "HIGH",
      "description": "Outdoor fan malfunction",
      "action": "Check for blockage. Clean unit.",
      "serviceType": "split-system"
    },
    {
      "code": "P6",
      "title": "Refrigerant Leak",
      "severity": "URGENT",
      "description": "Low refrigerant pressure",
      "action": "Professional service for leak detection.",
      "serviceType": "split-system"
    },
    {
      "code": "P7",
      "title": "High Discharge Pressure",
      "severity": "URGENT",
      "description": "Abnormal pressure detected",
      "action": "Shut down. Check condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "P8",
      "title": "Compressor Protection",
      "severity": "HIGH",
      "description": "Compressor overload detected",
      "action": "Allow cooling. Check airflow.",
      "serviceType": "split-system"
    },
    {
      "code": "P9",
      "title": "Refrigerant Type Error",
      "severity": "URGENT",
      "description": "Incompatible refrigerant",
      "action": "Professional evacuation and recharge.",
      "serviceType": "split-system"
    },
    {
      "code": "P10",
      "title": "High Discharge Temp",
      "severity": "HIGH",
      "description": "Abnormal output temperature",
      "action": "Clean condenser. Check airflow.",
      "serviceType": "split-system"
    },
    {
      "code": "P11",
      "title": "Remote Not Responding",
      "severity": "MEDIUM",
      "description": "Remote control connection lost",
      "action": "Replace batteries. Check signal.",
      "serviceType": "split-system"
    },
    {
      "code": "P12",
      "title": "Defrost Failure",
      "severity": "MEDIUM",
      "description": "Winter heating defrost error",
      "action": "Check outdoor coil ice.",
      "serviceType": "split-system"
    },
    {
      "code": "P13",
      "title": "Mode Selection Error",
      "severity": "LOW",
      "description": "Wrong operating mode",
      "action": "Select correct mode (COOL/HEAT).",
      "serviceType": "split-system"
    },
    {
      "code": "P14",
      "title": "Filter Alert",
      "severity": "MEDIUM",
      "description": "Air filter needs replacement",
      "action": "Replace filter immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "P15",
      "title": "Outdoor Icing",
      "severity": "MEDIUM",
      "description": "Outdoor coil frozen",
      "action": "Manual defrost or COOL mode.",
      "serviceType": "split-system"
    },
    {
      "code": "P16",
      "title": "Power Supply Issue",
      "severity": "HIGH",
      "description": "Electrical problem detected",
      "action": "Check circuit breaker. Verify wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "P17",
      "title": "TXV Malfunction",
      "severity": "HIGH",
      "description": "Expansion valve error",
      "action": "Refrigeration service required.",
      "serviceType": "split-system"
    },
    {
      "code": "P18",
      "title": "Water Drainage Error",
      "severity": "HIGH",
      "description": "Condensate drain blocked",
      "action": "Clear drain line immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "P19",
      "title": "Noise Detection",
      "severity": "MEDIUM",
      "description": "Abnormal unit noise",
      "action": "Professional inspection recommended.",
      "serviceType": "split-system"
    },
    {
      "code": "P20",
      "title": "Network Disconnection",
      "severity": "URGENT",
      "description": "Unit/indoor communication lost",
      "action": "Check control cable. Power reset.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "LG Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive LG error code database with troubleshooting guides for split system and ducted reverse cycle air conditioning in Melbourne. Find solutions, maintenance tips and when to call a technician.",
  keywords: "LG error codes, LG troubleshooting, LG split system and ducted reverse cycle Melbourne, LG heater fault codes, LG error code guide",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/self-care/lg",
  },
  openGraph: {
    title: "LG Error Codes & Troubleshooting Guide | Melbourne",
    description: "Fix your LG split system and ducted reverse cycle system with our comprehensive error code database and troubleshooting guide. Expert solutions for Melbourne homeowners.",
    url: "https://heaterservicemelbourne.com.au/self-care/lg",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}