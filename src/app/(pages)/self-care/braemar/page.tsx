import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Braemar - Error Codes & Troubleshooting Guide Melbourne",
  description: "Braemar Gas Ducted Heating error codes, troubleshooting guide, and maintenance tips. Expert help for braemar heating systems.",
  keywords: "braemar error codes, braemar troubleshooting, braemar maintenance, gas ducted heating",
  openGraph: {
    title: "Braemar - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Braemar heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/braemar",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Braemar","slug":"braemar","systemType":"Gas Ducted Heating","commonErrors":[{"code":"E1","issue":"Room thermostat sensor fault","solution":"Check thermostat connections and battery levels. Replace if defective."},{"code":"E2","issue":"Outdoor temperature sensor fault","solution":"Inspect outdoor sensor for damage. Ensure wiring connections are secure."},{"code":"E3","issue":"Blower motor fault","solution":"Verify blower motor operation. Listen for unusual noises. Call technician if non-functional."},{"code":"E5","issue":"Gas ignition fault","solution":"Reset system. Check for gas supply. DO NOT attempt to fix - call licensed technician."}],"maintenanceTips":["Replace filters every 1-2 months during heating season","Schedule professional servicing before winter","Check that outdoor unit is free from debris","Verify thermostat battery health quarterly","Ensure return air vents are not blocked"]};
  return <SelfCareBrandClient brand={brandData} />;
}