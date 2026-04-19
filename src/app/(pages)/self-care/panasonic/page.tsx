import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Panasonic - Error Codes & Troubleshooting Guide Melbourne",
  description: "Panasonic Heat Pump / Split System error codes, troubleshooting guide, and maintenance tips. Expert help for panasonic heating systems.",
  keywords: "panasonic error codes, panasonic troubleshooting, panasonic maintenance, heat pump / split system",
  openGraph: {
    title: "Panasonic - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Panasonic heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/panasonic",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Panasonic","slug":"panasonic","systemType":"Heat Pump / Split System","commonErrors":[{"code":"H00","issue":"Operation code","solution":"Normal operation indicator. Check setpoint temperature if concerned."},{"code":"H01","issue":"Temperature sensor error","solution":"Check room temperature sensor for obstruction or damage."},{"code":"H02","issue":"Outdoor unit error","solution":"Verify outdoor unit power connection. Restart system."},{"code":"H03","issue":"Communication error between units","solution":"Check all wiring connections. Ensure units are powered on."}],"maintenanceTips":["Nanoe-X air purification runs during operation - very beneficial","Monthly filter cleaning recommended for optimal performance","Quiet operation is normal - extremely low noise design","Professional service annually to maintain warranty and efficiency","Cold weather operation optimized - no need to switch to second unit"]};
  return <SelfCareBrandClient brand={brandData} />;
}