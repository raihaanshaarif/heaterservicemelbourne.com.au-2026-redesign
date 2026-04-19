import { Metadata } from "next";
import MitsubishiElectricBrandClient from "@/components/brands/mitsubishi-electric/MitsubishiElectricBrandClient";

export const metadata: Metadata = {
  title: "Mitsubishi Electric Heating Services Melbourne | Installation & Repairs",
  description: "Expert Mitsubishi Electric heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Mitsubishi Electric Melbourne, Mitsubishi Electric repair, Mitsubishi Electric installation, heating systems, air conditioning",
  openGraph: {
    title: "Mitsubishi Electric Services Melbourne | Expert Technicians",
    description: "Professional Mitsubishi Electric system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    url: "https://heaterservicemelbourne.com.au/brands/mitsubishi-electric",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/mitsubishi-electric",
  },
};

export default function MitsubishiElectricPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heating Service Melbourne - Mitsubishi Electric Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/mitsubishi-electric.png",
            description: "Expert Mitsubishi Electric heating system services in Melbourne",
            telephone: "+61405133761",
            email: "heating.melbourne@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Melbourne",
              postalCode: "3169",
              addressRegion: "VIC",
              addressCountry: "AU",
            },
            serviceArea: { "@type": "City", name: "Melbourne" },
            areaServed: "AU",
            url: "https://heaterservicemelbourne.com.au/brands/mitsubishi-electric",
          }),
        }}
      />
      <MitsubishiElectricBrandClient />
    </>
  );
}
