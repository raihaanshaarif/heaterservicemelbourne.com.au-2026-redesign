import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "LG - Error Codes & Troubleshooting Guide Melbourne",
  description: "LG Heat Pump / Split System error codes, troubleshooting guide, and maintenance tips. Expert help for lg heating systems.",
  keywords: "lg error codes, lg troubleshooting, lg maintenance, heat pump / split system",
  openGraph: {
    title: "LG - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for LG heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/lg",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"LG","slug":"lg","systemType":"Heat Pump / Split System","commonErrors":[{"code":"E1","issue":"Indoor temperature sensor error","solution":"Check sensor location and power connection. Ensure no air leaks."},{"code":"C1","issue":"Communication error","solution":"Power cycle both units. Check remote battery and connection."},{"code":"CH3","issue":"Indoor unit error","solution":"Restart system. Check power supply and circuit breaker."},{"code":"CH6","issue":"Outdoor pressure error","solution":"Professional service needed. Call licensed technician immediately."}],"maintenanceTips":["AI temperature prediction learns your preferences - accuracy improves over time","Dual Inverter Compressor provides 40% energy savings","Check smartphone app regularly for energy consumption tracking","Professional filter service recommended quarterly","Use WiFi connectivity for scheduling and remote monitoring"]};
  return <SelfCareBrandClient brand={brandData} />;
}