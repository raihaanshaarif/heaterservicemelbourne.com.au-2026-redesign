import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Mitsubishi Electric",
  "slug": "mitsubishi-electric",
  "systemType": "",
  "commonErrors": [
    {
      "code": "P1",
      "title": "Indoor PCB Error",
      "severity": "HIGH",
      "description": "Indoor control board malfunction",
      "action": "Power cycle units together. Wait 5 minutes.",
      "serviceType": "split-system"
    },
    {
      "code": "P2",
      "title": "Outdoor PCB Error",
      "severity": "HIGH",
      "description": "Outdoor compressor board fault",
      "action": "Check power supply. Inspect control cable.",
      "serviceType": "split-system"
    },
    {
      "code": "P3",
      "title": "Temperature Sensor Fault",
      "severity": "HIGH",
      "description": "Indoor/outdoor temperature sensor error",
      "action": "Clean sensor. Power cycle. Contact service if continues.",
      "serviceType": "split-system"
    },
    {
      "code": "P4",
      "title": "Indoor Fan Motor Error",
      "severity": "HIGH",
      "description": "Indoor blower malfunction",
      "action": "Clean filters. Verify power. Check connectors.",
      "serviceType": "split-system"
    },
    {
      "code": "P5",
      "title": "Outdoor Fan Motor Error",
      "severity": "HIGH",
      "description": "Outdoor fan not running",
      "action": "Check for ice/debris. Clean fan area.",
      "serviceType": "split-system"
    },
    {
      "code": "P6",
      "title": "Refrigerant Pressure Low",
      "severity": "URGENT",
      "description": "Critical refrigerant loss",
      "action": "Professional evacuation and recharge needed.",
      "serviceType": "split-system"
    },
    {
      "code": "P7",
      "title": "High Discharge Pressure",
      "severity": "URGENT",
      "description": "Compressor pressure exceeds limits",
      "action": "Shut down. Check condenser fan and coil.",
      "serviceType": "split-system"
    },
    {
      "code": "P8",
      "title": "Compressor Overload",
      "severity": "HIGH",
      "description": "Compressor protection activated",
      "action": "Allow 30 min cooling. Check airflow.",
      "serviceType": "split-system"
    },
    {
      "code": "P9",
      "title": "Incorrect Refrigerant",
      "severity": "URGENT",
      "description": "Wrong refrigerant type detected",
      "action": "Professional evacuation and correct recharge.",
      "serviceType": "split-system"
    },
    {
      "code": "P10",
      "title": "Discharge Temp High",
      "severity": "HIGH",
      "description": "Compressor outlet temp excessive",
      "action": "Verify outdoor airflow. Clean condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "P11",
      "title": "Remote Control Error",
      "severity": "MEDIUM",
      "description": "Remote signal not received",
      "action": "Replace batteries. Point at unit. Check sensor.",
      "serviceType": "split-system"
    },
    {
      "code": "P12",
      "title": "Defrost Malfunction",
      "severity": "MEDIUM",
      "description": "Heating defrost not working",
      "action": "Check outdoor coil ice. Manual defrost may help.",
      "serviceType": "split-system"
    },
    {
      "code": "P13",
      "title": "Mode Mismatch",
      "severity": "LOW",
      "description": "Wrong mode selected",
      "action": "Set thermostat to correct mode (COOL/HEAT).",
      "serviceType": "split-system"
    },
    {
      "code": "P14",
      "title": "Indoor Filter Dirty",
      "severity": "MEDIUM",
      "description": "Air filter needs attention",
      "action": "Clean mesh or replace disposable filter.",
      "serviceType": "split-system"
    },
    {
      "code": "P15",
      "title": "Outdoor Coil Iced",
      "severity": "MEDIUM",
      "description": "Ice accumulation on outdoor coil",
      "action": "Run defrost or switch to COOL.",
      "serviceType": "split-system"
    },
    {
      "code": "P16",
      "title": "Power Supply Error",
      "severity": "HIGH",
      "description": "Voltage instability",
      "action": "Check breaker. Verify dedicated circuit.",
      "serviceType": "split-system"
    },
    {
      "code": "P17",
      "title": "Expansion Valve Issue",
      "severity": "HIGH",
      "description": "TXV malfunction",
      "action": "Refrigeration service required immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "P18",
      "title": "Water Leaking",
      "severity": "HIGH",
      "description": "Condensate drain blocked",
      "action": "Clean drain line. Check outdoor placement.",
      "serviceType": "split-system"
    },
    {
      "code": "P19",
      "title": "Outdoor Unit Noise",
      "severity": "MEDIUM",
      "description": "Unusual sounds from outdoor unit",
      "action": "Check components. Professional inspection recommended.",
      "serviceType": "split-system"
    },
    {
      "code": "P20",
      "title": "Communication Failure",
      "severity": "URGENT",
      "description": "Units cannot communicate",
      "action": "Check control cable. Reset system completely.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Mitsubishi Electric Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Mitsubishi Electric error code database with 20+ brand-specific error codes. Find exact solutions for  systems.",
  keywords: "Mitsubishi Electric error codes, , heating troubleshooting, Melbourne",
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}