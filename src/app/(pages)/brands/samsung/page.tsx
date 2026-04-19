import { Metadata } from "next";
import SamsungBrandClient from "@/components/brands/samsung/SamsungBrandClient";

export const metadata: Metadata = {
  title: "Samsung Heating Services Melbourne | Installation & Repairs",
  description: "Expert Samsung heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Samsung Melbourne, Samsung repair, Samsung installation, heating systems, air conditioning",
  openGraph: {
    title: "Samsung Services Melbourne | Expert Technicians",
    description: "Professional Samsung system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    url: "https://heaterservicemelbourne.com.au/brands/samsung",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/samsung",
  },
};

export default function SamsungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heating Service Melbourne - Samsung Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/samsung.png",
            description: "Expert Samsung heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/samsung",
          }),
        }}
      />
      <SamsungBrandClient />
    </>
  );
}
