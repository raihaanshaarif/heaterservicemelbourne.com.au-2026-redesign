import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Mitsubishi Electric - Error Codes & Troubleshooting Guide Melbourne",
  description: "Mitsubishi Electric Heat Pump / Split System error codes, troubleshooting guide, and maintenance tips. Expert help for mitsubishi electric heating systems.",
  keywords: "mitsubishi electric error codes, mitsubishi electric troubleshooting, mitsubishi electric maintenance, heat pump / split system",
  openGraph: {
    title: "Mitsubishi Electric - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Mitsubishi Electric heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/mitsubishi-electric",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Mitsubishi Electric","slug":"mitsubishi-electric","systemType":"Heat Pump / Split System","commonErrors":[{"code":"E01","issue":"Communication error","solution":"Check wiring between indoor and outdoor units. Power cycle system."},{"code":"E03","issue":"Room temperature sensor error","solution":"Inspect sensor for blockage or damage. Ensure proper airflow."},{"code":"E04","issue":"Outdoor unit sensor error","solution":"Check outdoor unit for ice buildup or damage. Clear any obstructions."},{"code":"E06","issue":"Discharge temperature sensor error","solution":"Professional diagnosis required. Call licensed technician."}],"maintenanceTips":["Hyper-Heating technology allows operation down to -15°C","Clean indoor unit filters monthly for optimal efficiency","Ensure outdoor unit has 30cm clearance on all sides","Check refrigerant levels professionally each year","Use smart remote features to set efficient temperature schedules"]};
  return <SelfCareBrandClient brand={brandData} />;
}