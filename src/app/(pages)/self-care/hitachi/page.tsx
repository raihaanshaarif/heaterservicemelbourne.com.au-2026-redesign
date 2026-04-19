import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Hitachi - Error Codes & Troubleshooting Guide Melbourne",
  description: "Hitachi Heat Pump / Split System error codes, troubleshooting guide, and maintenance tips. Expert help for hitachi heating systems.",
  keywords: "hitachi error codes, hitachi troubleshooting, hitachi maintenance, heat pump / split system",
  openGraph: {
    title: "Hitachi - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Hitachi heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/hitachi",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Hitachi","slug":"hitachi","systemType":"Heat Pump / Split System","commonErrors":[{"code":"01","issue":"Operation","solution":"Normal operation code. Unit actively heating."},{"code":"02","issue":"Air thermo sensor error","solution":"Check sensor for damage or dust accumulation."},{"code":"03","issue":"Pipe temperature sensor error","solution":"Inspect for damage or blockage. Call professional if persists."},{"code":"06","issue":"Liquid level error","solution":"Professional service needed immediately for refrigerant check."}],"maintenanceTips":["Twin Rotary Compressor reduces vibration - extremely quiet","Advanced inverter technology provides precise temperature control","Monthly filter cleaning maintains optimal efficiency","Professional annual service essential for warranty","Outdoor unit placement critical - ensure adequate clearance"]};
  return <SelfCareBrandClient brand={brandData} />;
}