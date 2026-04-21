import { Metadata } from "next";
import PanasonicBrandClient from "@/components/brands/panasonic/PanasonicBrandClient";

export const metadata: Metadata = {
  title: "Panasonic Heating Services Melbourne | Installation & Repairs",
  description: "Expert Panasonic heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Panasonic Melbourne, Panasonic repair, Panasonic installation, heating systems, air conditioning",
  openGraph: {
    title: "Panasonic Services Melbourne | Expert Technicians",
    description: "Professional Panasonic system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/panasonic",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/panasonic",
  },
};

export default function PanasonicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heater Service Melbourne - Panasonic Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/panasonic.png",
            description: "Expert Panasonic heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/panasonic",
          }),
        }}
      />
      <PanasonicBrandClient />
    </>
  );
}
