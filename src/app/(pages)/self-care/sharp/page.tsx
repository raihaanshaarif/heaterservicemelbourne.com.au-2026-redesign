import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Sharp - Error Codes & Troubleshooting Guide Melbourne",
  description: "Sharp Heat Pump / Split System error codes, troubleshooting guide, and maintenance tips. Expert help for sharp heating systems.",
  keywords: "sharp error codes, sharp troubleshooting, sharp maintenance, heat pump / split system",
  openGraph: {
    title: "Sharp - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Sharp heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/sharp",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Sharp","slug":"sharp","systemType":"Heat Pump / Split System","commonErrors":[{"code":"H1","issue":"High pressure","solution":"Check outdoor unit for blockage. Verify airflow."},{"code":"L1","issue":"Low pressure","solution":"Professional service needed to check refrigerant levels."},{"code":"F1","issue":"Sensor error","solution":"Check indoor temperature sensor for damage or obstruction."},{"code":"P1","issue":"Communication error","solution":"Restart system. Check all wiring connections."}],"maintenanceTips":["Plasmacluster Ion technology sanitizes air - health benefit","R32 refrigerant environmentally friendly and efficient","Monthly filter cleaning maintains air quality benefits","Professional service annually for peak performance","Usage of ion technology requires slightly more frequent service"]};
  return <SelfCareBrandClient brand={brandData} />;
}