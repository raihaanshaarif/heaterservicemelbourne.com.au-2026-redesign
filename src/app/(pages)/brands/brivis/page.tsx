import { Metadata } from "next";
import BrivisBrandClient from "@/components/brands/brivis/BrivisBrandClient";

export const metadata: Metadata = {
  title: "Brivis Heating Services Melbourne | Installation & Repairs",
  description: "Expert Brivis heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Brivis Melbourne, Brivis repair, Brivis installation, heating systems, air conditioning",
  openGraph: {
    title: "Brivis Services Melbourne | Expert Technicians",
    description: "Professional Brivis system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/brivis",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/brivis",
  },
};

export default function BrivisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heater Service Melbourne - Brivis Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/brivis.png",
            description: "Expert Brivis heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/brivis",
          }),
        }}
      />
      <BrivisBrandClient />
    </>
  );
}
