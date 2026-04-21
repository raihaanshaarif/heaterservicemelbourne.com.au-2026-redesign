import { Metadata } from "next";
import ActronAirBrandClient from "@/components/brands/actronair/ActronAirBrandClient";

export const metadata: Metadata = {
  title: "ActronAir Heating Services Melbourne | Installation & Repairs",
  description: "Expert ActronAir heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "ActronAir Melbourne, ActronAir repair, ActronAir installation, heating systems, air conditioning",
  openGraph: {
    title: "ActronAir Services Melbourne | Expert Technicians",
    description: "Professional ActronAir system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/actronair",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/actronair",
  },
};

export default function ActronAirPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heater Service Melbourne - ActronAir Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/actronair.png",
            description: "Expert ActronAir heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/actronair",
          }),
        }}
      />
      <ActronAirBrandClient />
    </>
  );
}
