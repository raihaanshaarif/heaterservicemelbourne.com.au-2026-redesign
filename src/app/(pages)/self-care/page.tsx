import type { Metadata } from "next";
import SelfCareClient from "@/components/self-care/SelfCareClient";

export const metadata: Metadata = {
  title: "Heating System Self-Care & Troubleshooting Guide Melbourne",
  description:
    "Error codes, troubleshooting guides, and maintenance tips for all heating brands. DIY troubleshooting for gas ducted heating, hydronic systems, and heat pumps.",
  keywords:
    "heating error codes, heating troubleshooting, gas heating maintenance, hydronic heating tips, DIY heating repairs, heating system guide",
  openGraph: {
    title: "Heating System Self-Care & Troubleshooting",
    description:
      "Comprehensive error code database and troubleshooting guides for all heating brands. Expert tips for home maintenance.",
    url: "https://heatingservicemelbourne.com.au/self-care",
    siteName: "Heating Service Melbourne",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function SelfCarePage() {
  return (
    <>
      <SelfCareClient />
    </>
  );
}
