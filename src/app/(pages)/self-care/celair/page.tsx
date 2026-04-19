import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Celair",
  "slug": "celair",
  "systemType": "",
  "commonErrors": [
    {
      "code": "QC1",
      "title": "Silent-Comfort Isolation Error",
      "severity": "MEDIUM",
      "description": "Vibration isolation system fault",
      "action": "Check mounting brackets. Tighten.",
      "serviceType": "split-system"
    },
    {
      "code": "QC2",
      "title": "Temperature Sensor Error",
      "severity": "HIGH",
      "description": "Sensor malfunction",
      "action": "Clean sensor. Check wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "QC3",
      "title": "Quiet Blower Error",
      "severity": "HIGH",
      "description": "Low-noise blower malfunction",
      "action": "Clean filter. Check power.",
      "serviceType": "split-system"
    },
    {
      "code": "QC4",
      "title": "Outdoor Fan Error",
      "severity": "HIGH",
      "description": "Fan malfunction",
      "action": "Check obstruction. Clean.",
      "serviceType": "split-system"
    },
    {
      "code": "QC5",
      "title": "Low Refrigerant",
      "severity": "URGENT",
      "description": "Refrigerant loss",
      "action": "Professional leak detection.",
      "serviceType": "split-system"
    },
    {
      "code": "QC6",
      "title": "High Pressure",
      "severity": "URGENT",
      "description": "Pressure exceeds limit",
      "action": "Shut down. Check condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "QC7",
      "title": "Compressor Protection",
      "severity": "HIGH",
      "description": "Overload triggered",
      "action": "Cool for 30 minutes.",
      "serviceType": "split-system"
    },
    {
      "code": "QC8",
      "title": "Wrong Gas Type",
      "severity": "URGENT",
      "description": "Incorrect refrigerant",
      "action": "Professional evacuation.",
      "serviceType": "split-system"
    },
    {
      "code": "QC9",
      "title": "Discharge Temp High",
      "severity": "HIGH",
      "description": "Output temperature excessive",
      "action": "Clean condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "QC10",
      "title": "Outdoor Board Error",
      "severity": "HIGH",
      "description": "PCB malfunction",
      "action": "Check power connections.",
      "serviceType": "split-system"
    },
    {
      "code": "QC11",
      "title": "Remote Control Error",
      "severity": "MEDIUM",
      "description": "Remote not working",
      "action": "Replace batteries.",
      "serviceType": "split-system"
    },
    {
      "code": "QC12",
      "title": "Defrost Malfunction",
      "severity": "MEDIUM",
      "description": "Heating defrost error",
      "action": "Check outdoor ice.",
      "serviceType": "split-system"
    },
    {
      "code": "QC13",
      "title": "Mode Error",
      "severity": "LOW",
      "description": "Wrong mode selected",
      "action": "Set correct mode.",
      "serviceType": "split-system"
    },
    {
      "code": "QC14",
      "title": "Filter Alert",
      "severity": "MEDIUM",
      "description": "Air filter clogged",
      "action": "Replace filter.",
      "serviceType": "split-system"
    },
    {
      "code": "QC15",
      "title": "Outdoor Coil Freeze",
      "severity": "MEDIUM",
      "description": "Ice accumulation",
      "action": "Defrost or COOL mode.",
      "serviceType": "split-system"
    },
    {
      "code": "QC16",
      "title": "Power Supply Error",
      "severity": "HIGH",
      "description": "Electrical issue",
      "action": "Check breaker and wiring.",
      "serviceType": "split-system"
    },
    {
      "code": "QC17",
      "title": "Expansion Valve Fault",
      "severity": "HIGH",
      "description": "TXV malfunction",
      "action": "Refrigeration service.",
      "serviceType": "split-system"
    },
    {
      "code": "QC18",
      "title": "Condensate Drain Blocked",
      "severity": "HIGH",
      "description": "Drainage failure",
      "action": "Clear drain line.",
      "serviceType": "split-system"
    },
    {
      "code": "QC19",
      "title": "Silent-Comfort Noise",
      "severity": "MEDIUM",
      "description": "Unit still producing noise",
      "action": "Check isolation. Inspect mounts.",
      "serviceType": "split-system"
    },
    {
      "code": "QC20",
      "title": "Communication Failure",
      "severity": "URGENT",
      "description": "Units not communicating",
      "action": "Check cables. Power cycle.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Celair Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Celair error code database with 20+ brand-specific error codes. Find exact solutions for  systems.",
  keywords: "Celair error codes, , heating troubleshooting, Melbourne",
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}