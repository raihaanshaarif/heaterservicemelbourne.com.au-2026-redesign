import { Metadata } from "next";
import ToshibaBrandClient from "@/components/brands/toshiba/ToshibaBrandClient";

export const metadata: Metadata = {
  title: "Toshiba Heating Services Melbourne | Installation & Repairs",
  description: "Expert Toshiba heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Toshiba Melbourne, Toshiba repair, Toshiba installation, heating systems, air conditioning",
  openGraph: {
    title: "Toshiba Services Melbourne | Expert Technicians",
    description: "Professional Toshiba system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    siteName: "Heater Service Melbourne",
    locale: "en_AU",
    url: "https://heaterservicemelbourne.com.au/brands/toshiba",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/toshiba",
  },
};

export default function ToshibaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heater Service Melbourne - Toshiba Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/toshiba.png",
            description: "Expert Toshiba heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/toshiba",
          }),
        }}
      />
      <ToshibaBrandClient />
    </>
  );
}
