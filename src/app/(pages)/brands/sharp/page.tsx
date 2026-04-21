import { Metadata } from "next";
import SharpBrandClient from "@/components/brands/sharp/SharpBrandClient";

export const metadata: Metadata = {
  title: "Sharp Heating Services Melbourne | Installation & Repairs",
  description: "Expert Sharp heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Sharp Melbourne, Sharp repair, Sharp installation, heating systems, air conditioning",
  openGraph: {
    title: "Sharp Services Melbourne | Expert Technicians",
    description: "Professional Sharp system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/sharp",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/sharp",
  },
};

export default function SharpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heater Service Melbourne - Sharp Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/sharp.png",
            description: "Expert Sharp heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/sharp",
          }),
        }}
      />
      <SharpBrandClient />
    </>
  );
}
