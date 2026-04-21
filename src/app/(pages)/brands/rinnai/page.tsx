import { Metadata } from "next";
import RinnaiBrandClient from "@/components/brands/rinnai/RinnaiBrandClient";

export const metadata: Metadata = {
  title: "Rinnai Heating Services Melbourne | Installation & Repairs",
  description: "Expert Rinnai heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Rinnai Melbourne, Rinnai repair, Rinnai installation, heating systems, air conditioning",
  openGraph: {
    title: "Rinnai Services Melbourne | Expert Technicians",
    description: "Professional Rinnai system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/rinnai",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/rinnai",
  },
};

export default function RinnaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heater Service Melbourne - Rinnai Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/rinnai.png",
            description: "Expert Rinnai heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/rinnai",
          }),
        }}
      />
      <RinnaiBrandClient />
    </>
  );
}
