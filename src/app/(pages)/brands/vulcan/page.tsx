import { Metadata } from "next";
import VulcanBrandClient from "@/components/brands/vulcan/VulcanBrandClient";

export const metadata: Metadata = {
  title: "Vulcan Heating Services Melbourne | Installation & Repairs",
  description: "Expert Vulcan heating system repair, installation and maintenance across Melbourne. Same-day service and 24/7 emergency support available.",
  keywords: "Vulcan Melbourne, Vulcan repair, Vulcan installation, heating systems, air conditioning",
  openGraph: {
    title: "Vulcan Services Melbourne | Expert Technicians",
    description: "Professional Vulcan system installation, repair and maintenance. Same-day emergency service.",
    type: "website",
    url: "https://heaterservicemelbourne.com.au/brands/vulcan",
  },
  alternates: {
    canonical: "https://heaterservicemelbourne.com.au/brands/vulcan",
  },
};

export default function VulcanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Heating Service Melbourne - Vulcan Specialists",
            image: "https://heaterservicemelbourne.com.au/assets/images/brands/vulcan.png",
            description: "Expert Vulcan heating system services in Melbourne",
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
            url: "https://heaterservicemelbourne.com.au/brands/vulcan",
          }),
        }}
      />
      <VulcanBrandClient />
    </>
  );
}
