import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Sharp",
  "slug": "sharp",
  "systemType": "",
  "commonErrors": [
    {
      "code": "S1",
      "title": "Plasmacluster Generator Error",
      "severity": "HIGH",
      "description": "Ion generator electrode malfunction",
      "action": "Clean electrode area. Power cycle.",
      "serviceType": "split-system"
    },
    {
      "code": "S2",
      "title": "Temperature Sensor Fault",
      "severity": "HIGH",
      "description": "Temperature sensor error",
      "action": "Clean sensor. Check connections.",
      "serviceType": "split-system"
    },
    {
      "code": "S3",
      "title": "Indoor Blower Error",
      "severity": "HIGH",
      "description": "Indoor fan not running",
      "action": "Clean filter. Check motor power.",
      "serviceType": "split-system"
    },
    {
      "code": "S4",
      "title": "Outdoor Fan Error",
      "severity": "HIGH",
      "description": "Outdoor fan malfunction",
      "action": "Check for obstruction. Clean unit.",
      "serviceType": "split-system"
    },
    {
      "code": "S5",
      "title": "Low Refrigerant",
      "severity": "URGENT",
      "description": "Refrigerant loss detected",
      "action": "Professional leak detection needed.",
      "serviceType": "split-system"
    },
    {
      "code": "S6",
      "title": "High Pressure Fault",
      "severity": "URGENT",
      "description": "Pressure exceeds safety limit",
      "action": "Shut down immediately. Check condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "S7",
      "title": "Compressor Protection",
      "severity": "HIGH",
      "description": "Compressor overload triggered",
      "action": "Cool for 30 mins. Check airflow.",
      "serviceType": "split-system"
    },
    {
      "code": "S8",
      "title": "Wrong Refrigerant",
      "severity": "URGENT",
      "description": "Incorrect gas type detected",
      "action": "Professional evacuation and recharge.",
      "serviceType": "split-system"
    },
    {
      "code": "S9",
      "title": "Discharge Temperature High",
      "severity": "HIGH",
      "description": "Outlet temperature excessive",
      "action": "Clean condenser. Verify airflow.",
      "serviceType": "split-system"
    },
    {
      "code": "S10",
      "title": "Outdoor Board Error",
      "severity": "HIGH",
      "description": "Outdoor PCB malfunction",
      "action": "Check power supply connections.",
      "serviceType": "split-system"
    },
    {
      "code": "S11",
      "title": "Remote Not Responding",
      "severity": "MEDIUM",
      "description": "Remote control error",
      "action": "Replace batteries. Check sensor.",
      "serviceType": "split-system"
    },
    {
      "code": "S12",
      "title": "Defrost Malfunction",
      "severity": "MEDIUM",
      "description": "Heating defrost error",
      "action": "Check outdoor coil ice.",
      "serviceType": "split-system"
    },
    {
      "code": "S13",
      "title": "Mode Error",
      "severity": "LOW",
      "description": "Wrong mode selected",
      "action": "Set correct operating mode.",
      "serviceType": "split-system"
    },
    {
      "code": "S14",
      "title": "Filter Alert",
      "severity": "MEDIUM",
      "description": "Air filter needs replacement",
      "action": "Replace filter immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "S15",
      "title": "Outdoor Coil Freeze",
      "severity": "MEDIUM",
      "description": "Ice on outdoor unit",
      "action": "Defrost mode or COOL mode.",
      "serviceType": "split-system"
    },
    {
      "code": "S16",
      "title": "Power Supply Error",
      "severity": "HIGH",
      "description": "Electrical problem detected",
      "action": "Check circuit breaker and wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "S17",
      "title": "Expansion Valve Fault",
      "severity": "HIGH",
      "description": "TXV malfunction",
      "action": "Professional refrigeration service.",
      "serviceType": "split-system"
    },
    {
      "code": "S18",
      "title": "Condensate Drain Blocked",
      "severity": "HIGH",
      "description": "Drain line obstruction",
      "action": "Clear drain line immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "S19",
      "title": "Abnormal Sound",
      "severity": "MEDIUM",
      "description": "Unusual unit noises",
      "action": "Professional inspection recommended.",
      "serviceType": "split-system"
    },
    {
      "code": "S20",
      "title": "Communication Error",
      "severity": "URGENT",
      "description": "Unit communication lost",
      "action": "Check control cable. Power cycle.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Sharp Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Sharp error code database with troubleshooting guides for split systems in Melbourne. Find solutions, maintenance tips and when to call a technician.",
  keywords: "Sharp error codes, Sharp troubleshooting, Sharp split system Melbourne, Sharp heater fault codes, Sharp error code guide",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/self-care/sharp",
  },
  openGraph: {
    title: "Sharp Error Codes & Troubleshooting Guide | Melbourne",
    description: "Fix your Sharp split system system with our comprehensive error code database and troubleshooting guide. Expert solutions for Melbourne homeowners.",
    url: "https://heaterservicemelbourne.com.au/self-care/sharp",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}