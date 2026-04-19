import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Vulcan - Error Codes & Troubleshooting Guide Melbourne",
  description: "Vulcan Ductless / Wall-Mounted error codes, troubleshooting guide, and maintenance tips. Expert help for vulcan heating systems.",
  keywords: "vulcan error codes, vulcan troubleshooting, vulcan maintenance, ductless / wall-mounted",
  openGraph: {
    title: "Vulcan - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Vulcan heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/vulcan",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Vulcan","slug":"vulcan","systemType":"Ductless / Wall-Mounted","commonErrors":[{"code":"E01","issue":"Communication error","solution":"Check remote batteries. Power cycle indoor and outdoor units."},{"code":"E02","issue":"Indoor sensor error","solution":"Verify sensor is clean and unobstructed."},{"code":"E05","issue":"Outdoor unit error","solution":"Check power supply to outdoor unit and wiring."},{"code":"E06","issue":"Compressor error","solution":"Professional service required for diagnostics."}],"maintenanceTips":["QuickHeat technology reaches comfort 20% faster","Australian innovation - 40+ years ductless heating expertise","Bi-weekly filter cleaning maintained peak performance","Wall-mounted units require clear space for air intake/exhaust","Annual professional service recommended for longevity"]};
  return <SelfCareBrandClient brand={brandData} />;
}