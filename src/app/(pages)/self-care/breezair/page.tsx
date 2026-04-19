import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Breezair - Error Codes & Troubleshooting Guide Melbourne",
  description: "Breezair Evaporative Heating / Hybrid error codes, troubleshooting guide, and maintenance tips. Expert help for breezair heating systems.",
  keywords: "breezair error codes, breezair troubleshooting, breezair maintenance, evaporative heating / hybrid",
  openGraph: {
    title: "Breezair - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Breezair heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/breezair",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Breezair","slug":"breezair","systemType":"Evaporative Heating / Hybrid","commonErrors":[{"code":"L1","issue":"Low water level","solution":"Check water supply. Top up reservoir. Verify supply line."},{"code":"P1","issue":"Circulation pump error","solution":"Restart system. Check water flow. Professional service if continues."},{"code":"M1","issue":"Motor error","solution":"Check fan operation. Listen for unusual sounds. Call if not running."},{"code":"E1","issue":"Sensor / Control error","solution":"Power cycle system. Reset if needed. Professional service recommended."}],"maintenanceTips":["Unique evaporative-heating hybrid perfect for dry Australian climate","Pre-season water system flushing essential for reliability","Water quality important - use soft water when possible","Quarterly filter and pad inspection during operation","Professional annual service critical for seasonal readiness"]};
  return <SelfCareBrandClient brand={brandData} />;
}