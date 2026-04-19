import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Fujitsu - Error Codes & Troubleshooting Guide Melbourne",
  description: "Fujitsu Heat Pump / Split System error codes, troubleshooting guide, and maintenance tips. Expert help for fujitsu heating systems.",
  keywords: "fujitsu error codes, fujitsu troubleshooting, fujitsu maintenance, heat pump / split system",
  openGraph: {
    title: "Fujitsu - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Fujitsu heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/fujitsu",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Fujitsu","slug":"fujitsu","systemType":"Heat Pump / Split System","commonErrors":[{"code":"U0","issue":"Outdoor Unit Defrost Operation","solution":"Normal operation in cold weather. Unit briefly stops heating to defrost coils."},{"code":"U4","issue":"High Pressure Protection","solution":"Check for blocked filters or outdoor unit obstruction. Reset system."},{"code":"U5","issue":"Control Unit Error","solution":"Check power supply and remote batteries. Restart both units."},{"code":"U9","issue":"Indoor/Outdoor Communication Error","solution":"Verify all cable connections. Restart system completely."}],"maintenanceTips":["Highest SEER ratings require minimal maintenance for efficiency","Professional installation and calibration critical for performance","Quarterly filter inspection maintains energy efficiency","Outdoor unit needs clear space for optimal airflow","Consider commercial-grade reliability for demanding applications"]};
  return <SelfCareBrandClient brand={brandData} />;
}