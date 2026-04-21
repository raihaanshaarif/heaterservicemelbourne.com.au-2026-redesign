import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "ActronAir",
  "slug": "actronair",
  "systemType": "",
  "commonErrors": [
    {
      "code": "AC1",
      "title": "SHX Inverter Error",
      "severity": "HIGH",
      "description": "Smart heating exchange inverter malfunction",
      "action": "Power cycle unit completely.",
      "serviceType": "split-system"
    },
    {
      "code": "AC2",
      "title": "Temperature Sensor Fault",
      "severity": "HIGH",
      "description": "Sensor malfunction",
      "action": "Clean sensor. Check wiring connections.",
      "serviceType": "split-system"
    },
    {
      "code": "AC3",
      "title": "Indoor Fan Error",
      "severity": "HIGH",
      "description": "Indoor blower not operating",
      "action": "Clean filter. Verify motor power.",
      "serviceType": "split-system"
    },
    {
      "code": "AC4",
      "title": "Outdoor Fan Fault",
      "severity": "HIGH",
      "description": "Outdoor fan malfunction",
      "action": "Check for obstructions. Clean fins.",
      "serviceType": "split-system"
    },
    {
      "code": "AC5",
      "title": "Refrigerant Low",
      "severity": "URGENT",
      "description": "Critical refrigerant loss",
      "action": "Professional leak detection service.",
      "serviceType": "split-system"
    },
    {
      "code": "AC6",
      "title": "High Pressure Error",
      "severity": "URGENT",
      "description": "Pressure exceeds limit",
      "action": "Shut down. Check condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "AC7",
      "title": "Compressor Protection",
      "severity": "HIGH",
      "description": "Overload triggered",
      "action": "Cool 30 minutes. Check conditions.",
      "serviceType": "split-system"
    },
    {
      "code": "AC8",
      "title": "Wrong Refrigerant",
      "severity": "URGENT",
      "description": "Incorrect gas detected",
      "action": "Professional evacuation and recharge.",
      "serviceType": "split-system"
    },
    {
      "code": "AC9",
      "title": "Discharge Temp High",
      "severity": "HIGH",
      "description": "Output temperature excessive",
      "action": "Clean condenser. Check airflow.",
      "serviceType": "split-system"
    },
    {
      "code": "AC10",
      "title": "Outdoor Board Fault",
      "severity": "HIGH",
      "description": "Outdoor PCB malfunction",
      "action": "Check power supply connections.",
      "serviceType": "split-system"
    },
    {
      "code": "AC11",
      "title": "Remote Signal Loss",
      "severity": "MEDIUM",
      "description": "Remote not communicating",
      "action": "Replace batteries. Check sensor.",
      "serviceType": "split-system"
    },
    {
      "code": "AC12",
      "title": "Defrost Failure",
      "severity": "MEDIUM",
      "description": "Winter defrost not working",
      "action": "Check outdoor coil ice.",
      "serviceType": "split-system"
    },
    {
      "code": "AC13",
      "title": "Mode Selection Error",
      "severity": "LOW",
      "description": "Wrong mode active",
      "action": "Set correct operating mode.",
      "serviceType": "split-system"
    },
    {
      "code": "AC14",
      "title": "Filter Replacement",
      "severity": "MEDIUM",
      "description": "Filter needs attention",
      "action": "Replace filter immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "AC15",
      "title": "Outdoor Coil Freeze",
      "severity": "MEDIUM",
      "description": "Ice accumulation",
      "action": "Defrost or COOL mode.",
      "serviceType": "split-system"
    },
    {
      "code": "AC16",
      "title": "Electrical Problem",
      "severity": "HIGH",
      "description": "Power supply issue",
      "action": "Check breaker and wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "AC17",
      "title": "Expansion Valve Fault",
      "severity": "HIGH",
      "description": "TXV malfunction",
      "action": "Refrigeration service required.",
      "serviceType": "split-system"
    },
    {
      "code": "AC18",
      "title": "Drain Line Blocked",
      "severity": "HIGH",
      "description": "Condensate drainage failure",
      "action": "Clear drain line immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "AC19",
      "title": "Unusual Noise",
      "severity": "MEDIUM",
      "description": "Strange sounds from unit",
      "action": "Professional inspection recommended.",
      "serviceType": "split-system"
    },
    {
      "code": "AC20",
      "title": "Communication Failure",
      "severity": "URGENT",
      "description": "Indoor/outdoor units not synced",
      "action": "Check control cable. Power reset.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "ActronAir Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive ActronAir error code database with troubleshooting guides for ducted and split systems in Melbourne. Find solutions, maintenance tips and when to call a technician.",
  keywords: "ActronAir error codes, ActronAir troubleshooting, ActronAir ducted and split system Melbourne, ActronAir heater fault codes, ActronAir error code guide",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/self-care/actronair",
  },
  openGraph: {
    title: "ActronAir Error Codes & Troubleshooting Guide | Melbourne",
    description: "Fix your ActronAir ducted and split system system with our comprehensive error code database and troubleshooting guide. Expert solutions for Melbourne homeowners.",
    url: "https://heaterservicemelbourne.com.au/self-care/actronair",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}