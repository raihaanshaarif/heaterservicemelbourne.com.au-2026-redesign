import { Metadata } from "next";
import LGBrandClient from "@/components/brands/lg/LGBrandClient";

export const metadata: Metadata = {
  title: "LG Heating Services Melbourne | Installation & Repairs",
  description: "Expert LG heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "LG Melbourne, LG repair, LG installation, heating systems, air conditioning",
  openGraph: {
    title: "LG Services Melbourne | Expert Technicians",
    description: "Professional LG system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/lg",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/lg",
  },
};

export default function LGPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heater Service Melbourne - LG Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/lg.png",
            description: "Expert LG heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/lg",
          }),
        }}
      />
      <LGBrandClient />
    </>
  );
}
