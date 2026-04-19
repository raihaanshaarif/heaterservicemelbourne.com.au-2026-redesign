import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Rinnai - Error Codes & Troubleshooting Guide Melbourne",
  description: "Rinnai Gas Heating / Instantaneous error codes, troubleshooting guide, and maintenance tips. Expert help for rinnai heating systems.",
  keywords: "rinnai error codes, rinnai troubleshooting, rinnai maintenance, gas heating / instantaneous",
  openGraph: {
    title: "Rinnai - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Rinnai heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/rinnai",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Rinnai","slug":"rinnai","systemType":"Gas Heating / Instantaneous","commonErrors":[{"code":"01","issue":"Ignition failure","solution":"Check gas supply. Verify power. Reset and retry."},{"code":"12","issue":"Temperature sensor error","solution":"Check water temperature sensor. Verify connections."},{"code":"16","issue":"Flame failure","solution":"Shut off, wait 5 minutes, restart. Call if persists."},{"code":"25","issue":"Circulation error","solution":"Check water pressure. Verify circulation pump operating."}],"maintenanceTips":["80+ years perfecting modulating burner technology","Modulating burners adjust power output for maximum efficiency","Annual professional servicing mandatory for safety","Monitor for any gas odor - call immediately if detected","Continuous flow system requires proper water pressure maintenance"]};
  return <SelfCareBrandClient brand={brandData} />;
}