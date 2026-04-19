import { Metadata } from "next";
import BreezairBrandClient from "@/components/brands/breezair/BreezairBrandClient";

export const metadata: Metadata = {
  title: "Breezair Heating Services Melbourne | Installation & Repairs",
  description: "Expert Breezair heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Breezair Melbourne, Breezair repair, Breezair installation, heating systems, air conditioning",
  openGraph: {
    title: "Breezair Services Melbourne | Expert Technicians",
    description: "Professional Breezair system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    url: "https://heaterservicemelbourne.com.au/brands/breezair",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/breezair",
  },
};

export default function BreezairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heating Service Melbourne - Breezair Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/breezair.png",
            description: "Expert Breezair heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/breezair",
          }),
        }}
      />
      <BreezairBrandClient />
    </>
  );
}
