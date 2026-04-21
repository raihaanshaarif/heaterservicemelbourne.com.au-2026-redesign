// JSON-LD Schema generators for Local SEO
export const BUSINESS_INFO = {
  name: "Heating Service Melbourne",
  phone: "0405133761",
  email: "heating.melbourne@gmail.com",
  address: {
    streetAddress: "5 Frank Ave",
    addressLocality: "Clayton South",
    addressRegion: "VIC",
    postalCode: "3169",
    addressCountry: "AU",
  },
  coordinates: {
    latitude: -37.93215207194603,
    longitude: 145.11330037651337,
  },
  website: "https://heaterservicemelbourne.com.au",
  areaServed: [
    "Armadale",
    "Ashwood",
    "Attwood",
    "Avonsleigh",
    "Badger Creek",
    "Baxter",
    "Bayswater",
    "Beaconsfield",
    "Beaumaris",
    "Belgrave",
    "Bentleigh",
    "Bentleigh East",
    "Berwick",
    "Bittern",
    "Black Rock",
    "Blackburn North",
    "Blairgowrie",
    "Boneo",
    "Boronia",
    "Botanic Ridge",
    "Box Hill",
    "Briar Hill",
    "Brighton",
    "Brighton East",
    "Broadmeadows",
    "Bundoora",
    "Burwood",
    "Burwood East",
    "Caulfield",
    "Chadstone",
    "Chelsea",
    "Chelsea Heights",
    "Chirnside Park",
    "Clayton",
    "Clayton South",
    "Clyde",
    "Clyde North",
    "Dandenong",
    "Dandenong North",
    "Dandenong South",
    "Doncaster",
    "Doncaster East",
    "Donvale",
    "Doveton",
    "Eaglehawk",
    "Epping",
    "Essendon",
    "Essendon Fields",
    "Fawkner",
    "Ferntree Gully",
    "Frankston",
    "Frankston North",
    "Frankston South",
    "Gembrook",
    "Glen Waverley",
    "Greensborough",
    "Hallam",
  ],
};

export const SERVICES = {
  hydronic: {
    name: "Hydronic Heating Service",
    description:
      "Professional hydronic heating installation, repair, and maintenance services",
    sameAs: "https://heaterservicemelbourne.com.au/hydronic-heating",
  },
  gasDucted: {
    name: "Gas Ducted Heating Service",
    description:
      "Expert gas ducted heating installation, repair, and maintenance",
    sameAs: "https://heaterservicemelbourne.com.au/gas-ducted-heating",
  },
  splitSystem: {
    name: "Split System Air Conditioning Service",
    description:
      "Professional split system installation, repair, and maintenance services",
    sameAs:
      "https://heaterservicemelbourne.com.au/split-system-air-conditioning",
  },
  emergency: {
    name: "Emergency Heating Repair Service",
    description: "24/7 emergency heating repair and breakdown rescue services",
    sameAs: "https://heaterservicemelbourne.com.au/emergency-services",
  },
};

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_INFO.website,
    name: BUSINESS_INFO.name,
    image: `${BUSINESS_INFO.website}/assets/images/resources/logo-3.png`,
    description:
      "Expert heating services in Melbourne. Specializing in Hydronic Heating, Gas Ducted Heating, and Split Systems with 24/7 Emergency support.",
    url: BUSINESS_INFO.website,
    telephone: `+61${BUSINESS_INFO.phone.slice(1)}`,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.latitude,
      longitude: BUSINESS_INFO.coordinates.longitude,
    },
    areaServed: BUSINESS_INFO.areaServed.map((suburb) => ({
      "@type": "City",
      name: suburb,
      containedInPlace: {
        "@type": "State",
        name: "Victoria",
        containedInPlace: {
          "@type": "Country",
          name: "Australia",
        },
      },
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$$",
    sameAs: ["https://www.google.com/maps/place/Heating+Service+Melbourne"],
  };
}

export function generateServiceSchema(
  serviceName: string,
  description: string,
  serviceUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.website,
      telephone: `+61${BUSINESS_INFO.phone.slice(1)}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_INFO.address.streetAddress,
        addressLocality: BUSINESS_INFO.address.addressLocality,
        addressRegion: BUSINESS_INFO.address.addressRegion,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: BUSINESS_INFO.address.addressCountry,
      },
    },
    areaServed: BUSINESS_INFO.areaServed,
    url: serviceUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "AUD",
      price: "Contact for quote",
    },
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
