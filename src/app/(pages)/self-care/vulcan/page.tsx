import { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

const brand = {
  "name": "Vulcan",
  "slug": "vulcan",
  "systemType": "",
  "commonErrors": [
    {
      "code": "V1",
      "title": "QuickHeat Startup Error",
      "severity": "MEDIUM",
      "description": "Rapid heat generation system fault",
      "action": "Allow normal warmup time. Check supply.",
      "serviceType": "split-system"
    },
    {
      "code": "V2",
      "title": "Temperature Sensor Fault",
      "severity": "HIGH",
      "description": "Sensor malfunction",
      "action": "Clean sensor. Check connections.",
      "serviceType": "split-system"
    },
    {
      "code": "V3",
      "title": "Blower Motor Error",
      "severity": "HIGH",
      "description": "Indoor fan not running",
      "action": "Clean filter. Verify power supply.",
      "serviceType": "split-system"
    },
    {
      "code": "V4",
      "title": "Outdoor Fan Error",
      "severity": "HIGH",
      "description": "Condenser fan malfunction",
      "action": "Check obstruction. Clean unit.",
      "serviceType": "split-system"
    },
    {
      "code": "V5",
      "title": "Refrigerant Leak",
      "severity": "URGENT",
      "description": "Refrigerant loss detected",
      "action": "Professional leak detection.",
      "serviceType": "split-system"
    },
    {
      "code": "V6",
      "title": "High Pressure Error",
      "severity": "URGENT",
      "description": "Pressure exceeds limit",
      "action": "Shut down. Check condenser.",
      "serviceType": "split-system"
    },
    {
      "code": "V7",
      "title": "Compressor Overload",
      "severity": "HIGH",
      "description": "Protection triggered",
      "action": "Cool for 30 minutes.",
      "serviceType": "split-system"
    },
    {
      "code": "V8",
      "title": "Wrong Gas Type",
      "severity": "URGENT",
      "description": "Incorrect refrigerant",
      "action": "Professional service immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "V9",
      "title": "Discharge Temp High",
      "severity": "HIGH",
      "description": "Output temperature excessive",
      "action": "Clean condenser. Check flow.",
      "serviceType": "split-system"
    },
    {
      "code": "V10",
      "title": "Outdoor Board Fault",
      "severity": "HIGH",
      "description": "PCB malfunction",
      "action": "Check power connections.",
      "serviceType": "split-system"
    },
    {
      "code": "V11",
      "title": "Remote Error",
      "severity": "MEDIUM",
      "description": "Remote not working",
      "action": "Replace batteries.",
      "serviceType": "split-system"
    },
    {
      "code": "V12",
      "title": "Defrost Malfunction",
      "severity": "MEDIUM",
      "description": "Winter heating defrost error",
      "action": "Check outdoor ice.",
      "serviceType": "split-system"
    },
    {
      "code": "V13",
      "title": "Mode Error",
      "severity": "LOW",
      "description": "Wrong mode selected",
      "action": "Set correct mode.",
      "serviceType": "split-system"
    },
    {
      "code": "V14",
      "title": "Filter Alert",
      "severity": "MEDIUM",
      "description": "Filter needs replacement",
      "action": "Replace immediately.",
      "serviceType": "split-system"
    },
    {
      "code": "V15",
      "title": "Outdoor Freeze",
      "severity": "MEDIUM",
      "description": "Coil icing",
      "action": "Defrost mode.",
      "serviceType": "split-system"
    },
    {
      "code": "V16",
      "title": "Power Error",
      "severity": "HIGH",
      "description": "Electrical problem",
      "action": "Check breaker.",
      "serviceType": "split-system"
    },
    {
      "code": "V17",
      "title": "Valve Error",
      "severity": "HIGH",
      "description": "Expansion valve fault",
      "action": "Refrigeration service.",
      "serviceType": "split-system"
    },
    {
      "code": "V18",
      "title": "Drain Blocked",
      "severity": "HIGH",
      "description": "Condensate drainage failed",
      "action": "Clear drain line.",
      "serviceType": "split-system"
    },
    {
      "code": "V19",
      "title": "Noise",
      "severity": "MEDIUM",
      "description": "Abnormal sounds",
      "action": "Professional inspection.",
      "serviceType": "split-system"
    },
    {
      "code": "V20",
      "title": "Communication Error",
      "severity": "URGENT",
      "description": "Units not communicating",
      "action": "Check cables. Power cycle.",
      "serviceType": "split-system"
    }
  ],
  "maintenanceTips": []
};

export const metadata: Metadata = {
  title: "Vulcan Error Codes & Troubleshooting | Melbourne Heating Guide",
  description: "Comprehensive Vulcan error code database with troubleshooting guides for gas ducted heating systems in Melbourne. Find solutions, maintenance tips and when to call a technician.",
  keywords: "Vulcan error codes, Vulcan troubleshooting, Vulcan gas ducted heating Melbourne, Vulcan heater fault codes, Vulcan error code guide",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/self-care/vulcan",
  },
  openGraph: {
    title: "Vulcan Error Codes & Troubleshooting Guide | Melbourne",
    description: "Fix your Vulcan gas ducted heating system with our comprehensive error code database and troubleshooting guide. Expert solutions for Melbourne homeowners.",
    url: "https://heaterservicemelbourne.com.au/self-care/vulcan",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function BrandSelfCarePage() {
  return <SelfCareBrandClient brand={brand} />;
}