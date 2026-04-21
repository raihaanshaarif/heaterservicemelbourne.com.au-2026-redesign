import { Metadata } from "next";
import CelairBrandClient from "@/components/brands/celair/CelairBrandClient";

export const metadata: Metadata = {
  title: "Celair Heating Services Melbourne | Installation & Repairs",
  description: "Expert Celair heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Celair Melbourne, Celair repair, Celair installation, heating systems, air conditioning",
  openGraph: {
    title: "Celair Services Melbourne | Expert Technicians",
    description: "Professional Celair system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/celair",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/celair",
  },
};

export default function CelairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heater Service Melbourne - Celair Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/celair.png",
            description: "Expert Celair heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/celair",
          }),
        }}
      />
      <CelairBrandClient />
    </>
  );
}
