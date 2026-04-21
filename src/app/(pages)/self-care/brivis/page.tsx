import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Brivis",
  "slug": "brivis",
  "systemType": "",
  "commonErrors": [
    {
      "code": "A1",
      "title": "SmartComfort Module Error",
      "severity": "HIGH",
      "description": "Smart control module malfunction",
      "action": "Restart thermostat. Check WiFi. Update firmware.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A2",
      "title": "PCB Communication Fault",
      "severity": "HIGH",
      "description": "Main board cannot communicate with burner module",
      "action": "Power cycle system. Check all wiring.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A3",
      "title": "Gas Valve Assembly Fault",
      "severity": "URGENT",
      "description": "Modulating gas valve not responding",
      "action": "Turn off gas. Professional replacement needed.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A4",
      "title": "Ignition Electrode Error",
      "severity": "URGENT",
      "description": "Ignition spark not generating",
      "action": "Clean electrode. Check for corrosion. May need replacement.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A5",
      "title": "Flame Sensor Inactive",
      "severity": "HIGH",
      "description": "Flame sensor not detecting combustion",
      "action": "Safety shutdown. Clean or replace sensor.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A6",
      "title": "Blower Assembly Fault",
      "severity": "HIGH",
      "description": "Blower not responding to signals",
      "action": "Check motor power. Verify capacitor function.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A7",
      "title": "Pressure Sensor Error",
      "severity": "HIGH",
      "description": "Vent pressure sensor malfunction",
      "action": "Check vent lines. Clear debris. Test sensor.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A8",
      "title": "Draft Inducer Fault",
      "severity": "HIGH",
      "description": "Exhaust fan not operating",
      "action": "Inspect vent for ice/snow. Clean thoroughly.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A9",
      "title": "System Overheat",
      "severity": "HIGH",
      "description": "Temperature limit switch triggered",
      "action": "Allow cooling. Check returns aren't blocked.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A10",
      "title": "Gas Supply Interruption",
      "severity": "URGENT",
      "description": "Gas pressure too low",
      "action": "Check gas meter. Contact supplier immediately.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A11",
      "title": "Thermostat Battery Low",
      "severity": "MEDIUM",
      "description": "SmartComfort battery depleted",
      "action": "Replace thermostat batteries (AA/AAA).",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A12",
      "title": "WiFi Disconnected",
      "severity": "MEDIUM",
      "description": "WiFi connectivity lost",
      "action": "Check router. Restart thermostat. Verify password.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A13",
      "title": "Transformer Failure",
      "severity": "HIGH",
      "description": "24V transformer damaged",
      "action": "Professional replacement required.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A14",
      "title": "Motor Capacitor Fault",
      "severity": "HIGH",
      "description": "Blower capacitor failed",
      "action": "Professional service needed for replacement.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A15",
      "title": "Air Filter Critical",
      "severity": "MEDIUM",
      "description": "Air filter extremely clogged",
      "action": "Replace immediately with Brivis recommended MERV.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A16",
      "title": "Ductwork Obstructed",
      "severity": "MEDIUM",
      "description": "Vents/ducts blocked",
      "action": "Check room vents. Remove blocking furniture.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A17",
      "title": "Short Cycling",
      "severity": "MEDIUM",
      "description": "Too many on/off cycles",
      "action": "May indicate oversized furnace. Contact installer.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A18",
      "title": "High Limit Stuck",
      "severity": "MEDIUM",
      "description": "Temperature switch stuck in safety",
      "action": "Allow cooling. Inspect airflow issues.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A19",
      "title": "Gas Odor Warning",
      "severity": "URGENT",
      "description": "Gas leak detected",
      "action": "Evacuate immediately. Call gas company.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "A20",
      "title": "Ignition Lockout",
      "severity": "URGENT",
      "description": "Multiple failed auto-ignitions",
      "action": "System locked. Professional reset required.",
      "serviceType": "gas-ducted"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Brivis Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Brivis error code database with troubleshooting guides for gas ducted heating systems in Melbourne. Find solutions, maintenance tips and when to call a technician.",
  keywords: "Brivis error codes, Brivis troubleshooting, Brivis gas ducted heating Melbourne, Brivis heater fault codes, Brivis error code guide",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/self-care/brivis",
  },
  openGraph: {
    title: "Brivis Error Codes & Troubleshooting Guide | Melbourne",
    description: "Fix your Brivis gas ducted heating system with our comprehensive error code database and troubleshooting guide. Expert solutions for Melbourne homeowners.",
    url: "https://heaterservicemelbourne.com.au/self-care/brivis",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}