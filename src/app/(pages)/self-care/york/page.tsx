import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "York - Error Codes & Troubleshooting Guide Melbourne",
  description: "York Heat Pump / Split System error codes, troubleshooting guide, and maintenance tips. Expert help for york heating systems.",
  keywords: "york error codes, york troubleshooting, york maintenance, heat pump / split system",
  openGraph: {
    title: "York - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for York heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/york",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"York","slug":"york","systemType":"Heat Pump / Split System","commonErrors":[{"code":"10","issue":"Low pressure","solution":"Check for leaks. Professional service needed."},{"code":"20","issue":"High pressure","solution":"Check outdoor unit airflow. Clear any blockages."},{"code":"60","issue":"System fault","solution":"Note error code. Call professional service immediately."},{"code":"CC","issue":"Communication error","solution":"Verify all connections. Restart both units."}],"maintenanceTips":["Commercial HVAC engineering adapted for residential reliability","70+ years of commercial expertise ensures durability","Affinity Series offers Sensible Control for predictable comfort","Professional annual maintenance critical for performance","Outdoor unit placement and clearance critical for efficiency"]};
  return <SelfCareBrandClient brand={brandData} />;
}