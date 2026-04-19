import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Brivis - Error Codes & Troubleshooting Guide Melbourne",
  description: "Brivis Gas Ducted Heating error codes, troubleshooting guide, and maintenance tips. Expert help for brivis heating systems.",
  keywords: "brivis error codes, brivis troubleshooting, brivis maintenance, gas ducted heating",
  openGraph: {
    title: "Brivis - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Brivis heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/brivis",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Brivis","slug":"brivis","systemType":"Gas Ducted Heating","commonErrors":[{"code":"OPEN","issue":"Door or cover open","solution":"Close all access covers and compartments. Reset system."},{"code":"FAULT","issue":"System fault detected","solution":"Note error details and call technician. Do not force system restart."},{"code":"COOL","issue":"System in cooling mode","solution":"Check mode settings. May be climate control switching to cool. Normal operation."},{"code":"SLEEP","issue":"System in sleep/standby","solution":"Adjust thermostat settings to heating mode. Increase temperature setpoint."}],"maintenanceTips":["SmartComfort technology optimizes efficiency - don't override frequently","Change filters when airflow reduces noticeably","Annual professional servicing essential for warranty compliance","Use Zone Plus controls to manage heating by room","Keep system setpoint within comfort range for efficiency"]};
  return <SelfCareBrandClient brand={brandData} />;
}