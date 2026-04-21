// sitemap.ts - Dynamic Sitemap Generation
// Path: src/app/sitemap.ts

import { MetadataRoute } from "next";

// All Melbourne suburbs for dynamic suburb pages
const MELBOURNE_SUBURBS = [
  "armadale",
  "ashwood",
  "attwood",
  "avonsleigh",
  "badger-creek",
  "baxter",
  "bayswater",
  "beaconsfield",
  "beaumaris",
  "belgrave",
  "bentleigh",
  "bentleigh-east",
  "berwick",
  "bittern",
  "black-rock",
  "blackburn-north",
  "blairgowrie",
  "boneo",
  "boronia",
  "botanic-ridge",
  "box-hill",
  "briar-hill",
  "brighton",
  "brighton-east",
  "broadmeadows",
  "bundoora",
  "burwood",
  "burwood-east",
  "caulfield",
  "chadstone",
  "chelsea",
  "chelsea-heights",
  "chirnside-park",
  "clayton",
  "clayton-south",
  "clyde",
  "clyde-north",
  "dandenong",
  "dandenong-north",
  "dandenong-south",
  "doncaster",
  "doncaster-east",
  "donvale",
  "doveton",
  "eaglehawk",
  "epping",
  "essendon",
  "essendon-fields",
  "fawkner",
  "ferntree-gully",
  "frankston",
  "frankston-north",
  "frankston-south",
  "gembrook",
  "glen-waverley",
  "greensborough",
  "hallam",
];

// Services for service pages
const SERVICES = [
  { path: "/gas-ducted-heating", name: "Gas Ducted Heating" },
  { path: "/hydronic-heating", name: "Hydronic Heating" },
  {
    path: "/split-system-air-conditioning",
    name: "Split System Air Conditioning",
  },
  { path: "/emergency-services", name: "Emergency Services" },
];

// Brands for brand pages (add your brands)
const BRANDS = [
  "actronair",
  "daikin",
  "fujitsu",
  "midea",
  "panasonic",
  "toshiba",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://heaterservicemelbourne.com.au";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic suburb pages for each service
  const suburbPages: MetadataRoute.Sitemap = SERVICES.flatMap((service) =>
    MELBOURNE_SUBURBS.map((suburb) => ({
      url: `${baseUrl}${service.path}/${suburb}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  // Brand pages
  const brandPages: MetadataRoute.Sitemap = BRANDS.map((brand) => ({
    url: `${baseUrl}/brands/${brand}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...suburbPages, ...brandPages];
}

/*
SITEMAP STRUCTURE:
1. Static pages (priority 0.7-1.0)
2. Service pages (priority 0.9)
3. Dynamic suburb pages (priority 0.8)
4. Brand pages (priority 0.7)

Total URLs generated:
- Static: 8 pages
- Services: 4 pages
- Suburb pages: 4 services × 44 suburbs = 176 pages
- Brands: 6 pages
TOTAL: ~194 pages

This structure ensures:
✅ Search engines crawl all important pages
✅ Proper priority for revenue-generating pages
✅ Regional targeting for local SEO
✅ Efficient crawl budget usage
*/
