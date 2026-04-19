import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Samsung - Error Codes & Troubleshooting Guide Melbourne",
  description: "Samsung Heat Pump / Split System error codes, troubleshooting guide, and maintenance tips. Expert help for samsung heating systems.",
  keywords: "samsung error codes, samsung troubleshooting, samsung maintenance, heat pump / split system",
  openGraph: {
    title: "Samsung - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Samsung heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/samsung",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Samsung","slug":"samsung","systemType":"Heat Pump / Split System","commonErrors":[{"code":"E01","issue":"Communication error","solution":"Check wireless connection between units. Restart system."},{"code":"E02","issue":"Temperature sensor error","solution":"Reinstall sensor firmly. Check for dust accumulation."},{"code":"C01","issue":"Indoor PCB error","solution":"Power cycle system. Check all electrical connections."},{"code":"Ch3","issue":"Outdoor unit error","solution":"Verify outdoor unit is receiving power. Check circuit breaker."}],"maintenanceTips":["WindFree technology eliminates cold drafts - ideal for comfort","SmartThings integration enables voice control compatibility","Filter check required every 2 weeks for optimal performance","Professional annual maintenance maintains warranty","Smartphone notifications alert you to maintenance needs"]};
  return <SelfCareBrandClient brand={brandData} />;
}