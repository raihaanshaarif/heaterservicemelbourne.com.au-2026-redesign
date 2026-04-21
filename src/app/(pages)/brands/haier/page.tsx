import { Metadata } from "next";
import HaierBrandClient from "@/components/brands/haier/HaierBrandClient";

export const metadata: Metadata = {
  title: "Haier Heating Services Melbourne | Installation & Repairs",
  description: "Expert Haier heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Haier Melbourne, Haier repair, Haier installation, heating systems, air conditioning",
  openGraph: {
    title: "Haier Services Melbourne | Expert Technicians",
    description: "Professional Haier system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/haier",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/haier",
  },
};

export default function HaierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heater Service Melbourne - Haier Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/haier.png",
            description: "Expert Haier heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/haier",
          }),
        }}
      />
      <HaierBrandClient />
    </>
  );
}
