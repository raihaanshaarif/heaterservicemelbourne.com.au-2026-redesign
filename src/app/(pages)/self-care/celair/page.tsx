import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "Celair - Error Codes & Troubleshooting Guide Melbourne",
  description: "Celair Split System / Compact error codes, troubleshooting guide, and maintenance tips. Expert help for celair heating systems.",
  keywords: "celair error codes, celair troubleshooting, celair maintenance, split system / compact",
  openGraph: {
    title: "Celair - Error Codes & Troubleshooting Guide",
    description: "Complete error code database and troubleshooting guide for Celair heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/celair",
  },
};

export default function SelfCareBrandPage() {
  const brandData = {"name":"Celair","slug":"celair","systemType":"Split System / Compact","commonErrors":[{"code":"E01","issue":"Communication error","solution":"Check indoor/outdoor wiring. Power cycle system."},{"code":"E02","issue":"Temperature sensor","solution":"Inspect sensor for damage or dust."},{"code":"E03","issue":"Unit error","solution":"Power down. Wait 5 minutes. Restart system."},{"code":"E04","issue":"Outdoor unit error","solution":"Verify power and connections. Professional service if continues."}],"maintenanceTips":["Silent-Comfort technology delivers whisper-quiet heating","Compact design ideal for Australian apartments","Monthly filter checks maintain noise and efficiency levels","Professional service annually for warranty compliance","Quiet operation normal - indicates efficient operation"]};
  return <SelfCareBrandClient brand={brandData} />;
}