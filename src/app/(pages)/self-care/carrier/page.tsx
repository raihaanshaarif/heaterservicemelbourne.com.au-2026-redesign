import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Carrier - Error Codes & Troubleshooting Guide Melbourne",
  description: "Carrier Heat Pump / Split System error codes, troubleshooting guide, and maintenance tips. Expert help for carrier heating systems.",
  keywords: "carrier error codes, carrier troubleshooting, carrier maintenance, heat pump / split system",
  openGraph: {
    title: "Carrier - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Carrier heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/carrier",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Carrier","slug":"carrier","systemType":"Heat Pump / Split System","commonErrors":[{"code":"10","issue":"Low pressure alarm","solution":"Check for refrigerant leaks. Professional service required."},{"code":"20","issue":"High pressure alarm","solution":"Verify outdoor unit airflow. Check for blocked filters."},{"code":"65","issue":"Communication Error","solution":"Check all wiring. Restart both indoor and outdoor units."},{"code":"71","issue":"Indoor Unit Error","solution":"Reset system. Check power connections and circuit breaker."}],"maintenanceTips":["Commercial-grade reliability ensures years of dependable heating","Infinity Series offers smart diagnostics through smartphone app","Annual professional servicing maintains 100+ year pedigree quality","Comfort Node Control allows precise zone management","Professional installation critical for warranty protection"]};
  return <SelfCareBrandClient brand={brandData} />;
}