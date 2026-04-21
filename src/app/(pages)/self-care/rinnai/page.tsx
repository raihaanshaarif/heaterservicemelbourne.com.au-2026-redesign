import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Rinnai",
  "slug": "rinnai",
  "systemType": "",
  "commonErrors": [
    {
      "code": "R1",
      "title": "Ignition System Fault",
      "severity": "URGENT",
      "description": "Modulating burner ignition failure",
      "action": "Check gas supply. Clean igniter.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R2",
      "title": "Flame Sensor Error",
      "severity": "URGENT",
      "description": "Flame detection sensor malfunction",
      "action": "Clean sensor with cloth. Inspect.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R3",
      "title": "Gas Valve Fault",
      "severity": "URGENT",
      "description": "Modulating gas valve stuck/error",
      "action": "Turn off gas. Professional repair.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R4",
      "title": "Vent Blockage",
      "severity": "URGENT",
      "description": "Exhaust vent obstructed or frozen",
      "action": "Check for ice, snow, debris.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R5",
      "title": "Condensate Drain Error",
      "severity": "HIGH",
      "description": "Drain line blocked (condensing model)",
      "action": "Check and clear drain line.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R6",
      "title": "Temperature Sensor Error",
      "severity": "HIGH",
      "description": "Outlet temp sensor fault",
      "action": "Clean sensor. Check wiring.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R7",
      "title": "Modulation Control Error",
      "severity": "HIGH",
      "description": "Burner output control malfunction",
      "action": "Power cycle. Check gas pressure.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R8",
      "title": "Flow Switch Error",
      "severity": "HIGH",
      "description": "Water flow switch not triggering",
      "action": "Check water supply. Bleed air.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R9",
      "title": "Pressure Switch Fault",
      "severity": "HIGH",
      "description": "Safety pressure switch error",
      "action": "Check vent for obstructions.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R10",
      "title": "Gas Supply Interruption",
      "severity": "URGENT",
      "description": "Gas supply pressure too low",
      "action": "Check meter. Contact supplier.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R11",
      "title": "Combustion Analysis Error",
      "severity": "HIGH",
      "description": "Combustion sensor malfunction",
      "action": "Professional service needed.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R12",
      "title": "Electrodes Fouled",
      "severity": "MEDIUM",
      "description": "Ignition electrodes contaminated",
      "action": "Professional cleaning recommended.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R13",
      "title": "Heat Exchanger Issue",
      "severity": "HIGH",
      "description": "Heat transfer efficiency low",
      "action": "May need descaling. Professional.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R14",
      "title": "Control Board Error",
      "severity": "HIGH",
      "description": "Main PCB malfunction",
      "action": "Power cycle. Professional service.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R15",
      "title": "Transformer Fault",
      "severity": "HIGH",
      "description": "24V power transformer damaged",
      "action": "Professional replacement needed.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R16",
      "title": "Water Temperature Error",
      "severity": "MEDIUM",
      "description": "Output temp reading incorrect",
      "action": "Verify thermostat settings.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R17",
      "title": "Gas Leak Detected",
      "severity": "URGENT",
      "description": "Gas odor or meter alarm",
      "action": "Evacuate. Call gas company.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R18",
      "title": "Incomplete Combustion",
      "severity": "HIGH",
      "description": "Yellow flame or improper burn",
      "action": "Professional inspection urgently.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R19",
      "title": "Safety Lockout",
      "severity": "URGENT",
      "description": "Multiple ignition failures",
      "action": "System locked. Professional reset.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "R20",
      "title": "Unusual Odor",
      "severity": "URGENT",
      "description": "Strange smell from unit",
      "action": "Turn off immediately. Professional.",
      "serviceType": "gas-ducted"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Rinnai Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Rinnai error code database with troubleshooting guides for gas ducted heating systems in Melbourne. Find solutions, maintenance tips and when to call a technician.",
  keywords: "Rinnai error codes, Rinnai troubleshooting, Rinnai gas ducted heating Melbourne, Rinnai heater fault codes, Rinnai error code guide",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/self-care/rinnai",
  },
  openGraph: {
    title: "Rinnai Error Codes & Troubleshooting Guide | Melbourne",
    description: "Fix your Rinnai gas ducted heating system with our comprehensive error code database and troubleshooting guide. Expert solutions for Melbourne homeowners.",
    url: "https://heaterservicemelbourne.com.au/self-care/rinnai",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}