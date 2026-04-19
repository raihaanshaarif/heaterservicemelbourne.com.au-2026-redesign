import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Haier - Error Codes & Troubleshooting Guide Melbourne",
  description: "Haier Heat Pump / Split System error codes, troubleshooting guide, and maintenance tips. Expert help for haier heating systems.",
  keywords: "haier error codes, haier troubleshooting, haier maintenance, heat pump / split system",
  openGraph: {
    title: "Haier - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Haier heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/haier",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Haier","slug":"haier","systemType":"Heat Pump / Split System","commonErrors":[{"code":"E1","issue":"Indoor sensor error","solution":"Check room temperature sensor. Clean if dusty."},{"code":"E2","issue":"Outdoor sensor error","solution":"Verify outdoor unit power. Check sensor connections."},{"code":"E3","issue":"Unit communication error","solution":"Restart system. Check remote battery. Verify wiring."},{"code":"E5 / E6","issue":"Compressor error","solution":"Professional diagnosis required. Call licensed technician."}],"maintenanceTips":["Most affordable premium brand - excellent value proposition","Smart IoT controls enable remote management via smartphone","Bi-annual filter service recommended for optimal performance","Professional maintenance annually protects investment","WiFi connectivity allows monitoring from anywhere"]};
  return <SelfCareBrandClient brand={brandData} />;
}