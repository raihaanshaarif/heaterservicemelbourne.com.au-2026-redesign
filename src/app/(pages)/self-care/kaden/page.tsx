import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Kaden",
  "slug": "kaden",
  "systemType": "",
  "commonErrors": [
    {
      "code": "D1",
      "title": "District Heat Exchanger Error",
      "severity": "HIGH",
      "description": "Heat exchanger malfunction in district system",
      "action": "Check district supply. Call utility company.",
      "serviceType": "hydronic"
    },
    {
      "code": "D2",
      "title": "Circulation Pump Fault",
      "severity": "URGENT",
      "description": "Main pump not running",
      "action": "Check pump power. Inspect connections.",
      "serviceType": "hydronic"
    },
    {
      "code": "D3",
      "title": "Flow Rate Error",
      "severity": "HIGH",
      "description": "Insufficient heat transfer fluid flow",
      "action": "Bleed air from system. Check valves.",
      "serviceType": "hydronic"
    },
    {
      "code": "D4",
      "title": "Pressure Sensor Error",
      "severity": "HIGH",
      "description": "System pressure sensor malfunction",
      "action": "Check sensor connections and calibration.",
      "serviceType": "hydronic"
    },
    {
      "code": "D5",
      "title": "Temperature Sensor Error",
      "severity": "HIGH",
      "description": "Temperature detection failure",
      "action": "Clean sensor. Check wiring.",
      "serviceType": "hydronic"
    },
    {
      "code": "D6",
      "title": "Thermal Storage Low",
      "severity": "MEDIUM",
      "description": "Storage tank temperature low",
      "action": "Check district supply temp. Wait for heat.",
      "serviceType": "hydronic"
    },
    {
      "code": "D7",
      "title": "Water Level Critical",
      "severity": "HIGH",
      "description": "System water level too low",
      "action": "Add water to expansion tank carefully.",
      "serviceType": "hydronic"
    },
    {
      "code": "D8",
      "title": "Thermal Storage High",
      "severity": "MEDIUM",
      "description": "Storage temperature excessive",
      "action": "Check thermostat setting. Cool system.",
      "serviceType": "hydronic"
    },
    {
      "code": "D9",
      "title": "Zone Valve Stuck",
      "severity": "HIGH",
      "description": "Zone control valve not operating",
      "action": "Manually actuate. Check for corrosion.",
      "serviceType": "hydronic"
    },
    {
      "code": "D10",
      "title": "Expansion Tank Fault",
      "severity": "URGENT",
      "description": "Expansion tank pressure abnormal",
      "action": "Check pre-charge pressure. May need service.",
      "serviceType": "hydronic"
    },
    {
      "code": "D11",
      "title": "Dirty Water Alert",
      "severity": "HIGH",
      "description": "Fluid contamination detected",
      "action": "System flush and fluid replacement needed.",
      "serviceType": "hydronic"
    },
    {
      "code": "D12",
      "title": "Air Lock Detected",
      "severity": "MEDIUM",
      "description": "Air pocket preventing flow",
      "action": "Bleed air from high points in system.",
      "serviceType": "hydronic"
    },
    {
      "code": "D13",
      "title": "Radiator Not Heating",
      "severity": "MEDIUM",
      "description": "Individual radiator receiving no heat",
      "action": "Bleed air. Check valve position.",
      "serviceType": "hydronic"
    },
    {
      "code": "D14",
      "title": "Pipes Making Noise",
      "severity": "MEDIUM",
      "description": "Water hammer or vibration sounds",
      "action": "Check pipe support. May need cushion.",
      "serviceType": "hydronic"
    },
    {
      "code": "D15",
      "title": "Glycol Degradation",
      "severity": "MEDIUM",
      "description": "Heat transfer fluid aging",
      "action": "Fluid analysis recommended if over 10 yrs.",
      "serviceType": "hydronic"
    },
    {
      "code": "D16",
      "title": "Zone Uneven Heating",
      "severity": "MEDIUM",
      "description": "Some zones much warmer/cooler",
      "action": "Balance flow with zone valve adjustments.",
      "serviceType": "hydronic"
    },
    {
      "code": "D17",
      "title": "Water Leak Detected",
      "severity": "HIGH",
      "description": "Active leak in system",
      "action": "Turn off immediately. Locate and repair.",
      "serviceType": "hydronic"
    },
    {
      "code": "D18",
      "title": "District Connection Error",
      "severity": "URGENT",
      "description": "District heating supply disconnected",
      "action": "Contact district heating utility immediately.",
      "serviceType": "hydronic"
    },
    {
      "code": "D19",
      "title": "Thermostat Error",
      "severity": "MEDIUM",
      "description": "Thermostat malfunction",
      "action": "Check battery. Reset thermostat.",
      "serviceType": "hydronic"
    },
    {
      "code": "D20",
      "title": "System Shutdown",
      "severity": "URGENT",
      "description": "Safety shutdown activated",
      "action": "Check all readings. Professional service needed.",
      "serviceType": "hydronic"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Kaden Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Kaden error code database with 20+ brand-specific error codes. Find exact solutions for  systems.",
  keywords: "Kaden error codes, , heating troubleshooting, Melbourne",
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}