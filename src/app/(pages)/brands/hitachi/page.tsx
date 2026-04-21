import { Metadata } from "next";
import HitachiBrandClient from "@/components/brands/hitachi/HitachiBrandClient";

export const metadata: Metadata = {
  title: "Hitachi Heating Services Melbourne | Installation & Repairs",
  description: "Expert Hitachi heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Hitachi Melbourne, Hitachi repair, Hitachi installation, heating systems, air conditioning",
  openGraph: {
    title: "Hitachi Services Melbourne | Expert Technicians",
    description: "Professional Hitachi system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/hitachi",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/hitachi",
  },
};

export default function HitachiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heater Service Melbourne - Hitachi Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/hitachi.png",
            description: "Expert Hitachi heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/hitachi",
          }),
        }}
      />
      <HitachiBrandClient />
    </>
  );
}
