import { Metadata } from "next";
import BraemarBrandClient from "@/components/brands/braemar/BraemarBrandClient";

export const metadata: Metadata = {
  title: "Braemar Heating Services Melbourne | Installation & Repairs",
  description: "Expert Braemar heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Braemar Melbourne, Braemar repair, Braemar installation, heating systems, air conditioning",
  openGraph: {
    title: "Braemar Services Melbourne | Expert Technicians",
    description: "Professional Braemar system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    url: "https://heaterservicemelbourne.com.au/brands/braemar",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/braemar",
  },
};

export default function BraemarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heating Service Melbourne - Braemar Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/braemar.png",
            description: "Expert Braemar heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/braemar",
          }),
        }}
      />
      <BraemarBrandClient />
    </>
  );
}
