import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Breezair",
  "slug": "breezair",
  "systemType": "",
  "commonErrors": [
    {
      "code": "EV1",
      "title": "Evaporative Pad Saturation",
      "severity": "MEDIUM",
      "description": "Cooling pad mineral buildup",
      "action": "Replace pads before season starts.",
      "serviceType": "split-system"
    },
    {
      "code": "EV2",
      "title": "Water Pump Error",
      "severity": "HIGH",
      "description": "Circulation pump not running",
      "action": "Check power supply. Clear strainer.",
      "serviceType": "split-system"
    },
    {
      "code": "EV3",
      "title": "Fan Motor Error",
      "severity": "HIGH",
      "description": "Main fan not operating",
      "action": "Check power. Verify motor rotation.",
      "serviceType": "split-system"
    },
    {
      "code": "EV4",
      "title": "Water Supply Error",
      "severity": "URGENT",
      "description": "No water supply to system",
      "action": "Check inlet valve. Verify water line.",
      "serviceType": "split-system"
    },
    {
      "code": "EV5",
      "title": "Temperature Sensor Fault",
      "severity": "HIGH",
      "description": "Temperature detection error",
      "action": "Clean sensor area. Check wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "EV6",
      "title": "Humidity Sensor Error",
      "severity": "HIGH",
      "description": "Humidity detection malfunction",
      "action": "Check sensor connections.",
      "serviceType": "split-system"
    },
    {
      "code": "EV7",
      "title": "Pad Bypass Valve Stuck",
      "severity": "MEDIUM",
      "description": "Economizer valve not working",
      "action": "Check valve mechanism. May need cleaning.",
      "serviceType": "split-system"
    },
    {
      "code": "EV8",
      "title": "Ductwork Moisture",
      "severity": "MEDIUM",
      "description": "Condensation in ducts detected",
      "action": "Check insulation. Reduce humidity.",
      "serviceType": "split-system"
    },
    {
      "code": "EV9",
      "title": "Hard Water Deposit",
      "severity": "MEDIUM",
      "description": "Mineral scaling in lines",
      "action": "Flush system. Water treatment needed.",
      "serviceType": "split-system"
    },
    {
      "code": "EV10",
      "title": "Drain Line Blocked",
      "severity": "HIGH",
      "description": "Condensate drainage obstructed",
      "action": "Clear drain line immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "EV11",
      "title": "Mold Growth",
      "severity": "MEDIUM",
      "description": "Biological growth in pads",
      "action": "Pad replacement. Water treatment.",
      "serviceType": "split-system"
    },
    {
      "code": "EV12",
      "title": "Roof Mounting Issue",
      "severity": "HIGH",
      "description": "Unit stability or seal problem",
      "action": "Check mounting bolts. Inspect seals.",
      "serviceType": "split-system"
    },
    {
      "code": "EV13",
      "title": "Winter Mode Error",
      "severity": "MEDIUM",
      "description": "Heating function malfunction",
      "action": "Check heating element power.",
      "serviceType": "split-system"
    },
    {
      "code": "EV14",
      "title": "Filter Bypass",
      "severity": "MEDIUM",
      "description": "Air filter effectiveness reduced",
      "action": "Replace pleated filter section.",
      "serviceType": "split-system"
    },
    {
      "code": "EV15",
      "title": "Trickle Water",
      "severity": "MEDIUM",
      "description": "Water leaking from case",
      "action": "Check pan seals. Tighten connections.",
      "serviceType": "split-system"
    },
    {
      "code": "EV16",
      "title": "Noise from Unit",
      "severity": "MEDIUM",
      "description": "Vibration or rattling sounds",
      "action": "Check mounting. Tighten components.",
      "serviceType": "split-system"
    },
    {
      "code": "EV17",
      "title": "Control Board Error",
      "severity": "HIGH",
      "description": "Main controller malfunction",
      "action": "Power cycle system.",
      "serviceType": "split-system"
    },
    {
      "code": "EV18",
      "title": "Thermostat Communication",
      "severity": "MEDIUM",
      "description": "Thermostat not responding",
      "action": "Check batteries. Verify connection.",
      "serviceType": "split-system"
    },
    {
      "code": "EV19",
      "title": "Remote Control Error",
      "severity": "MEDIUM",
      "description": "Remote not working",
      "action": "Replace batteries. Check signal.",
      "serviceType": "split-system"
    },
    {
      "code": "EV20",
      "title": "System Shutdown",
      "severity": "URGENT",
      "description": "Unexpected system stoppage",
      "action": "Check all indicators. Professional service.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Breezair Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Breezair error code database with 20+ brand-specific error codes. Find exact solutions for  systems.",
  keywords: "Breezair error codes, , heating troubleshooting, Melbourne",
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}