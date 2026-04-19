import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Braemar",
  "slug": "braemar",
  "systemType": "",
  "commonErrors": [
    {
      "code": "E1",
      "title": "PCB Malfunction",
      "severity": "URGENT",
      "description": "Main circuit board failure or corruption",
      "action": "Turn off system immediately. Contact Braemar technician for board replacement.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E2",
      "title": "Gas Valve Error",
      "severity": "URGENT",
      "description": "Gas valve not responding or stuck position",
      "action": "Check gas supply at meter. Call service urgently.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E3",
      "title": "Ignition System Failure",
      "severity": "URGENT",
      "description": "Pilot light or igniter not functioning",
      "action": "Check pilot light access. Professional repair needed if no flame.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E4",
      "title": "Temperature Sensor Fault",
      "severity": "HIGH",
      "description": "Indoor/outdoor temperature sensor malfunction",
      "action": "Clean sensor. If error persists, sensor replacement required.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E5",
      "title": "Flame Detection Error",
      "severity": "HIGH",
      "description": "Flame rod not detecting combustion",
      "action": "System shutdown for safety. Call Braemar technician immediately.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E6",
      "title": "Blower Motor Issue",
      "severity": "HIGH",
      "description": "Main blower motor not operating",
      "action": "Check filter status. Verify motor power. May need replacement.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E7",
      "title": "Pressure Switch Fault",
      "severity": "HIGH",
      "description": "Vent pressure switch not triggering",
      "action": "Inspect ductwork for blockages. Clear obstructions.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E8",
      "title": "Draft Inducer Malfunction",
      "severity": "HIGH",
      "description": "Draft inducer motor failed",
      "action": "Check vent for ice/snow blockage. Professional inspection needed.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E9",
      "title": "Thermal Limit Activated",
      "severity": "MEDIUM",
      "description": "System overheat protection triggered",
      "action": "Allow cooling 30 mins. Check for blocked air returns.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E10",
      "title": "Gas Supply Low",
      "severity": "HIGH",
      "description": "Insufficient gas pressure detected",
      "action": "Contact gas supplier. Verify line pressure.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E11",
      "title": "Thermostat Communication",
      "severity": "MEDIUM",
      "description": "Thermostat not communicating with furnace",
      "action": "Replace thermostat batteries. Check wiring connections.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E12",
      "title": "Transformer Fault",
      "severity": "HIGH",
      "description": "24V transformer failure",
      "action": "Power cycle system. Transformer replacement needed.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E13",
      "title": "Capacitor Failure",
      "severity": "HIGH",
      "description": "Start or run capacitor damaged",
      "action": "Professional repair required. Do not attempt DIY.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E14",
      "title": "Motor Bearing Noise",
      "severity": "MEDIUM",
      "description": "Blower motor making grinding/squealing",
      "action": "Check lubrication. Motor replacement may be needed.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E15",
      "title": "Air Filter Clogged",
      "severity": "MEDIUM",
      "description": "Furnace filter severely restricted",
      "action": "Replace furnace filter immediately with correct MERV.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E16",
      "title": "Ductwork Blockage",
      "severity": "MEDIUM",
      "description": "Supply/return ductwork blocked",
      "action": "Check all vents and registers. Remove obstructions.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E17",
      "title": "Cycle Rate High",
      "severity": "MEDIUM",
      "description": "System cycling on/off frequently",
      "action": "Check thermostat. May indicate oversized system.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E18",
      "title": "Limit Switch Stuck",
      "severity": "MEDIUM",
      "description": "Temperature limit switch malfunction",
      "action": "Allow cooling. Check airflow. May need replacement.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E19",
      "title": "Gas Smell Detected",
      "severity": "URGENT",
      "description": "Gas odor near furnace/vents",
      "action": "Leave home immediately. Call gas company from outside.",
      "serviceType": "gas-ducted"
    },
    {
      "code": "E20",
      "title": "System Lockout",
      "severity": "URGENT",
      "description": "Safety lockout after multiple ignition failures",
      "action": "System in safety mode. Professional reset required.",
      "serviceType": "gas-ducted"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Braemar Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Braemar error code database with 20+ brand-specific error codes. Find exact solutions for  systems.",
  keywords: "Braemar error codes, , heating troubleshooting, Melbourne",
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}