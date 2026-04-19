import { Metadata } from "next";
import KadenBrandClient from "@/components/brands/kaden/KadenBrandClient";

export const metadata: Metadata = {
  title: "Kaden Heating Services Melbourne | Installation & Repairs",
  description: "Expert Kaden heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Kaden Melbourne, Kaden repair, Kaden installation, heating systems, air conditioning",
  openGraph: {
    title: "Kaden Services Melbourne | Expert Technicians",
    description: "Professional Kaden system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    url: "https://heaterservicemelbourne.com.au/brands/kaden",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/kaden",
  },
};

export default function KadenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heating Service Melbourne - Kaden Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/kaden.png",
            description: "Expert Kaden heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/kaden",
          }),
        }}
      />
      <KadenBrandClient />
    </>
  );
}
