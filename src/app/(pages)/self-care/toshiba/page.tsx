import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Toshiba",
  "slug": "toshiba",
  "systemType": "",
  "commonErrors": [
    {
      "code": "F1",
      "title": "ForceFlow Sensor Error",
      "severity": "HIGH",
      "description": "ForceFlow technology sensor malfunction",
      "action": "Clean sensor area. Power cycle unit.",
      "serviceType": "split-system"
    },
    {
      "code": "F2",
      "title": "Temperature Sensor Fault",
      "severity": "HIGH",
      "description": "Temperature sensor error",
      "action": "Check connections. Clean sensor.",
      "serviceType": "split-system"
    },
    {
      "code": "F3",
      "title": "Indoor Blower Error",
      "severity": "HIGH",
      "description": "Indoor fan not operating",
      "action": "Clean filter. Check motor power.",
      "serviceType": "split-system"
    },
    {
      "code": "F4",
      "title": "Outdoor Fan Error",
      "severity": "HIGH",
      "description": "Outdoor fan failure",
      "action": "Check for obstruction. Clean unit.",
      "serviceType": "split-system"
    },
    {
      "code": "F5",
      "title": "Refrigerant Low",
      "severity": "URGENT",
      "description": "Critical refrigerant loss",
      "action": "Professional service for leak detection.",
      "serviceType": "split-system"
    },
    {
      "code": "F6",
      "title": "High Pressure Fault",
      "severity": "URGENT",
      "description": "System pressure exceeds limit",
      "action": "Shut down immediately. Check condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "F7",
      "title": "Compressor Protection",
      "severity": "HIGH",
      "description": "Compressor overload",
      "action": "Cool for 30 mins. Check airflow.",
      "serviceType": "split-system"
    },
    {
      "code": "F8",
      "title": "Wrong Refrigerant Gas",
      "severity": "URGENT",
      "description": "Incorrect refrigerant type",
      "action": "Professional evacuation and recharge.",
      "serviceType": "split-system"
    },
    {
      "code": "F9",
      "title": "Discharge Temperature",
      "severity": "HIGH",
      "description": "Output temperature too high",
      "action": "Clean condenser. Check fan.",
      "serviceType": "split-system"
    },
    {
      "code": "F10",
      "title": "Outdoor Board Fault",
      "severity": "HIGH",
      "description": "Outdoor PCB malfunction",
      "action": "Check power supply and wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "F11",
      "title": "Remote Signal Loss",
      "severity": "MEDIUM",
      "description": "Remote control not working",
      "action": "Replace batteries. Check sensor.",
      "serviceType": "split-system"
    },
    {
      "code": "F12",
      "title": "Defrost Error",
      "severity": "MEDIUM",
      "description": "Heating defrost malfunction",
      "action": "Check outdoor coil ice.",
      "serviceType": "split-system"
    },
    {
      "code": "F13",
      "title": "Mode Error",
      "severity": "LOW",
      "description": "Incorrect mode selected",
      "action": "Set correct operating mode.",
      "serviceType": "split-system"
    },
    {
      "code": "F14",
      "title": "Filter Alert",
      "severity": "MEDIUM",
      "description": "Air filter needs replacement",
      "action": "Replace filter immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "F15",
      "title": "Outdoor Freeze",
      "severity": "MEDIUM",
      "description": "Outdoor coil frozen",
      "action": "Defrost mode or COOL mode.",
      "serviceType": "split-system"
    },
    {
      "code": "F16",
      "title": "Electrical Fault",
      "severity": "HIGH",
      "description": "Power supply issue",
      "action": "Check breaker and wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "F17",
      "title": "TXV Malfunction",
      "severity": "HIGH",
      "description": "Valve malfunction",
      "action": "Professional refrigeration service.",
      "serviceType": "split-system"
    },
    {
      "code": "F18",
      "title": "Drain Line Blocked",
      "severity": "HIGH",
      "description": "Condensate drainage failure",
      "action": "Clear drain line immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "F19",
      "title": "Abnormal Sound",
      "severity": "MEDIUM",
      "description": "Unusual noises from unit",
      "action": "Professional inspection recommended.",
      "serviceType": "split-system"
    },
    {
      "code": "F20",
      "title": "Communication Error",
      "severity": "URGENT",
      "description": "Indoor/outdoor communication lost",
      "action": "Check control cable. Power reset.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Toshiba Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Toshiba error code database with 20+ brand-specific error codes. Find exact solutions for  systems.",
  keywords: "Toshiba error codes, , heating troubleshooting, Melbourne",
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}