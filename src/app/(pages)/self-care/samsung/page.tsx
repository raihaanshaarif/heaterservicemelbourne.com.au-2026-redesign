import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Samsung",
  "slug": "samsung",
  "systemType": "",
  "commonErrors": [
    {
      "code": "E1",
      "title": "WindFree Sensor Error",
      "severity": "HIGH",
      "description": "Airflow sensor malfunction",
      "action": "Clean sensor. Power cycle unit.",
      "serviceType": "split-system"
    },
    {
      "code": "E2",
      "title": "Temperature Sensor Error",
      "severity": "HIGH",
      "description": "Temperature detection failure",
      "action": "Check sensor connections. Clean area.",
      "serviceType": "split-system"
    },
    {
      "code": "E3",
      "title": "Blower Not Running",
      "severity": "HIGH",
      "description": "Indoor blower malfunction",
      "action": "Clean filter. Verify motor power.",
      "serviceType": "split-system"
    },
    {
      "code": "E4",
      "title": "Outdoor Fan Error",
      "severity": "HIGH",
      "description": "Outdoor fan not working",
      "action": "Check for ice. Clean unit.",
      "serviceType": "split-system"
    },
    {
      "code": "E5",
      "title": "Low Refrigerant",
      "severity": "URGENT",
      "description": "Refrigerant level too low",
      "action": "Professional evacuation and recharge.",
      "serviceType": "split-system"
    },
    {
      "code": "E6",
      "title": "High Pressure Error",
      "severity": "URGENT",
      "description": "System pressure too high",
      "action": "Shut down immediately. Check condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "E7",
      "title": "Compressor Fault",
      "severity": "HIGH",
      "description": "Compressor protection triggered",
      "action": "Allow cooling. Check airflow.",
      "serviceType": "split-system"
    },
    {
      "code": "E8",
      "title": "Wrong Refrigerant",
      "severity": "URGENT",
      "description": "Incorrect gas type detected",
      "action": "Professional service for evacuation.",
      "serviceType": "split-system"
    },
    {
      "code": "E9",
      "title": "Discharge Temp High",
      "severity": "HIGH",
      "description": "Output temperature excessive",
      "action": "Clean condenser. Verify airflow.",
      "serviceType": "split-system"
    },
    {
      "code": "E10",
      "title": "Outdoor Unit Error",
      "severity": "HIGH",
      "description": "Outdoor board malfunction",
      "action": "Check power and wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "E11",
      "title": "Remote Not Working",
      "severity": "MEDIUM",
      "description": "Remote control error",
      "action": "Replace batteries. Check sensor.",
      "serviceType": "split-system"
    },
    {
      "code": "E12",
      "title": "Defrost Cycle Error",
      "severity": "MEDIUM",
      "description": "Winter defrost failure",
      "action": "Check outdoor coil ice.",
      "serviceType": "split-system"
    },
    {
      "code": "E13",
      "title": "Mode Error",
      "severity": "LOW",
      "description": "Wrong mode selected",
      "action": "Set correct operating mode.",
      "serviceType": "split-system"
    },
    {
      "code": "E14",
      "title": "Filter Alert",
      "severity": "MEDIUM",
      "description": "Air filter replacement due",
      "action": "Replace filter immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "E15",
      "title": "Outdoor Freeze",
      "severity": "MEDIUM",
      "description": "Outdoor coil icing",
      "action": "Defrost mode or COOL mode.",
      "serviceType": "split-system"
    },
    {
      "code": "E16",
      "title": "Electrical Failure",
      "severity": "HIGH",
      "description": "Power issue detected",
      "action": "Check breaker and circuits.",
      "serviceType": "split-system"
    },
    {
      "code": "E17",
      "title": "Valve Malfunction",
      "severity": "HIGH",
      "description": "Expansion valve error",
      "action": "Professional refrigeration service.",
      "serviceType": "split-system"
    },
    {
      "code": "E18",
      "title": "Drain Blockage",
      "severity": "HIGH",
      "description": "Condensate drain blocked",
      "action": "Clear drain line immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "E19",
      "title": "Unusual Noise",
      "severity": "MEDIUM",
      "description": "Strange sounds from unit",
      "action": "Professional inspection needed.",
      "serviceType": "split-system"
    },
    {
      "code": "E20",
      "title": "Communication Error",
      "severity": "URGENT",
      "description": "Indoor/outdoor communication lost",
      "action": "Check cables. Power cycle system.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Samsung Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Samsung error code database with troubleshooting guides for split systems in Melbourne. Find solutions, maintenance tips and when to call a technician.",
  keywords: "Samsung error codes, Samsung troubleshooting, Samsung split system Melbourne, Samsung heater fault codes, Samsung error code guide",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/self-care/samsung",
  },
  openGraph: {
    title: "Samsung Error Codes & Troubleshooting Guide | Melbourne",
    description: "Fix your Samsung split system system with our comprehensive error code database and troubleshooting guide. Expert solutions for Melbourne homeowners.",
    url: "https://heaterservicemelbourne.com.au/self-care/samsung",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}