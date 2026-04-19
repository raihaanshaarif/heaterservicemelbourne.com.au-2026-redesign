import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Toshiba - Error Codes & Troubleshooting Guide Melbourne",
  description: "Toshiba Heat Pump / Split System error codes, troubleshooting guide, and maintenance tips. Expert help for toshiba heating systems.",
  keywords: "toshiba error codes, toshiba troubleshooting, toshiba maintenance, heat pump / split system",
  openGraph: {
    title: "Toshiba - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Toshiba heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/toshiba",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Toshiba","slug":"toshiba","systemType":"Heat Pump / Split System","commonErrors":[{"code":"E01","issue":"Unit Communication Failure","solution":"Check power to both units. Verify remote batteries. Restart system."},{"code":"E02","issue":"Temperature Sensor Error","solution":"Inspect sensor for damage or dust. Ensure proper ambient air circulation."},{"code":"E03","issue":"Defrost Malfunction","solution":"Normal in cold weather but persistent errors need professional service."},{"code":"H00","issue":"Heating Mode Active","solution":"Normal operation indicator - unit is actively heating."}],"maintenanceTips":["ForceFlow technology powerful in Australian cold winters","Monthly filter changes recommended during heating season","Compact design ideal for space-constrained installations","Professional service every 12 months for peak performance","Outdoor unit needs protection from extreme weather"]};
  return <SelfCareBrandClient brand={brandData} />;
}