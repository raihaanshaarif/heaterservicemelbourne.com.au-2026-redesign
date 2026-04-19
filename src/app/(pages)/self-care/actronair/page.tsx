import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "ActronAir - Error Codes & Troubleshooting Guide Melbourne",
  description: "ActronAir Split System / Zone Control error codes, troubleshooting guide, and maintenance tips. Expert help for actronair heating systems.",
  keywords: "actronair error codes, actronair troubleshooting, actronair maintenance, split system / zone control",
  openGraph: {
    title: "ActronAir - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for ActronAir heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/actronair",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"ActronAir","slug":"actronair","systemType":"Split System / Zone Control","commonErrors":[{"code":"E1","issue":"Sensor error","solution":"Check thermostat sensor placement and connections."},{"code":"E2","issue":"Zone control error","solution":"Verify all zone dampers moving. Check control wiring."},{"code":"E4","issue":"Communication error","solution":"Restart system. Check remote batteries. Verify connections."},{"code":"E5","issue":"Compressor error","solution":"Professional service required. Call immediately."}],"maintenanceTips":["SHX Inverter technology - optimized for Australian conditions","Zone control allows heating only occupied rooms - energy efficient","50 years of local expertise - local support advantage","Quarterly damper inspection for zone balance","Annual professional service maintains Australian warranty"]};
  return <SelfCareBrandClient brand={brandData} />;
}