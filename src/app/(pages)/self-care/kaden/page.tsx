import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Kaden - Error Codes & Troubleshooting Guide Melbourne",
  description: "Kaden District Heating / Hydronic error codes, troubleshooting guide, and maintenance tips. Expert help for kaden heating systems.",
  keywords: "kaden error codes, kaden troubleshooting, kaden maintenance, district heating / hydronic",
  openGraph: {
    title: "Kaden - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Kaden heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/kaden",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Kaden","slug":"kaden","systemType":"District Heating / Hydronic","commonErrors":[{"code":"T01","issue":"Temperature sensor fault","solution":"Check sensor connections. Verify boiler temperature."},{"code":"P01","issue":"Low system pressure","solution":"Check for leaks. Top up pressure - professional service recommended."},{"code":"E01","issue":"Ignition fault (gas boiler)","solution":"Reset boiler. Check gas supply. Call technician if persists."},{"code":"F01","issue":"Circulation pump fault","solution":"Professional service required for pump replacement."}],"maintenanceTips":["Hydro-Comfort technology: ideal for apartments and multi-unit buildings","Annual boiler servicing critical for safety and efficiency","Bleed radiators twice yearly to maintain heat distribution","System pressure check quarterly - maintain 1.5 bar","Professional annual certified service required for safety"]};
  return <SelfCareBrandClient brand={brandData} />;
}