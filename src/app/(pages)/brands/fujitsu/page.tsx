import { Metadata } from "next";
import FujitsuBrandClient from "@/components/brands/fujitsu/FujitsuBrandClient";

export const metadata: Metadata = {
  title: "Fujitsu Heating Services Melbourne | Installation & Repairs",
  description: "Expert Fujitsu heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Fujitsu Melbourne, Fujitsu repair, Fujitsu installation, heating systems, air conditioning",
  openGraph: {
    title: "Fujitsu Services Melbourne | Expert Technicians",
    description: "Professional Fujitsu system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    url: "https://heaterservicemelbourne.com.au/brands/fujitsu",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/fujitsu",
  },
};

export default function FujitsuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heating Service Melbourne - Fujitsu Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/fujitsu.png",
            description: "Expert Fujitsu heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/fujitsu",
          }),
        }}
      />
      <FujitsuBrandClient />
    </>
  );
}
