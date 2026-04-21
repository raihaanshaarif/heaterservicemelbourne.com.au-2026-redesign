import React from "react";
import ContactMain from "@/features/contact/ContactMain";
import DefaultBanner from "@/features/default-banner/DefaultBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Heater Service Melbourne | Call 0405 133 761",
  description:
    "Contact Heater Service Melbourne for all heating repairs, installations and emergencies. Call 0405 133 761. 24/7 emergency service across all Melbourne suburbs. Free quotes.",
  keywords:
    "contact heating service melbourne, heating repair phone number, emergency heater repair melbourne, book heating service melbourne",
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/contact",
  },
  openGraph: {
    title: "Contact Heater Service Melbourne | Call 0405 133 761",
    description:
      "24/7 emergency heating service. Call 0405 133 761 for gas ducted heating, hydronic heating and split system repairs across Melbourne.",
    url: "https://heaterservicemelbourne.com.au/contact",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    images: [
      {
        url: "https://heaterservicemelbourne.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heater Service Melbourne | Professional Heating & Hydronic Services",
      },
    ],
    type: "website",
  },
};

const page: React.FC = () => {
  return (
    <>
      <DefaultBanner title="Contact" />
      <ContactMain />
    </>
  );
};

export default page;
